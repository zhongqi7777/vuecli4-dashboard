// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css'; 
import "@/utils/flexibility"
import 'babel-polyfill'
// import "@babel/polyfill"
import Vue from "vue";
import App from "./App";
import router from "./router";
import i18n from "./lang"; // Internationalization
import Cookies from "js-cookie";
import store from "./vuex";
import "@/utils/dialogDrag";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets
//vue 鼠标事件控制台警告Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive
// import './assets/lib/default-passive-events/dist'
import "./assets/fonts/iconfont.css";// step icons
import "@/styles/index.scss"; // global css

import "./icons"; // left menu icon

import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

import VueDragDrop from "vue-drag-drop"; //https://github.com/cameronhimself/vue-drag-drop

Vue.use(VueDragDrop);

// 引入css
import "element-ui/lib/theme-chalk/index.css";
import Element from "element-ui";


Vue.use(Element, {
  size: Cookies.get("size") || "medium", // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App),
  i18n,
  store
});

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
