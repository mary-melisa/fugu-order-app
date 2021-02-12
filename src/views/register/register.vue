<template>
    <div class="register">
        <div class="logoBar"><div class="logo"></div></div>
        <div class="loginCenter">
            <van-tabs class="commonTabs" v-model="activeType">
                <!-- <van-tab title="会员" name="vip">
                    <van-form :ref="regiterForm" validate-first @failed="onFailed" @submit="onSubmit">
                        <div class="fieldTitle">姓名<span class="red">*</span></div>
                        <van-field
                            v-model="regiterForm.userName"
                            class="commonField"
                            name="姓名"
                            placeholder="请输入姓名"
                            :rules="[{ required: true, message: '请填写姓名' }]"
                        />
                         <div class="fieldTitle">性别</div>
                         <div class="selectField" @click="selectSex">
                            <van-field
                                v-model="sex"
                                class="commonField"
                                name="性别"
                                placeholder="请选择性别"
                                :rules="[{ required: true, message: '请选择性别' }]"
                            />
                            <div class="mask">
                                <van-icon name="arrow-down" color="#000000" />
                            </div>
                        </div>
                         <div class="fieldTitle">手机号码<span class="red">*</span></div>
                        <van-field
                            v-model="regiterForm.mobile"
                            type="number"
                            class="commonField"
                            name="手机号码"
                            placeholder="请输入手机号码"
                            maxlength="11"
                            @blur="validatorMobile"
                             :rules="[{ required: true, message: '请输入手机号码' }]"
                        />
                        <div class="fieldTitle">验证码<span class="red">*</span></div>
                        <div class="codeBar">
                            <van-field
                                v-model="regiterForm.verCode"
                                class="commonField codeField"
                                name="验证码"
                                placeholder="请输入验证码"
                                :rules="[{ required: true, message: '请输入验证码' }]"
                            />
                            <a class="getCode" @click="getCode"  v-show="!isCountDown">获取验证码</a>
                            <van-count-down class="getCode" v-show="isCountDown" ref="countDown" :time="countDown" format="ss 秒后获取" @finish="finishDown" :auto-start="false" />
                        </div>
                        <div class="btns">
                            <van-button  class="nextBtn" native-type="submit">下一步</van-button>
                        </div>
                    </van-form>
                </van-tab> -->
                <van-tab name="student">
                    <van-form :ref="loginForm" @failed="onFailed" @submit="onLogin">
                        <div class="fieldTitle">姓名<span class="red">*</span></div>
                        <van-field
                            v-model="loginForm.userName"
                            class="commonField"
                            name="姓名"
                            placeholder="请输入姓名"
                            :rules="[{ required: true, message: '请填写姓名' }]"
                        />
                         <div class="fieldTitle">身份证号<span class="red">*</span></div>
                        <van-field
                            v-model="loginForm.userPwd"
                            class="commonField"
                            name="身份证号"
                            placeholder="请输入身份证号"
                            @blur="checkCredit"
                            maxlength="18"
                            :rules="[{ required: true, message: '请填写身份证号' }]"
                        />
                         <!-- <div class="fieldTitle">性别</div> -->
                         <!-- <div class="selectField" @click="selectSex">
                            <van-field
                                v-model="sex"
                                class="commonField"
                                name="性别"
                                placeholder="请选择性别"
                                :rules="[{ required: true, message: '请选择性别' }]"
                            />
                            <div class="mask">
                                <van-icon name="arrow-down" color="#000000" />
                            </div>
                        </div> -->
                        <div class="btns">
                            <van-button  class="nextBtn" native-type="submit">登录</van-button>
                        </div>
                    </van-form>
                </van-tab>
            </van-tabs>
        </div>
        <!-- <van-picker
            title="选择性别"
            class="commonPicker"
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="onCancel"
            @change="onChange"
            :default-index="1"
            v-if="showPicker"
        /> -->
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { Notify } from 'vant';
// import loadingMixin from "@/components/mixin/loadingMixin";
import utils from "@/utils";
import { Toast } from "vant";
import axios from 'axios';
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
export default {
    // mixins: [loadingMixin], 
    data() {
        return {
            activeType: "student",
            sex: '',
            regiterForm: {
                userName: '',
                gender: '',
                mobile: '',
                verCode: ''
            },
            // 学生登录
            loginForm: {
                userName: '余老板',
                userPwd: '430181199710120102',
                type: 1
            },
            columns: ['男', '女'],
            showPicker: false,
            countDown: 60000,    // 短信发送时间间隔
            isCountDown: false, // 是否正在倒计时
        };
    },
    computed: {},
    mounted(){
        this.$loading.hide();
    },
    methods: {
        ...mapMutations({

        }),
         // 倒计时完成
        finishDown(){
            this.$refs.countDown.reset();
            this.isCountDown = false;
        },
        selectSex() {
            this.showPicker = true;
        },
        onConfirm(value) {
            this.changeSex(value);
            this.showPicker = false;
        },
        onChange(picker, value, index) {
           this.changeSex(value);
        },
        changeSex(value){
            if(value === '男') {
                this.regiterForm.gender = '1';
                this.sex = '男';
            }else if(value === '女'){
                this.regiterForm.gender = '0';
                this.sex = '女';
            }
        },
        onCancel() {
             this.showPicker = false;
        },
        // 验证手机号码
        validatorMobile() {
            const partten = /^1[3|4|5|7|8|9][0-9]{9}$/.test(this.regiterForm.mobile);
            if(!partten) {
                Notify({ type: 'warning', message: '请输入正确的手机号码' });
            }
            return partten;
        },
        // 验证身份证号码
        checkCredit() {
            const partten = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.loginForm.userPwd);
            if(!partten) {
                Notify({ type: 'warning', message: '请输入正确的身份证号码' });
            }
            return partten;
        },
        onFailed(errorInfo) {
            console.log('failed', errorInfo);
        },
        // 获取验证码
        getCode() {
            if(this.validatorMobile) {
                const mobile = this.regiterForm.mobile;
                let uploadUrl = window.urlPrev1 + 'api/member/sendmsg?mobile=' + mobile;
                axios({ method: "post", url: uploadUrl })
                    .then((rsp)=>{
                        // this.$loading.hide();
                        if(rsp.data.status === 1){
                            this.$refs.countDown.start();
                            this.isCountDown = true;
                        }
                    })
                    .catch((rsp)=>{
                        
                    });
            }
        },
        // 注册
        onSubmit() {
            // SessionUtil.setItem('userInfo', {});
            // let uploadUrl = window.urlPrev1 + 'api/member/regmember';
            //  this.$loading.open('注册中...', true)
            // axios({ method: "post", url: uploadUrl, data: this.regiterForm })
            //     .then((rsp)=>{
            //         this.$loading.hide();
            //         if(rsp.data.status === 1){
            //         }else {
            //             Notify({ type: 'error', message: rsp.data.message });
            //         }
            //     })
            //     .catch((rsp)=>{
            //         this.$loading.hide();
            //     });
            this.$router.push({path: '/setPassword'});
        },
        // 学生登录
        onLogin() {
            SessionUtil.setItem('userInfo', {});
            if(!this.checkCredit()) {
                return false;
            }
            let uploadUrl = window.urlPrev1 + 'api/member/momberlogin';
             this.$loading.open('登录中...', true)
            axios({ method: "post", url: uploadUrl, data: this.loginForm })
                .then((rsp)=>{
                    this.$loading.hide();
                    if(rsp.data.status === 1){
                         SessionUtil.setItem('userInfo', rsp.data.result);
                         console.log(SessionUtil.getItem('userInfo'));
                         this.$router.push({path: '/faceRecog'});
                    }else {
                        Notify({ type: 'error', message: rsp.data.message });
                    }
                })
                .catch((rsp)=>{
                    this.$loading.hide();
                });
            // this.$router.push({path: '/faceRecog'});
        },
        showPassword() {
          
        }
    }
};
</script>
<style lang="scss" scoped>
.register {
    width: 100%;
    height: 1624px;
    background: url(../../assets/images/loginbg.png) center center no-repeat;
    background-size: cover;
    @include flex();
    flex-direction: column;
    .logoBar {
        margin-top: 200px;
        width: 100%;
        height: 98px;
        text-align: center;
        .logo {
            width: 381px;
            height: 98px;
            margin: 0 auto;
            background: url(../../assets/images/logo.png) center center no-repeat;
            background-size: cover;
        }
    }
    .loginCenter {
       width: calc(100% - 120px);
       padding: 0 60px;
       margin-top: 150px;
       ::v-deep.commonTabs.van-tabs {
           .van-tabs__wrap {
               display: none;
           }
           .van-tabs__content {
               @include rounded-corners(20px);
           }
       }
        .van-form {
            .fieldTitle {
                width: calc(100% - 40px);
                height: 25px;
                padding: 15px 20px;
                font-size: 24px;
                color: #547395;
                .red {
                    font-size: 24px;
                    color: red;
                }
            }
            .nextBtn {
                margin-top: 90px;
                width: 100%;
                height: 70px;
                @include rounded-corners(35px);
                @include linearGradient(to bottom, #55baf5, #1d9ef0);
                .van-button__text {
                    color: white;
                    font-size: 30px;
                }
            }
            .codeBar {
                width: 100%;
                height: 60px;
                position: relative;
                .getCode {
                    display: block;
                    width: 130px;
                    height: 30px;
                    line-height: 30px;
                    text-align: right;
                    @include position(absolute, auto, 0, 0, auto);
                    color: #465f78;
                    font-size: 20px;
                    cursor: pointer;
                }
                .van-count-down {
                    @extend .getCode;
                    color: red;
                }
            }
        }
    }
}
</style>
