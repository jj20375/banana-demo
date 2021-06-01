<template>
    <div>
        <div class="h-32 flex items-center col-span-11">
            <div class="text-4xl mr-3">{{title}}</div>
            <div class="border-r h-1/2 border-gray-400 mr-3"></div>
            <div class="text-md text-gray-500 cursor-pointer">看更多</div>
        </div>
        <slot name="top"></slot>
        <slot name="new"></slot>
        <slot></slot>
        <div class="my-5" v-if="showBanner">
            <img class="w-full"
                 src="img/categoryBanner/banner1.jpg"
                 alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },
        path: {
            type: String,
            default: null
        },
        showBanner: {
            type: Boolean,
            default: true,
        }
    }
};
</script>