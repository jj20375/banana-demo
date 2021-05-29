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
        // 判斷選單是否折疊
        isCollapse: true,
        // 用來判斷 margin-left寬度
        sideBarWidth: 0,
    },
    mutations: {
        // 設定開關手機版選單事件
        setShowMenu(state, val) {
            state.showMenu = val;
        },
        // 設定選單是否開啟或折疊
        setIsCollapse(state, val) {
            state.isCollapse = val;
        },
        setSideBarWidth(state, val) {
            state.sideBarWidth = val;
        }
    },
    actions: {},
});
