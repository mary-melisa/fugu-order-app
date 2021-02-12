<template>
    <div class="evaluation">
        <Header :title="'评价订单'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'" :onRightTxt='true' v-on:onClickRight="publish" :rightTxt="'发表'"></Header>
        <div class="evaluationCont">
            <div class="title">土豆烧牛肉-盖码饭套餐</div>
            <div class="rateCont">
                <div class="pre">整体评价</div>
                <van-rate class="commonRate" v-model="value" />
            </div>
            <div class="desc">
                <div class="descTitle">请在此输入您的评价...</div>
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
            value: 1
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
            this.$router.push({name: 'orderDetail'});
        },
        // 发表
        publish () {

        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },

    }
};
</script>
<style lang="scss" scoped>
.evaluation{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .evaluationCont {
        width: 100%;
        margin-top: 105px;
        min-height: calc(100% - 105px);
        background: #e3e3e3;
        @include flex();
        flex-direction: column;
        .title {
            width: calc(100% - 110px);
            padding: 30px 55px 30px;
            background: white;
            height: 30px;
            line-height: 30px;
            font-size: 30px;
            color: #747474;
        }
        .rateCont {
            width: calc(100% - 110px);
            padding: 0 55px;
            background: white;
            display: inline-flex;
            .pre {
                color: #747474;
                font-size: 30px;
                margin-right: 20px;
            }
            .van-rate {
                padding-bottom: 45px;
            }
        }
        .desc {
            width: calc(100% - 110px);
            padding: 0 55px 55px;
            background: white;
            margin-top: 20px;
            @include flex();
            flex-direction: column;
            .descTitle {
                width: 100%;
                height: 25px;
                line-height: 25px;
                padding-bottom: 130px;
                padding-top: 30px;
                color: #747474;
                font-size: 24px;
            }
            .upload {
                width: 100%;
                height: 138px;
            }
        }
    }
}
</style>
