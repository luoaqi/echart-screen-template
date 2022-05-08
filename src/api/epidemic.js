/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-04-08 14:59:45
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-08 16:22:38
 */
import { request } from '../utils/request'

/**
 * 获取当前疫情接口
 * @param data
 * @returns {AxiosPromise}
 */
export function getEpidemicInfo() {
    return request({
        url: '/api/epidemic/info',
        method: 'post'
    })
}

/**
 * 获取近7天疫情接口
 * @param data
 * @returns {AxiosPromise}
 */
export function getEpidemicHistory() {
    return request({
        url: '/api/epidemic/history',
        method: 'post'
    })
}

/**
 * 获取中高风险地区接口
 * @param data
 * @returns {AxiosPromise}
 */
export function getEpidemicArea() {
    return request({
        url: '/api/epidemic/area',
        method: 'post'
    })
}
