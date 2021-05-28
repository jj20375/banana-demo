<template>
    <div class="grid grid-cols-12">
        <div class="col-span-12">
            <Header />
        </div>
        <!-- <SideBar class="col-span-12 pb-5 bg-white  sm:static sm:not-sr-only w-full sm:col-span-4 md:col-span-4 lg:col-span-3 xl:col-span-2  shadow-md dark:shadow-2xl z-10 NotoSansTCFont h-auto dark:bg-gray-800 text-blue-700 dark:text-blue-200"
                 :class="showMenu ? 'not-sr-only' : 'sr-only'"
                 .:menus="sideBarMenu" /> -->
        <div class="col-span-12">
            <Banner />
        </div>
        <div class="col-span-12 bg-gray-200">
            <router-view></router-view>
        </div>
        <div class="col-span-12 bg-white py-5 mt-20">
            <Footer/>
        </div>
    </div>
</template>

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
        ...mapState(["showMenu"]),
        ...mapState("permissionStore", ["sideBarMenu", "currentMenu"])
    },
    data() {
        return {};
    }
};
</script>