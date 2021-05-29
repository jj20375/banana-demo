const dynamicRoutes = [
    {
        path: "/dateRecord",
        name: "dateRecord",
        icon: "icofont-ui-file",
        iconClass: "text-2xl",
        component: () => import("../views/OtherPage.vue"),
        meta: {
            text: "約會紀錄",
            typeUser: "all"
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
            typeUser: "all"
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
            typeUser: "supplier"
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
            typeUser: "supplier"
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
            typeUser: "supplier"
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
            typeUser: "all"
        },
    },
];
export default dynamicRoutes;
