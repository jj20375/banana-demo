<template>
    <div class="grid grid-cols-12 gap4">
        <div class="desktopShow col-start-1 col-span-1"></div>
        <div class="sm:col-span-10 col-span-12">
            <category-component v-for="(item,index) in categoryTitle"
                                :key="index"
                                :title="item.name"
                                :path="item.path">
                <template v-if="item.name === '吃飯玩伴'"
                          v-slot:top>
                    <div class="grid sm:grid-cols-10 grid-cols-12 gap-4 p-2">
                        <div v-for="item in 3"
                             :key="item"
                             class="shadow-gray-md rounded-lg sm:col-span-2 col-span-4">
                            <Card />
                        </div>
                        <div class="shadow-gray-md rounded-lg sm:col-span-4 col-span-12 sm:h-auto h-52">
                            <div class="bg-cover h-full bg-center rounded-lg"
                                 style="background-image:url(../img/commercial/img1.jpg)"></div>
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-10 grid-cols-12 gap-4 p-2">
                        <div class="shadow-gray-md rounded-lg sm:col-span-4 col-span-12 sm:h-auto h-52">
                            <div class="bg-cover h-full bg-center rounded-lg"
                                 style="background-image:url(../img/commercial/img1.jpg)"></div>
                        </div>
                        <div v-for="item in 3"
                             :key="item"
                             class="shadow-gray-md rounded-lg sm:col-span-2 col-span-4">
                            <Card />
                        </div>
                    </div>
                </template>
                <template v-else
                          v-slot>
                    <div class="grid sm:grid-cols-10 grid-cols-12 gap-4 p-2">
                        <div v-for="item in 5"
                             :key="item"
                             class="shadow-gray-md rounded-lg sm:col-span-2" :class="item > 3 ? 'col-span-6' : 'col-span-4'">
                            <Card />
                        </div>
                    </div>
                </template>
            </category-component>
            <div class="h-32 flex items-center col-span-11">
                <div class="text-4xl mr-3">新人榜</div>
                <div class="border-r h-1/2 border-gray-400 mr-3"></div>
                <div class="text-md text-gray-500 cursor-pointer">看更多</div>
            </div>
            <div class="p-5 shadow-gray-lg rounded-xl bg-white">
                <div class="grid sm:grid-cols-10 grid-cols-12 gap-4 p-2">
                    <div v-for="item in 5"
                         :key="item"
                         class="shadow-gray-md rounded-lg sm:col-span-2" :class="item < 3 ? 'col-span-6' : 'col-span-4'">
                        <Card :showWhiteBg="false"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "../components/Card.vue";
import CategoryComponent from "./index/CategoryComponent.vue";
export default {
    components: {
        Card,
        CategoryComponent
    },
    data() {
        return {
            categoryTitle: [
                { name: "吃飯玩伴", path: "" },
                { name: "性感情人", path: "" },
                { name: "喝酒享樂", path: "" },
                { name: "音樂派對", path: "" }
            ]
        };
    }
};
</script>