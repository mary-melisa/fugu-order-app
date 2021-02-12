<template>
    <div class="booking">
        <div class="bannerBar">
            <van-swipe class="swipeBlocks" :autoplay="5000">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
            <div class="cateen">{{cateen}}</div>
        </div>
        <div class="foodCategory">
            <van-button class="menuBtn">菜品分类</van-button>
            <van-button class="menuOption" @click="showClassPicker">{{categoryName}}</van-button>
            <van-icon name="arrow-down" @click="showClassPicker"></van-icon>
        </div>
        <div class="sideBars">
            <van-sidebar class="commonSideBar" v-model="activeKey" @change="changeSider">
                <van-sidebar-item v-for="item in dateList" :key="item.nDate">
                    <template slot="title">
                        <div :class="[item.nStatus === 0 ? 'date1' : 'date']">{{item.nDate}}</div>
                        <div class="status" v-if="item.nStatus === 1">(已预订）</div>
                    </template>
                    <template slot="content">
                        
                    </template>
                </van-sidebar-item>
            </van-sidebar>
            <div class="sideBarContent">
                <div class="pannel">
                    <div class="title" v-if="firstList.length">早餐</div>
                    <div class="menuItem" v-for="(item, index) in firstList" :key="index">
                        <div class="meal">
                            <div class="imgBar">
                                <van-image :src="[item.dishesPictures ? (window.uploadUrlPrev + item.dishesPictures) : '@assets/images/menu.jpg']"/>
                            </div>
                            <div class="rightBar">
                                <div class="name">{{item.name}}</div>
                                <div class="remaining">剩余份数：{{item.quantity}}</div>
                                <div class="about">
                                    <div class="price">￥{{item.price}}</div>
                                    <van-stepper v-if="statusFlag === 0 && item.quantity" class="commonStepper" v-model="item.count" theme="round" :min="minValue" disable-input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pannel">
                    <div class="title" v-if="secondList.length">午餐</div>
                    <div class="menuItem" v-for="(item, index) in secondList" :key="index">
                        <div class="meal">
                            <div class="imgBar">
                                <van-image :src="[item.dishesPictures ? (window.uploadUrlPrev + item.dishesPictures) : '@assets/images/menu.jpg']"/>
                            </div>
                            <div class="rightBar">
                                <div class="name">{{item.name}}</div>
                                <div class="remaining">剩余份数：{{item.quantity}}</div>
                                <div class="about">
                                    <div class="price">￥{{item.price}}</div>
                                    <van-stepper v-if="statusFlag === 0 && item.quantity" class="commonStepper" v-model="item.count" theme="round" :min="minValue" disable-input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pannel">
                    <div class="title" v-if="thirdList.length">晚餐</div>
                    <div class="menuItem"  v-for="(item, index) in thirdList" :key="index">
                        <div class="meal">
                            <div class="imgBar">
                                <van-image :src="[item.dishesPictures ? (window.uploadUrlPrev + item.dishesPictures) : '@assets/images/menu.jpg']"/>
                            </div>
                            <div class="rightBar">
                                <div class="name">{{item.name}}</div>
                                <div class="remaining">剩余份数：{{item.quantity}}</div>
                                <div class="about">
                                    <div class="price">￥{{item.price}}</div>
                                    <van-stepper v-if="statusFlag === 0 && item.quantity" class="commonStepper" v-model="item.count" theme="round" :min="minValue" disable-input />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <van-badge :content="cartNum" class="commonBadge">
            <div class="child" />
        </van-badge>
        <BottomTabbar/>
        <van-picker
            title="选择菜品"
            class="commonPicker"
            show-toolbar
            :columns="classList"
            value-key = "categoryName"
            @confirm="onConfirm"
            @cancel="onCancel"
            :default-index="defaultIndex"
            v-if="showPicker"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import utils from "@/utils";
import { Toast } from "vant";
import SessionUtil from '@/utils/applicationStorage/sessionStorageUtil';
import { Notify } from 'vant';
import BottomTabbar from '@/views/tabbar';
import axios from 'axios';

export default {
    components: {
        BottomTabbar
    },
    data() {
        return {
            images: [
                require('@assets/images/banner1.jpg'),
                require('@assets/images/loginbg.png')
            ],
            cateen: '',
            activeKey: 0,
            value: 10,
            active: 'booking',
            userInfo: {},
            reserveForm: {
                nRestaurantId: 1
            },
            conditionForm: {
                pageSize: 10,
                pageIndex: 1
            },
            classList: [], // 菜品列表
            showPicker: false,
            categoryName: '', // 菜品类别名称
            categoryId: -1,   // 菜品类别ID
            defaultIndex: 0,  // 默认菜品
            dateList: [],     // 日期列表
            orderList: [],    // 预订列表
            nRestaurantId: 1, // 食堂ID
            statusFlag: 0,    // 状态标志   0未预订  1已预订
            minValue: 0,
            firstList: [],    // 早餐列表
            secondList: [],   // 午餐列表
            thirdList: [],    // 晚餐列表
            cartNum: 0,       // 购物车数量
        };
    },
    computed: {},
    mounted(){
        // 获取菜品类别
        this.getTerpineCla();
        // 获取预定时间范围
        this.getExistReserve();
        // 初始化
        this.init();
    },
    methods: {
        ...mapMutations({

        }),
        init() {
            this.activeKey = 0;
            if(this.dateList.length) {
                this.statusFlag = this.dateList[this.activeKey].nStatus;
            }
        },
        changeSider(index) {
           this.activeKey = index;
           this.getOrderList();
        },
        // 获取预订列表
        getOrderList(){
            this.$loading.open('加载中...', true)
            let uploadUrl = window.urlPrev2 + 'api/OrderApp/GetReserveByDate';
            let obj = {};
            if(this.categoryId != -1) {
                obj.nDishesCategoryId = this.categoryId;
            }
            if(this.activeKey >=0) {
                obj.nDate = this.dateList[this.activeKey].nDate;
            }
            obj.nRestaurantId = this.nRestaurantId;
            axios({ method: "post", url: uploadUrl, data: obj })
                .then((rsp)=>{
                    this.$loading.hide();
                    if(rsp.data.status === 1){
                        let arr = rsp.data.result;
                        arr.forEach(item => {
                            item.count = 0;
                        });
                        this.orderList = arr;
                        this.firstList = arr.filter(item => item.categoryType === 1);
                        this.secondList = arr.filter(item => item.categoryType === 2);
                        this.thirdList = arr.filter(item => item.categoryType === 3);
                    }else {
                        Notify({ type: 'error', message: rsp.data.message });
                    }
                })
                .catch((rsp)=>{
                    this.$loading.hide();
                });
        },
        // 初始化食堂
        // initData(){
        //      this.userInfo = SessionUtil.getItem('userInfo');
        //      this.cateen = this.userInfo.restaurantName;
        //      if(Object.keys(this.userInfo).length) {
        //         if (Reflect.has(this.userInfo, 'id')) {
        //             this.reserveForm.nUserId = this.userInfo.id;
        //         }
        //         if (Reflect.has(this.userInfo, 'nRestaurantId')) {
        //             this.reserveForm.nRestaurantId = this.userInfo.nRestaurantId;
        //         }
        //      }
        // },
        // 获取预定时间范围
        async getExistReserve() {
            let uploadUrl = window.urlPrev2 + 'api/OrderApp/GetExistReserve';
            this.$loading.open('加载中...', true)
            await axios({ method: "post", url: uploadUrl, data: this.reserveForm })
                .then((rsp)=>{
                    this.$loading.hide();
                    if(rsp.data.status === 1){
                        this.dateList = rsp.data.result;
                    }else {
                        Notify({ type: 'error', message: rsp.data.message });
                    }
                })
                .catch((rsp)=>{
                    this.$loading.hide();
                });
        },
        showClassPicker(){
            this.showPicker = true;
        },
        // 获取菜品类别
        getTerpineCla(){
            const url = window.urlBasePrev +  `api/bddishescategory/getdishescategory`;
            axios({method: 'post', url: url, data: this.conditionForm})
            .then( res => {
                if(res.data.status === 1) {
                    this.classList = res.data.result
                }
            })
        },
        onConfirm(value, index) {
            this.categoryName = value.categoryName;
            this.categoryId = value.id;
            this.defaultIndex = index;
            this.showPicker = false;
            // 更新预订列表
            this.getOrderList();
        },
        onCancel() {
             this.showPicker = false;
        },
        showPassword() {
          
        }
    }
};
</script>
<style lang="scss" scoped>
.booking{
    width: 100%;
    height: 100%;
    min-height: 100vh;
    @include flex();
    flex-direction: column;
    .bannerBar {
        width: 100%;
        height: 423px;
        position: relative;
        ::v-deep.swipeBlocks {
            width: 100%;
            height: 100%;
            background-color: #2f9bfe;
            .van-swipe-item {
                width: 100%;
                height: 100%;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    @include position(absolute, 50%, auto, auto, 50%);
                    transform: translate(-50%, -50%);
                }
            }
            .van-swipe__indicators {
                .van-swipe__indicator {
                    width: 18px;
                    height: 6px;
                    @include rounded-corners(3px);
                    background: rgba(255, 255, 255, .8);
                }
                .van-swipe__indicator.van-swipe__indicator--active {
                    background: white;
                }
                .van-swipe__indicator+.van-swipe__indicator {
                    margin-left: 10px;
                }
            }
        }
        .cateen {
            @include position(absolute, 60px, 0, auto, 0);
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 28px;
            color: white;
        }
    }
    .foodCategory {
        margin-top: 20px;
        width: calc(100% - 60px);
        padding: 0 30px;
        height: 60px;
        position: relative;
        .menuBtn {
            width: 175px;
            height: 60px;
            padding: 0;
            line-height: 60px;
            text-align: center;
            @include rounded-corners1(35px, 0, 0, 35px);
            @include linearGradient(to right, #509cf5, #3471fb);
            font-size: 30px;
            color: white;
            border: 0;
            border-image-width: 0;
            &::before {
                border-image-width: 0;
            }
        }
        .menuOption {
            width: calc(100% - 175px);
            height: 60px;
            padding: 0;
            line-height: 60px;
            background: #e3e3e3;
            @include rounded-corners1(0, 35px, 35px, 0);
            border-image-width: 0;
            border: 0;
            &::before {
                border-image-width: 0;
            }
        }
        .van-icon {
            color: #747474;
            font-size: 28px;
            @include position(absolute, auto, 50px, -2px, auto);
            line-height: 60px;
        }
    }
    .sideBars {
        width: 100%;
        min-height: 200px;
        padding-bottom: 105px;
        margin-top: 20px;
        display: inline-flex;
        flex-direction: row;
        ::v-deep.commonSideBar.van-sidebar {
            width: 155px;
        }
        .sideBarContent {
            width: calc(100% - 205px);
            padding: 0 30px 0 20px; 
            background: white;
            @include flex();
            flex-direction: column;
            overflow-y: auto;
            .pannel {
                width: 100%;
                @include flex();
                flex-direction: column;
            }
            .title {
                width: calc(100% - 10px);
                height: 35px;
                border-left: 12px solid #2f9bfe;
                font-size: 30px;
                color: #a3b1bf;
                line-height: 35px;
                padding-left: 10px;
            }
            .menuItem {
                width: 100%;
                padding-bottom: 40px;
                .meal {
                    width: 100%;
                    padding: 30px 0;
                    display: inline-flex;
                    .imgBar {
                        width: 118px;
                        height: 118px;
                        position: relative;
                        .van-image {
                            max-width: 118px;
                            max-height: 118px;
                            @include rounded-corners(4px);
                            @include position(absolute, 50%, auto, auto, 50%);
                            transform: translate(-50%, -50%);
                        }
                    }
                    .rightBar {
                        width: calc(100% - 128px);
                        padding-left: 10px;
                        .name {
                            width: 100%;
                            height: 30px;
                            line-height: 30px;
                            font-size: 30px;
                            color: #323234;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        .remaining {
                            width: 100%;
                            height: 24px;
                            margin-top: 15px;
                            font-size: 24px;
                            color: #a2a2a2;
                        }
                        .about {
                            margin-top: 10px;
                            width: 100%;
                            height: 38px;
                            display: inline-flex;
                            .price {
                                width: calc(100% - 130px);
                                height: 38px;
                                line-height: 38px;
                                font-size: 36px;
                                color: #4f89ff;
                            }
                            .commonStepper {
                                width: 130px;
                            }
                        }
                    }
                }
            }
        }
    }
    .commonBadge {
        background: url(../../assets/images/shopcart.png) transparent center center no-repeat;
        background-size: cover;
    }
}
</style>
