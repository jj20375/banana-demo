export function permissionRouter(userRouter = [], allRouter = []) {
    // 過濾後的 routes
    let permissionRoutes = [];
    return allRouter;
    // let permissionRoutes = allRouter;
    allRouter.forEach((value, i) => {
        userRouter.forEach((item, index) => {
            // 權限路由過濾 全部路由的名稱跟使用者權限路由比較 如果有相同再繼續執行
            if (item.key === value.name) {
                // 判斷此路由是否有 新增｜更新｜刪除權限
                value.meta.params = {
                    Create: item.crud.per_create,
                    // Create: 1,
                    Read: item.crud.per_read,
                    // Read: 1,
                    Update: item.crud.per_update,
                    // Update: 1,
                    Delete: item.crud.per_delete,
                    // Delete: 1,
                };
                // 判斷是否為選單用路由
                value.meta.isMenu = item.is_menu;
                // 判斷是否有子項功能
                if(item.options.length > 0) {
                    value.meta.options = JSON.parse(item.options);
                } else {
                    value.meta.options = [];
                }
                // 如果有子選單且數量大於0
                if (item.children && item.children.length > 0) {
                    // callback 呼叫自己遞回
                    value.children = permissionRouter(
                        item.children,
                        value.children
                    );
                }
                permissionRoutes.push(value);
            }
        });
    });
    return permissionRoutes;
}
/**
 *
 * @param {Array} routes 用戶過濾後的路由
 *
 * 遞迴為所有有子路由的路由設置第一個children.path為默認路由
 */
export function setDefaultRoute(routes) {
    routes.forEach((value, index) => {
        // 判斷路由的children大於0
        if (value.children && value.children.length > 0) {
            value.redirect = { name: value.children[0].name };
            // setDefaultRoute(value.children);
        }
    });
}
