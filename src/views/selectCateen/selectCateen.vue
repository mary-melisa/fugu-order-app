<template>
    <div class="selectCateen">
        <div class="topBar">
            <div class="header">
                <a @click="back"><van-icon name="arrow-left" /></a>
                <div class="title">选择食堂</div>
            </div>
            <van-search class="commonSearch" v-model="value" @focus="toSetPassword"/>
        </div>
        <div class="content">
            <baidu-map class="map" center="长沙">
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            </baidu-map>
        </div>
        <div class="space"></div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";

export default {
    data() {
        return {
            value: ''
        };
    },
    computed: {},

    methods: {
        ...mapMutations({

        }),
        back() {
            this.$router.push({name: 'faceRecog'});
        },
        toSetPassword() {
            this.$router.push({name: 'setPassword'});
        }
    }
};
</script>
<style lang="scss" scoped>
.selectCateen {
    width: 100%;
    height: 100%;
    min-height: 1075px;
    @include flex();
    flex-direction: column;
    .topBar {
        width: 100%;
        height: 100px;
        padding-bottom: 80px;
        background: #4582ff;
        position: relative;
        .header {
            width: calc(100% - 60px);
            height: 80px;
            padding: 0 30px;
            @include position(absolute, 0, 0, 60px, 0);
            a {
                float: left;
                width: 30px;
                height: 100px;
                .van-icon {
                    font-size: 30px;
                    color: white;
                    line-height: 100px;
                }
            }
            .title {
                float: left;
                width: calc(100% - 60px);
                text-align: center;
                color: white;
                font-size: 36px;
                height: 100px;
                line-height: 100px;
            }
        }
        ::v-deep.commonSearch {
            width: calc(100% - 60px);
            height: 80px;
            background: white;
            padding: 0;
            @include rounded-corners(35px);
            @include position(absolute, auto, 30px, -30px, 30px);
            z-index: 10;
            .van-search__content {
                height: 80px;
                background: white;
                @include rounded-corners(35px);
                border: 0;
                .van-cell.van-field {
                    width: 100%;
                    height: 80px;
                    line-height: 80px;
                    .van-field__left-icon {
                        height: 80px;
                        line-height: 80px;
                        .van-icon.van-icon-search {
                            height: 80px !important;
                            line-height: 80px !important;
                            color: #888888;
                            font-size: 30px;
                        }
                    }
                    .van-field__value {
                        height: 80px;
                        .van-field__body {
                            height: 80px;
                            .van-field__control {
                                width: calc(100% - 30px);
                                padding-right: 30px;
                                height: 80px;
                                line-height: 80px;
                            }
                        }
                    }
                }
            }
        }
    }
    .content {
        width: 100%;
        height: 1415px;
        background: grey;
        .map {
            width: 100%;
            height: 100%;
        }
    }
    .space {
        width: 100%;
        height: 110px;
        background: white;
    }
}
</style>
