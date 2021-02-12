<template>
    <div class="billDetail">
        <div class="topBar">
            <Header :title="'账单详情'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'"></Header>
            <div class="billPhoto"><van-icon name="shop-o" /></div>
            <div class="name">明德中学食堂</div>
            <div class="price">-78.00</div>
            <div class="status">付款成功</div>
        </div>
        <div class="billDetailContent">
            <div class="pannels">
                <div class="content">
                    <div class="title">
                        <van-icon name="shop-o" />
                        <span class="ml15">明德中学食堂</span>
                    </div>
                    <div class="item">
                        <div class="imgBar"><img src="@assets/images/menu.jpg"/></div>
                        <div class="right">
                            <div class="name"><div class="leftHalf">明德中学菜品预定</div><div class="rightHalf">￥16.00</div></div>
                            <div class="num">x1</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="imgBar"><img src="@assets/images/menu.jpg"/></div>
                        <div class="right">
                            <div class="name"><div class="leftHalf">明德中学菜品预定</div><div class="rightHalf">￥16.00</div></div>
                            <div class="num">x1</div>
                        </div>
                    </div>
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
            this.$router.push({name: 'billing'});
        }
    }
};
</script>
<style lang="scss" scoped>
.billDetail{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .topBar {
        width: 100%;
        height: 540px;
        min-height: 540px;
        background-color: #4582ff;
        .billPhoto {
            margin-top: 135px;
            width: 100%;
            height: 98px;
            text-align: center;
            .van-icon {
                font-size: 98px;
                line-height: 98px;
                color: white;
            }
        }
        .name {
            margin-top: 40px;
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 30px;
            color: white;
        }
        .price {
            margin-top: 30px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 48px;
            color: white;
        }
        .status {
            margin-top: 15px;
            width: 100%;
            height: 25px;
            line-height: 25px;
            text-align: center;
            font-size: 24px;
            color: white;
        }
    }
    .billDetailContent {
        @include flex();
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height:  calc(100% - 540px);
        background-color: #747474;
        position: relative;
        .pannels {
            @include position(absolute, -100px, 0, auto, 0);
            width: calc(100% - 60px);
            height: calc(100vh - 430px);
            padding: 0 30px;
            overflow-y: auto;
            .content {
                width: calc(100% - 60px);
                padding: 8px 25px 25px 35px;
                @include flex();
                flex-direction: column;
                background-color: #ffffff;
                box-shadow: 0px 5px 16px 0px 
                    rgba(0, 0, 0, 0.22);
                @include rounded-corners(30px);
                .title {
                    margin-top: 26px;
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    color: #747474;
                    font-size: 30px;
                    margin-bottom: 35px;
                    .van-icon {
                        float: left;
                        font-size: 33px;
                        color: #4e7fe3;
                        line-height: 35px;
                    }
                }
                .item {
                    width: 100%;
                    height: 84px;
                    padding-bottom: 35px;
                    @include flex();
                    .imgBar {
                        width: 84px;
                        height: 84px;
                        position: relative;
                        @include rounded-corners(4px);
                        img {
                            max-width: 84px;
                            max-height: 84px;
                            @include position(absolute, 50%, auto, auto, 50%);
                            transform: translate(-50%, -50%);
                            color: #4e7fe3;
                            @include rounded-corners(4px);
                        }
                    }
                    .right {
                        flex: 1;
                        max-width: calc(100% - 100px);
                        padding-left: 16px;
                        @include flex();
                        flex-direction: column;
                        .name {
                            width: 100%;
                            height: 40px;
                            @include flex();
                            justify-content: space-between;
                            .leftHalf {
                                font-size: 28px;
                                color: #323234;;
                                line-height: 40px;
                            }
                            .rightHalf {
                                @extend .leftHalf;
                                font-size: 33px;
                                color: #4e7fe3;
                            }
                        }
                        .num {
                            margin-top: 15px;
                            width: 100%;
                            height: 25px;
                            font-size: 22px;
                            color: #a2a2a2;
                        }
                    }
                }
            }
        }
    }
}
</style>
