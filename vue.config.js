module.exports = {
	chainWebpack: config => {
		config.plugin("html").tap(options => {
			options[0].title = "工作室管理系统"; // page title
			return options;
		});
	},

	productionSourceMap: false,
	publicPath: "/themes/default/public/assets/studioadmin/",
};
