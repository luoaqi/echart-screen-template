<template>
    <div class="pie-charts">
        <div class="pie-title text-title">饼图</div>
        <div id="pie" />
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
export default {
    name: "PieCharts",
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
            const pieDom = document.getElementById("pie");
            //初始化
            this.charts = echarts.init(pieDom);
            const options = {
                legend: {
                    x: "center",

                    textStyle: {
                        color: "#f6f",
                    },
                },

                series: [
                    {
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: "40",
                                fontWeight: "bold",
                                color: "blue",
                            },
                        },

                        tooltip: {},
                        name: "Budget vs spending",
                        type: "pie",
                        itemStyle: {
                            borderRadius: 5,
                            borderColor: "#fff",
                            borderWidth: 3,
                        },
                        radius: ["40%", "70%"],
                        data: [
                            { name: "健康", value: 16500 },
                            { name: "快乐", value: 16500 },
                            { name: "富足", value: 16500 },
                            { name: "开心", value: 16500 },
                            { name: "乐观", value: 16500 },
                            { name: "积极", value: 16500 },
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
.pie-charts {
    width: 427px;
    height: 300px;
    position: absolute;
    top: 400px;
    right: 44px;

    #pie {
        width: 100%;
        height: 80%;
        position: absolute;
        top: 60px;
    }

    .pie-title {
        position: absolute;
        top: 0px;
        left: 35px;
        font-size: 40px;
        font-weight: bold;
    }
}
</style>
