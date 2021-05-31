<template>
    <header class="bg-white">
        <div class="flex items-start justify-center h-20 w-full">
            <div class="flex-1 self-center sm:ml-2">
                <div class="flex flex-row items-center">
                    <img @click="$router.push({name:'home'}).catch(err=>{});"
                         class="w-24 ml-2"
                         src="../../img/logo.svg"
                         alt="">
                    <div v-if="showMenu" class="bg-black opacity-70 w-full h-screen fixed z-30 top-0 transition duration-150" :class="showMenu ? 'opacity-1' : 'opacity-0'"></div>
                    <ul class="sm:ml-20 list-none  transition duration-200 sm:not-sr-only" :class="showMenu ? 'not-sr-only fixed top-36 z-40 bg-white w-full py-2 rounded-lg': 'sr-only top-0'">
                        <li class="sm:inline-block block  text-xl font-medium cursor-pointer transition duration-200 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 hover:rounded-lg"
                        :class="showMenu ? 'py-3 border px-2 mt-2 mb-2 mx-2 border-yellow-500 rounded-lg' : 'ml-5'"
                            v-for="(item, index) in categoryMenu"
                            :key="index">
                            {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="self-center text-2xl">
                <i class="fas fa-search mr-5"></i>
            </div>
            <LoginComponent v-if="isAuth" class="sm:not-sr-only" :class="showMenu ? 'not-sr-only fixed top-20 z-40 bg-white w-full right-0 py-2 rounded-t-lg': 'sr-only'" />
            <div v-if="!isAuth"
                 class="self-center mr-10">
                <button class="red-btn"
                        @click="login(!isAuth)">登入</button>
            </div>
            <div class="mobileShow self-center z-40">
                <button class="bg-white inline-block p-3 mr-2 text-yellow-500 rounded-lg"
                        @click="setShowMenu(!showMenu)">
                    <i @click="setShowMenu(!showMenu)" class="fas fa-bars fa-2x"></i>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import LoginComponent from "./LoginComponent.vue";
export default {
    components: {
        LoginComponent
    },
    computed: {
        ...mapState(["showMenu"]),
        ...mapState("userStore", ["user", "isAuth"])
    },
    data() {
        return {
            searchData: null,

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
        ...mapMutations(["setShowMenu", "setSideBarWidth"]),
        ...mapMutations("userStore", ["setIsAuth"]),
        login(val) {
            this.setSideBarWidth(72);
            this.setIsAuth(val);
        }
    }
};
</script>