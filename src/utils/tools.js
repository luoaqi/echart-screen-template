/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-03-31 11:56:23
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-08 09:35:29
 */
/**
 * @params string
 * @description s to h:m:s
*/
export function secondToHours(second) {
    const hours = Math.floor((second % 86400) / 3600)
    const minutes = Math.floor(((second % 86400) % 3600) / 60)
    const seconds = Math.floor(((second % 86400) % 3600) % 60)
    const duration = hours + ':' + minutes + ':' + seconds
    return duration
}

/*
 * throttle：实现函数的节流（目的是频繁触发中缩减频率）
 实现场景：例如window的resize\scroll事件，我们再调整窗口时该事件会被触发非常多次，此时应用防抖是需要的
 *   @params
 *      func:需要执行的函数
 *      wait:自己设定的间隔时间(频率)
 *   @return
 *      可被调用执行的函数
 */
export function throttle(func, wait = 500) {
    let timer = null
    let previous = 0 // 记录上一次操作时间
    return function anonymous(...params) {
        const now = new Date() // 当前操作的时间
        const remaining = wait - (now - previous)
        if (remaining <= 0) {
            // 两次间隔时间超过频率：把方法执行即可
            clearTimeout(timer)
            timer = null
            previous = now
            func.call(this, ...params)
        } else if (!timer) {
            // 两次间隔时间没有超过频率，说明还没有达到触发标准呢，设置定时器等待即可（还差多久等多久）
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
                previous = new Date()
                func.call(this, ...params)
            }, remaining)
        }
    }
}

/*
 * debounce：实现函数的防抖（目的是规定时间内频繁触发中只执行一次）
实现场景：例如用户的频繁点击按钮，只让他再规定时间内只触发一次
 *  @params
 *     func:需要执行的函数
 *     wait:检测防抖的间隔频率
 *     immediate:是否是立即执行（如果为TRUE是控制第一次触发的时候就执行函数，默认FALSE是以最后一次触发为准）
 *  @return
 *     可被调用执行的函数
 */

export function debounce(func, wait = 300, immediate = false) {
    let timer = null
    return function(...params) {
        const now = immediate && !timer
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            !immediate ? func.call(this, ...params) : null
        }, wait)
        // 若为立即执行，则
        now ? func.call(this, ...params) : null
    }
}
