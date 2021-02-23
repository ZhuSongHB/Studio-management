<template>
	<div>
		<a-menu v-model="current" mode="horizontal" @click="click">
			<a-menu-item key="1" v-if="type == 4">
				<a-badge>课程置换方案申请</a-badge>
			</a-menu-item>
			<a-menu-item key="2">
				<a-badge>课程置换申请</a-badge>
			</a-menu-item>
			<a-menu-item key="3">
				<a-badge>学分置换方案申请</a-badge>
			</a-menu-item>
			<a-menu-item key="4">
				<a-badge>学分方案申请</a-badge>
			</a-menu-item>
			<a-menu-item key="5">
				<a-badge>实习毕业论文（设计）方案</a-badge>
			</a-menu-item>
			<a-menu-item key="6">
				<a-badge>承担实习申请</a-badge>
			</a-menu-item>
			<a-menu-item key="7">
				<a-badge>毕业论文（设计）申请</a-badge>
			</a-menu-item>
		</a-menu>
		<div class="content">
			<scheme-course v-if="key == '1'" :record="schemeCourseData" />
			<course-replace v-if="key == '2'" :record="courseReplaceData" />
			<scheme-credit v-if="key == '3'" :record="schemeCreditData" />
			<credit-replace v-if="key == '4'" :record="creditReplaceData" />
			<scheme-practice v-if="key == '5'" :record="schemePracticeData" />
			<shi-xi v-if="key == '6'" :record="shiXiData" />
			<practice v-if="key == '7'" :record="practiceData" />
		</div>
	</div>
</template>

<script>
	// 子组件
	import schemeCourse from "./schemeCourse/index";
	import courseReplace from "./courseReplace/index";
	import schemeCredit from "./schemeCredit/index";
	import creditReplace from "./creditReplace/index";
	import schemePractice from "./schemePractice/index";
	import shiXi from "./shiXi/index";
	import practice from "./shiXi/index";
	// api接口
	import { get_pass_assume_practice_list, get_pass_practice_thesis_scheme_list, get_pass_course_replace_scheme_list, get_pass_course_replace_list, get_pass_credit_replace_scheme_list, get_pass_credit_replace_list } from "../../../../network/api";

	export default {
		components: { schemeCourse, courseReplace, schemeCredit, creditReplace, schemePractice, shiXi, practice },
		data() {
			return {
				current: ["1"],
				key: "1",
				type: "",
				schemeCourseData: [],
				courseReplaceData: [],
				schemeCreditData: [],
				creditReplaceData: [],
				schemePracticeData: [],
				shiXiData: [],
				practiceData: [],
			};
		},
		created() {
			const unit_id = sessionStorage.getItem("id");
			this.type = sessionStorage.getItem("type");
			get_pass_course_replace_scheme_list().then(res => {
				this.schemeCourseData = res.data.data;
			});
			get_pass_course_replace_list().then(res => {
				this.courseReplaceData = res.data.data;
			});
			get_pass_credit_replace_scheme_list().then(res => {
				this.schemeCreditData = res.data.data;
			});
			get_pass_credit_replace_list().then(res => {
				this.creditReplaceData = res.data.data;
			});
			get_pass_practice_thesis_scheme_list().then(res => {
				this.schemePracticeData = red.data.data;
			});
			get_pass_assume_practice_list().then(res => {
				this.shiXiData = res.data.data;
			});
			get_pass_assume_thesis_list().then(res => {
				this.practiceData = res.data.data;
			});
		},
		methods: {
			click(item) {
				this.key = item.key;
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
