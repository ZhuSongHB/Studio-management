<template>
	<div>
		<a-range-picker @change="onChange" style="margin-right:10px;" />
		<a-button type="primary" style="margin-bottom:10px;" @click="queryResults" :loading="queryLoading">查询/导出成绩</a-button>
		<a-modal v-model="vi_mack" title="查询/导出成绩" @ok="vi_mack = false">
			<a-table
				:columns="mackColumns"
				:data-source="json_data"
				:pagination="false"
				bordered
				:rowKey="
					(record, index) => {
						return index;
					}
				"
			></a-table>
			<download-excel class="export-excel-wrapper" :data="json_data" :fields="json_fields" name="课程置换成绩数据.xls">
				<!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
				<a-button type="primary" style="margin-top:10px">导出所有成绩</a-button>
			</download-excel>
		</a-modal>

		<a-table :columns="Columns" :data-source="record" :pagination="false" rowKey="id" bordered>
			<a slot="name" slot-scope="text">{{ text }}</a>
			<span slot="action" slot-scope="text, record, index">
				<a-button @click="handleClick(text, record, index)" type="primary">查看详情</a-button>
			</span>
		</a-table>
		<div>
			<a-modal :title="tanDatas.studio_name" :visible="visible" cancelType="primary" width="60%" @cancel="cancelClick" @ok="handleOk" :centered="true">
				<div class="box">
					<div>工作室名称：{{ tanDatas.studio_name }}</div>
					<div>负责人：{{ tanDatas.teacher_name }}</div>
					<div>置换方案编号：{{ tanDatas.project_code }}</div>
					<div>
						申请理由：
						<p class="sj">{{ tanDatas.reason }}</p>
					</div>
					<a-button type="primary" class="downLoad" v-if="hasFile" @click="download(tanDatas.id)">下载附件</a-button>
				</div>

				<a-divider>课程置换名单</a-divider>
				<a-table
					:columns="columns2"
					:data-source="tableDatas"
					:pagination="false"
					:rowKey="
						(record, index) => {
							return index;
						}
					"
					bordered
				>
					<!-- slot中的name是指scopedSlots中customRender  slot-scope="text"的text就是数据源里的值赋值给text  -->
					<!-- 定义头部名称时 slot等于columns中的slots的title的值，然后赋值 -->
					<span slot="action" slot-scope="text, record, index">
						<a-button @click="handleClick(text, record, index)" type="primary">查看详情</a-button>
					</span>
				</a-table>

				<a-divider>受理单位</a-divider>
				<a-tag color="green">同意</a-tag>
				<div>受理单位：{{ tanDatas.unit_title }}</div>
				<div>审核人：{{ tanDatas.unit_signer }}</div>
				<div>审核时间：{{ tanDatas.unit_feedback_time }}</div>
				<div>
					审核单位意见：
					<p class="sj">{{ tanDatas.unit_feedback_content }}</p>
				</div>
				<a-divider>教务处审核</a-divider>
				<a-tag color="green">同意</a-tag>
				<div>审核人：{{ tanDatas.academic_office_signer }}</div>
				<div>审核时间：{{ tanDatas.academic_office_feedback_time }}</div>
				<div>
					审核单位意见：
					<p class="sj">{{ tanDatas.academic_office_feedback_content }}</p>
				</div>
			</a-modal>
		</div>
	</div>
</template>

<script>
	const Columns = [
		{
			title: "编号",
			dataIndex: "id",
			key: "id",
			ellipsis: true,
		},
		{
			title: "工作室名称",
			dataIndex: "studio_name",
			key: "studio_name",
			ellipsis: true,
		},
		{
			title: "教师姓名",
			dataIndex: "teacher_name",
			key: "teacher_name",
			ellipsis: true,
		},
		{
			title: "申请时间",
			dataIndex: "apply_time",
			key: "apply_time",
			ellipsis: true,
		},
		{
			title: "操作",
			key: "action",
			scopedSlots: { customRender: "action" },
		},
	];

	const columns2 = [
		{
			title: "学生学号",
			dataIndex: "student_id",
			key: "student_id",
		},
		{
			title: "学生姓名",
			dataIndex: "student_name",
			key: "student_name",
		},
		{
			title: "课程名称",
			dataIndex: "course",
			key: "course",
		},
		{
			title: "成绩",
			dataIndex: "mark",
			key: "mark",
		},
		{
			title: "学生工作情况说明",
			dataIndex: "explain",
			key: "explain",
			width: 300,
		},
	];
	const mackColumns = [
		{
			title: "学生学号",
			dataIndex: "student_id",
			key: "student_id",
		},
		{
			title: "学生姓名",
			dataIndex: "student_name",
			key: "student_name",
		},
		{
			title: "置换课程名称",
			dataIndex: "course",
			key: "course",
		},
		{
			title: "成绩",
			dataIndex: "mark",
			key: "mark",
		},
	];
	import { courseReplaceApplyGetTable, courseReplaceCheck, query_results } from "../../../../../network/api";
	export default {
		props: ["record"],
		data() {
			return {
				time: {
					starttime: "",
					endtime: "",
				},
				queryLoading: false,
				Columns,
				tanDatas: [],
				visible: false,
				vi_mack: false,
				columns2,
				mackColumns,
				tableDatas: [],
				hasFile: false,
				// 下载Excel
				json_fields: {
					学生学号: "student_id",
					学生姓名: "student_name",
					置换课程名称: "course",
					成绩: "mark",
				},
				json_data: [],
				json_meta: [
					[
						{
							" key ": " charset ",
							" value ": " utf- 8 ",
						},
					],
				],
			};
		},
		created() {},
		methods: {
			download(record_id) {
				window.open("/api/teacherstudio/download/course_replace?record_id=" + record_id);
			},
			handleClick(text, record, index) {
				courseReplaceCheck({ record_id: record.id }).then(res => {
					if (res.data.data.result) {
						this.hasFile = true;
					} else {
						this.hasFile = false;
					}
				});

				courseReplaceApplyGetTable({ record_id: record.id }).then(res => {
					this.visible = true;
					this.tanDatas = res.data.data;
					this.tableDatas = res.data.data.student;
				});
			},
			cancelClick() {
				// 关闭
				this.visible = false;
			},
			handleOk() {
				// 关闭
				this.visible = false;
			},
			onChange(date, dateString) {
				this.time.starttime = dateString[0];
				this.time.endtime = dateString[1];
			},
			queryResults() {
				if (this.time.starttime == "" || this.time.endtime == "") {
					this.$message.warning("请输入时间区间！");
					return;
				}
				this.queryLoading = true;
				query_results(this.time)
					.then(res => {
						this.vi_mack = true;
						this.queryLoading = false;
						this.json_data = res.data.data;
					})
					.catch(res => {
						this.$message.error("未知错误");
						this.vi_mack = true;
						this.queryLoading = false;
					});
			},
		},
	};
</script>
<style scoped>
	.export-excel-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
