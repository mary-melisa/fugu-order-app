<template>
    <div class="nutrition">
         <div class="topBar">
            <Header :title="'营养分析'" :bgColor="'bgBlue'" :fontColor="'white'" :margin30="'true'"></Header>
            <div class="nutritionAbout">
                <van-tabs v-model="active" class="dateTabs">
                    <van-tab title="11/09">

                    </van-tab>
                    <van-tab title="11/10">

                    </van-tab>
                    <van-tab title="11/11">

                    </van-tab>
                    <van-tab title="11/12">

                    </van-tab>
                    <van-tab title="11/13">

                    </van-tab>
                    <van-tab title="11/14">

                    </van-tab>
                    <van-tab title="11/15">

                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <div class="nutritionContent">
            <div class="pannels">
                <div class="nutritionPannel">
                    <div class="title">早餐</div>
                    <div class="meal">
                        <!-- <div class="imgBar">
                            <img src="@/assets/images/banner1.jpg"/>
                        </div> -->
                        <div class="rightBar">
                            <div class="name">豆浆</div>
                            <!-- <div class="num">x 1</div> -->
                        </div>
                    </div>
                    <!-- <div class="meal">
                        <div class="imgBar">
                            <img src="@/assets/images/banner1.jpg"/>
                        </div>
                        <div class="rightBar">
                            <div class="name">放心油条</div>
                            <div class="num">x 3</div>
                        </div>
                    </div> -->
                    <div class="title">午餐</div>
                    <div class="meal">
                        <!-- <div class="imgBar">
                            <img src="@/assets/images/banner1.jpg"/>
                        </div> -->
                        <div class="rightBar">
                            <div class="name">豆浆</div>
                            <!-- <div class="num">x 1</div> -->
                        </div>
                    </div>
                    <div class="rate">
                        <div class="rateContent">
                            <div class="leftBar"></div>
                            <div class="rightBar">
                                <div class="firstRow">
                                    <div>项目</div>
                                    <div>摄入量</div>
                                </div>
                                <div class="underRow">
                                    <div>能量</div>
                                    <div>1000kj</div>
                                </div>
                                <div class="underRow">
                                    <div>蛋白质</div>
                                    <div>20g</div>
                                </div>
                                <div class="underRow">
                                    <div>脂肪</div>
                                    <div>10g</div>
                                </div>
                                <div class="underRow">
                                    <div>膳食纤维</div>
                                    <div>6.5g</div>
                                </div>
                                <div class="underRow">
                                    <div>碳水化合物</div>
                                    <div>35g</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rateTxt">
                        数据仅供参考
                    </div>
                </div>
            </div>
        </div>
        <BottomTabbar/>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify } from 'vant';
import axios from 'axios';
import Header from '@/components/header/index.vue';
import BottomTabbar from '@/views/tabbar';

export default {
    components: {
        Header,
        BottomTabbar
    },
    data() {
        return {
            active: 0,
            tabActive: 'nutrition',
        };
    },
    computed: {},
    mounted(){
       
    },
    methods: {
        ...mapMutations({

        }),

    }
};
</script>
<style lang="scss" scoped>
.nutrition{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    overflow: hidden;
    .topBar {
        width: 100%;
        height: 280px;
        background-color: #4582ff;
        @include flex();
        .nutritionAbout {
            align-self: center;
            align-items: center;
            margin-top: 105px;
            width: calc(100% - 60px);
            padding: 0 30px 65px;
            @include flex();
            justify-content: center;
            overflow: hidden;
        }
    }
    .nutritionContent {
        @include flex();
        flex-direction: column;
        width: 100%;
        height: 100%;
        min-height:  calc(100% - 400px);
        background-color: #747474;
        padding-bottom: 218px;
        position: relative;
        overflow: visible;
        .pannels {
            @include position(absolute, -50px, 0, auto, 0);
            width: calc(100% - 60px);
            height: calc(100vh - 400px);
            padding: 0 30px 110px;
            overflow-y: auto;
            .nutritionPannel {
                width: calc(100% - 60px);
                padding: 35px 30px 10px;
                @include flex();
                flex-direction: column;
                background-color: white;
                border-radius: 50px;
                @include rounded-corners(45px);
                margin-bottom: 20px;
                .title {
                    border-left: 12px solid #2f9bfe;
                    padding-left: 10px;
                    width: calc(100% - 12px);
                    height: 35px;
                    line-height: 35px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 30px;
                    color: #a3b1bf;
                }
                .title+.title {
                    margin-top: 10px;
                }
                .meal {
                    width: 100%;
                    // height: 80px;
                    margin-top: 30px;
                    padding-bottom: 28px;
                    @include flex();
                    // .imgBar {
                    //     width: 80px;
                    //     height: 80px;
                    //     position: relative;
                    //     @include rounded-corners(4px);
                    //     background-color: #2f9bfe;
                    //     img {
                    //         max-width: 80px;
                    //         max-height: 80px;
                    //         @include position(absolute, 50%, auto, auto, 50%);
                    //         transform: translate(-50%, -50%);
                    //         @include rounded-corners(4px);
                    //     }
                    // }
                    .rightBar {
                        // flex: 1;
                        // max-width: calc(100% - 95px);
                        width: calc(100% - 15px);
                        padding-left: 15px;
                        .name {
                            width: 100%;
                            // height: 30px;
                            font-size: 30px;
                            line-height: 40px;
                            color: #323234;
                        }
                        .num {
                            margin-top: 25px;
                            width: 100%;
                            height: 25px;
                            font-size: 24px;
                            line-height: 25px;
                            text-align: right;
                            color: #a2a2a2;
                        }
                    }
                }
                .meal+.meal {
                    margin-top: 0;
                }
                .rate {
                    width: 635px;
                    height: 284px;
                    margin: 40px auto 10px;
                    background-color: rgba(116, 116, 116, .2);
                    border-radius: 30px;
                    .rateContent {
                        width: calc(100% - 100px);
                        height: calc(100% - 50px);
                        padding: 25px 50px; 
                        @include flex();
                        .leftBar {
                            width: 226px;
                            height: 100%;
                            padding-right: 38px;
                            border-right: 1px solid white;
                        }
                        .rightBar {
                            flex: 1;
                            max-width: calc(100% - 264px);
                            @include flex();
                            flex-direction: column;
                            .firstRow {
                                width: 100%;
                                padding-bottom: 5px;
                                height: 24px;
                                line-height: 24px;
                                color: #323234;
                                > div {
                                    display: inline-block;
                                    width: 60%;
                                    line-height: 24px;
                                    text-align: center;
                                    font-size: 24px;
                                    color: #323234;
                                }
                                div:last-child {
                                    width: 40%;
                                }
                            }
                            .underRow {
                                @extend .firstRow;
                                margin-top: 10px;
                                > div {
                                    color: #747474;
                                }
                            }
                        }
                    }
                }
                .rateTxt {
                    padding-top: 30px;
                    padding-bottom: 20px;
                    width: 100%;
                    height: 18px;
                    font-size: 18px;
                    line-height: 18px;
                    text-align: center;
                    color: #747474;
                }
            }
        }
    }
}
</style>
