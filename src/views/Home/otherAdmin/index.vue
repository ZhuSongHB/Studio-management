<template>
	<!-- 其他管理员 -->
	<a-layout id="home">
		<a-layout-sider breakpoint="lg" collapsed-width="0" width="200" @collapse="onCollapse" @breakpoint="onBreakpoint">
			<div class="logo">
				<img src="../../../assets/logo.png" alt="" />
			</div>
			<div class="time">{{ time }}</div>
			<a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @click="change">
				<a-menu-item key="1">
					<span class="nav-text">工作室注册申请</span>
				</a-menu-item>
				<a-menu-item key="2">
					<span class="nav-text">课程置换方案申请</span>
				</a-menu-item>
				<a-menu-item key="3">
					<span class="nav-text">学分置换方案申请</span>
				</a-menu-item>
				<a-menu-item key="4">
					<span class="nav-text">课程置换申请</span>
				</a-menu-item>
				<a-menu-item key="5">
					<span class="nav-text">学分置换申请</span>
				</a-menu-item>
				<a-menu-item key="6" title="承担实习毕业论文（设计）方案申请">
					<span class="nav-text">承担实习毕业论文（设计）方案申请</span>
				</a-menu-item>
				<a-menu-item key="7" title="承担毕业论文（设计）申请">
					<span class="nav-text">承担毕业论文（设计）申请</span>
				</a-menu-item>
				<a-menu-item key="8">
					<span class="nav-text">承担实习申请</span>
				</a-menu-item>
				<a-menu-item key="9">
					<span class="nav-text" v-if="type == 4">审批通过申请</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }">
				<lay-header />
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0', height: '100%' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
					<register v-if="leftIndex === '1'" :style="{ height: '100%' }" />
					<scheme-course-replace v-if="leftIndex === '2'" :style="{ height: '100%' }" />
					<scheme-credit-replace v-if="leftIndex === '3'" :style="{ height: '100%' }" />
					<course-replace v-if="leftIndex === '4'" :style="{ height: '100%' }" />
					<credit-replace v-if="leftIndex === '5'" :style="{ height: '100%' }" />
					<scheme-practice v-if="leftIndex === '6'" :style="{ height: '100%' }" />
					<practice v-if="leftIndex === '7'" :style="{ height: '100%' }" />
					<shi-xi v-if="leftIndex === '8'" :style="{ height: '100%' }" />
					<view-all v-if="leftIndex === '9'" :style="{ height: '100%' }" />
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
	import register from "./register/index";
	import schemeCourseReplace from "./schemeCourseReplace/index";
	import courseReplace from "./courseReplace/index";
	import schemeCreditReplace from "./schemeCreditReplace/index";
	import creditReplace from "./creditReplace/index";
	import schemePractice from "./schemePractice/index";
	import practice from "./practice/index";
	import shiXi from "./shiXi/index";
	import viewAll from "./viewAll/index";
	export default {
		components: { viewAll, layHeader, register, schemeCourseReplace, schemeCreditReplace, courseReplace, creditReplace, schemePractice, practice, shiXi },
		data() {
			return {
				time: null,
				leftIndex: "1",
				type: "",
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
				this.leftIndex = i.key;
			},
		},
		created() {
			this.type = sessionStorage.getItem("type");
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
			this.leftIndex = "1";
		},
	};
</script>

<style scoped lang="less">
	.ant-menu {
		margin-top: 50px;
		text-align: start;
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
