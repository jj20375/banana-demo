// element ui alert 提醒功能
import { Message } from "element-ui";
// 取得使用者權限
import { UserMenuApi } from "../api/userApi";
// 導入 所有需要權限的router
import dynamicRoutes from "../router/dynamicRouter";
/**
 * permissionRouter = 過濾所有router方法，指返回該用戶擁有的權限路由
 * setDefaultRoute = 設定登入就可看到的路由頁面
 */
import { permissionRouter, setDefaultRoute } from "../service/routerService";
/**
 * router = 初始化路由 (vue router) 方法
 * defaultRouter = 登入即可觀看的路由
 */
import router, { defaultRouter } from "../router/index";
export default {
    namespaced: true,
    // data
    state: {
        // 初始權限的路由
        permissionList: null,
        // 左側選單
        sideBarMenu: [],
    },
    // coumputed
    getters: {},
    // methods
    mutations: {
        // 設定初始權限路由值
        setPermissionList(state, routes) {
            state.permissionList = routes;
        },
        // 設定左側選單
        setSideBarMenu(state, menu) {
            state.sideBarMenu = menu;
        },
    },
    // mounted
    actions: {
        //es7 同步 ajax 寫法
        async getPermissionList({ commit, state, dispatch, rootState }) {
            try {
                // let { data } = await UserMenuApi();
                // // 獲取登入的使用者過濾完後可訪問的權限路由
                // let permissionRoutes = permissionRouter(data.data, dynamicRoutes);
                let permissionRoutes = permissionRouter(dynamicRoutes, dynamicRoutes);
                // // 判斷登入後即可瀏覽的路由頁面 該頁面的path === ''
                let findDefaultRouter = defaultRouter.find((value) => value.path === "");
                // // 獲取登入後即可瀏覽的路由底下的children頁面
                let setPermissionRouter = findDefaultRouter.children;
                // // 將登入後即可瀏覽的權限與需要權限的路由做整合
                setPermissionRouter.push(...permissionRoutes);
                // // 過濾重複的資料
                // let result = setPermissionRouter.filter(function(element, index, arr) {
                //     return arr.indexOf(element) === index;
                // });
                // // 設定 SideBarMenu 值;
                // commit("setSideBarMenu", result);
                commit("setSideBarMenu", setPermissionRouter);
                // 判斷如果點擊父級路由時，且此父級路由有子路由時，跳轉第一個子路由
                setDefaultRoute(setPermissionRouter);
                // 新增自訂義路由 (在 router底下 index.js中有個 routerOption 初始路由物件變數 底下有個 routes key 此 key 底下的陣列值 為自定義新增路由 目前只有登入頁路由)
                let initialRoutes = router.options.routes;
                // 動態添加路由
                router.addRoutes(defaultRouter);
                // 初始的路由表
                commit("setPermissionList", [...initialRoutes, ...defaultRouter]);
                // commit("setPermissionList", [...defaultRouter]);
            } catch (err) {
                Message({
                    type: "error",
                    message: "取得權限資料失敗",
                });
            }
        },
    },
};
