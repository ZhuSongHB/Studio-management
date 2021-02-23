<template>
	<div>
		<a-menu v-model="current" mode="horizontal" @click="click">
			<a-menu-item key="1" v-if="type == 4">
				<a-badge :count="teacherCount">教务处</a-badge>
			</a-menu-item>
			<a-menu-item key="2">
				<a-badge :count="accepCount">受理单位</a-badge>
			</a-menu-item>
		</a-menu>
		<div class="content">
			<teacher-office v-if="key == '1'" :datas="tcrDatas" @againData="acadAgainData" />
			<accep-unit v-if="key == '2'" :datas="accepDatas" @againData="accepAgainData" />
		</div>
	</div>
</template>

<script>
	// 子组件
	import teacherOffice from "./teacherOffice/index";
	import accepUnit from "./accepUnit/index";
	// api接口
	import { acceptCourseReplaceDatas, acadCourseReplaceDatas } from "../../../../network/api";
	export default {
		components: { teacherOffice, accepUnit },
		data() {
			return {
				current: ["2"],
				key: "2",
				teacherCount: 0,
				supCount: 0,
				direCount: 0,
				accepCount: 0,
				// 受理单位数据
				accepDatas: [],
				// 教务处数据
				tcrDatas: [],
				type: "",
			};
		},
		created() {
			const unit_id = sessionStorage.getItem("id");
			this.type = sessionStorage.getItem("type");
			// 教务处
			acadCourseReplaceDatas({ unit_id }).then(res => {
				this.tcrDatas = res.data.data;
				this.teacherCount = this.tcrDatas.length;
			});

			// 受理单位
			acceptCourseReplaceDatas({ unit_id }).then(res => {
				this.accepDatas = res.data.data;
				this.accepCount = this.accepDatas.length;
			});
		},
		methods: {
			click(item) {
				this.key = item.key;
			},

			acadAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 教务处重新获取数据
				acadCourseReplaceDatas({ unit_id }).then(res => {
					this.tcrDatas = res.data.data;
					this.teacherCount = this.tcrDatas.length;
				});
			},
			accepAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 受理单位重新获取数据
				acceptCourseReplaceDatas({ unit_id }).then(res => {
					this.accepDatas = res.data.data;
					this.accepCount = this.direDatas.length;
				});
			},
		},
	};
</script>

<style lang="less" scoped>
	.ant-menu .ant-badge-count {
		right: -10px;
	}
	.content {
		margin-top: 20px;
	}
</style>
