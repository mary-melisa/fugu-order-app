<template>
    <div class="cancelOrder">
        <Header :title="'取消订单'" :backFlag='true' v-on:goBack="back" :bgColor="'bgBlue'" :fontColor="'white'"></Header>
        <div class="goodsItem">
            <div class="name"><van-icon name="shop-o"/><span class="ml15">明德中学食堂</span></div>
            <div class="goods">
                <div class="first"><img src="@assets/images/menu.jpg"/></div>
                <div class="last">
                    <div class="line1">
                        <div class="left">土豆烧牛肉-盖码饭套餐</div>
                        <div class="right">￥16.00</div>
                    </div>
                    <div class="line2">生效时间：2020/11/16  12:00-13:00</div>
                    <div class="line3">下单时间：2020/11/11  20:15</div>
                </div>
            </div>
        </div>
        <div class="reason">
            <div class="title">取消原因</div>
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
        </div>
        <div class="confrimBlock">
            <van-button class="confrimBtn">提交</van-button>
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
            radio: '',
            reason: ''
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),
        back() {
            this.$router.push({name: 'myOrders'});
        }
    }
};
</script>
<style lang="scss" scoped>
.cancelOrder{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    background: #e3e3e3;
    .goodsItem {
        width: calc(100% - 100px);
        padding: 105px 50px 0;
        background: white;
        @include flex();
        flex-direction: column;
        .name {
            align-self: center;
            align-items: center;
            padding-top: 20px;
            width: 100%;
            height: 35px;
            line-height: 35px;
            display: inline-flex;
            .van-icon {
                font-size: 35px;
                color: #4e7fe3;
                line-height: 35px;
            }
            span {
                height: 35px;
                line-height: 35px;
                font-size: 30px;
                color: #747474;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
        .goods {
            width: 100%;
            height: 97px;
            margin-top: 20px;
            padding-bottom: 25px;
            display: inline-flex;
            .first {
                width: 97px;
                height: 97px;
                @include rounded-corners(4px);
                position: relative;
                img {
                    max-width: 97px;
                    max-height: 97px;
                    @include rounded-corners(4px);
                    @include position(absolute, 50%, auto, auto, 50%);
                    transform: translate(-50%, -50%);
                }
            }
            .last {
                flex: 1;
                padding-left: 10px;
                max-width: calc(100% - 107px);
                .line1 {
                    width: 100%;
                    height: 33px;
                    @include flex();
                    justify-content: space-between;
                    div {
                        align-self: center;
                        align-items: center;
                    }
                    .left {
                        font-size: 28px;
                        color: #323234;
                    }
                    .right {
                        font-size: 33px;
                        color: #4f89ff;
                    }
                }
                .line2 {
                    margin-top: 10px;
                    width: 100%;
                    height: 25px;
                    line-height: 25px;
                    font-size: 22px;
                    color: #a2a2a2;
                }
                .line3 {
                    @extend .line2;
                    margin-top: 3px;
                }
            }
        }
    }
    .reason {
        width: calc(100% - 110px);
        @include flex();
        flex-direction: column;
        margin-top: 25px;
        padding: 24px 55px 0;
        background: white;
        .title {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 30px;
            color: #747474;
            padding-top: 10px;
        }
        .comment {
            margin: 10px auto 30px;
            width: 635px;
            height: 147px;
        }
    }
    .confrimBlock {
        margin-top: 200px;
    }
}
</style>
