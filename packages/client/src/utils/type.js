/**
 * @name type
 * @description 判断数据类型
 * @param {any} any 要判断的参数
 * @exports type
 * @returns 类型-String
 */
export const type = any => {
    const initType = Object.prototype.toString.call(any);
    return initType.replace(/^(\[object )([a-zA-Z]+)(\])$/, "$2");
};
/**
 * @name isArray
 * @description 是否是Array类型
 * @param {any} any 要判断的参数
 * @exports isArray
 * @returns True/False
 */
export const isArray = any => {
    if (Array.isArray) {
        return Array.isArray(any);
    }
    return type(any) === "Array";
};
/**
 * @name isObject
 * @description 是否是Object类型
 * @param {any} any 要判断的参数
 * @exports isObject
 * @returns True/False
 */
export const isObject = any => {
    return type(any) === "Object";
};
/**
 * @name isString
 * @description 是否是String类型
 * @param {any} any 要判断的参数
 * @exports isString
 * @returns True/False
 */
export const isString = any => {
    return type(any) === "String";
};
/**
 * @name isFunction
 * @description 是否是Function类型
 * @param {any} any 要判断的参数
 * @exports isFunction
 * @returns True/False
 */
export const isFunction = any => {
    return type(any) === "Function";
};
