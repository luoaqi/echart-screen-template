<!--
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-03-31 11:56:23
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-06 17:25:00
-->
<template>
    <div class="index">
        <MapCharts />
        <RadarCharts :radar-data="data" />
        <PieCharts />
        <LineCharts />
        <BarCharts />
        <PoloCharts />
    </div>
</template>

<script>
/* eslint-disable */
import MapCharts from "./charts/MapCharts.vue";
import RadarCharts from "./charts/RadarCharts.vue";
import PieCharts from "./charts/PieCharts.vue";
import LineCharts from "./charts/LineCharts.vue";
import BarCharts from "./charts/BarCharts.vue";
import PoloCharts from "./charts/PoloCharts.vue";
export default {
    name: "Index",
    components: {
        MapCharts,
        RadarCharts,
        PieCharts,
        LineCharts,
        BarCharts,
        PoloCharts,
    },

    data() {
        return {
            data: [],
        };
    },
    methods: {
        getEpidemicInfo() {
            getEpidemicInfo().then((res) => {
                console.log(res);
            });
        },
    },
    created() {},
    mounted() {
        this.getEpidemicInfo();
    },
};
</script>

<style scoped lang="scss">
.index {
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: url("../assets/imgs/screen_bg.png");
}
</style>
