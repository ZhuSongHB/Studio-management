<template>
	<div class="box">
		<a-card title="名师工作室后台管理系统登录" style="width: 600px;height:250px">
			<p>
				账号：
				<a-input class="id" placeholder="请输入账号" v-model="btn_sub.id" />
			</p>
			<p>
				密码：
				<a-input-password class="pwd" placeholder="请输入密码" v-model="btn_sub.password" />
			</p>
			<a-button type="primary" @click="submit" :loading="loading">登录</a-button>
		</a-card>
	</div>
</template>

<script>
	import { login } from "../../network/api";
	export default {
		data() {
			return {
				btn_sub: {
					id: "",
					password: "",
				},
				loading: false,
			};
		},
		methods: {
			submit() {
				if (this.btn_sub.id == "" || this.btn_sub.password == "") {
					this.$message.error("账号或密码未填写");
					return;
				}
				sessionStorage.clear();
				this.loading = true;
				login(this.btn_sub).then(res => {
					this.loading = false;
					res = res.data;
					if (res.code == 1) {
						sessionStorage.setItem("type", res.data.type);
						sessionStorage.setItem("token", res.data.token);
						sessionStorage.setItem("id", this.btn_sub.id);
						this.$message.success("登录成功！");
						this.$router.push("/home");
					} else {
						this.$message.error("登录失败，账号或密码错误!");
					}
				});
			},
		},
	};
</script>
<style lang="less" scoped>
	.box {
		display: flex;
		width: 100%;
		height: 100%;
		background: #eeeeee;
		justify-content: center;
		align-items: center;
		.ant-card {
			width: 300px;
			.id {
				width: 50%;
			}
			.pwd {
				width: 50%;
			}
		}
	}
</style>
