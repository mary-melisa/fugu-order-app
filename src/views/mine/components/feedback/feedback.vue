<template>
    <div class="feedback">
         <Header :title="'意见反馈'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'" :onRightTxt='true' v-on:onClickRight="submit" :rightTxt="'提交'"></Header>
         <div class="feedbackCont">
             <div class="pannelBar">
                <div class="title">请输入您的问题和建议，我们将尽快为您解决（必填）</div>
                <div class="upload">
                     <van-uploader class="evalUploader" :after-read="afterRead">
                        <template slot="default">
                            <van-icon name="plus"/>
                        </template>
                    </van-uploader>
                </div>
             </div>
         </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify } from 'vant';
import axios from 'axios';
import Header from '@/components/header/index.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),
        // 返回上一页
        back() {
            this.$router.push({name: 'mine'});
        },
        // 提交
        submit(){

        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
    }
};
</script>
<style lang="scss" scoped>
.feedback{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .feedbackCont {
        margin-top: 108px;
        width: 100%;
        min-height: calc(100% - 108px);
        @include flex();
        flex-direction: column;
        background: #e3e3e3;
        .pannelBar {
            width: calc(100% - 55px);
            padding: 0 55px 55px;
            @include flex();
            flex-direction: column;
            background: white;
            .title {
                width: 100%;
                padding-top: 30px;
                padding-bottom: 130px;
                height: 25px;
                line-height: 25px;
                font-size: 24px;
                color: #747474;
                background-color: white;
            }
            .upload {
                width: 100%;
                height: 138px;
            }
        }
    }
}
</style>
