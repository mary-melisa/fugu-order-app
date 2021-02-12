<template>
    <div>
        <transition>
            <router-view></router-view>
        </transition>
        <van-tabbar class="bottom" v-model="parentActive" @change="onChageTab" route>
            <van-tabbar-item name="booking" to="/booking" icon="sign">预订菜品</van-tabbar-item>
            <van-tabbar-item name="nutrition" to="/nutrition" icon="points">营养分析</van-tabbar-item>
            <van-tabbar-item name="mine" to="/mine" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            parentActive: 'booking'
        };
    },
    mounted() {
        //Tabbar的选中功能在有路由嵌套时存在bug。这里用路由参数来判断。
        let url = window.location.pathname;
        var reg = /([^/]+)/g;
        let ary = [];
        url.replace(reg, function($1, $2) {
            ary.push($2);
        });
        this.active = `/${ary[0]}`;
        console.log(this.parentActive)
    },
    methods: {
        onChageTab(val) {
            this.$router.push({ path: val });
        }
    }
};
</script>

<style lang="scss">
// 底部选项卡
.bottom.van-tabbar {
    height: 105px;
    @include boxShadow($white, $shadow, 0, 0, 10px);
    border-top: 1px solid $bordergrey;
    .van-tabbar-item {
        .van-tabbar-item__icon {
            .van-icon {
                font-size: 45px;
                color: #b2bcc7;
            }
        }
        .van-tabbar-item__text {
            font-size: 24px;
            line-height: 30px;
            color: #b2bcc7;
        }
    }
    .van-tabbar-item.van-tabbar-item--active {
        .van-tabbar-item__icon {
            .van-icon {
                color: #2f9bfe;
            }
        }
        .van-tabbar-item__text {
            color: #2f9bfe;
            font-weight: normal;
        }
    }
}
</style>