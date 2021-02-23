<template>
	<div>
		<super-admin v-if="key == 0" />
		<other-admin v-if="key == 1 || key == 4" />
	</div>
</template>
<script>
	import superAdmin from "./superAdministrator/index";
	import otherAdmin from "./otherAdmin/index";
	export default {
		data() {
			return {
				key: 1,
			};
		},
		components: {
			superAdmin, //超级管理员
			otherAdmin, // 普通管理员
		},
		created() {
			let type = +sessionStorage.getItem("type");
			this.key = type;
		},
	};
</script>

<style scoped>
	.ant-menu {
		margin-top: 80px;
	}
	#home {
		height: 100%;
	}
	div {
		height: 100%;
	}
	.lay-header {
		font-size: 24px;
		font-weight: bold;
	}
</style>
