export default {
	"get|/api/teacherstudio/academic_office/get_pass_course_replace_scheme_list": op => {
		console.log(op);

		return {
			code: 1,
			msg: "",
			data: [
				{ id: 1, studio_name: "工作室名称1", teacher_name: "教务处获取已通过课程置换方案申请列表", apply_time: "2020-12-30 14:56:41" },
				{ id: 2, studio_name: "工作室名称2", teacher_name: "教师姓名2", apply_time: "2020-12-31 14:56:41" },
			],
		};
	},
};
