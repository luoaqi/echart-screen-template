<template>
    <div class="map-charts">
        <div class="map-title text-title">数据可视化大屏</div>
        <div class="map-main">
            <div id="map" />
        </div>
        <div class="map-msg">
            <div class="map-time text-title">{{ time }}</div>
            <div :key="value.num" v-for="value in textArr" class="map-text">
                <!-- <span :style="'width: 6%'+''">{{ value.num }}</span> -->
                <!-- <span :style="`width: 6%;color:${color}px`">{{ value.num }}</span> -->
                <span :style="{ width: '15%', color: value.numColor }">{{
                    value.num
                }}</span>
                <span style="width: 60%">{{ value.place }}</span>
                <span
                    :style="{
                        width: '25%',
                        color: value.levelColor,
                        textAlign: 'center',
                    }"
                    >{{ value.level }}</span
                >
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts";
import fujian from "@/assets/json/fujian.json";
export default {
    name: "MapCharts",
    components: {},
    data() {
        return {
            charts: "",
            textArr: [
                {
                    num: 1,
                    place: "福州市福州县福州镇福州村",
                    level: "低风险",
                    levelColor: "green",
                    numColor: "blue",
                },
                {
                    num: 2,
                    place: "福州市福州县福州镇福州村",
                    level: "低风险",
                    levelColor: "green",
                    numColor: "yellow",
                },
            ],
            time: "",
        };
    },
    mounted() {
        this.initChart();
    },
    created() {
        this.getTimes();
    },
    beforeDestroy() {
        if (this.times) {
            clearInterval(this.getCurrentTime);
        }
    },
    methods: {
        getTimes() {
            setInterval(this.getCurrentTime, 1000);
        },
        initChart() {
            const mapDom = document.getElementById("map");
            //初始化
            this.charts = echarts.init(mapDom);
            //注册地图
            echarts.registerMap("fujian", fujian);
            const options = {
                tooltip: {},
                series: [
                    {
                        scaleLimit: {
                            min: 0.5,
                            max: 2,
                        },
                        zoom: 1.2,
                        roam: true,
                        type: "map",
                        map: "fujian",
                        itemStyle: {
                            areaColor: "rgb(12,182,541)",
                            borderColor: "#000",
                            borderWidth: 2,
                        },
                        label: {
                            show: true,
                            fontWeight: "900",
                            fontSize: "15",
                            color: "#fff",
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: "rgb(231,212,11)",
                            },
                            label: {
                                show: true,
                                fontWeight: "900",
                                fontSize: "15",
                                color: "#F4f",
                            },
                        },
                    },
                ],
            };
            this.charts.setOption(options);
        },
        getCurrentTime() {
            //获取当前时间并打印
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
            let ss =
                new Date().getSeconds() < 10
                    ? "0" + new Date().getSeconds()
                    : new Date().getSeconds();
            _this.gettime =
                yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
            // console.log(_this.gettime);
            _this.time = _this.gettime;
        },
    },
};
</script>

<style scoped lang="scss">
.map-charts {
    width: 1385px;
    height: 710px;
    // background-color: red;
    //  opacity: 0.5;
    position: absolute;
    top: 20px;
    left: 24px;
    .map-msg {
        width: 40%;
        height: 90%;
        position: absolute;
        right: 40px;
        top: 40px;
        .map-time {
            text-align: center;
            font-size: 45px;
        }
        .map-text {
            height: 70px;
            font-size: 25px;
            color: #fff;
            line-height: 70px;
            background: url("../../assets/imgs/line_bg.png");
            padding-left: 35px;
            margin-bottom: 10px;
            background-size: 100% 100%;
            span {
                float: left;
            }
        }
    }
    .map-main {
        width: 700px;
        height: 600px;
        position: absolute;
        left: 70px;
        top: 90px;
        // background: red;
        #map {
            width: 700px;
            height: 600px;
        }
    }
}
.map-title {
    position: absolute;
    top: 0px;
    left: 160px;
    font-size: 40px;
    font-weight: bold;
}
</style>
