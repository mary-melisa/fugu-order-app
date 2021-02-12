<template>
    <div class="mine">
        <div class="topBar">
            <div class="userInfo">
                <div class="photo" @click="showPicker"><img src="@assets/images/photo.png"/></div>
                <div class="right">
                    <div class="name">张三</div>
                    <div class="telno">183******54</div>
                    <a class="rightArrow"><van-icon name="arrow"/></a>
                </div>
            </div>
            <div class="account">
                <div>
                    <van-icon name="balance-o" />
                    <div class="txt">账户余额</div>
                    <div class="front">896.</div>
                    <div class="after">26</div>
                </div>
                <div class="pay" @click="toRecharge">充值</div>
            </div>
        </div>
        <div class="items">
            <div class="itemBlock" @click="toTrayBinding">
                <div class="left">
                    <van-icon name="desktop-o" />
                    <div class="txt">托盘绑定</div>
                </div>
                <div class="right">
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="itemBlock" @click="toBilling">
                <div class="left">
                     <van-icon name="balance-o" />
                    <div class="txt">账单明细</div>
                </div>
                <div class="right">
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="itemBlock" @click="toMyOrders">
                <div class="left">
                     <van-icon name="friends-o" />
                    <div class="txt">我的订单</div>
                </div>
                <div class="right">
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="itemBlock">
                <div class="left">
                    <van-icon name="info-o" />
                    <div class="txt">我的积分</div>
                </div>
                <div class="right">
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="itemBlock" @click="toFeedback">
                <div class="left">
                    <van-icon name="chat-o" />
                    <div class="txt">意见反馈</div>
                </div>
                <div class="right">
                    <van-icon name="arrow"/>
                </div>
            </div>
        </div>
        <BottomTabbar/>
        <van-picker
        show-toolbar
        v-if="pickerFlag"
        class="selectPicker"
        @confirm="onConfirm"
        @cancel="onCancel"
        :columns="columns"
        @change="onChange"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify, Dialog } from 'vant';
import axios from 'axios';
import BottomTabbar from '@/views/tabbar';

export default {
    components: {
        BottomTabbar
    },
    data() {
        return {
            tabActive: 'mine',
            columns: ['拍照/更换人脸识别头像', '取消账号绑定', '关闭'],
            pickerFlag: false
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),
        showPicker() {
            this.pickerFlag = true;
        },  
        // 跳转到我的订单
        toMyOrders() {
            this.$router.push({name: 'myOrders'});
        },
        // 跳转到充值
        toRecharge() {
            this.$router.push({name: 'recharge'});
        },
        // 跳转到意见反馈
        toFeedback() {
            this.$router.push({name: 'feedback'});
        },
        // picker确认
        onConfirm(value, index) {
            this.submit(index);
        },
        // picker取消
        onCancel(picker, value, index) {
             this.pickerFlag = false;
        },
        // picker change
        onChange(picker, value, index) {
            this.submit(index);
        },
        submit(index){
            if(index === 0) {
                 this.pickerFlag = false;
                this.$router.push({name: 'faceAuthor'});
            }else if(index === 1) {
                Dialog.confirm({
                    className: 'commonDialog',
                    title: '提示',
                    message: '确定解绑吗？',
                })
                .then(() => {
                    // on confirm
                })
                .catch(() => {
                    // on cancel
                });
            }
             this.pickerFlag = false;
        },
        // 托盘绑定
        toTrayBinding() {
            this.$router.push({name: 'trayBinding'})
        },
        // 账单明细
        toBilling() {
            this.$router.push({name: 'billing'});
        }
    }
};
</script>
<style lang="scss" scoped>
.mine{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .topBar {
        width: 100%;
        height: 260px;
        padding-bottom: 20px;
        background: url(../../assets/images/minebg.png) top center no-repeat;
        background-size: cover;
        @include flex();
        position: relative;
        .userInfo {
            align-self: center;
            align-items: center;
            width: calc(100% - 104px);
            padding: 0 76px 0 28px;
            @include flex();
            justify-content: space-between;
            .photo {
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
            .right {
                flex: 1;
                padding-left: 22px;
                max-width: calc(100% - 136px);
                @include flex();
                flex-direction: column;
                position: relative;
                .name {
                    width: calc(100% - 35px);
                    height: 35px;
                    line-height: 35px;
                    font-size: 34px;
                    color: #ffffff;
                }
                .telno {
                    margin-top: 20px;
                    width: calc(100% - 35px);
                    height: 25px;
                    font-size: 22px;
                    line-height: 25px;
                    color: #ffffff;
                }
                .rightArrow {
                    display: block;
                    width: 35px;
                    height: 35px;
                    @include position(absolute, 50%, 0, auto, auto);
                    transform: translateY(-50%);
                    .van-icon {
                        float: right;
                        font-size: 35px;
                        color: white;
                    }
                }
            }
        }
        .account {
            @include position(absolute, 260px, auto, auto, 50%);
            transform: translateX(-50%);
            width: 649px;
            height: 82px;
            padding-left: 44px;
            padding-right: 18px;
            background-color: #ffffff;
            box-shadow: 0px 0px 24px 0px 
                rgba(101, 176, 249, 0.41);
            @include rounded-corners(20px);
            display: inline-flex;
            justify-content: space-between;
            div {
                display: inline-flex;
                .van-icon {
                    color: #ffd665;
                    font-size: 40px;
                    line-height: 82px;
                }
                .txt {
                    margin-left: 10px;
                    font-size: 24px;
                    color: #747474;
                    height: 82px;
                    line-height: 82px;
                }
                .front {
                    margin-left: 120px;
                    font-size: 40px;
                    color: #ff9a2a;
                    line-height: 82px;
                }
                .after {
                    font-size: 24px;
                    color: #ff9a2a;
                    line-height: 92px;
                }
            }
            .pay {
                align-self: center;
                align-items: center;
                justify-content: center;
                width: 92px;
                height: 50px;
                line-height: 50px;
                font-size: 26px;
                color: white;
                text-align: center;
                background-image: linear-gradient(90deg, 
                    #ffdf6e 0%, 
                    #ff9625 100%), 
                linear-gradient(-50deg, 
                    #3265ff 0%, 
                    #579aff 100%);
                @include rounded-corners(25px);
            }
        }
    }
    .items {
        padding-top: 97px;
        width: 100%;
        height: calc(100% - 482px);
        background: white;
        @include flex();
        flex-direction: column;
        .itemBlock {
            width: calc(100% - 116px);
            padding-left: 60px;
            padding-right: 56px;
            height: 80px;
            line-height: 80px;
            display: inline-flex;
            justify-content: space-between;
            .left {
                align-self: center;
                align-items: center;
                display: inline-flex;
                .van-icon {
                    font-size: 35px;
                    line-height: 80px;
                    color: #666666;
                }
                .txt {
                    margin-left: 15px;
                    font-size: 27px;
                    color: #666666;
                    line-height: 80px;
                }
            }
            .right {
                .van-icon {
                    font-size: 28px;
                    color: #b9b9b9;
                    line-height: 80px;
                }
            }
        }
    }
}
</style>
