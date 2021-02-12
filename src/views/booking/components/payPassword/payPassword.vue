<template>
    <div class="payPassword">
        <van-popup v-model="show" get-container="body" @click-overlay="close">
            <!-- 密码输入框 -->
            <van-password-input
            class="passwordInput"
            :value="password"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            :length="6"
            />
            <!-- 数字键盘 -->
            <!-- <van-number-keyboard
            class="keyboard"
            v-model="password"
            :show="showKeyboard"
            @blur="showKeyboard = false"
            /> -->
        </van-popup>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify, Popup } from 'vant';
import axios from 'axios';

export default {
    props: [ 'closeDialog' ],
    data() {
        return {
            show: false,
            password: '',
            showKeyboard: true
        };
    },
    computed: {},
    mounted(){
       this.show = true;
    },
    methods: {
        ...mapMutations({

        }),
        close(){
            this.$emit('closeDialog', false);
        }
    }
};
</script>
<style lang="scss" scoped>
.payPassword{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
}
</style>
