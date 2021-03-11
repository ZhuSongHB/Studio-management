import axios from "axios";
axios.interceptors.request.use(
	config => {
		if (sessionStorage.getItem("Authorization")) {
			config.headers.Token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "1";
		}

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

axios.defaults.baseURL = "/api/teacherstudio";

// 12-31新增  JSON格式
// 查看工作室申请表详情
export const teacherGetRsegisterLook = obj => {
	return axios.request({
		url: "/studio_register/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 查看提交的工作室课程置换方案申请表详情
export const courseSchemeGetTable = obj => {
	return axios.request({
		url: "/course_replace_scheme_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位获取工作室注册申请列表
export const manaGetStudioRegisterList = obj => {
	return axios.request({
		url: "/management_unit/get_studio_register_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位审批工作室注册申请
export const manaFeedBack = obj => {
	return axios.request({
		url: "/management_unit/feedback_studio_register",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处获取工作室注册申请列表
export const acadGetStudioRegisterList = obj => {
	return axios.request({
		url: "/academic_office/get_studio_register_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处获取工作室注册申请列表
export const acadFeedBack = obj => {
	return axios.request({
		url: "/academic_office/feedback_studio_register",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位获取工作室注册申请列表
export const reguGetStudioRegisterList = obj => {
	return axios.request({
		url: "/regulatory_unit/get_studio_register_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位审核工作室注册
export const reguFeedBack = obj => {
	return axios.request({
		url: "/regulatory_unit/feedback_studio_register",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位获取工作室课程置换方案申请列表
export const manaGetCourseReplace = obj => {
	return axios.request({
		url: "/management_unit/get_course_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位审批工作室课程置换方案申请
export const manaFeedBackCourseReplace = obj => {
	return axios.request({
		url: "/management_unit/feedback_course_replace_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位获取工作室课程置换方案申请
export const reguGetCourseReplace = obj => {
	return axios.request({
		url: "/regulatory_unit/get_course_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位审批工作室课程置换方案申请
export const reguFeedBackCourseReplace = obj => {
	return axios.request({
		url: "/regulatory_unit/feedback_course_replace_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室课程置换方案申请列表
export const acceptGetCourseReplace = obj => {
	return axios.request({
		url: "/accept_unit/get_course_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位审批工作室课程置换方案申请
export const acceptFeedBackCourseReplace = obj => {
	return axios.request({
		url: "/accept_unit/feedback_course_replace_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处获取工作室课程置换方案申请列表
export const acadGetCourseReplace = obj => {
	return axios.request({
		url: "/academic_office/get_course_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处审批工作室课程置换方案申请
export const acadFeedBackCourseReplace = obj => {
	return axios.request({
		url: "/academic_office/feedback_course_replace_scheme",
		method: "post",
		data: obj,
	});
};

// -----------学分置换方案---------

// 12-31新增  JSON格式
// 查看提交的工作室学分置换方案申请表详情
export const creditSchemeGetTable = obj => {
	return axios.request({
		url: "/credit_replace_scheme_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位获取工作室学分置换方案申请列表
export const manaGetCrediReplace = obj => {
	return axios.request({
		url: "/management_unit/get_credit_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位获取工作室学分置换方案申请列表
export const reguGetCrediReplace = obj => {
	return axios.request({
		url: "/regulatory_unit/get_credit_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室学分置换方案申请列表
export const acceptGetCrediReplace = obj => {
	return axios.request({
		url: "/accept_unit/get_credit_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处获取工作室学分置换方案申请列表
export const acadGetCrediReplace = obj => {
	return axios.request({
		url: "/academic_office/get_credit_replace_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位审批工作室学分置换方案申请
export const manaFeedBackCrediReplace = obj => {
	return axios.request({
		url: "/management_unit/feedback_credit_replace_scheme",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 监管单位审批工作室学分置换方案申请
export const reguFeedBackCrediReplace = obj => {
	return axios.request({
		url: "/regulatory_unit/feedback_credit_replace_scheme",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 受理单位审批工作室学分置换方案申请

export const acceptFeedBackCrediReplace = obj => {
	return axios.request({
		url: "/accept_unit/feedback_credit_replace_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处审批工作室学分置换方案申请
export const acadFeedBackCrediReplace = obj => {
	return axios.request({
		url: "/academic_office/feedback_credit_replace_scheme",
		method: "post",
		data: obj,
	});
};

// -----------课程置换---------

// 12-31新增  JSON格式
// 查看课程置换申请表详情
export const courseReplaceApplyGetTable = obj => {
	return axios.request({
		url: "/course_replace_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室课程置换申请列表
export const acceptCourseReplaceDatas = obj => {
	return axios.request({
		url: "/accept_unit/get_course_replace_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 受理单位审批工作室课程置换申请
export const acceptFeedBackCourseReplaceDatas = obj => {
	return axios.request({
		url: "/accept_unit/feedback_course_replace",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处获取工作室课程置换申请列表
export const acadCourseReplaceDatas = obj => {
	return axios.request({
		url: "/academic_office/get_course_replace_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处审批工作室课程置换申请
export const acadFeedBackCourseReplaceDatas = obj => {
	return axios.request({
		url: "/academic_office/feedback_course_replace",
		method: "post",
		data: obj,
	});
};

// -----------学分置换---------

// 12-31新增  JSON格式
// 负责人查看工作室学分置换申请表详情
export const creditReplaceApplyGetTable = obj => {
	return axios.request({
		url: "/credit_replace_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室学分置换方案申请列表
export const acceptCreditReplaceDatas = obj => {
	return axios.request({
		url: "/accept_unit/get_credit_replace_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 受理单位审批工作室课程置换申请
export const acceptFeedBackCreditReplaceDatas = obj => {
	return axios.request({
		url: "/accept_unit/feedback_credit_replace",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处获取工作室课程置换申请列表
export const acadCreditReplaceDatas = obj => {
	return axios.request({
		url: "/academic_office/get_credit_replace_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处审批工作室课程置换申请
export const acadFeedBackCreditReplaceDatas = obj => {
	return axios.request({
		url: "/academic_office/feedback_credit_replace",
		method: "post",
		data: obj,
	});
};

// ----------作室承担实习毕业论文（设计）方案申请---------

// 12-31新增  JSON格式
// 查看工作室承担实习毕业论文（设计）方案申请表详情
export const practiceSchemeGetTable = obj => {
	// 	id	整型	记录id
	// project_code	字符串	承担方案编号
	// studio_scode	整型	工作室id
	// studio_name	字符串	工作室名称
	// teacher_id	整型	负责人id
	// teacher_name	字符串	负责人姓名
	// grade	整型	工作室等级，0为C级，1为B级，2为A级
	// unit_id	整型	受理单位id
	// unit_title	字符串	受理单位名称
	// job_content	字符串	工作室的工作内容
	// apply_time	字符串	申请时间
	// management_unit_feedback	整型	直接管理单位审批状态，0审批中，1同意，2不同意
	// management_unit_feedback_content	字符串	直接管理单位意见内容
	// management_unit_signer	字符串	直接管理单位审批人
	// management_unit_feedback_time	字符串	直接管理单位审批时间
	// regulatory_unit_feedback	整型	监管单位审批状态，-1待审批，0审批中，1同意，2不同意
	// regulatory_unit_feedback_content	字符串	监管单位意见内容
	// regulatory_unit_signer	字符串	监管单位审批人
	// regulatory_unit_feedback_time	字符串	监管单位审批时间
	// unit_feedback	整型	受理单位审批状态，-1待审批，0审批中，1同意，2不同意
	// unit_feedback_content	字符串	受理单位意见内容
	// unit_signer	字符串	受理单位审批人
	// unit_feedback_time	字符串	受理单位审批时间
	// academic_office_feedback	整型	教务处审批状态，-1待审批，0审批中，1同意，2不同意
	// academic_office_feedback_content	字符串	教务处意见内容
	// academic_office_signer	字符串	教务处审批人
	// academic_office_feedback_time	字符串	教务处审批时间
	// apply_content	json数组	申请内容
	// apply_content数组：
	// 参数名	类型	备注
	// type	字符串	承担内容的类型
	// major	字符串	专业
	// student_num	整型	所能承担的学生数
	return axios.request({
		url: "/practice_thesis_scheme_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 直接管理单位获取工作室承担实习毕业论文（设计）方案申请表列表
export const manaSchemeGetPractice = obj => {
	return axios.request({
		url: "/management_unit/get_practice_thesis_scheme_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 直接管理单位审批工作室承担实习毕业论文（设计）方案申请
export const manaSchemeFeedBackGetPractice = obj => {
	return axios.request({
		url: "/management_unit/feedback_practice_thesis_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位获取工作室承担实习毕业论文（设计）方案申请表列表
export const reguSchemeGetCreditReplace = obj => {
	return axios.request({
		url: "/regulatory_unit/get_practice_thesis_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 监管单位审批工作室承担实习毕业论文（设计）方案申请
export const reguSchemeFeedBackCreditReplace = obj => {
	return axios.request({
		url: "/regulatory_unit/feedback_practice_thesis_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室承担实习毕业论文（设计）方案申请表列表
export const acceptSchemeGetCreditReplace = obj => {
	return axios.request({
		url: "/accept_unit/get_practice_thesis_scheme_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 受理单位审批工作室承担实习毕业论文（设计）方案申请
export const acceptSchemeFeedBackCreditReplace = obj => {
	return axios.request({
		url: "/accept_unit/feedback_practice_thesis_scheme",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处获取工作室承担实习毕业论文（设计）方案申请表列表

export const acadSchemeGetPractice = obj => {
	return axios.request({
		url: "/academic_office/get_practice_thesis_scheme_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 教务处审批工作室课程置换申请
export const acadSchemeFeedBackPractice = obj => {
	return axios.request({
		url: "/academic_office/feedback_practice_thesis_scheme",
		method: "post",
		data: obj,
	});
};

// ----------作室承担实习毕业论文（设计）申请---------

// 12-31新增  JSON格式
// 查看提交的工作室承担毕业论文（设计）申请表
export const assumeThesisApplyGetList = obj => {
	// id	整型	记录id
	// studio_scode	整型	工作室id
	// studio_name	字符串	工作室名称
	// project_code	字符串	置换方案编号
	// unit_id	整型	受理单位id
	// unit_title	字符串	受理单位名称
	// reason	字符串	申请理由
	// apply_time	字符串	申请时间
	// teacher_id	整型	√
	// teacher_name	字符串	√
	// unit_feedback	整型	受理单位审批状态，0审批中，1同意，2不同意
	// unit_feedback_content	字符串	受理单位意见内容
	// unit_signer	字符串	受理单位审批人
	// unit_feedback_time	字符串	受理单位审批时间
	// academic_office_feedback	整型	教务处审批状态，-1待审批，0审批中，1同意，2不同意
	// academic_office_feedback_content	字符串	教务处意见内容
	// academic_office_signer	字符串	教务处审批人
	// academic_office_feedback_time	字符串	教务处审批时间
	// academic_office_feedback_time	字符串	教务处审批时间
	// student	json数组	学生成绩列表
	// student数组：

	// 参数名	类型	备注
	// student_id	整型	学生学号
	// student_name	字符串	学生姓名
	// teacher_name	字符串	指导老师姓名
	// task_title	字符串	√
	return axios.request({
		url: "/assume_thesis_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室承担毕业论文（设计）申请表列表
export const acceptGetAssumeThesis = obj => {
	return axios.request({
		url: "/accept_unit/get_assume_thesis_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位审批工作室承担毕业论文（设计）申请
export const acceptFeedbackAssumeThesis = obj => {
	return axios.request({
		url: "/accept_unit/feedback_assume_thesis",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处获取工作室承担毕业论文（设计）申请表列表
export const acadGetAssumeThesis = obj => {
	return axios.request({
		url: "/academic_office/get_assume_thesis_list",
		method: "post",
		data: obj,
	});
};
// 12-31新增  JSON格式
// 教务处审批工作室承担毕业论文（设计）申请
export const acadFeedbackAssumeThesis = obj => {
	return axios.request({
		url: "/academic_office/feedback_assume_thesis",
		method: "post",
		data: obj,
	});
};

// --------工作室承担实习申请表----------

// 12-31新增  JSON格式
// 查看工作室承担实习申请表详情
export const assumePracticeApplyTable = obj => {
	// 	id	整型	记录id
	// studio_scode	整型	工作室id
	// studio_name	字符串	工作室名称
	// project_code	字符串	置换方案编号
	// unit_id	整型	受理单位id
	// unit_title	字符串	受理单位名称
	// reason	字符串	申请理由
	// apply_time	字符串	申请时间
	// teacher_id	整型	√
	// teacher_name	字符串	√
	// unit_feedback	整型	受理单位审批状态，0审批中，1同意，2不同意
	// unit_feedback_content	字符串	受理单位意见内容
	// unit_signer	字符串	受理单位审批人
	// unit_feedback_time	字符串	受理单位审批时间
	// academic_office_feedback	整型	教务处审批状态，-1待审批，0审批中，1同意，2不同意
	// academic_office_feedback_content	字符串	教务处意见内容
	// academic_office_signer	字符串	教务处审批人
	// academic_office_feedback_time	字符串	教务处审批时间
	// academic_office_feedback_time	字符串	教务处审批时间
	// student	json数组	学生成绩列表
	// student数组：

	// 参数名	类型	备注
	// student_id	整型	学生学号
	// student_name	字符串	学生姓名
	// type	字符串	实习类型
	// teacher_name	字符串	指导老师姓名
	// explain	字符串	学生工作情况说明
	return axios.request({
		url: "/assume_practice_apply/get_table",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室承担实习申请表列表
export const acceptGetAssumePractice = obj => {
	return axios.request({
		url: "/accept_unit/get_assume_practice_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位审批工作室承担实习申请
export const acceptFeedbackAssumePractice = obj => {
	return axios.request({
		url: "/accept_unit/feedback_assume_practice",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位获取工作室承担实习申请表列表
export const acadGetAssumePractice = obj => {
	return axios.request({
		url: "/academic_office/get_assume_practice_list",
		method: "post",
		data: obj,
	});
};

// 12-31新增  JSON格式
// 受理单位审批工作室承担实习申请
export const acadFeedbackAssumePractice = obj => {
	return axios.request({
		url: "/academic_office/feedback_assume_practice",
		method: "post",
		data: obj,
	});
};

// 1-1
// 登录
export const login = obj => {
	return axios.request({
		url: "/backstage/login",
		method: "post",
		data: obj,
	});
};

// 1-1
// 系统管理员查看后台成员列表
export const getUnitList = obj => {
	return axios.request({
		url: "/system_admin/get_unit_list",
		method: "post",
		data: obj,
	});
};

// 1-1
// 系统管理员获取后台角色类型
export const getUnitType = obj => {
	return axios.request({
		url: "/system_admin/get_unit_type",
		method: "post",
		data: obj,
	});
};

// 1-1
// 系统管理员移除后台成员
export const removeUnit = obj => {
	return axios.request({
		url: "/system_admin/remove_unit",
		method: "post",
		data: obj,
	});
};
// 1-1
// 系统管理员重置后台成员密码
export const resetUnit = obj => {
	return axios.request({
		url: "/system_admin/reset_password",
		method: "post",
		data: obj,
	});
};
// 1-1
// 系统管理员添加后台成员
export const addUnit = obj => {
	return axios.request({
		url: "/system_admin/add_unit",
		method: "post",
		data: obj,
	});
};

// 1-14
// 检查课程置换方案申请是否有附件
export const courseReplaceSchemeCheck = obj => {
	return axios.request({
		url: "/download/course_replace_scheme_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 下载课程置换方案申请附件
export const downloadCourseReplaceScheme = obj => {
	return axios.request({
		url: "/download/course_replace_scheme",
		method: "get",
		params: obj,
	});
};

// 1-14
// 检查课程置换申请是否有附件
export const courseReplaceCheck = obj => {
	return axios.request({
		url: "/download/course_replace_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 下载课程置换申请附件
export const downloadCourseReplace = obj => {
	return axios.request({
		url: "/download/course_replace_scheme",
		method: "get",
		params: obj,
	});
};

// 1-14
// 检查学分置换方案申请是否有附件
export const creditReplaceSchemeCheck = obj => {
	return axios.request({
		url: "/download/credit_replace_scheme_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 检查承担毕业论文（设计）申请附件
export const assumeThesisCheck = obj => {
	return axios.request({
		url: "/download/assume_thesis_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 下载学分置换方案申请附件
export const downloadCreditReplaceScheme = obj => {
	return axios.request({
		url: "/download/credit_replace_scheme",
		method: "get",
		params: obj,
	});
};

// 1-14
// 检查学分置换申请是否有附件
export const creditReplaceCheck = obj => {
	return axios.request({
		url: "/download/credit_replace_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 下载学分置换申请附件
export const downloadCreditReplace = obj => {
	return axios.request({
		url: "/download/credit_replace",
		method: "get",
		params: obj,
	});
};

// 1-14
// 检查承担实习申请是否有附件
export const assumePracticeCheck = obj => {
	return axios.request({
		url: "/download/assume_practice_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 下载承担实习申请附件
export const downloadAssumePractice = obj => {
	return axios.request({
		url: "/download/assume_practice",
		method: "get",
		params: obj,
	});
};

// 1-14
// 检查承担毕业论文（设计）申请是否有附件
export const assumeThesisSheck = obj => {
	return axios.request({
		url: "/download/assume_thesis_check",
		method: "get",
		params: obj,
	});
};
// 1-14
// 下载承担毕业论文（设计）申请附件
export const downloadAssumeThesis = obj => {
	return axios.request({
		url: "/download/assume_thesis",
		method: "get",
		params: obj,
	});
};

//  2-12
// 教务处获取已通过课程置换方案申请列表
export const get_pass_course_replace_scheme_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_course_replace_scheme_list",
		method: "get",
		params: obj,
	});
};

//  2-12
// 教务处获取已通过课程置换申请列表
export const get_pass_course_replace_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_course_replace_list",
		method: "get",
		params: obj,
	});
};

//  2-12
// 教务处获取已通过学分置换方案申请列表
export const get_pass_credit_replace_scheme_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_credit_replace_scheme_list",
		method: "get",
		params: obj,
	});
};

//  2-12
// 教务处获取已通过学分方案申请列表
export const get_pass_credit_replace_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_credit_replace_list",
		method: "get",
		params: obj,
	});
};
//  2-12
// 教务处获取已通过承担实习毕业论文（设计）方案申请表列表
export const get_pass_practice_thesis_scheme_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_practice_thesis_scheme_list",
		method: "get",
		params: obj,
	});
};
//  2-12
// 教务处获取已通过承担实习申请表列表
export const get_pass_assume_practice_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_assume_practice_list",
		method: "get",
		params: obj,
	});
};
//  2-12
// 教务处获取已通过承担毕业论文（设计）申请表列表
export const get_pass_assume_thesis_list = obj => {
	return axios.request({
		url: "/academic_office/get_pass_assume_thesis_list",
		method: "get",
		params: obj,
	});
};
//  2-12
// 查看提交的工作室课程置换方案申请表详情
export const course_replace_scheme_get_table = obj => {
	return axios.request({
		url: "/course_replace_scheme_apply/get_table",
		method: "post",
		data: obj,
	});
};
//  2-12
// 查看提交的工作室学分置换方案申请表详情
export const credit_replace_scheme_get_table = obj => {
	return axios.request({
		url: "/credit_replace_scheme_apply/get_table",
		method: "post",
		data: obj,
	});
};
//  2-12
// 查看工作室承担实习毕业论文（设计）方案申请表详情
export const practice_thesis_scheme_get_table = obj => {
	return axios.request({
		url: "/practice_thesis_scheme_apply/get_table",
		method: "post",
		data: obj,
	});
};

//  2-12
// 课程置换查询成绩
export const query_results = obj => {
	return axios.request({
		url: "/academic_office/get_course_replace_student_list",
		method: "post",
		data: obj,
	});
};
