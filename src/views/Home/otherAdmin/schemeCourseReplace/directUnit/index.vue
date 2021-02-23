<template>
	<div class="collapse">
		<a-table :columns="columns" :data-source="datas" :pagination="false" rowKey="id" bordered>
			<!-- slot中的name是指scopedSlots中customRender  slot-scope="text"的text就是数据源里的值赋值给text  -->
			<!-- 定义头部名称时 slot等于columns中的slots的title的值，然后赋值 -->
			<span slot="action" slot-scope="text, record, index">
				<a-button @click="handleClick(text, record, index)" type="primary">查看详情</a-button>
			</span>
		</a-table>
		<div>
			<a-modal :title="tanDatas.studio_name" :visible="visible" cancelType="primary" width="60%" @cancel="cancelClick" :centered="true">
				<div class="box">
					<div>工作室名称：{{ tanDatas.studio_name }}</div>
					<div>负责人：{{ tanDatas.teacher_name }}</div>
					<div v-if="tanDatas.grade != ''">工作室等级：{{ tanDatas.grade == 0 ? "C级" : tanDatas.grade == 1 ? "B级" : "A级" }}</div>
					<div>
						工作室工作内容：
						<p class="sj">{{ tanDatas.job_content }}</p>
					</div>
					<a-button type="primary" class="downLoad" v-if="hasFile" @click="download(tanDatas.id)">下载附件</a-button>
				</div>
				<div slot="footer">
					<a-button @click="handleCancel" :loading="cancelLoading">不同意</a-button>
					<a-button @click="handleOk" type="primary" :loading="okLoading">同意</a-button>
				</div>
				<a-divider>课程置换方案名单</a-divider>
				<a-table :columns="columns2" :data-source="tableDatas" :pagination="false" rowKey="id" bordered>
					<!-- slot中的name是指scopedSlots中customRender  slot-scope="text"的text就是数据源里的值赋值给text  -->
					<!-- 定义头部名称时 slot等于columns中的slots的title的值，然后赋值 -->
					<span slot="action" slot-scope="text, record, index">
						<a-button @click="handleClick(text, record, index)" type="primary">查看详情</a-button>
					</span>
				</a-table>
				<a-divider>直接管理单位审核</a-divider>
				<div class="sub_input">
					<a-input type="text" placeholder="请输入审核人姓名" v-model="examine.signer" />
				</div>
				<a-textarea placeholder="请输入审核意见" v-model="examine.content" :rows="5" />
			</a-modal>
		</div>
	</div>
</template>

<script>
	const columns = [
		{
			title: "记录id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "工作室名称",
			dataIndex: "studio_name",
			key: "studio_name",
		},
		{
			title: "负责人姓名",
			dataIndex: "teacher_name",
			key: "teacher_name",
		},
		{
			title: "申请时间",
			key: "apply_time",
			dataIndex: "apply_time",
		},
		{
			title: "操作",
			key: "action",
			scopedSlots: { customRender: "action" },
		},
	];
	const columns2 = [
		{
			title: "所抵换的课程或课程组",
			dataIndex: "course",
			key: "course",
		},
		{
			title: "抵换方式",
			dataIndex: "way",
			key: "way",
		},
	];
	import { courseSchemeGetTable, manaFeedBackCourseReplace, downloadCourseReplaceScheme, courseReplaceSchemeCheck } from "../../../../../network/api";
	export default {
		props: ["datas"],
		data() {
			return {
				columns,
				columns2,
				// 弹框
				visible: false,
				// 弹框数据
				tanDatas: {},
				// loading
				cancelLoading: false,
				okLoading: false,
				// 弹框里表格的数据
				tableDatas: [],
				// 审核信息
				examine: {
					signer: "",
					content: "",
				},
				// 是否有附件
				hasFile: true,
			};
		},
		methods: {
			download(record_id) {
				window.open("/api/teacherstudio/download/course_replace_scheme?record_id=" + record_id);
			},
			handleClick(text, record, index) {
				courseReplaceSchemeCheck({ record_id: record.id }).then(res => {
					if (res.data.data.result) {
						this.hasFile = true;
					} else {
						this.hasFile = false;
					}
				});
				courseSchemeGetTable({ record_id: record.id }).then(res => {
					this.tanDatas = res.data.data;
					const arr = [];
					let index = 0;
					for (const iterator of this.tanDatas.scheme) {
						let obj = iterator;
						obj.id = index;
						arr.push(obj);
						index++;
					}
					this.tableDatas = arr;
					this.visible = true;
				});
			},
			// 同意
			handleOk(e) {
				if (this.examine.signer == "") {
					this.$message.warning("请填写审核人！");
					return;
				}
				this.okLoading = true;
				// record_id	整型	√	记录id
				// feedback	整型	√	意见，1同意，2拒绝
				// content	字符串		意见内容
				// signer	整型	√	审批人
				const obj = {
					record_id: this.tanDatas.id,
					feedback: 1,
					...this.examine,
				};
				manaFeedBackCourseReplace(obj).then(res => {
					this.$emit("againData");
					this.visible = false;
					this.okLoading = false;
					if (res.data.code == 1) {
						this.$message.success("操作成功！");
					} else {
						this.$message.error("未知错误！");
					}
					this.examine = {
						signer: "",
						content: "",
					};
				});
			},
			handleCancel(e) {
				if (this.examine.signer == "") {
					this.$message.warning("请填写审核人！");
					return;
				}
				this.cancelLoading = true;
				// record_id	整型	√	记录id
				// feedback	整型	√	意见，1同意，2拒绝
				// content	字符串		意见内容
				// signer	整型	√	审批人
				const obj = {
					record_id: this.tanDatas.id,
					feedback: 2,
					...this.examine,
				};
				manaFeedBackCourseReplace(obj).then(res => {
					this.$emit("againData");
					this.visible = false;
					this.cancelLoading = false;
					if (res.data.code == 1) {
						this.$message.success("操作成功！");
					} else {
						this.$message.error("未知错误！");
					}
					this.examine = {
						signer: "",
						content: "",
					};
				});
			},
			cancelClick() {
				// 关闭
				this.visible = false;
			},
		},
		created() {},
	};
</script>

<style lang="less" scoped>
	.content {
		.ant-collapse-content-box {
			background: red;
		}
	}
	.box {
		font-size: 16px;
		div {
			padding-top: 5px;
		}
		.downLoad {
			float: right;
			margin-right: 20px;
		}
	}
	.sub_input {
		width: 200px;
		margin-bottom: 20px;
	}
	.sj {
		text-indent: 2em;
	}
</style>
