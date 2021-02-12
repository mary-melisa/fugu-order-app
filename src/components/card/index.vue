<template>
    <div class="card-container">
        <section>
            <div class="card-header">
                <van-row type="flex" justify="space-between">
                    <van-col>
                        <p>
                            <span class="title-ml black">{{headerLeft}}</span>
                            <slot name="des"></slot>
                        </p>
                    </van-col>
                    <van-col v-if="showCardTitleRight">
                        <slot name="card-header"></slot>
                    </van-col>
                </van-row>
            </div>
            <div :class="{'card-border': showCardFooter}">
                <slot name="card-content"></slot>
            </div>
            <div class="card-footer" v-if="showCardFooter">
                <slot name="card-footer-table"></slot>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    props: [
        "headerLeft",
        "showCardTitleRight",
        "headerRight",
        "showCardFooter",
        "footerName",
        "footerDes"
    ],
    data() {
        return {};
    }
};
</script>
<style lang="scss" scoped>
.card-container {
    &:last-child {
        margin-bottom: 20px;
    }
    > section {
        margin-top: 21px;
        padding: 0 28px 6px 28px;
        @include rounded-corners(10px);
        @include boxShadow($white, $shadow, 4px, 6px, 10px);
        font-size: 22px;
        color: $deepGrey;
        background-color: $white;
        .card-title-left {
            font-size: 24px;
            color: $black;
            text-align: left;
        }
    }
}
p {
    @include line-height(60px, 60px);
    text-align: left;
    width: 246px;
    span {
        font-size: 22px;
        color: $deepGrey;
        text-align: left;
    }
    .title-ml {
        display: inline-block;
        width: 125px;
    }
}
.card-border {
    margin-bottom: 15px;
    border-bottom: 1px solid $bordergrey;
}
.card-footer {
    padding-bottom: 8px;
}
</style>
