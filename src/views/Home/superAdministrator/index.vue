<template>
	<!-- 超级管理员 -->
	<a-layout id="home">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
			<div class="logo">
				<img src="../../../assets/logo.png" alt="" />
			</div>
			<div class="time">{{ time }}</div>
			<a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @click="change">
				<a-menu-item key="1">
					<span class="nav-text">后台成员</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }">
				<lay-header />
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
					<registration-time v-show="key === '1'" :style="{ minHeight: '100%' }" />
				</div>
			</a-layout-content>
			<!-- <a-layout-footer style="textAlign: center">
				Ant Design ©2018 Created by Ant UED
			</a-layout-footer> -->
		</a-layout>
	</a-layout>
</template>
<script>
	import layHeader from "../Compoents/layoutHeader";
	import registrationTime from "./registrationTime/index";
	export default {
		components: { layHeader, registrationTime },
		data() {
			return {
				time: null,
				key: "1",
			};
		},
		methods: {
			onCollapse(collapsed, type) {
				// console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				// console.log(broken);
			},
			change(i) {
				this.key = i.key;
				console.log(this.key);
			},
		},
		created() {
			setInterval(() => {
				let date = new Date();
				let y = date.getFullYear();
				let m = date.getMonth() + 1;
				m = m < 10 ? "0" + m : m;
				let d = date.getDate();
				d = d < 10 ? "0" + d : d;
				let h = date.getHours();
				h = h < 10 ? "0" + h : h;
				let minute = date.getMinutes();
				minute = minute < 10 ? "0" + minute : minute;
				let second = date.getSeconds();
				second = second < 10 ? "0" + second : second;
				this.time = y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
			}, 1000);
		},
	};
</script>

<style scoped lang="less">
	.ant-menu {
		margin-top: 50px;
	}
	#home {
		height: 100%;
	}
	.time {
		height: 32px;
		margin: 16px;
		font-size: 24px;
		color: white;
	}
	.logo {
		width: 90%;
		padding: 10px;
		img {
			width: 100%;
		}
	}
</style>
