<template>
    <div id="app">
        <router-view class="main"></router-view>
        <!-- <transition>
            <router-view class="tabbar" name="bottomTabbar"></router-view>
        </transition> -->
    </div>
</template>

<script>
import Http from "@/utils/http";

import * as appconfig from '../public/appconfig';

import utils from "@/utils";
import { mapActions, mapMutations } from "vuex";

import { Dialog } from "vant";

export default {
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        ...mapMutations({}),
    },
    components: {},
    watch: {}
};
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
}
.tabbar,
.main {
    width: 100%;
    height: auto;
    min-height: 100%;
    // background-color: $holderbg;
}
</style>