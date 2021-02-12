<template>
    <div class="status">
         <div class="successLogo"><img src="@assets/images/Shape.png"/></div>
         <div class="successTxt">取消成功！</div>
         <div class="tip">相关金额将会在三个工作日内返回到您的账户</div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify } from 'vant';
import axios from 'axios';

export default {
    components: {
        
    },
    data() {
        return {
            
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),

    }
};
</script>
<style lang="scss" scoped>
.status{
    width: 100%;
    height: 1624px;
    min-height: 1624px;
    background: url(../../../../../../assets/images/passwordSuccess.jpg) center center no-repeat;
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
    .tip {
        margin-top: 35px;
        width: 100%;
        line-height: 30px;
        text-align: center;
        color: white;
        font-size: 24px;
    }
}
</style>
