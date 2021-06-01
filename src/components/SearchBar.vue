<template>
    <div>
        <el-form ref="form"
                 :model="form"
                 :rules="rules">
            <div class="sm:flex sm:items-center justify-center sm:h-20 w-full">
                <div class="sm:mr-5 sm:ml-2 desktopShow">
                    <img @click="$router.push({name:'home'}).catch(err=>{});"
                         class="w-24 ml-2"
                         src="../img/logo.svg"
                         alt="">
                </div>
                <div class="flex-auto self-center sm:mr-5 sm:ml-20  mx-auto sm:border-r border-gray-200">
                    <label class="block">關鍵字</label>
                    <el-form-item class="mb-0"
                                  prop="keyword">
                        <el-input class="border-b sm:w-2/3"
                                  v-model="form.keyword"
                                  clearable
                                  placeholder="請輸入關鍵字"></el-input>
                    </el-form-item>
                </div>
                <div class="flex-auto sm:mr-5 mx-auto sm:border-r border-gray-200">
                    <label class="block">選擇日期</label>
                    <el-form-item class="mb-0"
                                  prop="dateTime">
                        <el-date-picker v-model="form.dateTime"
                                        type="datetime"
                                        class="w-2/3 border-b border-gray-200 border-t-0 border-r-0 border-l-0"
                                        clearable
                                        placeholder="選擇日期與時間">
                        </el-date-picker>
                    </el-form-item>
                </div>
                <div class="flex-auto sm:mr-5 mx-auto">
                    <label class="block">地點</label>
                    <el-form-item class="mb-0"
                                  prop="location">
                        <el-select v-model="form.location"
                                   class="sm:w-2/3 w-full border-b border-gray-200 border-t-0 border-r-0 border-l-0"
                                   clearable
                                   placeholder="請選擇地點">
                            <el-option v-for="(item,index) in locations"
                                       :key="index"
                                       :label="item"
                                       :value="item">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="self-center text-2xl cursor-pointer mr-10 sm:mt-0 mt-5 sm:text-left text-center">
                    <span class="mr-10 sm:bg-white bg-gray-400 sm:text-black text-white sm:border-none border border-gray-400 sm:py-0 py-2 sm:px-0 px-3 rounded-lg"
                          @click="onSubmit()">
                        <i class="fas fa-search sm:mr-5"></i>
                    </span>
                    <span @click="closeSearchBar()" class="sm:border-none border border-gray-400 sm:py-0 py-2 sm:px-0 px-3 rounded-lg">
                        <i class="icofont-ui-close"></i>
                    </span>
                </div>
            </div>
        </el-form>
    </div>
</template>

<style lang="scss" scoped>
/deep/ .el-input__inner {
    border: none;
}
/deep/ .el-form-item__error {
    margin-top: -20px;
}
/deep/ .el-date-editor.el-input, .el-date-editor.el-input__inne {
    @screen sm {
        @apply w-2/3;
    }
    @apply w-full;
}
</style>

<script>
export default {
    data() {
        return {
            form: {},
            rules: {
                keyword: [
                    {
                        required: true,
                        message: "請輸入關鍵字",
                        trigger: "blur"
                    }
                ],
                dateTime: [
                    {
                        required: true,
                        message: "請選擇時間",
                        trigger: "change"
                    }
                ],
                location: [
                    {
                        required: true,
                        message: "請選擇地點",
                        trigger: "change"
                    }
                ]
            },
            locations: ["台北市", "基隆市", "新北市", "連江縣", "宜蘭縣", "新竹市", "新竹縣", "桃園市", "苗栗縣", "台中市", "彰化縣", "南投縣", "嘉義市", "嘉義縣", "雲林縣", "台南市", "高雄市", "澎湖縣", "金門縣", "屏東縣", "台東縣", "花蓮縣"],
            showSarchBar: true
        };
    },
    methods: {
        // 關閉搜尋框
        closeSearchBar() {
            this.form = {};
            // 清除表單驗證
            this.$refs.form.clearValidate();
            this.$emit("onCloseShowSearchBar", !this.showSarchBar);
        },
        /**
         * 表單發送
         */
        async onSubmit() {
            // 判斷表單驗證成功了 才執行註冊或更新
            try {
                // 等待表單驗證是否成功 try catch 會自動判斷是 true 或 false 因次不用寫 if 判斷
                await this.$refs.form.validate();
            } catch (err) {
                this.$message({
                    type: "error",
                    message: "表單驗證失敗"
                });
            }
        }
    }
};
</script>