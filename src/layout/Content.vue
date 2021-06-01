<template>
    <div >
        <div ref="sidebar"
             v-if="isAuth"
             class="sm:inline-block fixed bottom-0 z-20 bg-white sm:h-screen sm:w-auto w-full"
             :class="isScroll ? 'sm:top-0 bottom-0':'sm:top-20 bottom-0'">
            <SideBar :menus="sideBarMenu"
                     class="sm:mb-0 sm:border-none border-b-4 sm:pb-0 pb-5 border-yellow-500" />
        </div>
        <div class="grid grid-cols-12 justify-center">
            <div class="col-span-12">
                <Header />
            </div>
            <div id="content" class="col-span-12 bg-gray-200"
                 :style="isAuth ? `margin-left:${sideBarWidth}px;`: 'margin-left:0'">
                <div class="mb-20">
                    <router-view></router-view>
                </div>
                <Footer class="bg-white py-5" />
            </div>
            <!-- <div class="col-span-12 bg-white py-5">
                <Footer />
            </div> -->
            <!-- <div :class="isAuth ? 'col-span-10':  'col-span-12'" class="bg-gray-200">
                <router-view></router-view>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
#content {
    @media screen and (max-width: 640px) {
        margin-left: 0 !important;
    }
}
</style>

<script>
import { mapState } from "vuex";
import Header from "./Header/index.vue";
import Banner from "../components/Banner.vue";
import SideBar from "./SideBar.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        Header,
        SideBar,
        Banner,
        Footer
    },
    computed: {
        ...mapState(["showMenu", "isCollapse", "sideBarWidth"]),
        ...mapState("userStore", ["isAuth"]),
        ...mapState("permissionStore", ["sideBarMenu"])
    },
    data() {
        return {
            isScroll: false,
            
        };
    },
    mounted() {
        // 判斷頁面是否滾動
        this.$nextTick(() => {
            window.addEventListener("scroll", () => {
                // 判斷是否登入
                if (this.isAuth) {
                    // 如果有登入將以觸發滾動變數 改為true (window.scrollY 為 偵測滾動高度方法) (offsetTop為指定element距離螢幕最上方高度)
                    this.isScroll = window.scrollY > this.$refs.sidebar.offsetTop;
                }
            });
        });
    }
};
</script>