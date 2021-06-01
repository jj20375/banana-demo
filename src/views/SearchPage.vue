<template>
    <div class="grid grid-cols-12 gap4 mt-5">
        <div class="desktopShow col-start-1 col-span-1"></div>
        <div class="sm:col-span-10 col-span-12">
            <h2 class="text-2xl tracking-widest">{{ searchValue.dateTime |formatDateTime }},<span class="ml-2">在{{ searchValue.location }}</span>有23位符合{{ searchValue.keyword }}的約會對象</h2>
            <div v-for="(item,index) in categoryTitle"
                 :key="index">
                <div class="h-32 flex items-center col-span-11">
                    <div class="text-4xl mr-3">{{ item.title }}</div>
                    <div class="border-r h-1/2 border-gray-400 mr-3"></div>
                    <div class="text-md text-gray-500 cursor-pointer">更多此分類的約會對象</div>
                </div>
                <div class="p-5 shadow-gray-lg rounded-xl bg-white">
                    <div class="grid sm:grid-cols-10 grid-cols-12 gap-4 p-2">
                        <div v-for="item in random()"
                             :key="item"
                             class="shadow-gray-md rounded-lg sm:col-span-2 col-span-12">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
// 卡片樣板
import Card from "../components/Card.vue";
import { getRandom } from "../service/anyService";
export default {
    components: {
        Card
    },
    computed: {
        ...mapState("userStore", ["searchValue"])
    },
    data() {
        return {
            categoryTitle: [
                { title: "吃飯玩伴", path: "" },
                { title: "性感情人", path: "" },
                { title: "喝酒享樂", path: "" },
                { title: "音樂派對", path: "" }
            ],
            random: function () {
                return getRandom(1, 10);
            }
        };
    }
};
</script>