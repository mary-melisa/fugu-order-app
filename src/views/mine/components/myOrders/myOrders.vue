<template>
    <div class="myOrders">
        <div class="topBar">
            <div class="header">
                <a class="back" @click="back"><van-icon name="arrow-left"/></a>
                <van-search class="commonSearch" v-model="value" placeholder="搜索我的订单" />
            </div>
        </div>
        <div class="orderContent">
            <div class="ordersPannel">
                <van-tabs v-model="active">
                    <van-tab title="未使用">
                        <OrderCont :status="active"/>
                    </van-tab>
                    <van-tab title="已使用">
                        <OrderCont :status="active"/>
                    </van-tab>
                    <van-tab title="待付款">
                        <OrderCont :status="active"/>
                    </van-tab>
                    <van-tab title="已取消">
                        <OrderCont :status="active"/>
                    </van-tab>
                </van-tabs>
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
import OrderCont from './components/orderCont/orderCont.vue';

export default {
    components: {
        OrderCont
    },
    data() {
        return {
            value: '',
            active: 0
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),
        back(){
            this.$router.push({name: 'mine'});
        }
    }
};
</script>
<style lang="scss" scoped>
.myOrders{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .topBar {
        width: calc(100% - 60px);
        height: 225px;
        padding: 0 30px;
        background: #4582ff;
        .header {
            width: 100%;
            padding-top: 35px;
            height: 70px;
            display: inline-flex;
            .back {
                width: 30px;
                height: 70px;
                display: block;
                .van-icon {
                    float: left;
                    font-size: 35px;
                    line-height: 70px;
                    color: white;
                }
            }
            ::v-deep.commonSearch {
                flex: 1;
                margin-left: 5px;
                max-width: calc(100% - 35px);
                background: white;
                padding: 0;
                height: 45px;
                align-self: center;
                align-items: center;
                @include rounded-corners(23px);
                .van-search__content {
                    height: 45px;
                    background: white;
                    @include rounded-corners(23px);
                    border: 0;
                    .van-cell.van-field {
                        width: 100%;
                        height: 45px;
                        line-height: 45px;
                        .van-field__left-icon {
                            height: 45px;
                            line-height: 45px;
                            .van-icon.van-icon-search {
                                height: 45px !important;
                                line-height: 45px !important;
                                color: #888888;
                                font-size: 30px;
                            }
                        }
                        .van-field__value {
                            height: 45px;
                            .van-field__body {
                                height: 45px;
                                .van-field__control {
                                    width: calc(100% - 30px);
                                    padding-right: 30px;
                                    height: 45px;
                                    line-height: 45px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .orderContent {
        width: 100%;
        min-height: calc(100% - 225px);
        background: #e3e3e3;
        position: relative;
        .ordersPannel {
            width: calc(100% - 60px);
            height: calc(100% + 110px);
            margin: 0 auto 30px;
            background: white;
            @include rounded-corners(30px);
            @include position(absolute, -110px, 0, auto, 0);
            overflow: visible;
            z-index: 10;
            ::v-deep.van-tabs {
                width: calc(100% - 48px);
                padding: 25px 24px 0;
                @include flex();
                flex-direction: column;
                .van-tabs__wrap {
                    height: auto;
                    .van-tabs__nav--line {
                        .van-tab {
                            .van-tab__text--ellipsis {
                                font-size: 30px;
                                line-height: 30px;
                                color: #747474;
                            }
                        }
                        .van-tab--active {
                            .van-tab__text--ellipsis {
                                color: #4582ff;
                            }
                        }
                        .van-tabs__line {
                            width: 96px !important;
                            bottom: 0 !important;
                            height: 9px !important;
	                        background-color: #4582ff !important;
                        }
                    }
                }
                .van-tabs__content {
                    width: 100%;
                    padding-top: 45px;
                }
            }
        }
    }
}
</style>
