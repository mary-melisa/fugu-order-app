<template>
    <div class="confrimDishes">
        <div class="topBar">
            <Header :title="'确定菜品'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'"></Header>
            <div class="dishAbout">
                <div class="left">
                    <div>周一至周五</div>
                    <div>11/09 - 11/11</div>
                </div>
                <div class="right">
                    <div>预定日期</div>
                    <div>3天4餐</div>
                </div>
            </div>
        </div>
        <div class="dishesContent">
            <div class="pannels">
                <div class="dishPannel">
                    <div class="aboutMeal">
                        <div class="left">周一 11月09日</div>
                        <div class="right">
                            <van-checkbox-group v-model="meals" class="commonGroup">
                                <van-checkbox name="a">午餐</van-checkbox>
                                <van-checkbox name="b">晚餐</van-checkbox>
                            </van-checkbox-group>
                        </div>
                    </div>
                    <div class="selectBar">
                        <div>午餐</div>
                        <div><van-icon name="plus"/> 选择菜品</div>
                    </div>
                    <div class="menus">
                        <div class="imgBar"><img src="@assets/images/banner1.jpg"/></div>
                        <div class="descs">
                            <div class="name">土豆烧牛肉-盖码饭套餐</div>
                            <div class="date"><span>生效时间：2020-11-09 </span><span class="ml10">12:00-13:00</span></div>
                            <div class="priceBar">
                                <div class="price">￥16.00</div>
                                <van-stepper class="commonStepper" v-model="value" theme="round" disable-input />
                            </div>
                        </div>
                    </div>
                    <div class="menus">
                        <div class="imgBar"><img src="@assets/images/banner1.jpg"/></div>
                        <div class="descs">
                            <div class="name">土豆烧牛肉-盖码饭套餐</div>
                            <div class="date"><span>生效时间：2020-11-09 </span><span class="ml10">12:00-13:00</span></div>
                            <div class="priceBar">
                                <div class="price">￥16.00</div>
                                <van-stepper class="commonStepper" v-model="value1" theme="round" disable-input />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dishPannel">
                    <div class="aboutMeal">
                        <div class="left">周一 11月09日</div>
                        <div class="right">
                            <van-checkbox-group v-model="meals" class="commonGroup">
                                <van-checkbox name="a">午餐</van-checkbox>
                                <van-checkbox name="b">晚餐</van-checkbox>
                            </van-checkbox-group>
                        </div>
                    </div>
                    <div class="selectBar">
                        <div>午餐</div>
                        <div><van-icon name="plus"/> 选择菜品</div>
                    </div>
                    <div class="menus">
                        <div class="imgBar"><img src="@assets/images/banner1.jpg"/></div>
                        <div class="descs">
                            <div class="name">土豆烧牛肉-盖码饭套餐</div>
                            <div class="date"><span>生效时间：2020-11-09 </span><span class="ml10">12:00-13:00</span></div>
                            <div class="priceBar">
                                <div class="price">￥16.00</div>
                                <van-stepper class="commonStepper" v-model="value2" theme="round" disable-input />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dishPannel">
                    <div class="aboutMeal">
                        <div class="left">周一 11月09日</div>
                        <div class="right">
                            <van-checkbox-group v-model="meals" class="commonGroup">
                                <van-checkbox name="a">午餐</van-checkbox>
                                <van-checkbox name="b">晚餐</van-checkbox>
                            </van-checkbox-group>
                        </div>
                    </div>
                    <div class="selectBar">
                        <div>午餐</div>
                        <div><van-icon name="plus"/> 选择菜品</div>
                    </div>
                    <div class="menus">
                        <div class="imgBar"><img src="@assets/images/banner1.jpg"/></div>
                        <div class="descs">
                            <div class="name">土豆烧牛肉-盖码饭套餐</div>
                            <div class="date"><span>生效时间：2020-11-09 </span><span class="ml10">12:00-13:00</span></div>
                            <div class="priceBar">
                                <div class="price">￥16.00</div>
                                <van-stepper class="commonStepper" v-model="value3" theme="round" disable-input />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dishPannel">
                    <div class="aboutMeal">
                        <div class="left">周一 11月09日</div>
                        <div class="right">
                            <van-checkbox-group v-model="meals" class="commonGroup">
                                <van-checkbox name="a">午餐</van-checkbox>
                                <van-checkbox name="b">晚餐</van-checkbox>
                            </van-checkbox-group>
                        </div>
                    </div>
                    <div class="selectBar">
                        <div>午餐</div>
                        <div><van-icon name="plus"/> 选择菜品</div>
                    </div>
                    <div class="menus">
                        <div class="imgBar"><img src="@assets/images/banner1.jpg"/></div>
                        <div class="descs">
                            <div class="name">土豆烧牛肉-盖码饭套餐</div>
                            <div class="date"><span>生效时间：2020-11-09 </span><span class="ml10">12:00-13:00</span></div>
                            <div class="priceBar">
                                <div class="price">￥16.00</div>
                                <van-stepper class="commonStepper" v-model="value4" theme="round" disable-input />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="confirmPay">
            <div class="content">
                <div class="left">
                    <div class="selected">已选</div>
                    <div class="num">4</div>
                    <div class="selected">件</div>
                </div>
                <div class="right">
                    <div class="unit">￥</div>
                    <div class="total">61</div>
                    <van-button class="payBtn" @click="pay">确认付款</van-button>
                </div>
            </div>
        </div>
        <PayPassword v-if="payFlag" v-on:closeDialog="toggleDialog"/>
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
import PayPassword from '../payPassword/payPassword.vue';

export default {
    components: {
        Header,
        PayPassword
    },
    data() {
        return {
           meals: [],
           value: 2,
           value1: 3,
           value2: 4,
           value3: 5,
           value4: 6,
           payFlag: false
        };
    },
    computed: {},
    mounted(){
        this.initData();
    },
    methods: {
        ...mapMutations({

        }),
        onChange(index) {
            Notify({ type: 'primary', message: index });
        },
        // 初始化食堂
        initData(){
            
        },
        // 返回上一页
        back() {
            this.$router.push({name: 'booking'});
        },
        // 确认付款
        pay() {
            Dialog.confirm({
                className: 'commonDialog',
                title: '提示',
                message: '您将付款61元，是否确认付款？',
            })
            .then(() => {
                // on confirm
               this.toggleDialog(true)
            })
            .catch(() => {
                // on cancel
            });
        },
        // 关闭弹窗
        toggleDialog(val) {
            this.payFlag = val;
        }
    }
};
</script>
<style lang="scss" scoped>
.confrimDishes{
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
            margin-top: 105px;
            width: calc(100% - 110px);
            padding: 0 55px 65px;
            @include flex();
            justify-content: space-between;
            .left {
                padding-top: 10px;
                width: 50%;
                div {
                    width: 100%;
                    height: 30px;
                    font-size: 30px;
                    line-height: 30px;
                    color: #ffffff;
                }
                div:nth-child(2) {
                    margin-top: 20px;
                }
            }
            .right {
                @extend .left;
                text-align: right;
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
            @include position(absolute, -68px, 0, auto, 0);
            width: calc(100% - 110px);
            height: calc(100vh - 430px);
            padding: 0 55px;
            overflow-y: auto;
            .dishPannel {
                width: calc(100% - 56px);
                padding: 25px 28px 10px;
                @include flex();
                flex-direction: column;
                background-color: white;
                border-radius: 50px;
                @include rounded-corners(45px);
                margin-bottom: 20px;
                .aboutMeal {
                    width: 100%;
                    height: 30px;
                    @include flex();
                    justify-content: space-between;
                    .left {
                        height: 30px;
                        line-height: 30px;
                        color: #747474;
                        font-size: 30px;
                    }
                    .right {
                        height: 30px;
                        line-height: 30px;
                        text-align: right;
                    }
                }
                .selectBar {
                    margin-top: 30px;
                    width: calc(100% - 7px);
                    height: 35px;
                    line-height: 35px;
                    font-size: 28px;
                    color: #a3b1bf;
                    border-left: 12px solid #2f9bfe;
                    padding-left: 7px;
                    display: inline-flex;
                    justify-content: space-between;
                    .van-icon {
                        font-size: 28px;
                        color: #a3b1bf;
                        line-height: 35px;
                        float: left;
                        margin-right: 5px;
                    }
                }
                .menus {
                    margin-top: 25px;
                    padding-bottom: 35px;
                    width: 100%;
                    display: inline-flex;
                    .imgBar {
                        width: 109px;
                        height: 109px;
                        background-color: #2f9bfe;
                        position: relative;
                        @include rounded-corners(4px);
                        img {
                            max-width: 109px;
                            max-height: 109px;
                            @include position(absolute, 50%, auto, auto, 50%);
                            transform: translate(-50%, -50%);
                            @include rounded-corners(4px);
                        }
                    }
                    .descs {
                        flex: 1;
                        max-width: calc(100% - 119px);
                        padding-left: 10px;
                        @include flex();
                        flex-direction: column;
                        .name {
                            width: 100%;
                            height: 30px;
                            font-size: 28px;
                            line-height: 30px;
                            color: #323234;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .date {
                            margin-top: 10px;
                            width: 100%;
                            height: 25px;
                            font-size: 22px;
                            line-height: 25px;
                            color: #a2a2a2;
                        }
                        .priceBar {
                            margin-top: 5px;
                            width: 100%;
                            height: 38px;
                            display: inline-flex;
                            justify-content: space-between;
                            .price {
                                width: calc(100% - 130px);
                                height: 38px;
                                line-height: 38px;
                                font-size: 36px;
                                color: #4f89ff;
                            }
                            .commonStepper {
                                width: 130px;
                            }
                        }
                    }
                }
                .menus+.menus {
                    margin-top: 0;
                }
            }
        }
    }
    .confirmPay {
        width: calc(100% - 120px);
        height: 218px;
        padding: 0 60px;
        @include position(fixed, auto, 0, 0, 0);
        z-index: 10;
        background: white;
        .content {
            margin-top: 25px;
            width: 100%;
            height: 65px;
            display: inline-flex;
            justify-content: space-between;
            .left {
                @include flex();
                div {
                    align-self: flex-end;
                    align-items: flex-end;
                }
                .selected{
                    font-size: 30px;
                    color: #747474;
                }
                .num{
                    font-size: 48px;
                    color: #747474;
                }
            }
            .right {
                display: inline-flex;
                div {
                    align-self: flex-end;
                    align-items: flex-end;
                }
                .unit {
                    font-size: 30px;
                    color: #ff0000;
                }
                .total {
                    font-size: 48px;
                    color: #ff0000;
                }
                .payBtn {
                    margin-left: 15px;
                    align-self: flex-end;
                    align-items: flex-end;
                    width: 184px;
                    height: 65px;
                    padding: 0;
                    border: 0;
                    background-image: linear-gradient(-90deg, 
                        #3471fb 0%, 
                        #509cf5 100%), 
                    linear-gradient(
                        #000000, 
                        #000000);
                    // box-shadow: 0px 5px 16px 0px 
                    //     rgba(44, 100, 222, 0.22);
                        @include boxShadow(rgba(44, 100, 222, 0.22), rgba(44, 100, 222, 0.22), 0, 5px, 16px);
                    @include rounded-corners(33px);
                    font-size: 36px;
                    line-height: 65px;
                    color: white;
                }
            }
        }
    }
}
</style>
