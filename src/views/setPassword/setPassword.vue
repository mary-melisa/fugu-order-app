<template>
    <div class="setPassword">
        <Header :title="'设置密码'" :backFlag='true' v-on:goBack="back"></Header>
        <div class="setText" v-if="pwdFlag === 1">请设置六位数的支付密码</div>
        <!-- 密码输入框 -->
        <van-password-input
        class="passwordInput"
        v-if="pwdFlag === 1"
        :value="password"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        :length="6"
        />
        <div class="setText" v-if="pwdFlag === 2">请再次输入支付密码进行确认</div>
        <!-- 密码输入框 -->
        <van-password-input
        class="passwordInput"
        v-if="pwdFlag === 2"
        :value="repassword"
        :focused="showKeyboard2"
        @focus="showKeyboard2 = true"
        :length="6"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
        class="keyboard"
        v-model="password"
         v-if="pwdFlag === 1"
        :show="showKeyboard"
        @blur="showKeyboard = false"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
        class="keyboard"
        v-model="repassword"
         v-if="pwdFlag === 2"
        :show="showKeyboard2"
        :focused="isFocused"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import Header from '@/components/header/index.vue';
import axios from 'axios';
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';

export default {
    components: {
        Header
    },
    data() {
        return {
            password: '',
            repassword: '',
            idNumber: 0,
            showKeyboard: true,
            showKeyboard2: false,
            pwdFlag: 1, // 1代表第一次输入密码， 2代表第二次重复密码
            isFocused: false
        };
    },
    computed: {},

    methods: {
        ...mapMutations({

        }),
        // 返回上一页
        back() {
            this.$router.push({path: '/selectCateen'});
        },
        setPassword() {
            this.$loading.open('支付密码设置中...', true)
            const user = SessionUtil.getItem('userInfo');
            const obj = {
                id: user.id,
                password: this.repassword
            }
            console.log(user)
           let uploadUrl = window.urlPrev1 + 'api/member/uppayinfo';
            axios({ method: "post", url: uploadUrl, data: obj })
                .then((rsp)=>{
                    this.$loading.hide();
                    if(rsp.data.status === 1){
                        this.$router.push({name: 'passwordSuccess'})
                    }else if(rsp.message) {
                        Toast('支付密码设置失败！');
                    }
                })
                .catch((err)=>{
                    this.$loading.hide();
                    console.log(err);
                });
        }
    },
    watch: {
        password(value) {
            if (value.length === 6) {
               this.pwdFlag = 2;
               this.showKeyboard = false;
               this.repassword = '';
               this.showKeyboard2 = true;
            } else {
            }
        },
        repassword(value) {
            console.log(value,'@', this.password);
            if (value.length === 6 && value === this.password) {
               this.isFocused = false;
               this.setPassword();
            } else if (value.length === 6 && value != this.password){
                Toast({
                    message: '两次输入密码不一致，请重新输入'
                });
                this.repassword = '';
                this.isFocused = true;
            }
        },
  },
};
</script>
<style lang="scss" scoped>
.setPassword {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    .setText {
        margin-top: 435px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        color: black;
        text-align: center;
    }
    .passwordInput {
        margin: 15px auto 0;
    }
}
</style>
