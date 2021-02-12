<template>
  <div class="into_view_container">
      <div class="into_view_header">
            <div class="leftarrow" @click="goBack">
                <van-icon name="arrow-left"></van-icon>
            </div>
            <van-tabs class="cauctionTabs" v-model="active" @click="positionTab">
                <van-tab v-for="(item, index) in headerTitle" :key="index" :title="item"></van-tab>
            </van-tabs>
      </div>
      <div class="into_view_content">
          <div id="into_view_one">
              <slot name="view_one"></slot>
          </div>
          <div id="into_view_two">
              <slot name="view_two"></slot>
          </div>
          <div id="into_view_three">
              <slot name="view_three"></slot>
          </div>
          <div id="into_view_four">
              <slot name="view_four"></slot>
          </div>
          <div id="into_view_five">
              <slot name="view_five"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        goBackUrl: {
            default: '',
            type: String,
        },
        headerTitle: {
            default: [],
            type: Array
        },
    },
    data() {
        return {
            active: 0
        };
    },
    methods: {
        // 返回上一页
        goBack() {
            this.$router.push(this.goBackUrl);
        },
        // 锚点定位
        positionTab() {
            switch (this.active) {
                case 0:
                    this.goToPosition('#into_view_one')
                    break;
                case 1:
                    this.goToPosition('#into_view_two')
                    break;
                case 2:
                    this.goToPosition('#into_view_three')
                    break;
                case 3:
                    this.goToPosition('#into_view_four')
                    break;
                case 4:
                    this.goToPosition('#into_view_five')
                    break;
                default:
                    break;
            }
        },
        goToPosition(id) {
            const btn = document.querySelector(id);
            btn.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.into_view_container {
        width: 100%;
        height: auto;
        min-height: 100%;
        position: relative;
    .into_view_header {
        @include position(fixed, 0, 0, auto, 0);
        @include flex();
        height: 95px;
        z-index: 1000;
        .leftarrow {
            @include position(fixed, 0, auto, auto, 24px);
            width: 40px;
            @include line-height(95px, 95px);
            z-index: 1000;
            .van-icon {
                font-size: 40px;
                line-height: 95px;
                color: $black;
            }
        }
    }
    .into_view_content {
        @include position(fixed, 95px, 0, auto, 0);
        height: 100%;
        overflow: auto;
        background: $holderbg;
    }
}
</style>