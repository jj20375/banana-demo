<template>
    <div id="app"
         class="w-full">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from "vuex";
// vue 全域化 mixins
import "./global/mixins";
// vue 全域化 filters
import "./global/filters";
// vue 全域化 prototypes
import "./global/prototypes";
// vue 全域化 組件
import "./global/components";
// fontawesome icon
import "./plugins/fontawesome";
// element ui
import "./plugins/element-ui";
// 自定義scss
import "./scss/main.scss";
export default {
    computed: {}
};
</script>
