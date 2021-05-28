<template>
    <div>
        <div class="relative md:text-left text-center">
            <div v-if="!showWhiteBg" class="hidden md:block">
                <h5 class="z-10 absolute text-red-600"
                    style="width:40px; right:20px;">吃喝玩伴</h5>
                <img style="width:50px; right:20px;"
                class="absolute"
                     src="../img/icon/sale-label.svg"
                     alt="">
            </div>
            <img class="w-full rounded-tl-lg rounded-tr-lg"
                 src="img/providers/girl1.jpg"
                 alt="">
            <div class="w-full h-full absolute top-0 bg-gradient-to-t z-0 from-gray-900 rounded-b-lg"></div>
            <div :class="showWhiteBg ? 'bg-white p-2' : 'p-0'"
                 class="relative">
                <div :class="showWhiteBg ? '' : 'absolute md:-top-20 -top-14 w-full mb-20 pl-2'">
                    <h3 class="md:text-3xl text-md md:block inline-block"
                        :class="showWhiteBg ? 'text-gray-800' : 'text-white'">妮可</h3>
                    <h5 class="md:text-xl text-xs md:mt-2"
                        :class="showWhiteBg ? 'text-gray-800 md:block inline-block' : 'text-white md:float-left  inline-block'">台北市</h5>
                    <div class="mt-2"
                         :class="showWhiteBg ? 'md:flex block items-center' : 'md:float-right block'">
                        <el-rate v-if="showWhiteBg"
                                 v-model="value"
                                 class="flex-1 text-xs"
                                 disabled
                                 show-score
                                 text-color="#ff9900"
                                 score-template="{value}">
                        </el-rate>
                        <div class="md:text-lg text-xs"
                             :class="showWhiteBg ? '' : 'md:inline-block block'">
                            <strong :class="showWhiteBg ? 'text-red-500' : 'text-white'">$2000/HR</strong>
                        </div>
                    </div>
                </div>
                <div v-if="!showWhiteBg"
                     class="clear-both"></div>
            </div>
            <div class="relative">
                <div class="md:flex text-center z-10">
                    <div class="cursor-pointer p-2 md:w-1/2 w-full bg-gray-200 md:rounded-bl-lg"><span class="mr-2"><i class="fas fa-heart"></i></span>收藏我</div>
                    <div class="cursor-pointer p-2 md:w-1/2 w-full bg-red-600 md:rounded-br-lg md:rounded-bl-none rounded-br-lg rounded-bl-lg text-white font-medium"><span class="mr-2"><i class="fas fa-comment"></i></span>聊聊天</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/deep/ .el-rate {
    height: auto;
    line-height: 0;
}
/deep/ .el-rate__item {
    // display: block;
    position: static;
    vertical-align: middle;
    // display: block;
    line-height: 0;
}
/deep/ .el-rate__icon {
    @apply text-xs;
    line-height: 0.8rem;
    @screen md {
        @apply text-lg;
        line-height: 1rem;
    }
}
/deep/ .el-rate__text {
    display: none;
    @screen md {
        display: inline-block;
    }
}
</style>

<script>
export default {
    props: {
        showWhiteBg: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            value: 3.5
        };
    }
};
</script>