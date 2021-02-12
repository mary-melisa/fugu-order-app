<template>
    <div class="faceRecog">
        <Header :title="'人脸识别'" :backFlag='true' v-on:goBack="back"></Header>
        <div class="faceCont">
             <!--照片区域-->
            <div class="face">
                <van-image :src="imageUrl" v-if="imageUrl"/>
            </div>
            <div class="photoBar">
                <van-uploader :after-read="afterRead" :beforeRead="beforeRead" :max-size="10 * 1024 * 1024" @oversize="onOversize" :max-count="1">
                    <van-button class="photoBtn">拍照</van-button>
                </van-uploader>
            </div>
            
            <div class="tip">人脸仅作为绑定托盘，订单异常验证，不会作为其他用途</div>
            <van-button class="nextBtn" @click="next">下一步</van-button>
            <div class="turn">
                <a @click="toSelectCateen">跳过</a>
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
            uploadUrl: window.uploadUrl,
            imageUrl: require("@/assets/images/faceUpload.png"),
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),
        // 此时可以自行将文件上传至服务器
        afterRead(file) {
            this.$loading.open('上传中...',true,true);
            console.log(file);
            const url =  this.uploadUrl;
            const user = SessionUtil.getItem('userInfo');
            let formData = new FormData();
            formData.append('UploadFile', file.file);
            formData.append('fileName', 'renlian');
            formData.append('userId', user.id);
            formData.append('userName', user.userName);
            axios({method: 'post', url: url, data: formData})
            .then(rsp=>{
                 this.$loading.hide();
                if(rsp.status === 200){
                   this.imageUrl = window.uploadUrlPrev + rsp.data.result;
                   Toast(rsp.data.message);
                } else {
                    Toast('上传失败！');
                }
            })
            .catch(err=> {
                this.$loading.hide();
                console.log(err);
            });
        },
        beforeRead(file){
            if (!(file.type == 'image/jpeg'|| file.type == 'image/jpg'|| file.type=='jpe' || file.type == 'image/png'|| file.type == 'image/gif'|| file.type == 'image/bmp')) {
                Notify({ type: 'danger', message: "仅支持JPG,JPE,JPEG,GIF,PNG,BMP格式图片"});
                return false;
            }
            return true;
        },

        // 上传图片限制大小
        onOversize(file) {
            Toast('文件大小不能超过 10M');
        },
        // 返回上一页
        back(){
            this.$router.push({name: 'register'});
        },
        // 跳转到选择食堂
        toSelectCateen(){
            this.$router.push({name: 'selectCateen'});
        },
        // 下一步
        next() {
            this.$router.push({name: 'selectCateen'});
        }
    }
};
</script>
<style lang="scss" scoped>
.faceRecog{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .faceCont {
        margin-top: 105px;
        width: 100%;
        padding-top: 280px;
        min-height: calc(100% - 105px);
        @include flex();
        flex-direction: column;
        .face {
            width: 100%;
            height: 432px;
            position: relative;
            ::v-deep.van-image {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    max-width: 432px;
                    max-height: 432px;
                    @include position(absolute, 50%, auto, auto, 50%);
                    transform: translate(-50%, -50%);
                }
            }
            // ::v-deep.van-uploader {
            //     width: 100%;
            //     height: 100%;
            //     @include position(absolute, 0, 0, 0, 0);
            //     .van-uploader__wrapper {
            //         width: 100%;
            //         height: 100%;
            //         .van-uploader__input-wrapper {
            //             width: 100%;
            //             height: 100%;
            //             text-align: center;
            //             img {
            //                 max-width: 432px;
            //                 max-height: 432px;
            //             }
            //         }
            //     }
            // }
        }
        .photoBar {
            margin-top: 150px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            .photoBtn {
	            width: 258px;
                height: 50px;
                line-height: 50px;
                padding: 0;
                font-size: 20px;
                color: white;
               @include linearGradient(to right, #509cf5, #3471fb);
                box-shadow: 0px 5px 16px 0px 
                    rgba(44, 100, 222, 0.22);
               @include rounded-corners(25px);
            }
        }
        .tip {
            margin-top: 150px;
            width: 100%;
            font-size: 22px;
            line-height: 30px;
            color: #999999;
            text-align: center;
        }
        .nextBtn {
            width: 462px;
            height: 90px;
            line-height: 90px;
            padding: 0;
            margin: 40px auto 0;
            @include linearGradient(to right, #65b0f8, #4672f6);
            box-shadow: 0px 5px 16px 0px 
                rgba(44, 100, 222, 0.22);
            @include rounded-corners(45px);
            font-size: 36px;
            color: white;
            text-align: center;
            .van-button__text {
                line-height: 90px;
                font-size: 36px;
                color: white;
            }
        }
        .turn {
            margin-top: 30px;
            width: 100%;
            height: 25px;
            text-align: center;
            padding-bottom: 180px;
            a {
                display: block;
                height: 25px;
                line-height: 25px;
                padding: 0 20px;
                font-size: 24px;
                color: #3675fa;
            }
        }
    }
}
</style>
