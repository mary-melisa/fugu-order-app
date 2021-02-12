import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login';
import bottomTabbar from '@/views/tabbar';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        //==========================1.通过name展示带tab栏的视图(如App.vue所见)============================
        // {
        //     path: '/',
        //     redirect: '/login',
        // },
        // 人脸识别
        {
            path: '/faceRecog',
            name: 'faceRecog',
            component: () => import('@/views/faceRecog/faceRecog.vue')
        },
        // 预订菜品
        {
            path: '/booking',
            name: 'booking',
            component: () => import('@/views/booking/booking.vue')
        },
        // 确认菜品
        {
            path: '/confrimDishes',
            name: 'confrimDishes',
            component: () => import('@/views/booking/components/confrimDishes/confrimDishes.vue')
        },
        // 付款成功
        {
            path: '/paySuccess',
            name: 'paySuccess',
            component: () => import('@/views/booking/components/paySuccess/paySuccess.vue')
        },
         // 营养分析
         {
            path: '/nutrition',
            name: 'nutrition',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/nutrition/nutrition.vue')
        },
         // 我的
         {
            path: '/mine',
            name: 'mine',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/mine.vue')
        },
         // 我的人脸识别
         {
            path: '/faceAuthor',
            name: 'faceAuthor',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/faceAuthor/faceAuthor.vue')
        },
         // 充值
         {
            path: '/recharge',
            name: 'recharge',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/recharge/recharge.vue')
        },
         // 托盘绑定
         {
            path: '/trayBinding',
            name: 'trayBinding',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/trayBinding/trayBinding.vue')
        },
         // 账单明细
         {
            path: '/billing',
            name: 'billing',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/billing/billing.vue')
        },
        // 账单详情 
        {
            path: '/billDetail',
            name: 'billDetail',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/billing/components/billDetail/billDetail.vue')
        },
        // 我的订单
        {
            path: '/myOrders',
            name: 'myOrders',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/myOrders/myOrders.vue')
        },
        // 取消订单
        {
            path: '/cancelOrder',
            name: 'cancelOrder',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/myOrders/components/cancelOrder/cancelOrder.vue')
        },
         // 取消订单成功
         {
            path: '/status',
            name: 'status',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/myOrders/components/status/status.vue')
        },
         // 订单详情
         {
            path: '/orderDetail',
            name: 'orderDetail',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/myOrders/components/orderDetail/orderDetail.vue')
        },
        // 评价订单
        {
            path: '/evaluation',
            name: 'evaluation',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/myOrders/components/evaluation/evaluation.vue')
        },
         // 意见反馈
         {
            path: '/feedback',
            name: 'feedback',
            meta: {
                requireAuth: true,
                keepAlive: true, 
            },
            component: () => import('@/views/mine/components/feedback/feedback.vue')
        },
        //==========================2.通过name展示不带tab栏的视图(如App.vue所见)============================
        {
            //默认路由
            path: '/',
            redirect: '/register',
            meta: {
                requireAuth: true
            }
        },
        // 登陆
        {
            path: '/login',
            component: login
        },
         // 注册
         {
            path: '/register',
            name: 'register',
            component: () => import('@/views/register/register.vue')
        },
         // 选择食堂
         {
            path: '/selectCateen',
            name: 'selectCateen',
            component: () => import('@/views/selectCateen/selectCateen.vue')
        },
         // 设置支付密码
         {
            path: '/setPassword',
            name: 'setPassword',
            component: () => import('@/views/setPassword/setPassword.vue')
        },
         // 设置支付密码成功
         {
            path: '/passwordSuccess',
            name: 'passwordSuccess',
            component: () => import('@/views/passwordSuccess/passwordSuccess.vue')
        },
    ]
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;