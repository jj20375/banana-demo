<template>
    <header class="bg-white">
        <div class="flex items-start justify-center h-20 w-full">
            <div class="flex-1 self-center ml-2">
                <div class="flex items-center">
                    <img class="w-24 ml-2"
                         src="../../img/logo.svg"
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
            <LoginComponent v-if="isAuth" />
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
import LoginComponent from "./LoginComponent.vue";
export default {
    components: {
        LoginComponent
    },
    computed: {
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
        ...mapMutations(["setShowMenu"]),
        ...mapMutations("userStore", ["setIsAuth"])
    }
};
</script>