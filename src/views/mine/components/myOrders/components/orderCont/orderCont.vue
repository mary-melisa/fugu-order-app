<template>
    <div class="orderCont">
        <div class="title">
            <div class="left"><van-icon name="shop-o"/><span class="ml15">明德中学食堂</span></div>
            <div class="right">{{ formatStatus(status) }}</div>
        </div>
        <div class="orderItem">
            <div class="first" @click="toDetail"><img src="@assets/images/menu.jpg"/></div>
            <div class="middle"  @click="toDetail">
                <div class="line1">土豆烧牛肉-盖码饭套餐</div>
                <div class="line2" v-if="status === 0">生效时间：2020/11/16  12:00-13:00</div>
                <div  :class="status === 0 ? 'line3' : 'line2'">下单时间：2020/11/11  20:15</div>
            </div>
            <div class="last">
                <div class="line1"  @click="toDetail">￥16.00</div>
                <div class="line2" @click="cancelOrder">取消订单</div>
            </div>
        </div>
        <div class="orderItem">
            <div class="first" @click="toDetail"><img src="@assets/images/menu.jpg"/></div>
            <div class="middle" @click="toDetail">
                <div class="line1">土豆烧牛肉-盖码饭套餐</div>
                <div class="line2" v-if="status === 0">生效时间：2020/11/16  12:00-13:00</div>
                <div :class="status === 0 ? 'line3' : 'line2'">下单时间：2020/11/11  20:15</div>
            </div>
            <div class="last">
                <div class="line1" @click="toDetail">￥16.00</div>
                <div class="line2" @click="cancelOrder">取消订单</div>
            </div>
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

export default {
    props: ['status'],
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
        cancelOrder() {
            this.$router.push({name: 'cancelOrder'});
        },
        // 订单详情
        toDetail() {
            this.$router.push({name: 'orderDetail', params: {status: this.status}});
        },
        // 状态格式化
        formatStatus(status) {
            if(status === 0) {
                return '未使用';
            }else if(status === 1) {
                return '已使用';
            }else if(status === 2) {
                return '待付款';
            }else if(status === 3) {
                return '已取消';
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.orderCont{
    width: 100%;
    @include flex();
    flex-direction: column;
    .title {
        width: 100%;
        height: 35px;
        display: inline-flex;
        justify-content: space-between;
        div {
            height: 35px;
            align-self: center;
            align-items: center;
        }
        .left {
            flex: 1;
            max-width: calc(100% - 30px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            .van-icon {
                float: left;
                font-size: 35px;
                line-height: 35px;
                color: #4e7fe3;
            }
            span {
                float: left;
                color: #747474;
                font-size: 30px;
                line-height: 35px;
            }
        }
        .right {
            width: 80px;
            text-align: right;
            font-size: 22px;
            line-height: 35px;
            color: #a2a2a2;
        }
    }
    .orderItem {
        width: 100%;
        height: 96px;
        margin-top: 20px;
        display: inline-flex;
        padding-bottom: 40px;
        .first {
            width: 96px;
            height: 96px;
            position: relative;
            img {
                max-width: 96px;
                max-height: 96px;
                @include position(absolute, 50%, auto, auto, 50%);
                transform: translate(-50%, -50%);
                @include rounded-corners(4px);
            }
        }
        .middle {
            flex: 1;
            padding-left: 10px;
            max-width: calc(100% - 286px);
            .line1 {
                font-size: 28px;
                color: #323234;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .line2 {
                margin-top: 15px;
                white-space: nowrap;
                font-size: 22px;
                color: #a2a2a2;
            }
            .line3 {
                @extend .line2;
                margin-top: 5px;
            }
        }
        .last {
            width: 180px;
            height: 96px;
            @include flex();
            flex-direction: column;
            .line1 {
                width: 100%;
                height: 33px;
                line-height: 33px;
                font-size: 33px;
                text-align: right;
                color: #4f89ff;
            }
            .line2 {
                margin-top: 23px;
                align-self: flex-end;
                align-items: flex-end;
                width: 114px;
                height: 40px;
                line-height: 40px;
                font-size: 24px;
                text-align: center;
                color: #a2a2a2;
                border: solid 1px #7f7f7f;
                @include rounded-corners(20px);
            }
        }
    }
    .orderItem+.orderItem {
        margin-top: 0;
    }
}
</style>
