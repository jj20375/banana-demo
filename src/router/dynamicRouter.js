const dynamicRoutes = [
    {
        path: "/dateRecord",
        name: "dateRecord",
        icon: "icofont-ui-file",
        iconClass: "text-2xl",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "約會紀錄",
            typeUser: "all",
            isMenu: true
        },
    },
    {
        path: "/paymentRecord",
        name: "paymentRecord",
        icon: "icofont-dollar",
        iconClass: "text-2xl",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "金流紀錄",
            typeUser: "all",
            isMenu: true
        },
    },
    {
        path: "/calendar",
        name: "calendar",
        icon: "icofont-ui-calendar",
        iconClass: "text-2xl",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "行事曆",
            typeUser: "supplier",
            isMenu: true
        },
    },
    {
        path: "/serviceSet",
        name: "serviceSet",
        icon: "fas fa-cog",
        iconClass: "text-2xl",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "服務設定",
            typeUser: "supplier",
            isMenu: true
        },
    },
    {
        path: "/blindDate",
        name: "blindDate",
        icon: "fas fa-users-cog",
        iconClass: "text-2xl",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "對象管理",
            typeUser: "supplier",
            isMenu: true
        },
    },
    {
        path: "/favoritesRecord",
        name: "favoritesRecord",
        icon: "icofont-heart-alt",
        iconClass: "text-2xl text-red-600",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "收藏紀錄",
            typeUser: "all",
            isMenu: true
        },
    },
    {
        path: "/search",
        name: "search",
        icon: "icofont-heart-alt",
        iconClass: "text-2xl text-red-600",
        component: () => import("../views/SearchPage.vue"),
        meta: {
            text: "搜尋頁面",
            typeUser: "all",
            isMenu: false
        },
    },
];
export default dynamicRoutes;
