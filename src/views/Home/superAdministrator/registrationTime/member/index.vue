<template>
	<div class="collapse">
		<a-table :columns="columns" :data-source="datas" :pagination="false" rowKey="id" bordered>
			<!-- slot中的name是指scopedSlots中customRender  slot-scope="text"的text就是数据源里的值赋值给text  -->
			<!-- 定义头部名称时 slot等于columns中的slots的title的值，然后赋值 -->
			<template slot="action" slot-scope="text, record, index">
				<a-button @click="handleClick(text, record, index)" type="primary">修改密码</a-button>
				<a-popconfirm title="确定删除该角色吗？" @confirm="() => deleteUnit(record.id)">
					<a-button class="btn_danger" type="danger">移除</a-button>
				</a-popconfirm>
			</template>
		</a-table>
		<a-modal title="修改密码" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
			<a-input-password placeholder="请输入密码" v-model="againPsw" />
		</a-modal>

		<a-button class="add" type="primary" @click="add">添加成员</a-button>
		<a-modal title="添加成员" :visible="addVisible" :confirm-loading="confirmLoading" @ok="addOk" @cancel="addCancel">
			<a-select placeholder="请选择部门" style="width: 120px;margin-bottom:10px;" @change="typeChange">
				<a-select-option v-for="item in unitType" :value="item.id" :key="item.id">
					{{ item.type }}
				</a-select-option>
			</a-select>
			<a-input placeholder="请输入账号" v-model="addObj.id" class="mb10" />
			<a-input-password placeholder="请输入密码" v-model="addObj.password" />
		</a-modal>
	</div>
</template>

<script>
	const columns = [
		{
			title: "部门id",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "角色类型",
			dataIndex: "type",
			key: "type",
		},

		{
			title: "操作",
			key: "action",
			width: "30%",
			scopedSlots: { customRender: "action" },
		},
	];
	import { getUnitType, removeUnit, resetUnit, addUnit } from "../../../../../network/api";
	export default {
		props: ["datas"],
		data() {
			return {
				columns,
				// 弹框
				visible: false,
				addVisible: false,
				confirmLoading: false,
				// 弹框数据
				tanDatas: {},
				// 弹框里表格的数据
				unitType: [],
				reId: "",
				againPsw: "",
				addObj: {
					id: "",
					password: "",
					type: "",
				},
			};
		},
		methods: {
			handleClick(text, record, index) {
				this.visible = true;
				this.reId = record.id;
			},
			handleCancel(e) {
				this.visible = false;
			},
			deleteUnit(e) {
				this.confirmLoading = true;
				removeUnit({ id: e }).then(res => {
					this.confirmLoading = false;
					this.$emit("againData");
					if (res.data.code == 1) {
						this.$message.success("删除成功");
					} else {
						this.$message.error("参数错误");
					}
				});
			},

			handleOk() {
				if (!this.againPsw) {
					this.$message.warning("请输入密码");
					return;
				}
				resetUnit({ id: this.reId, password: this.againPsw }).then(res => {
					this.visible = false;
					if (res.data.code == 1) {
						this.$message.success("重置密码成功");
						this.againPsw = "";
					} else {
						this.$message.error("参数错误");
						this.againPsw = "";
					}
				});
			},
			add() {
				this.addVisible = true;
			},
			addOk() {
				addUnit(this.addObj).then(res => {
					if (res.data.code == 1) {
						this.$message.success("添加成功！");
					} else {
						this.$message.error("参数错误!");
					}
				});
				this.addObj = {
					id: "",
					password: "",
					type: "",
				};
			},
			addCancel() {
				this.addVisible = false;
			},
			typeChange(e) {
				this.addObj.type = e;
			},
		},
		created() {
			getUnitType().then(res => {
				this.unitType = res.data.data;
			});
		},
	};
</script>

<style lang="less" scoped>
	.content {
		.ant-collapse-content-box {
			background: red;
		}
	}
	.box {
		font-size: 16px;
		div {
			padding-top: 5px;
		}
	}
	.sub_input {
		width: 200px;
		margin-bottom: 20px;
	}
	.sj {
		text-indent: 2em;
	}
	.add {
		margin-top: 10px;
	}
	.btn_danger {
		margin-left: 10px;
	}
	.mb10 {
		margin-bottom: 10px;
	}
</style>
