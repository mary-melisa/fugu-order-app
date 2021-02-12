<template>
    <div class="paySuccess">
         <div class="successLogo"><img src="@assets/images/Shape.png"/></div>
         <div class="successTxt">支付成功！</div>
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
.paySuccess{
    width: 100%;
    height: 1624px;
    min-height: 1624px;
    background: url(../../../../assets/images/passwordSuccess.jpg) center center no-repeat;
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
}
</style>
