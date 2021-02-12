// 处理刷新页面时，无数据显示loading效果
// 注意：列表数据初始化的方法统一命名为 initData
import * as configTypes from "@/constants/config";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            loading: true,
            scrollY:0
        }
    },
    computed: {
        ...mapGetters({
            getLoadComplete: configTypes.loadComplete
        })
    },    
    mounted() {
        this.$loading.open('拼命加载中...');
        if (this.getLoadComplete) {
            //如果是缓存页面,逻辑走activated钩子
            if(this.$route.meta.keepAlive){
                //第一次进入缓存页需初始化数据,之所这样写因为下一步会走入activated()中
                if(this.activated) this.initData && this.initData();
            }else{
                this.initData && this.initData();
            }
        }
    },
    //进入缓存页面
    activated(){
        if (this.getLoadComplete) {
            if(this.activated) this.activated();
            else this.initData && this.initData();
        }
    },
    //离开缓存页面
    deactivated () {
        if(this.unSubscribe)this.unSubscribe();
    },
    //记录离开时的位置
    beforeRouteLeave (to, from, next) {
        //保存滚动条元素div的scrollTop值
        this.scrollY = document.documentElement.scrollTop;
        next()
    },
    // 为div元素重新设置保存的scrollTop值
    beforeRouteEnter (to, from, next) {
        next(vm => {
            document.documentElement.scrollTop = vm.scrollY; // vm = this
        })
    },
    watch: {
        getLoadComplete (val) {
            if (val) this.initData && this.initData();
        }
    }
}