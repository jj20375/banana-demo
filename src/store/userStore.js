import { setStorage, getStorage, removeStorage } from "../service/localStorage";
// 取得登入者資料 api
import { LoginUserInfoApi } from "../api/userApi";
import { Message } from "element-ui";
export default {
    namespaced: true,
    // data
    state: {
        isAuth: false,
        user: null, // 使用者資料
        isSupplier: false, // 判斷是否呈現供給者樣板
        // 首頁上方搜尋條件資料
        searchValue: {},
    },
    // computed
    getters: {
        getOperatorId: (state) => {
            if (state.user.group.group_code !== "SYSTEM") {
                return state.user.userable.user_operator.operator_id;
            } else {
                return 0;
            }
        },
    },
    // methods
    mutations: {
        // 設定為登入
        setIsAuth(state, val) {
            state.isAuth = val;
        },
        // 設定使用者資料
        setUser(state, val) {
            state.user = val;
        },
        // 設定供給者是否為供給者樣板
        setIsSupplier(state, val) {
            state.isSupplier = val;
        },
        // 設定首頁上方搜尋條件資料
        setSearchValue(state,val) {
            state.searchValue = val;
        }
    },
    // mounted ajax的方法都寫在這
    actions: {
        // 取得使用者資料
        async getLoginUserInfo({ commit, state }, user) {
            if (getStorage("token")) {
                try {
                    let { data } = await LoginUserInfoApi();
                    commit("setUser", data.data);
                    setStorage("tokenTime", data.data.token_time);
                    return data.data;
                } catch (err) {
                    Message({
                        type: "error",
                        message: "取得使用者資料失敗",
                    });
                }
            }
        },
        // 登出使用者清除localStorage
        logOutUser({ commit, rootState }) {
            let self = this;
            removeStorage("token");
            removeStorage("lang");
            removeStorage("loginTime");
            removeStorage("refreshTime");
            removeStorage("tokenTime");
            removeStorage("agentName");
            removeStorage("depth");
            removeStorage("defaultDepth");
            removeStorage("agentUserId");
            removeStorage("agentAddId");
            removeStorage("parent");
            removeStorage("isAuth");
            removeStorage("noticeLastId");
            commit("setIsAuth", false);
            commit("setUser", null);
            commit("permissionStore/clearCurrentState", "", { root: true });
        },
    },
};
