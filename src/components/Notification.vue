<template>
    <div class="bg-white rounded-lg shadow-gray-md w-auto text-xs py-2 mt-5 h-80 overflow-y-scroll">
        <div class="flex pl-2 py-3 border-b-2 border-gray-200">
            <h2 class="text-xl flex-1">通知</h2>
            <span class="bg-indigo-50 w-20 self-center p-1 rounded-full text-center mr-2 text-purple-500 font-medium"><span class="mr-1">6</span>new</span>
        </div>
        <div v-for="(notice, objKey) in datas"
             :key="objKey">
            <h3 class="border-b-2 border-gray-200 py-5 text-base text-gray-500 px-2">{{ notice.title }}</h3>
            <ul>
                <li v-for="(item,index) in notice.data"
                    :key="index"
                    class="flex flex-wrap border-b border-gray-200 items-center py-3 px-2">
                    <span class="mr-2"
                          v-if="item.avatar !=='dangerNotice'">
                        <Avatar :size="['w-10','h-10']"
                                :backgroundImg="item.avatar" />
                    </span>
                    <span v-else
                          class="w-10 h-10 rounded-full bg-red-200 mr-2 shadow-gray-sm flex items-center justify-center"><i class="fas fa-exclamation text-red-600"></i></span>
                    <div>
                        <h4 v-if="objKey === 'remaining'"
                            v-html="showMessage(item)"></h4>
                        <h4 v-else><strong class="mr-2">{{ item.name }}</strong>{{ showMessage(item) }}</h4>
                        <h5 v-if="item.time !== null"
                            class="text-gray-300">{{ item.time }}<span v-if="objKey !=='remaining'">分鐘前</span></h5>
                        <h5 v-else
                            class="text-gray-300">{{ item.message }}</h5>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt-2 mx-2">
            <button class="purple-btn-sm font-light block w-full text-center">查看通知中心</button>
        </div>
    </div>
</template>

<script>
// 時間格式套件
import moment from "moment";
// 頭像組件
import Avatar from "../components/Avatar.vue";
let datas = {
    remaining: {
        title: "即將到來的約會",
        data: [
            {
                name: "妮可",
                time: moment(new Date()).format("YYYY/MM/DD HH:mm:ss"),
                type: "remaining",
                remaining: moment(new Date()).hour(-22).format("HH:mm:ss"),
                message: null,
                avatar: require("../img/avatar/avatar2.jpg")
            }
        ]
    },
    dateNotice: {
        title: "約會通知",
        data: [
            {
                name: "Json",
                time: moment(new Date()).format("mm"),
                type: "inviation",
                message: null,
                avatar: "dangerNotice"
            },
            {
                name: "Bob",
                time: moment(new Date()).format("mm"),
                type: "change",
                message: null,
                avatar: "dangerNotice"
            },
            {
                name: "小米",
                time: null,
                type: "cancel",
                message: "抱歉～家裡臨時有事要處理 ><",
                avatar: require("../img/avatar/avatar3.jpg")
            },
            {
                name: "阿傑",
                time: moment(new Date()).format("mm"),
                type: "renew",
                message: null,
                avatar: require("../img/avatar/avatar4.jpg")
            }
        ]
    }
};

/**
 * remaining: 即將到來
 * cancel: 取消約會
 * inviation: 邀請約會
 * renew: 續約約會
 * change: 更改約會內容
 */
let type = ["remaining", "cancel", "inviation", "renew", "change"];
export default {
    components: {
        Avatar
    },
    props: {
        datas: {
            type: Object,
            default() {
                return datas;
            }
        }
    },
    data() {
        return {
            type: type
        };
    },
    methods: {
        // 判斷data 中 type 呈現內容
        showMessage(data) {
            switch (data.type) {
                case "remaining":
                    return `<strong>與${data.name}的約會即將在</strong><span class="text-red-600 mx-2 font-bold">${data.remaining}</span>後開始`;
                case "cancel":
                    return "已取消與您的約會。";
                case "inviation":
                    return "向您發送了約會邀請，請儘快與他聯繫！";
                case "renew":
                    return "向您提出續約邀請，請儘速確認！";
                case "change":
                    return "已修改了約會內容，請儘速確認！";
            }
        }
    }
};
</script>