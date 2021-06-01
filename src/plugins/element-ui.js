import Vue from "vue";

// 使用element-ui css 跟 js
import ElementUI from "element-ui";
import "element-ui/packages/theme-chalk/src/index.scss";

import locale from 'element-ui/lib/locale/lang/zh-TW';
Vue.use(ElementUI, {locale}); 