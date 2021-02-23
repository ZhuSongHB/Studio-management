export default {
	"post|/api/teacherstudio/system_admin/get_unit_list": () => {
		return {
			code: 1,
			msg: "",
			data: [
				{ id: 134, type: "学校单位" },
				{ id: 221, type: "学工处" },
			],
		};
	},
};
