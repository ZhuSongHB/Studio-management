<template>
	<div>
		<div class="content">
			<member :datas="tcrDatas" @againData="acadAgainData" />
		</div>
	</div>
</template>

<script>
	// 子组件
	import member from "./member/index";
	// api接口
	import { getUnitList } from "../../../../network/api";
	export default {
		components: { member },
		data() {
			return {
				teacherCount: 0,
				// 教务处数据
				tcrDatas: [],
			};
		},
		created() {
			const unit_id = sessionStorage.getItem("id");
			// 教务处
			getUnitList({ unit_id }).then(res => {
				this.tcrDatas = res.data.data;
				this.teacherCount = this.tcrDatas.length;
			});
		},
		methods: {
			click(item) {
				this.key = item.key;
			},
			acadAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 教务处重新获取数据
				getUnitList({ unit_id }).then(res => {
					this.tcrDatas = res.data.data;
					this.teacherCount = this.tcrDatas.length;
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
