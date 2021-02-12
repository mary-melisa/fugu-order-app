<template>
    <div class="card-details">
        <div class="card-details-head">
            <span class="card-detals-head-s">{{headerTitle}}</span>
            <slot name="header"></slot>
        </div>
        <div class="card-details-content">
            <van-row type="flex" justify="space-between" v-if="isContentInfo">
                <van-col class="balck" tag="span">{{contentTitle.name}}</van-col>
                <van-col
                    v-if="contentTitle.text !== ''"
                    class="blue"
                    tag="span"
                >{{contentTitle.text}}</van-col>
            </van-row>
            <van-row type="flex" justify="space-between" v-for="(item, index) in info" :key="index">
                <van-col tag="span">{{item.name}}</van-col>
                <van-col class="black" tag="span">{{item.text}}</van-col>
            </van-row>
            <slot name="content-footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    /*
     *   headerTitle: 类型：string; 标题
     *   info: 类型：Object => {name: string, text: string | number}
     *   isContentInfo: 类型：Boolean; 卡片内容中是否存在标题
     *   contentTitle:  类型：Object => {name: string, text: string} 当isContentInfo为true时，
     *       标题又侧是否有内容；有=》text不能为空字符串；无=》text为空字符串
     */
    props: ["headerTitle", "info", "contentTitle", "isContentInfo"]
};
</script>
<style lang="scss" scoped>
.card-details {
    padding: 0 24px;
    background-color: $white;
    .card-details-head {
        font-size: 22px;
        color: $black;
        @include line-height(78px, 78px);
        border-bottom: 1px solid $bordergrey;
        .card-detals-head-s {
            border-left: 4px solid $blue;
            padding-left: 18px;
        }
    }
    .card-details-content {
        .van-row {
            font-size: 22px;
            @include line-height(60px, 60px);
            color: $grey;
            .black {
                text-align: right;
            }
        }
    }
}
</style>
