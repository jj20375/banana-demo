<template>
    <header class="bg-white">
        <div class="flex items-start justify-center h-20 w-full">
            <div class="flex-1 self-center ml-2">
                <div class="flex items-center">
                    <img class="w-24 ml-2"
                         src="../img/logo.svg"
                         alt="">
                    <ul class="ml-20 desktopShow list-none">
                        <li class="inline-block ml-5 text-xl font-medium cursor-pointer transition duration-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:rounded-lg"
                            v-for="(item, index) in categoryMenu"
                            :key="index">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="!isAuth"
                 class="self-center md:block md:mr-5 hidden">
                <el-input placeholder="搜尋"
                          suffix-icon="el-icon-search"
                          v-model="searchData">
                </el-input>
            </div>
            <div v-if="!isAuth"
                 class="self-center mr-10">
                <button class="red-btn"
                        @click="setIsAuth(!isAuth)">登入</button>
            </div>
            <div v-if="isAuth"
                 class="mr-5  sm:flex-grow-0 self-center">
                <div class="relative">
                    <div class="flex items-center">
                        <div class="flex desktopShow flex-col">
                            <div class="mr-2 text-gray-300">hello</div>
                            <div class="mr-2">userName</div>
                        </div>
                        <div @click="clickPortfolio()"
                             class="cursor-pointer bg-blue-200 rounded-full text-blue-500 w-14 h-14 p-2 flex items-center justify-center">
                            <span class="align-middle"><i class="text-blue-500 md:text-2xl text-lg fas fa-user"></i></span>
                        </div>
                    </div>
                    <transition enter-class="transform ease-in opacity-0 -translate-y-20 transition duration-300"
                                enter-to-class=" transform ease-in opacity-1 translate-y-0 transition duration-300"
                                leave-active-class="transform opacity-0 translate-x-40 transiton duration-500">
                        <nav v-if="portfolioShow"
                             class="absolute right-0 z-10">
                            <ul class="bg-white rounded-lg shadow-2xl mt-5 sm:py-5 pb-3 w-40">
                                <li class="sm:hidden border-b border-blue-900 p-3 text-center text-gray-400">userName</li>
                                <li class="mb-2 border-b px-5 py-3 border-blue-900 cursor-pointer hover:text-blue-500 transition duration-100 text-center"
                                    @click="$router.push({name:'userUpdate'})"><span class="mr-2 text-blue-500"><i class="fas fa-edit"></i></span>更新資料</li>
                                <li class="bg-red-700 text-center mx-2 text-white px-3 py-2 cursor-pointer rounded-2xl hover:bg-red-900 transition duration-300 text-lg"
                                    @click="logOut()">登出 <i class="fas fa-sign-out-alt"></i></li>
                            </ul>
                        </nav>
                    </transition>
                </div>
            </div>
            <div class="mobileShow self-center">
                <button class="bg-white inline-block p-3 mr-2 text-blue-500 rounded-lg"
                        @click="setShowMenu(!showMenu)">
                    <i class="fas fa-bars fa-2x"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    computed: {
        ...mapState("userStore", ["user", "isAuth"])
    },
    data() {
        return {
            searchData: null,
            portfolioShow: false,
            categoryMenu: [
                {
                    name: "吃飯玩伴"
                },
                {
                    name: "性感情人"
                },
                {
                    name: "喝酒享樂"
                },
                {
                    name: "音樂派對"
                }
            ]
        };
    },
    methods: {
        ...mapActions("userStore", ["logOutUser"]),
        ...mapMutations(["setShowMenu"]),
        ...mapMutations("userStore", ["setIsAuth"]),
        // 點擊大頭照後事件
        clickPortfolio() {
            this.portfolioShow = !this.portfolioShow;
        },
        logOut() {
            let self = this;
            // self.logOutUser();
            self.$router.push({ name: "home" });
            self.setIsAuth(!self.isAuth);
            // location.reload();
        }
    }
};
</script>