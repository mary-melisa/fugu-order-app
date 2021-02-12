<template>
    <div class="recharge">
        <Header :title="'充值'" :backFlag="'true'" v-on:goBack="back" :boxShadow="'true'"></Header>
        <div class="rechargeContent">
            <div class="personCard">
                <div class="cardBlock">
                    <div class="content">
                        <div class="default">默认充值账号</div>
                        <div class="userinfo">
                            <div class="imgBar"><img src="@assets/images/photo.png"/></div>
                            <div class="right">
                                <div class="name">**玉</div>
                                <div class="mobile">183******54</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="title">充值金额</div>
            <van-grid class="amountGrid" :border="false" :column-num="3" center>
                <van-grid-item text="¥25" />
                <van-grid-item text="¥30" />
                <van-grid-item text="¥50" />
                <van-grid-item text="¥100" />
                <van-grid-item text="¥200" />
                <van-grid-item text="¥500" />
            </van-grid>
            <div class="other">
                <div class="left">其他金额</div>
                <div class="right">
                    <van-field v-model="text" class="commonField" placeholder="请输入金额" />
                </div>
            </div>
            <div class="confrimBlock">
                <van-button class="confrimBtn">确认充值</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify, Grid, GridItem } from 'vant';
import axios from 'axios';
import Header from '@/components/header/index.vue';

export default {
    components: {
        Header
    },
    data() {
        return {
            text: ''
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
            this.$router.go(-1);
        }
    }
};
</script>
<style lang="scss" scoped>
.recharge{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .rechargeContent {
        margin-top: 105px;
        width: 100%;
        min-height: calc(100% - 105px);
        background: #e3e3e3;
        @include flex();
        flex-direction: column;
        .personCard {
            margin-top: 26px;
            width: 100%;
            height: 266px;
            text-align: center;
            .cardBlock {
                margin: 0 auto;
                width: 688px;
                height: 266px;
                @include linearGradient(to right, #65b0f8, #4672f6);
                box-shadow: 0px 0px 24px 0px 
                    rgba(101, 176, 249, 0.41);
                @include rounded-corners(20px);
                .content {
                    padding: 30px;
                    width: calc(100% - 60px);
                    height: calc(100% - 60px);
                    @include flex();
                    flex-direction: column;
                    .default {
                        width: 100%;
                        height: 25px;
                        line-height: 25px;
                        color: rgba(0, 0, 0, .5);
                        text-align: right;
                        font-size: 24px;
                    }
                    .userinfo {
                        margin-top: 20px;
                        width: 100%;
                        height: 114px;
                        @include flex();
                        .imgBar {
                            width: 114px;
                            height: 114px;
                            background-color: #ffffff;
                            position: relative;
                            @include rounded-corners();
                            img {
                                max-width: 114px;
                                max-height: 114px;
                                @include position(absolute, 50%, auto, auto, 50%);
                                transform: translate(-50%, -50%);
                            }
                        }
                        .right {
                            flex: 1;
                            max-width: calc(100% - 134px);
                            padding-left: 20px;
                            padding-top: 20px;
                            @include flex();
                            flex-direction: column;
                            .name {
                                width: 100%;
                                height: 35px;
                                line-height: 35px;
                                font-size: 34px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                color: #ffffff;
                                text-align: left;
                            }
                            .mobile {
                                width: 100%;
                                height: 25px;
                                line-height: 25px;
                                margin-top: 20px;
                                font-size: 22px;
                                color: white;
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }

        .title {
            margin-top: 25px;
            width: calc(100% - 60px);
            height: 30px;
            padding: 26px 30px 40px;
            font-size: 30px;
            line-height: 30px;
            color: #000000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background: white;
            border-image-width: 0;
        }
        .amountGrid.van-grid {
            padding: 30px;
            background-color: white;
        }
        .other {
            margin-top: 18px;
            width: calc(100% - 60px);
            height: 105px;
            padding: 0 30px;
            @include flex();
            justify-content: space-between;
            background: white;
            .left {
                font-size: 30px;
                line-height: 105px;
                color: #000000;
            }
            ::v-deep.right {
                align-self: center;
                align-items: center;
                .commonField.van-field {
                    border: 0;
                    box-shadow: none;
                    .van-cell__value {
                        .van-field__body {
                            .van-field__control {
                                background-color: white;
                                text-align: right;
                                font-size: 30px;
                                color: #000000;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
