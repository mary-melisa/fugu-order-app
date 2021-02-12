<template>
    <div class="billing">
        <div class="topBar">
            <Header :title="'账单明细'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'"></Header>
            <div class="dishAbout">
                <div class="left">
                    <div><span>本月</span><van-icon name="arrow-down" /></div>
                </div>
                <div class="right">
                    <div>已消费 480 元</div>
                </div>
            </div>
        </div>
        <div class="dishesContent">
            <div class="pannels">
                <div class="content">
                    <div class="item" @click="toBillDetail">
                        <div class="imgBar"><van-icon name="shop-o" /></div>
                        <div class="right">
                            <div class="name"><div class="leftHalf">明德中学菜品预定</div><div class="rightHalf">-78.00</div></div>
                            <div class="date">昨天 20:11</div>
                        </div>
                    </div>
                    <div class="item" @click="toBillDetail">
                        <div class="imgBar"><van-icon name="shop-o" /></div>
                        <div class="right">
                            <div class="name"><div class="leftHalf">明德中学菜品预定</div><div class="rightHalf">-78.00</div></div>
                            <div class="date">昨天 20:11</div>
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
        back() {
            this.$router.push({name: 'mine'});
        },
        // 跳转到账单详情
        toBillDetail() {
            this.$router.push({name: 'billDetail'});
        }
    }
};
</script>
<style lang="scss" scoped>
.billing{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    .topBar {
        width: 100%;
        height: 280px;
        background-color: #4582ff;
        @include flex();
        .dishAbout {
            align-self: center;
            align-items: center;
            margin-top: 50px;
            width: calc(100% - 110px);
            padding: 0 55px 65px;
            @include flex();
            justify-content: space-between;
            .left {
                padding-top: 10px;
                width: 50%;
               > div {
                    width: 100%;
                    height: 30px;
                    font-size: 30px;
                    line-height: 30px;
                    color: #ffffff;
                    span {
                        float: left;
                    }
                    .van-icon {
                        margin-left: 5px;
                        font-size: 30px;
                        line-height: 28px;
                        color: white;
                    }
                }
            }
            .right {
                @extend .left;
                text-align: right;
                div {
                    color: rgba(255, 255, 255, .6);
                }
            }
        }
    }
    .dishesContent {
        @include flex();
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height:  calc(100% - 433px);
        background-color: #747474;
        padding-bottom: 218px;
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
                .item {
                    width: 100%;
                    height: 66px;
                    padding-bottom: 32px;
                    padding-top: 28px;
                    border-bottom: 1px solid rgba(116, 116, 116, .2);
                    @include flex();
                    .imgBar {
                        width: 66px;
                        height: 66px;
                        position: relative;
                        .van-icon {
                            font-size: 66px;
                            @include position(absolute, 50%, auto, auto, 50%);
                            transform: translate(-50%, -50%);
                            color: #4e7fe3;
                        }
                    }
                    .right {
                        flex: 1;
                        max-width: calc(100% - 82px);
                        padding-left: 16px;
                        @include flex();
                        flex-direction: column;
                        .name {
                            width: 100%;
                            height: 30px;
                            @include flex();
                            justify-content: space-between;
                            .leftHalf {
                                font-size: 30px;
                                color: #747474;
                                line-height: 30px;
                            }
                            .rightHalf {
                                @extend .leftHalf;
                                color: #4e7fe3;
                            }
                        }
                        .date {
                            margin-top: 11px;
                            width: 100%;
                            height: 25px;
                            font-size: 24px;
                            color: #747474;
                        }
                    }
                }
            }
        }
    }
}
</style>
