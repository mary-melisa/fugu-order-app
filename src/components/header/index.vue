<template>
    <div :class="['headerBar', bgColor, fontColor, boxShadow ? 'boxShadow' : '']">
        <a v-show="backFlag" @click="onClickLeft"><van-icon name="arrow-left"></van-icon></a>
        <div :class="['title', margin30 ? 'ml30' : '']">{{title}}</div>
        <a v-show="onRightIcon" @click="onClickRight" class="rightIcon"><van-icon :name="onRightIcon"></van-icon></a>
        <a v-show="onRightTxt" @click="onClickRight" class="rightIcon">{{ rightTxt }}</a>
    </div>
</template>

<script>
// import mixin from "@/components/mixin";

export default {
    // 头部属性：'title'：标题,'backFlag'：是否显示返回键,'onRightIcon'：右侧图标名,'rightBack'：右侧回调方法,'goBack':左侧回调方法
    props:['title','backFlag','onRightIcon','rightBack','goBack', 'bgColor', 'fontColor', 'margin30', 'boxShadow', 'onRightTxt', 'rightTxt'],
    data () {
        return {
            
        }
    },
    methods: {
        onClickLeft() {
            // 只暴露方法名，具体操作在父组件的 goBack 方法中写
            this.$emit('goBack')
        },
        onClickRight() {
            this.$emit('rightBack')
        }
    }
};
</script>

<style lang="scss" scoped>
.bgBlue {
    background-color: #4582ff !important;
}
.ml30 {
    margin-left: 30px;
}
.white {
    color: white !important;
    border-bottom-color: transparent !important;
    .van-icon {
        color: white !important;
    }
    .title {
        color: white !important;
    }
}
.boxShadow {
    box-shadow: 0px 4px 20px 0px 
		rgba(174, 185, 190, 0.7);
}
.headerBar {
    text-align: left;
    height: 105px;
    line-height: 105px;
    background-color: $white;
    position: fixed;
    width: calc(100% - 60px);
    padding: 0 30px;
    z-index: 1000;
    top: 0;
    border-bottom: 1px solid $bordergrey;
    @include flex();
    .van-icon {
        font-size: 40px;
        color: $delete;
        width: 40px;
        line-height: 105px;
        z-index: 99;
    };
    .title {
        text-align: center;
        font-size: 36px;
        color: #111111;
        width: 100%;
        flex: 1;
        max-width: calc(100% - 70px);
    }
    .rightIcon{
        position: fixed;
        right: 30px; 
        font-size: 30px;
        color: white;
    }
}
</style>