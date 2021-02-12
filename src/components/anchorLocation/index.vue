<template>
    <!-- 锚点定位组件 -->
    <div class="dutchAuctionDetail">
        <div id="headerBox" class="headerBox">
            <div class="leftarrow" @click="onClickLeft">
                <van-icon name="arrow-left"></van-icon>
            </div>
            <van-tabs class="cauctionTabs" v-model="active" @change="onTabChange">
                <van-tab v-for="(item,index) in tabData" :title="item.title" :key="index"></van-tab>
            </van-tabs>
        </div>
        <!-- 插槽中放具体项目中需要内容-->
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["tabData"],
    data() {
        return {
            active: 0
        };
    },
    components: {},
    mounted() {
        //监听滚动条
        window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        onClickLeft() {
            this.$emit("goBack");
        },
        //tab栏切换
        onTabChange(index, title) {
            let refName = this.tabData[index].name;
            let dom = document.getElementById(refName);
            if(dom){
                let offsetTop = dom.offsetTop - 95;
                window.scrollTo(0, offsetTop);
            }
        },
        //监听执行
        handleScroll(e) {
            var scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            //头部栏位置超出第一张图片时给白死背景
            if (scrollTop >= 560) {
                document.getElementById("headerBox").style.backgroundColor =
                    "white";
            } else {
                document.getElementById("headerBox").style.background =
                    "rgba(255, 255, 255, 0.6)";
            }
            //console.log(scrollTop);
        }
    },
    //销毁移除掉监听
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll, true);
    }
};
</script>

<style scoped lang="scss" scoped>
.headerBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 95px;
    text-align: left;
    overflow: hidden;
    z-index: 10;
    @include flex();
    background: $shadowbg;
    .leftarrow {
        position: fixed;
        top: 0;
        left: 24px;
        width: 40px;
        height: 95px;
        overflow: hidden;
        z-index: 100;
        .van-icon {
            font-size: 40px;
            line-height: 95px;
            color: $black;
        }
    }
}
</style>