export default {
	"post|/api/teacherstudio/regulatory_unit/get_course_replace_scheme_list": () => {
		return {
			code: 1,
			msg: "",
			data: [
				{ id: 1, studio_name: "监管单位课程置换方案申请", teacher_name: "教师姓名1", apply_time: "2020-12-30 14:56:41" },
				{ id: 2, studio_name: "工作室名称2", teacher_name: "教师姓名2", apply_time: "2020-12-31 14:56:41" },
			],
		};
	},
};
