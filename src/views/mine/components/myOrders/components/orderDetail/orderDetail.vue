<template>
    <div class="orderDetail">
         <div class="topBar">
            <Header :title="'订单详情'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'"></Header>
            <div class="dishAbout" v-if="status === 0">
                <div class="firstLine">订单尚未使用</div>
                <div class="secondLine">期待您的用餐</div>
            </div>
            <div class="dishAbout" v-if="status === 1">
                <div class="firstLine">订单已完成</div>
                <div class="secondLine">感谢您的用餐，欢迎下次光临</div>
                <div class="payBlock">
                    <van-button class="payBtn" @click="toEvaluation">评价</van-button>
                </div>
            </div>
            <div class="dishAbout" v-if="status === 2">
                <div class="firstLine">订单待付款</div>
                <div class="secondLine">剩11时20分自动关闭</div>
            </div>
            <div class="dishAbout" v-if="status === 3">
                <div class="firstLine">订单已取消</div>
                <div class="secondLine">您已取消本次订单</div>
            </div>
        </div>
        <div class="orderContent">
            <div class="orderInfo">
                <div class="title"><van-icon name="shop-o"/><span class="ml15">明德中学食堂</span></div>
                <div class="last">
                    <div class="left"><img src="@assets/images/menu.jpg"/></div>
                    <div class="middle">
                        <div class="middleFirst">土豆烧牛肉-盖码饭套餐</div>
                        <div class="middleSecond">x1</div>
                    </div>
                    <div class="right">￥16.00</div>
                </div>
            </div>
            <div class="price">16.00</div>
            <div class="true">实付 ￥16.00</div>
            <div class="myOrder">
                <div class="title">订单信息</div>
                <div class="no">
                    <div>订单编号</div>
                    <div>152461251454441564.215</div>
                </div>
                 <div class="date" v-if="status != 2">
                    <div>下单时间</div>
                    <div>2020/11/11  20:15</div>
                </div>
                 <div class="points" v-if="status != 2">
                    <div>积分情况</div>
                    <div>获得16点积分</div>
                </div>
                <div class="payInfo" v-if="status === 2">
                    <van-button class="cancelBtn" @click="cancel">取消订单</van-button>
                    <van-button class="payBtn" @click="pay">付款</van-button>
                </div>
            </div>
        </div>
        <PayPassword v-if="payFlag" v-on:closeDialog="toggleDialog"/>
        <van-dialog v-model="show" title="取消原因" class="cancelReasonDialog" :show-confirm-button="false">
            <template slot="default">
                <van-radio-group class="commonRadioGroup" v-model="radio" direction="horizontal">
                    <van-radio name="1">不喜欢</van-radio>
                    <van-radio name="2">想换菜品</van-radio>
                    <van-radio name="3">其他</van-radio>
                </van-radio-group>
                <div class="comment">
                    <van-field
                        class="commonTextarea"
                        v-model="reason"
                        type="textarea"
                        />
                </div>
                <div class="btns">
                    <van-button class="cancelBtn" @click="cancelModule">确认取消</van-button>
                    <van-button class="noBtn" @click="cancelModule">暂不取消</van-button>
                </div>
            </template>
        </van-dialog>
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
import PayPassword from '@/views/booking/components/payPassword/payPassword.vue';


export default {
    components: {
        Header,
        PayPassword
    },
    data() {
        return {
            status: 0,
            payFlag: false,
            show: false,
            radio: 1,
            reason: ''
        };
    },
    computed: {},
    mounted(){
       this.initData();
    },
    methods: {
        ...mapMutations({

        }),
        back() {
            this.$router.push({name: 'myOrders'});
        },
        // 初始化数据
        initData() {
            this.status = this.$route.params.status;
        },
        // 跳转到评价
        toEvaluation() {
            this.$router.push({name: 'evaluation'});
        },
        // 取消订单
        cancel(){
            this.show = true;
        },
        // 关闭取消原因窗口
        cancelModule(){
            this.show = false;
            this.$router.push({name: 'status'});
        },
        // 付款
        pay(){
            this.toggleDialog(true);
        },
        // 关闭弹窗
        toggleDialog(val) {
            this.payFlag = val;
        }
    }
};
</script>
<style lang="scss" scoped>
.orderDetail{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
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
            padding: 0 55px;
            @include flex();
            flex-direction: column;
            .firstLine {
                width: 100%;
                height: 30px;
                font-size: 30px;
                line-height: 30px;
                color: #ffffff;
            }
            .secondLine {
                @extend .firstLine;
                font-size: 24px;
                margin-top: 20px;
            }
            .payBlock {
                width: 100%;
                height: 50px;
                display: inline-flex;
                justify-content: flex-end;
                .payBtn {
                    width: 124px;
                    height: 50px;
                    padding: 0;
                    font-size: 30px;
                    line-height: 50px;
                    color: white;
                    background: transparent;
                    border: solid 1px #ffffff;
                    @include rounded-corners(20px);
                }
            }
        }
    }
    .orderContent {
        width: 100%;
        min-height: calc(100% - 280px);
        background: #e3e3e3;
        @include flex();
        flex-direction: column;
        .orderInfo {
            width: calc(100% - 110px);
            padding: 0 55px;
            background: white;
            @include flex();
            flex-direction: column;
            .title {
                padding-top: 20px;
                width: 100%;
                height: 35px;
                font-size: 30px;
                color: #747474;
                .van-icon {
                    float: left;
                    font-size: 33px;
                    line-height: 35px;
                    color: #4e7fe3;
                }
            }
            .last {
                margin-top: 20px;
                width: 100%;
                display: inline-flex;
                .left {
                    width: 97px;
                    height: 97px;
                    @include rounded-corners(4px);
                    position: relative;
                    img {
                        max-width: 97px;
                        max-height: 97px;
                        @include position(absolute, 50%, auto, auto, 50%);
                        transform: translate(-50%, -50%);
                        @include rounded-corners(4px);
                    }
                }
                .middle {
                    flex: 1;
                    max-width: calc(100% - 287px);
                    padding-left: 10px;
                    @include flex();
                    flex-direction: column;
                    .middleFirst {
                        font-size: 28px;
                        height: 40px;
                        line-height: 40px;
                        color: #323234;
                    }
                    .middleSecond {
                        margin-top: 30px;
                        color: #a2a2a2;
                        font-size: 22px;
                        height: 25px;
                        line-height: 25px;
                    }
                }
                .right {
                    width: 180px;
                    text-align: right;
                    font-size: 33px;
                    color: #4f89ff;
                    height: 40px;
                    line-height: 40px;
                }
            }
        }
        .price {
            width: calc(100% - 110px);
            padding: 0 55px;
            height: 35px;
            font-size: 33px;
            line-height: 35px;
            text-align: right;
            color: #4f89ff;
            padding-top: 15px;
            background: white;
        }
        .true {
            @extend .price;
            padding-top: 25px;
            padding-bottom: 30px;
            font-size: 33px;
        }
        .myOrder {
            margin-top: 20px;
            width: calc(100% - 110px);
            padding: 0 55px;
            @include flex();
            flex-direction: column;
            background: white;
            .title {
                padding-top: 24px;
                width: 100%;
                height: 30px;
                font-size: 30px;
                color: #747474;
            }
            .no {
                padding-top: 75px;
                width: 100%;
                height: 25px;
                font-size: 24px;
                color: #747474;
                display: inline-flex;
                justify-content: space-between;
                div {
                    font-size: 24px;
                    color: #747474;
                    height: 25px;
                    line-height: 25px;
                }
            }
            .date {
                @extend .no;
                padding-top: 10px;
            }
            .points {
                @extend .date;
                padding-bottom: 55px;
            }
            .payInfo {
                width: 100%;
                margin-top: 80px;
                height: 50px;
                display: inline-flex;
                justify-content: flex-end;
                padding-bottom: 32px;
                .cancelBtn {
                    width: 158px;
                    height: 50px;
                    line-height: 50px;
                    border: solid 1px #4582ff;
                    @include rounded-corners(20px);
                    padding: 0;
                    color: #747474;
                    font-size: 30px;
                }
                .payBtn {
                    margin-left: 30px;
                    @extend .cancelBtn;
                    color: white;
                    @include linearGradient(to right, #65b0f8, #4672f6);
                }
            }
        }
    }
    ::v-deep.van-dialog {
        padding-top: 30px;
        .van-dialog__content {
            padding-top: 0 !important;
        }
    }
    .comment {
        margin: 10px auto 30px;
        width: 635px;
        height: 147px;
    }
    .btns {
        width: 100%;
        height: 50px;
        padding-bottom: 130px;
        text-align: right;
        .cancelBtn {
            width: 158px;
            height: 50px;
            line-height: 50px;
            padding: 0;
            text-align: center;
            @include rounded-corners(20px);
            border: solid 1px #4582ff;
            font-size: 30px;
            color: #747474;
        }
        .noBtn {
            @extend .cancelBtn;
            @include linearGradient(to right, #65b0f8, #4672f6);
            margin-left: 30px;
            color: #ffffff;
        }
    }
}
</style>
