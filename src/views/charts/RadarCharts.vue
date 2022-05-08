<template>
    <div class="radar-charts">
        <div class="radar-title text-title">雷达</div>
        <div id="radar" />
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
export default {
    name: "RadarCharts",
    components: {},
    props: {
        radarData: {
            type: Array,
            default: () => [],
        },
    },
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
            const radarDom = document.getElementById("radar");
            //初始化
            this.charts = echarts.init(radarDom);
            const options = {
                legend: {
                    x: "left",
                    textStyle: {
                        color: "#f6f",
                        fontSize: 20,
                    },
                },

                radar: {
                    // shape: 'circle',
                    indicator: [
                        { name: "开心", max: 16500 },
                        { name: "快乐", max: 16000 },
                        { name: "积极", max: 30000 },
                        { name: "阳光", max: 38000 },
                        { name: "富足", max: 52000 },
                        { name: "向上", max: 25000 },
                    ],
                },
                series: [
                    {
                        areaStyle: {},
                        emphasis: {
                            label: {
                                show: true,
                                fontWeight: "bold",
                            },
                        },
                        lineStyle: {
                            width: 3,
                            type: "solid",
                        },
                        tooltip: {},
                        name: "Budget vs spending",
                        type: "radar",

                        label: {
                            // show: true,
                            position: "bottom",
                            textStyle: {
                                color: "#f6f",
                                fontSize: 20,
                            },
                        },
                        data: [
                            {
                                value: [
                                    14200, 13000, 30000, 35000, 40000, 18000,
                                ],
                                name: "这个人",
                            },
                            {
                                value: [
                                    15000, 14000, 28000, 26000, 32000, 21000,
                                ],
                                name: "那个人",
                            },
                        ],
                    },
                ],
            };
            this.charts.setOption(options);
        },
    },
    watch: {
        radarData: {
            handler(newValue, oldValue) {
                console.log(oldValue);
                console.log(newValue);
            },
        },
    },
};
</script>

<style scoped lang="scss">
.radar-charts {
    width: 427px;
    height: 300px;
    position: absolute;
    top: 55px;
    right: 44px;

    #radar {
        width: 100%;
        height: 80%;
        position: absolute;
        top: 60px;
    }

    .radar-title {
        position: absolute;
        top: 0px;
        left: 35px;
        font-size: 40px;
        font-weight: bold;
    }
}
</style>
