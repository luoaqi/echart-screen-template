<template>
    <div class="polo-charts">
        <div class="polo-title text-title">水球图</div>
        <div id="polo-one" />
        <div id="polo-two" />
        <div id="polo-three" />
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
import "echarts-liquidfill";
export default {
    name: "poloCharts",
    components: {},
    data() {
        return {
            charts: "",
        };
    },
    mounted() {
        this.initChart({
            domName: "polo-one",
            num: 0.5,
            color: "rgb(0, 114, 220)",
        });
        this.initChart({
            domName: "polo-two",
            num: 0.5,
            color: "rgb(780, 114, 220)",
        });
        this.initChart({
            domName: "polo-three",
            num: 0.5,
            color: "rgb(60, 414, 220)",
        });
    },

    methods: {
        initChart(item) {
            const poloDom = document.getElementById(item.domName);
            //初始化
            this.charts = echarts.init(poloDom);
            const options = {
                series: [
                    {
                        type: "liquidFill",
                        data: [item.num],
                        // shape: "diamond",
                        radius: "80%",
                        outline: {
                            borderDistance: 2,
                            itemStyle: {
                                borderColor: item.color,
                                borderWidth: 2,
                                shadowBlur: 5,
                                shadowColor: "#000",
                            },
                        },
                        backgroundStyle: { color: "transparent" },
                        color: [item.color],
                        center: ["50%", "50%"],
                        label: {
                            fontSize: 24,
                            color: "#ffffff",
                        },
                    },
                ],
            };
            this.charts.setOption(options);
        },
    },
};
</script>

<style scoped lang="scss">
.polo-charts {
    width: 450px;
    height: 270px;
    position: absolute;
    top: 775px;
    right: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    #polo-one {
        width: 25%;
        height: 80%;
    }
    #polo-two {
        width: 25%;
        height: 80%;
    }
    #polo-three {
        width: 25%;
        height: 80%;
    }

    .polo-title {
        position: absolute;
        top: 0px;
        left: 35px;
        font-size: 40px;
        font-weight: bold;
    }
}
</style>
