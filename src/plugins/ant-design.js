import Vue from "vue";
// 按需引入
import { Button, message, Icon, Menu, Layout, Modal, ConfigProvider, Row, Col, Card, Progress } from "ant-design-vue";

// github地址 ： https://github.com/vueComponent/ant-design-vue/blob/master/components/index.js

/* v1.1.3+ 自动注册Button下组件，如Button.Group */

const components = [Button, message, Icon, Menu, Layout, Modal, ConfigProvider, Row, Col, Card, Progress];
components.map(item => {
	Vue.use(item);
});
Vue.prototype.$message = message;
// Vue.prototype.$notification = notification;
// Vue.prototype.$info = Modal.info;
// Vue.prototype.$success = Modal.success;
// Vue.prototype.$error = Modal.error;
// Vue.prototype.$warning = Modal.warning;
// Vue.prototype.$confirm = Modal.confirm;
// Vue.prototype.$destroyAll = Modal.destroyAll;
