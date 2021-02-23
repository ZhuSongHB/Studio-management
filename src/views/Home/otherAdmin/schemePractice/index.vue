<template>
	<div>
		<a-menu v-model="current" mode="horizontal" @click="click">
			<a-menu-item key="1" v-if="type == 4">
				<a-badge :count="teacherCount">教务处</a-badge>
			</a-menu-item>
			<a-menu-item key="2">
				<a-badge :count="supCount">
					监管单位
				</a-badge>
			</a-menu-item>
			<a-menu-item key="3">
				<a-badge :count="direCount">直接管理单位</a-badge>
			</a-menu-item>
			<a-menu-item key="4">
				<a-badge :count="accepCount">受理单位</a-badge>
			</a-menu-item>
		</a-menu>
		<div class="content">
			<teacher-office v-if="key == '1'" :datas="tcrDatas" @againData="acadAgainData" />
			<sup-unit v-if="key == '2'" :datas="supDatas" @againData="reguAgainData" />
			<direct-unit v-if="key == '3'" :datas="direDatas" @againData="manaAgainData" />
			<accep-unit v-if="key == '4'" :datas="accepDatas" @againData="accepAgainData" />
		</div>
	</div>
</template>

<script>
	// 子组件
	import teacherOffice from "./teacherOffice/index";
	import supUnit from "./supUnit/index";
	import directUnit from "./directUnit/index";
	import accepUnit from "./accepUnit/index";
	// api接口
	import { manaSchemeGetPractice, reguSchemeGetCreditReplace, acceptSchemeGetCreditReplace, acadSchemeGetPractice } from "../../../../network/api";
	export default {
		components: { teacherOffice, supUnit, directUnit, accepUnit },
		data() {
			return {
				current: ["2"],
				key: "2",
				teacherCount: 0,
				supCount: 0,
				direCount: 0,
				accepCount: 0,
				// 直接管理单位数据
				direDatas: [],
				// 监管单位数据
				supDatas: [],
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
			acadSchemeGetPractice({ unit_id }).then(res => {
				this.tcrDatas = res.data.data;
				this.teacherCount = this.tcrDatas.length;
			});
			// 监管单位
			reguSchemeGetCreditReplace({ unit_id }).then(res => {
				this.supDatas = res.data.data;
				this.supCount = this.supDatas.length;
			});
			// 直接管理单位
			manaSchemeGetPractice({ unit_id }).then(res => {
				this.direDatas = res.data.data;
				this.direCount = this.direDatas.length;
			});
			// 受理单位
			acceptSchemeGetCreditReplace({ unit_id }).then(res => {
				this.accepDatas = res.data.data;
				this.accepCount = this.accepDatas.length;
			});
		},
		methods: {
			click(item) {
				this.key = item.key;
			},
			manaAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 直接管理单位重新获取数据
				manaSchemeGetPractice({ unit_id }).then(res => {
					this.direDatas = res.data.data;
					this.direCount = this.direDatas.length;
				});
			},
			acadAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 教务处重新获取数据
				acadSchemeGetPractice({ unit_id }).then(res => {
					this.tcrDatas = res.data.data;
					this.teacherCount = this.tcrDatas.length;
				});
			},
			reguAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 教务处重新获取数据
				reguSchemeGetCreditReplace({ unit_id }).then(res => {
					this.supDatas = res.data.data;
					this.supCount = this.supDatas.length;
				});
			},
			accepAgainData() {
				const unit_id = sessionStorage.getItem("id");
				// 受理单位重新获取数据
				acceptSchemeGetCreditReplace({ unit_id }).then(res => {
					this.accepDatas = res.data.data;
					this.accepCount = this.accepDatas.length;
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
