import { isObject, isArray, type } from "./type.js";

/**
 * @name getDate
 * @description 获取时间数组中的某一项
 * @param times ElDatePicker中type为dateRange时的数组
 * @param index times的下标
 * @returns 时间点-精确到日
 */
export const getDate = (times, index = 0) => {
    try {
        if ([null, undefined].includes(times)) {
            return null;
        } else {
            if (times && times.length > 0) {
                return times[index];
            } else {
                return null;
            }
        }
    } catch (error) {
        return null;
    }
};

/**
 * @name formatParam
 * @description 格式化Request Data；删除Object中undefined，null，''
 * @param data 被格式化的对象
 * @returns 格式化后的对象-Object
 */
export const formatParam = data => {
    const type = isObject(data);
    if (type) {
        const entries = Object.entries(data);
        for (const [key, value] of entries) {
            if (value === undefined || value === null || value === "") {
                delete data[key];
            }
            if (isObject(value)) {
                formatParam(value);
            }
        }
    }
    return data || {};
};

/**
 * @name flat
 * @description 数组扁平化-只使用于基础数据类型
 * @param {Array} arr 要进行扁平化的数组
 * @param {Number} depth 深度
 * @returns Array
 */
export const flat = (arr, depth = 1) => {
    if (Array.prototype.flat) {
        return arr.flat(depth);
    } else {
        let res = [],
            depthNum = 0,
            flatMap = item => {
                item.map((element, index, array) => {
                    if (isArray(element)) {
                        if (depthNum < depth) {
                            depthNum++;
                            flatMap(element);
                        } else {
                            res.push(element);
                        }
                    } else {
                        res.push(element);
                        if (index === array.length - 1) depthNum = 0;
                    }
                });
            };
        flatMap(arr);
        return res;
    }
};

/**
 * 合并两个对象，碰到Object类型的就合并值
 * @param {Object} obj1 合并参数1
 * @param {Object} obj2 合并参数2
 */
export const deepMerge = (obj1, obj2) => {
    if (isObject(obj1) && isObject(obj2)) {
        const entries = Object.entries(obj2);
        for (const [key, value] of entries) {
            if (isObject(obj1[key]) && isObject(value)) {
                obj1[key] = deepMerge(obj1[key], value);
            } else {
                obj1[key] = value;
            }
        }
        return obj1;
    } else {
        throw "合并的两个参数都必须是Object";
    }
};

/**
 * 增加千分位分隔符
 * @param {String|Number} val 被格式化的数字
 */
export const thousandsSeparator = val => {
    const typeStr = type(val);
    if (typeStr === "Number") {
        return val.toLocaleString();
    } else if (typeStr === "String") {
        return Number(val).toLocaleString();
    } else {
        throw "thousandsSeparator方法的参数只能传String/Number类型";
    }
};

/**
 * 删除商品内容中空的children数组
 */
export function parseMenus(list) {
    return list.map(cur => {
        if (cur.children && cur.children.length) {
            if (cur.children[0].type === 1) {
                const children = parseMenus(cur.children);
                return { id: cur.id, name: cur.name, url: cur.url, children: children };
            } else {
                return {
                    id: cur.id,
                    name: cur.name,
                    url: cur.url,
                };
            }
        } else {
            return {
                id: cur.id,
                name: cur.name,
                url: cur.url,
            };
        }
    });
}

/**
 * 移除树形数据中空的children
 * @param {*} arr
 * @returns
 */
export function removeEmptyArray(arr) {
    return arr.map(c => {
        const { children, ...other } = c;
        if (children && children.length) {
            return {
                ...other,
                children: removeEmptyArray(children),
            };
        } else {
            return {
                ...other,
            };
        }
    });
}
/**
 * 生成默认的分页数据
 * @returns
 */
export const generatorPageData = () => {
    return {
        page: 1,
        size: 10000,
    };
};
/**
 * 格式化树形数据-{value: '', label: ''}
 * @param {*} arr
 * @returns
 */
export const parseTree = arr => {
    return arr.map(c => {
        const { children, ...other } = c;
        if (children && children.length) {
            return {
                value: other.id,
                label: other.name,
                children: parseTree(children),
            };
        } else {
            return {
                value: other.id,
                label: other.name,
            };
        }
    });
};

/**
 * 处理菜单数据
 * 把菜单树转化成kv结构的数据 { [key: Url]: Array<String> }
 */
function parseAuth(data) {
    return data.map(c => {
        if (c.children && c.children.length) {
            const children = parseAuth(c.children);
            if (c.children[0].type === 2) {
                return {
                    id: c.id,
                    name: c.name,
                    url: c.url,
                    buttonList: children,
                };
            } else {
                return {
                    id: c.id,
                    name: c.name,
                    url: c.url,
                    children: children,
                };
            }
        } else {
            if (c.type === 1) {
                return {
                    id: c.id,
                    name: c.name,
                    url: c.url,
                    buttonList: [],
                };
            } else {
                return c.name;
            }
        }
    });
}

function arr2map(arr) {
    let map = {};
    arr.map(c => {
        if (c.children && c.children.length) {
            map = {
                ...map,
                ...arr2map(c.children),
            };
        } else {
            map[c.url] = c.buttonList || [];
        }
    });
    return map;
}

export function getAuth(arr) {
    const tmp = parseAuth(arr);
    return arr2map(tmp);
}

export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil((difference / duration) * 50);

    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }

        let d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }
    scroll(from, to, step);
}
/**下载文件 */
export const downloadByBlob = (blob, filename) => {
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click(); // 点击下载
    let timer = setTimeout(() => {
        link.remove(); // 下载完成移除元素
        window.URL.revokeObjectURL(link.href);
        clearTimeout(timer);
        timer = undefined;
    }, 10);
};
