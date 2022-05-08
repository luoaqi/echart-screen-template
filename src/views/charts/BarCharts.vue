<template>
    <div class="bar-charts">
        <div class="bar-title text-title">柱状图</div>
        <div id="bar" />
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
export default {
    name: "barCharts",
    components: {},
    data() {
        return {
            charts: "",
        };
    },
    mounted() {
        this.initChart();
    },

    methods: {
        initChart() {
            const barDom = document.getElementById("bar");
            //初始化
            this.charts = echarts.init(barDom);
            const options = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                legend: {
                    textStyle: {
                        color: "#ff6",
                    },
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: {
                    type: "value",
                    boundaryGap: [0, 0.01],
                },
                yAxis: {
                    type: "category",
                    data: [
                        "4月1号",
                        "4月1号",
                        "4月1号",
                        "4月1号",
                        "4月1号",
                        "4月1号",
                        "4月1号",
                    ],
                },
                series: [
                    {
                        name: "2011",
                        type: "bar",
                        data: [
                            18203, 23489, 29034, 104970, 131744, 630230, 630230,
                        ],
                    },
                    {
                        name: "2012",
                        type: "bar",
                        data: [
                            19325, 23438, 31000, 121594, 134141, 681807, 630230,
                        ],
                    },
                ],
            };
            this.charts.setOption(options);
        },
    },
};
</script>

<style scoped lang="scss">
.bar-charts {
    width: 450px;
    height: 270px;
    position: absolute;
    top: 775px;
    left: 904px;

    #bar {
        width: 100%;
        height: 80%;
        position: absolute;
        top: 60px;
    }

    .bar-title {
        position: absolute;
        top: 0px;
        left: 35px;
        font-size: 40px;
        font-weight: bold;
    }
}
</style>
