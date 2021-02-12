<template>
    <div class="trayBinding">
        <Header :title="'托盘绑定'" :backFlag="'true'" v-on:goBack="back" :boxShadow="'true'"></Header>
        <div class="bindContent">
            <div class="personal">
                <div class="userInfo">
                    <div class="imgBar">
                        <img src="@assets/images/photo.png"/>
                    </div>
                    <div class="middle">
                        <div class="name">**玉</div>
                        <div class="mobile">183******54</div>
                    </div>
                    <div class="right">
                        <span>余额</span>
                        <span class="ml10">¥5.00</span>
                    </div>
                </div>
            </div>
            <div class="tray">
                <img src="@assets/images/tuopan.jpg"/>
            </div>
            <div class="txt">暂无绑定，请扫描托盘上的二维码</div>
            <div class="scan">
                <van-button class="scanBtn" @click="scan">扫一扫</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify, Dialog } from 'vant';
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
        back(){
            this.$router.push({name: 'mine'});
        },
        // 扫一扫
        scan(){
             Dialog.confirm({
                className: 'commonDialog',
                title: '提示',
                message: '餐盘二维码：sdfsdfsdfsdfsdfsdfsd<br/>确定绑定该托盘吗？',
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
.trayBinding{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .bindContent {
        width: 100%;
        margin-top: 131px;
        @include flex();
        flex-direction: column;
        .personal {
            width: 688px;
            height: 266px;
            margin: 0 auto;
            @include linearGradient(to right, #65b0f8, #4672f6);
            box-shadow: 0px 0px 24px 0px 
                rgba(101, 176, 249, 0.41);
           @include rounded-corners(20px);
           @include flex();
        }
        .userInfo {
            width: calc(100% - 70px);
            height: 114px;
            padding: 0 35px;
            align-self: center;
            align-items: center;
            @include flex();
            .imgBar {
                width: 114px;
                height: 114px;
                position: relative;
                img {
                    max-width: 114px;
                    max-height: 114px;
                    @include position(absolute, 50%, auto, auto, 50%);
                    transform: translate(-50%, -50%);
                }
            }
            .middle {
                flex: 1;
                padding-left: 20px;
                max-width: calc(100% - 434px);
                @include flex();
                flex-direction: column;
                .name {
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    font-size: 34px;
                    color: white;
                }
                .mobile {
                    margin-top: 20px;
                    width: 100%;
                    height: 25px;
                    line-height: 25px;
                    font-size: 22px;
                    color: white;
                }
            }
            .right {
                width: 300px;
                text-align: right;
                span:first-child {
                    font-size: 30px;
                    color: #fefefe;
                }
                span:last-child {
                    font-size: 48px;
                    color: #ffd386;
                }
            }
        }
        .tray {
            width: 100%;
            height: 532px;
            text-align: center;
            img {
                max-width: 100%;
                max-height: 532px;
            }
        }
        .txt {
            width: 100%;
            height: 30px;
            font-size: 30px;
            line-height: 30px;
            text-align: center;
            color: #747474;
        }
        .scan {
            width: 100%;
            margin-top: 150px;
            @include flex();
            .scanBtn {
                width: 462px;
                height: 90px;
                margin: 0 auto;
                padding: 0;
                background-image: linear-gradient(-90deg, 
                    #3471fb 0%, 
                    #509cf5 100%), 
                linear-gradient(
                    #000000, 
                    #000000);
                box-shadow: 0px 5px 16px 0px 
                    rgba(44, 100, 222, 0.22);
                font-size: 36px;
                color: white;
                @include rounded-corners(45px);
            }
        }
    }
}
</style>
