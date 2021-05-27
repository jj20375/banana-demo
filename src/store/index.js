import Vue from "vue";
import Vuex from "vuex";

import userStore from "./userStore";
import permissionStore from "./permissionStore";
import breadcrumbStore from "./breadcrumbStore";
import i18nStore from "../store/i18nStore";

Vue.use(Vuex);

export default  new Vuex.Store({
    modules: {
        userStore,
        breadcrumbStore,
        i18nStore,
        permissionStore
    },
    state: {
        // 判斷是否呈現手機版選單
        showMenu: false,
    },
    mutations: {
        // 設定開關手機版選單事件
        setShowMenu(state, val) {
            state.showMenu = val;
        },
    },
    actions: {},
});
