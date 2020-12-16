<template>
	<a-layout id="home">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
			<!-- <div class="logo" /> -->
			<a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @click="change">
				<a-menu-item key="1">
					<span class="nav-text">功能 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<span class="nav-text">功能 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<span class="nav-text">功能 3</span>
				</a-menu-item>
				<a-menu-item key="4">
					<span class="nav-text">功能 4</span>
				</a-menu-item>
				<a-menu-item key="5">
					<span class="nav-text">功能 5</span>
				</a-menu-item>
				<a-menu-item key="6">
					<span class="nav-text">功能 6</span>
				</a-menu-item>
				<a-menu-item key="7">
					<span class="nav-text">功能 7</span>
				</a-menu-item>
				<a-menu-item key="8">
					<span class="nav-text">功能 8</span>
				</a-menu-item>
				<a-menu-item key="9">
					<span class="nav-text">功能 9</span>
				</a-menu-item>
				<a-menu-item key="10">
					<span class="nav-text">功能 10</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }">
				<div class="lay-header">阳光学院工作室后台管理</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', height: '100%' }">
					内容
				</div>
			</a-layout-content>
			<!-- <a-layout-footer style="textAlign: center">
				Ant Design ©2018 Created by Ant UED
			</a-layout-footer> -->
		</a-layout>
	</a-layout>
</template>
<script>
	export default {
		methods: {
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},
			change(i) {
				console.log(i);
			},
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
	.lay-header {
		font-size: 24px;
		font-weight: bold;
	}
</style>
