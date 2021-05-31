<template>
    <div class="cursor-pointer bg-blue-200 rounded-full text-blue-500 p-2 flex items-center justify-center bg-cover bg-center shadow-gray-sm"
         :class="size"
         :style="`background-image:url(${backgroundImg});`">
        <div v-if="isShowLight">
            <span class="absolute right-0 bottom-1 inline-flex rounded-full h-3 w-3 animate-ping  opacity-75"
                  :class="[lightColor]"></span>
            <span class="absolute right-0 bottom-1 inline-flex rounded-full h-3 w-3"
                  :class="[lightColor]"></span>
        </div>
    </div>
</template>

<script>
import {  mapState } from "vuex";
export default {
    props: {
        // 頭像圖
        backgroundImg: {
            type: String,
            default: null
        },
        // 判斷是否呈現燈號
        isShowLight: {
            type: Boolean,
            default: false
        },
        // 燈號顏色
        lightColor: {
            type: String,
            default: "bg-green-600"
        },
        // 頭像尺寸
        size: {
            type: Array,
            default() {
                return ["w-14", "h-14"];
            }
        }
    },
    computed: {
        ...mapState(["showMenu"]),
    }
};
</script>