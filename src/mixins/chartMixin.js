/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-04-06 09:37:24
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-08 09:36:01
 */

import { throttle } from '@/utils/tools'
const resizeChartMethod = '$__resizeChartMethod'

export default {
    created() {
        window.addEventListener('resize', this[resizeChartMethod])
    },
    beforeDestroy() {
        window.removeEventListener('reisze', this[resizeChartMethod])
    },
    methods: {
        // 通过防抖函数来控制resize的频率
        [resizeChartMethod]: throttle(function() {
            if (this.chart) {
                this.chart.resize()
            }
        }, 300)
    }
}
