<template>
    <div class="faceAuthor">
        <Header :title="'我的人脸识别'" :backFlag="'true'" v-on:goBack="back" :boxShadow="'true'"></Header>
        <div class="myphoto">   
            <img src="@assets/images/myphoto.jpg"/>
        </div>
        <div class="alterBlock" v-if="step === 1">
            <van-button class="alterBtn" @click="alter">修改人脸识别</van-button>
        </div>
        <div class="cancelBlock" v-if="step == 1">
            <van-button class="cancelBtn" @click="cancel">取消人脸识别</van-button>
        </div>
        <div class="alterBlock" v-if="step === 2">
            <van-button class="alterBtn" @click="takePhote">拍照</van-button>
        </div>
        <div class="cancelBlock" v-if="step == 2">
            <van-button class="cancelBtn" @click="upload">上传</van-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast, Dialog } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify } from 'vant';
import axios from 'axios';
import Header from '@/components/header/index.vue';
import Index from '../../../../components/anchorLocation/index.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            step: 1,
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),
        // 返回上一页
        back(){
            this.$router.push({name: 'mine'});
        },
        // 拍照
        takePhote() {

        },
        // 上传
        upload() {

        },
        // 修改人脸识别
        alter(){
            this.step = 2;
        },
        // 取消人脸识别
        cancel(){
             Dialog.confirm({
                className: 'commonDialog',
                title: '提示',
                message: '确定取消人脸识别吗？',
            })
            .then(() => {
                // on confirm
            })
            .catch(() => {
                // on cancel
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.faceAuthor{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .myphoto {
        width: 100%;
        height: 441px;
        margin-top: 220px;
        position: relative;
        img {
            max-width: 439px;
            max-height: 441px;
            @include position(absolute, 50%, auto, auto, 50%);
            transform: translate(-50%, -50%);
        }
    }
    .alterBlock {
        margin-top: 115px;
        width: 100%;
        height: 90px;
        text-align: center;
    }
    .alterBtn {
        width: 460px;
        height: 90px;
        padding: 0;
        line-height: 90px;
        font-size: 36px;
        color: white;
        background-image: linear-gradient(-90deg, 
            #3471fb 0%, 
            #509cf5 100%), 
        linear-gradient(
            #000000, 
            #000000);
        box-shadow: 0px 5px 16px 0px 
            rgba(44, 100, 222, 0.22);
        @include rounded-corners(45px);
    }
    .cancelBlock {
        @extend .alterBlock;
        margin-top: 20px;
        .cancelBtn {
           @extend .alterBtn;
            box-shadow: 0px 5px 16px 0px 
                rgba(44, 100, 222, 0.22);
            border: solid 1px #3573fb;
            background-image: none;
            color: #747474;
        }
    }
}
</style>
