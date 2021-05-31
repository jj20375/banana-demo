<template>
    <div ref="sidebar"
         class="sm:w-auto w-full sm:inline-block flex justify-center">
        <!-- <button class="blue-btn sm:hidden w-2/3 mt-3 mx-auto block text-2xl"
                @click="setShowMenu(!showMenu)">x</button> -->
        <div @click="changeIsCollapse(!isCollapse)"
             class="cursor-pointer p-2 ml-3 sm:block hidden"><i class="ni ni-bold-right"
               :class="[!isCollapse && 'transition transform rotate-90 duration-300']"></i></div>
        <ul id="menus"
            class="list-none mx-5 sm:mt-10 text-center sm:block"
            @mouseenter="mouseoverIsCollapse()">
            <li v-for="(item, index) in menus"
                class="mt-5 sm:block ml-3 sm:ml-0 inline-block"
                v-show="(!isSupplier && item.meta.typeUser !== 'supplier') || isSupplier"
                :class="currentMenu === item.name ? 'text-yellow-500': ''"
                :key="index">
                <span @click="clickMenu(item.name, true)"
                      class="cursor-pointer sm:flex sm:items-center">
                    <!-- icon -->
                    <span class="sm:mr-2 sm:inline-block"
                          :class="item.iconClass"><i :class="item.icon"></i></span>
                    <!-- 選單文字 -->
                    <transition enter-class="transition opacity-0 duration-100"
                                enter-to-class="transition opacity-1 duration-100"
                                leave-active-class="opacity-0 transition duration-100">
                        <strong :class="[currentMenu === item.name ? 'text-yellow-500 hover:text-black' : 'hover:text-yellow-500', (!isCollapse || isMouseOverCollapse) ? 'sm:not-sr-only': 'sm:sr-only']"
                                class="transition duration-100 sm:text-lg text-xs not-sr-only sm:inline-block block">{{ item.meta.text }}</strong>
                    </transition>
                    <!-- 巢狀選單時觸發底下箭頭icon -->
                    <i v-if="!$isEmpty(item.children)"
                       class="ni ni-bold-left transition duration-500 ease-linear align-middle mb-1"
                       :class="activeMenu[item.name]  ? '-rotate-90 transform' : 'rotate-0 transform'"></i>
                </span>
                <!-- 判斷是否有巢狀選單 -->
                <ul class="list-none ml-10 border-l-4 border-blue-500 pl-2"
                    v-if="!$isEmpty(item.children)">
                    <MenuItem v-for="(item2,index2) in item.children"
                              :key="index2"
                              :class="activeMenu[item.name] ? 'opacity-1 translate-x-0 transform duration-700 ease-in-out transition' : '-translate-x-1/2 sr-only opacity-0 transition transform duration-700 ease-in-out'"
                              :item="item2"
                              @onActiveMenuParent="activeMenuClass" />
                </ul>
            </li>
        </ul>
    </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
//子選單樣板
import MenuItem from "../components/MenuItem.vue";
export default {
    props: {
        menus: {
            type: Array,
            default: []
        }
    },
    components: {
        MenuItem
    },
    computed: {
        // 用來判斷是否呈現按鈕 在手機版時
        ...mapState(["showMenu", "isCollapse", "sideBarWidth"]),
        ...mapState("userStore", ["isSupplier"])
    },
    data() {
        return {
            // 用來判斷是否顯示子選單內容，以及父選單箭頭方向
            activeMenu: {},
            // 判斷當前選中的父選單
            currentMenu: null,
            // 判斷滑鼠是否滑入
            isMouseOverCollapse: false
        };
    },
    methods: {
        // 開關手機版選單事件
        ...mapMutations(["setShowMenu", "setIsCollapse"]),
        ...mapMutations(["setSideBarWidth"]),
        /**
         * 子選單被選中時觸發
         * @param { type String(字串) } val 子選單的上層路由key
         */
        activeMenuClass(val) {
            // 觸發點擊父選單方法
            this.clickMenu(val, false);
            // 更改當前選中的父選單
            this.currentMenu = val;
            // 新增用來判斷父選單是否顯示子選單的key與更改箭頭方向
            this.$set(this.activeMenu, val, true);
        },
        /**
         * 點擊父選單時事件
         * @param { type String(字串) } val 父選單key
         * @param { type Boolean(布林值) } setShowMenuWork 更改是否出現選單的 toggle事件
         */
        clickMenu(val, setShowMenuWork = false) {
            // 判斷選中的父選單key不等於當前父選單 key時 關閉子選單與更改箭頭方向
            if (val !== this.currentMenu) {
                this.$set(this.activeMenu, this.currentMenu, false);
            }
            // 判斷選中父選單是否有選中的key
            if (!this.activeMenu.hasOwnProperty(val)) {
                // 如果沒有 key 則加入 並且給值 true (用來判斷是否呈現子選單與更改箭頭方向)
                this.$set(this.activeMenu, val, true);
            } else {
                // 如果有 key 且被點擊時 則修改當前 boolean值
                this.activeMenu[val] = !this.activeMenu[val];
            }
            // 跳轉點擊選單頁面
            this.$router.push({ name: val }).catch((err) => err);
            // 當下選中選單 用來 active class使用
            this.currentMenu = val;
            // 因為預設第一次進入網站時 無需觸發此事件 因此做一個判斷
            // if (setShowMenuWork) {
            //     // 手機版時 選單被點擊後 關閉選單事件
            //     this.setShowMenu(!this.showMenu);
            // }
        },
        // 將側邊選單固定展開按鈕
        changeIsCollapse(val) {
            this.setIsCollapse(val);
            if (val) {
                this.setSideBarWidth(72);
            } else {
                this.setSideBarWidth(136);
            }
        },
        // 滑鼠滑入側邊選單時觸發事件
        mouseoverIsCollapse() {
            // 判斷如果是鎖定展開選單時 則更改值
            if (!this.isCollapse) {
                return;
            }
            // 滑鼠滑入選單icon 時 改為 true
            this.isMouseOverCollapse = true;
            // 設定側邊選單寬度 用來 margin-left使用
            this.setSideBarWidth(136);
            // 當滑鼠移出選單時觸發
            this.$refs.sidebar.querySelector("#menus").addEventListener("mouseleave", () => {
                // 將滑鼠滑入選單判斷值改為 false
                this.isMouseOverCollapse = false;
                // 更改側邊選單寬度
                this.setSideBarWidth(72);
            });
        }
    },
    mounted() {
        this.currentMenu = this.$route.name;
        this.setSideBarWidth(this.$refs.sidebar.scrollWidth);
    }
};
</script>