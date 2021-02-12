<template>
    <div class="passwordSuccess">
      <div class="successLogo"><img src="../../assets/images/Shape.png"/></div>
      <div class="successTxt">密码设置成功！</div>
      <div class="payBtn">
          <van-button class="rechargeBtn" @click="toRecharge">去充值</van-button>
      </div>

      <div class="personal">
          <van-button class="personalBtn" @click="toMine">个人中心</van-button>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    components: {
    },
    data() {
        return {
           
        };
    },
    computed: {},

    methods: {
        ...mapMutations({

        }),
        // 跳转到充值
        toRecharge(){
            this.$router.push({name: 'recharge'});
        },
        // 跳转到个人中心
        toMine(){
            this.$router.push({name: 'mine'});
        }
    },
};
</script>
<style lang="scss" scoped>
.passwordSuccess {
    width: 100%;
    height: 1624px;
    min-height: 1624px;
    background: url(../../assets/images/passwordSuccess.jpg) center center no-repeat;
    background-size: cover;
    .successLogo {
        width: 100%;
        padding-top: 80px;
        height: 799px;
        text-align: center;
        img {
            width: 680px;
            height: 799px;
        }
    }
    .successTxt {
        width: 100%;
        height: 60px;
        font-size: 60px;
        color: #ffffff;
        text-align: center;
    }
    .payBtn {
        margin-top: 160px;
        width: 100%;
        height: 90px;
        text-align: center;
    }
    .rechargeBtn.van-button--default.van-button--normal {
        width: 460px;
        height: 90px;
        padding: 0;
        border: 0;
        @include linearGradient(to right, #509cf5, #3471fb);
        @include rounded-corners(45px);
        font-size: 36px;
        color: white;
    }
    .personal {
        width: 100%;
        height: 90px;
        margin-top: 25px;
        text-align: center;
        .personalBtn.van-button--default.van-button--normal {
            width: 460px;
            height: 90px;
            background-color: white;
            @include rounded-corners(45px);
            @include boxShadow(rgab(44, 100, 222, .22), rgab(44, 100, 222, .22), 5px, 0, 16px);
            color: #747474;
            font-size: 36px;
        }
    }
}
</style>
