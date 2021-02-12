<template>
    <div class="login">
        <div class="logoBar"></div>
        <div class="loginTop">
            <img src="@assets/images/logintop.png">
        </div>
        <div class="homeTxt">智慧食堂小程序申请</div>
        <div class="loginCenter">
            <div class="title">请填写以下信息</div>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    class="commonField"
                    name="姓名"
                    label="姓名："
                    placeholder="请输入姓名"
                    :rules="[{ required: true, message: '请填写姓名' }]"
                />
                <van-field
                    v-model="creditID"
                    class="commonField"
                    name="身份证号"
                    label="身份证号："
                    placeholder="请输入学籍号"
                    :rules="[{ required: true, message: '请输入学籍号' }]"
                />
                <div class="selectField">
                    <van-field
                        v-model="password"
                        class="commonField"
                        name="选择食堂"
                        label="选择食堂："
                        placeholder="孚谷第一食堂"
                        :rules="[{ required: true, message: '请选择食堂' }]"
                    />
                    <div class="mask">
                        <van-icon name="arrow-down" color="#000000" />
                    </div>
                </div>
                <div class="btns">
                    <van-button>取消</van-button>
                    <van-button  class="purpleBtn">允许</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";

export default {
    data() {
        return {
            username: "",
            creditID: ""
        };
    },
    computed: {},

    methods: {
        ...mapMutations({

        }),
        login() {

        },
        showPassword() {
          
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    padding-top: 50px;
    .logoBar {
        width: 100%;
        height: 96px;
        background: url(../../assets/images/logo.png) center center no-repeat;
        background-size: contain;
    }
    .loginTop {
        width: 100%;
        height: 500px;
        position: relative;
        img {
           @include position(absolute, 50%, auto, auto, 50%);
           transform: translate(-50%, -50%);
        }
    }
    .homeTxt {
        width: 100%;
        font-size: 18px;
        color: black;
        text-align: center;
        height: 20px;
        line-height: 20px;
    }
    .loginCenter {
        margin-top: 40px;
        width: 100%;
        height: 500px;
        background: url(../../assets/images/loginbg.png) center top no-repeat;
        background-size: cover;
        .title {
            padding-top: 100px;
            width: 100%;
            height: 30px;
            text-align: center;
            font-size: 16px;
        }
        .van-form {
            margin-top: 20px;
        }
        .btns {
            width: 100%;
            text-align: center;
            .van-button {
                border: 0;
                @include rounded-corners(5px);
            }
            .van-button.purpleBtn {
                margin-left: 20px;
                background: purple;
                color: white;
            }
        }
    }
}
</style>
