/**
 * 把对象保存在localStorge中
 * @param name
 * @param data
 */
export function setLocalStorage(name, data) {
        window.localStorage.setItem(name, JSON.stringify(data))
}

/**
 * 从localStorge中取出对象
 * @param name
 * @returns {any}
 */
export function getLocalStorage(name) {
    let data = window.localStorage.getItem(name);
    return JSON.parse(data);
}