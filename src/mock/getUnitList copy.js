export default {
	"post|/api/teacherstudio/system_admin/get_unit_type": () => {
		return {
			code: 1,
			msg: "",
			data: [
				{ id: 1, type: "学校单位" },
				{ id: 2, type: "学工处" },
			],
		};
	},
};
