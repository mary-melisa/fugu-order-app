 <template>
 <!-- 左滑删除组件 -->
    <div class="delete">
        <div class="slider-item">
            <div
                class="content"
                @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
                :style="deleteSlider"
            >
                <!-- 插槽中放具体项目中需要内容-->
                <slot></slot>
            </div>
            <div class="remove" ref="remove" @click.prevent="deleteItem(index)">删除</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: Number
    },
    data() {
        return {
            startX: 0, //触摸位置
            endX: 0, //结束位置
            moveX: 0, //滑动时的位置
            disX: 0, //移动距离
            deleteSlider: "" //滑动时的效果,使用v-bind:style="deleteSlider"
        };
    },
    methods: {
        touchStart(ev) {
            ev = ev || event;
            //this.restSlide();
            //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
            if (ev.touches.length == 1) {
                // 记录开始位置
                this.startX = ev.touches[0].clientX;
            }
        },
        touchMove(ev) {
            ev = ev || event;
            //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
            let wd = this.$refs.remove.offsetWidth;
            if (ev.touches.length == 1) {
                // 滑动时距离浏览器左侧实时距离
                this.moveX = ev.touches[0].clientX;
                //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
                this.disX = this.startX - this.moveX;
                //console.log(this.disX);
                // 如果是向右滑动或者不滑动，不改变滑块的位置
                if (this.disX < 0 || this.disX == 0) {
                    this.deleteSlider = "transform:translateX(0px)";
                    // 大于0，表示左滑了，此时滑块开始滑动
                } else if (this.disX > wd / 8) {
                    //具体滑动距离我取的是 手指偏移距离*5。
                    this.deleteSlider = "transform:translateX(-" + wd + "px)";
                }
            }
        },
        touchEnd(ev) {
            ev = ev || event;
            let wd = this.$refs.remove.offsetWidth;
            if (ev.changedTouches.length == 1) {
                let endX = ev.changedTouches[0].clientX;
                this.disX = this.startX - endX;
                //console.log(this.disX);
                //如果距离小于删除按钮一半,强行回到起点
                if (this.disX * 5 < wd / 2) {
                    this.deleteSlider = "transform:translateX(0px)";
                } else {
                    //大于一半 滑动到最大值
                    this.deleteSlider = "transform:translateX(-" + wd + "px)";
                }
            }
        },
        deleteItem: function(index) {
            this.$emit("deleteItem", index);
            this.deleteSlider = "transform:translateX(0" + "rem)";
        }
    }
};
</script>

<style scoped lang="scss" scoped>
.slider-item {
    width: 100%;
    height: 200px;
    position: relative;
    user-select: none;
    .content {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: $white;
        z-index: 100;
        //设置过渡动画
        transition: 0.3s;
    }
    .remove {
        position: absolute;
        width: 115px;
        height: 198px;
        background: $red;
        right: 0;
        top: 1px;
        color: $white;
        text-align: center;
        font-size: 22px;
        line-height: 200px;
    }
}
</style>