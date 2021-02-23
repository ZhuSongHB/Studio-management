<template>
	<a-config-provider :locale="zhCN">
		<div id="app">
			<router-view />
		</div>
	</a-config-provider>
</template>
<script>
	import zhCN from "ant-design-vue/es/locale/zh_CN";

	export default {
		data() {
			return {
				zhCN,
			};
		},
	};
</script>
<style lang="less">
	#app {
		text-align: center;
		color: #2c3e50;
		height: 100%;
	}
</style>
