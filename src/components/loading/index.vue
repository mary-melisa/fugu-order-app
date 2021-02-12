<template>
  <transition name="fade">
    <div class="loading-container" v-show="show">
        <div>
            <van-loading type="spinner" color="#1989fa" />
            <div>
                {{ message }}
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: '加载中...'
        },
        show: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style lang="scss" scoped>
  .loading-container {
    @include position(fixed, 0, 0, 0, 0);
    @include flex();
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    > div {
        z-index: 2001;
        ::v-deep.van-loading {
            margin-bottom: 20px;
            text-align: center;
        }
        div:last-child {
            color: #fff;
            font-size: 30px;

        }
    }

  }
  .fade-enter-active{
    animation: fade-in .3s;
  }
  .fade-leave-active{
    animation: fade-out .3s;
  }
</style>

