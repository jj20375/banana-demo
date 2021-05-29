<template>
    <div class="mr-5  sm:flex-grow-0 self-center">
        <div class="relative">
            <div class="flex items-center">
                <div class="mr-5">
                    <el-tooltip content="切換供給者或需求者呈現內容"
                                placement="top">
                        <el-switch style="display: block"
                                   v-model="changeSupplier"
                                   :active-icon-class="isSupplier ? 'hidden':'icofont-close text-gray-500 top-1 absolute left-8'"
                                   :inactive-icon-class="!isSupplier ? 'hidden': 'icofont-check text-gray-400 top-1 absolute right-8 z-10'"
                                   active-color="#000000"
                                   inactive-color="#E2E2E2"
                                   @change="setIsSupplier(changeSupplier)"
                                   :active-value="true"
                                   :inactive-value="false">
                        </el-switch>
                    </el-tooltip>
                </div>
                <div class="text-2xl mr-5">
                    <div class="relative right-2">
                        <span class="cursor-pointer" @click="noticeShow = !noticeShow"><i class="fas fa-bell mr-5"></i></span>
                        <div class="absolute -top-2 w-5 h-5 bg-red-600 text-xs text-center align-middle text-white rounded-full right-9">
                            10
                        </div>
                        <transition enter-class="transform opacity-0 -translate-y-20 transition duration-300"
                                    enter-to-class=" transform opacity-1 translate-y-0 transition duration-300"
                                    leave-active-class="transform opacity-0 translate-x-40 transiton duration-500">
                            <div v-if="noticeShow" class="absolute md:right-0 -right-20 z-10 w-80">
                                <Notification />
                            </div>
                        </transition>
                        <i class="fas fa-comment"></i>
                    </div>
                </div>
                <div class="flex desktopShow flex-col">
                    <div class="mr-2 text-gray-300">hello</div>
                    <div class="mr-2">userName</div>
                </div>
                <div @click="clickProfile()">
                    <Avatar :backgroundImg="require('../../img/avatar/avatar1.jpeg')"
                            :isShowLight="true" />
                </div>
            </div>
            <transition enter-class="transform opacity-0 -translate-y-20 transition duration-300"
                        enter-to-class=" transform opacity-1 translate-y-0 transition duration-300"
                        leave-active-class="transform opacity-0 translate-x-40 transiton duration-500">
                <nav v-if="profileShow"
                     class="absolute right-0 z-10">
                    <ul class="bg-white rounded-lg shadow-2xl mt-5 sm:py-5 pb-3 px-5">
                        <li class="mb-2 py-1 cursor-pointer hover:text-yellow-500 transition duration-100"><span class="mr-2"><i class="fas fa-cog"></i></span>帳號設定</li>
                        <li class="mb-2 py-1 cursor-pointer hover:text-yellow-500 transition duration-100"><span class="mr-2"><i class="fas fa-bell"></i></span>通知中心</li>
                        <li class="mb-2 py-2 cursor-pointer hover:text-red-600 transition duration-300 text-lg"
                            @click="logOut()"><span class="mr-2"><i class="fas fa-sign-out-alt"></i></span>登出</li>
                    </ul>
                </nav>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
// 頭像組件
import Avatar from "../../components/Avatar.vue";
// 通知組件
import Notification from "../../components/Notification.vue";
export default {
    components: {
        Avatar,
        Notification
    },
    computed: {
        ...mapState("userStore", ["isAuth", "isSupplier"]),
    },
    data() {
        return {
            // 登入時點擊大頭照 呈現操作功能
            profileShow: false,
            // 更換為供應商樣板
            changeSupplier: false,
            // 判斷是否呈現通知區塊
            noticeShow: false
            
        };
    },
    methods: {
        ...mapActions("userStore", ["logOutUser"]),
        ...mapMutations("userStore", ["setIsSupplier", "setIsAuth"]),
        ...mapMutations(["setSideBarWidth"]),
        // 點擊大頭照後事件
        clickProfile() {
            this.profileShow = !this.profileShow;
        },
        // 登出
        logOut() {
            if(this.$route.name !== "home") {
                this.$router.push({ name: "home" });
            }
            this.setIsAuth(!this.isAuth);
            this.setSideBarWidth(0);
            // this.logOutUser();
        },
    },
    created() {
        this.changeSupplier = this.isSupplier;
    }
};
</script>