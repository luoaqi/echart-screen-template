<template>
    <div class="line-charts">
        <div class="line-title text-title">折线图</div>
        <div id="line" />
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
export default {
    name: "LineCharts",
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
            const lineDom = document.getElementById("line");
            this.charts = echarts.init(lineDom);
            const options = {
                tooltip: {
                    trigger: "axis",
                },
                legend: {
                    textStyle: {
                        color: "#ff6",
                    },
                },
                toolbox: {
                    show: true,
                    feature: {
                        magicType: { show: true, type: ["stack", "tiled"] },
                        saveAsImage: { show: true },
                    },
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [
                        "周一",
                        "周二",
                        "周三",
                        "周四",
                        "周五",
                        "周六",
                        "周日",
                    ],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        name: "成交",
                        type: "line",
                        smooth: true,
                        data: [10, 12, 21, 54, 260, 830, 710],
                        areaStyle: {},
                    },
                    {
                        name: "预购",
                        type: "line",
                        smooth: true,
                        data: [30, 182, 434, 791, 390, 30, 10],
                        areaStyle: {},
                    },
                    {
                        name: "意向",
                        type: "line",
                        smooth: true,
                        data: [1320, 1132, 601, 234, 120, 90, 20],
                        areaStyle: {},
                    },
                ],
            };
            // const options = {
            //     // color: ["rgb(0, 41, 96)"],
            //     xAxis: {
            //         type: "category",
            //         data: [
            //             "05-04",
            //             "05-05",
            //             "05-06",
            //             "05-07",
            //             "05-08",
            //             "05-09",
            //             "05-10",
            //         ],
            //         boundaryGap: false,
            //         // splitLine: { show: false },
            //         axisLabel: {
            //             interval: 0,
            //             textStyle: {
            //                 color: "blue",
            //                 fontSize: 15,
            //             },
            //         },
            //         axisLine: {
            //             lineStyle: {
            //                 color: "blue",
            //                 width: 1,
            //             },
            //         },
            //     },
            //     yAxis: {
            //         axisLabel: {
            //             interval: 0,
            //             textStyle: {
            //                 color: "blue",
            //                 fontSize: 15,
            //             },
            //         },
            //         type: "value",
            //         splitLine: { show: false },
            //         axisLine: {
            //             lineStyle: {
            //                 color: "blue",
            //                 width: 1,
            //             },
            //         },
            //     },
            //     series: [
            //         {
            //             name: "Email",
            //             type: "line",
            //             smooth: true,
            //             data: [120, 1320, 1010, 1340, 900, 230, 210],
            //             areaStyle: {
            //                 z: 10,
            //                 type: "default",

            //                 color: [],
            //             },
            //             lineStyle: {
            //                 // 折线的样式
            //                 width: 1,
            //                 type: "solid",
            //                 color: "yellow",
            //             },
            //         },

            //         {
            //             type: "line",

            //             lineStyle: {
            //                 // 折线的样式
            //                 width: 1,
            //                 type: "solid",
            //                 color: "red",
            //             },
            //             data: [0, 932, 901, 934, 1290, 130, 1500],
            //             type: "line",
            //             smooth: true,
            //             areaStyle: {
            //                 z: 10,
            //                 type: "default",
            //             },
            //         },
            //     ],
            // };
            this.charts.setOption(options);
        },
    },
};
</script>

<style scoped lang="scss">
.line-charts {
    width: 780px;
    height: 270px;
    position: absolute;
    top: 775px;
    left: 47px;

    #line {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 40px;
    }

    .line-title {
        position: absolute;
        top: 0px;
        left: 35px;
        font-size: 40px;
        font-weight: bold;
    }
}
</style>
