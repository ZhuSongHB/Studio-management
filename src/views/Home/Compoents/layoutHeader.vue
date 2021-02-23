<template>
	<div class="lay-box">
		<a-layout>
			<a-layout-content class="lay-header">
				阳光学院工作室后台管理
			</a-layout-content>
			<a-layout-sider :width="150" @click="handleClick">退出登录</a-layout-sider>
		</a-layout>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				sessionStorage.clear();
				this.$router.push({ path: "/", redirect: "/login" });
				this.$message.success("退出成功！");
			},
		},
	};
</script>

<style scoped>
	.lay-box {
		display: flex;
	}
	.lay-header {
		background: white;
		font-size: 24px;
		font-weight: bold;
	}
	.ant-layout-sider {
		cursor: pointer;
		color: white;
		font-size: 16px;
	}
</style>
