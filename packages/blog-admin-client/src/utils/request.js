import axios from 'axios'

const config = {
    baseURL: 'http://localhost:9990/api/v1',
    withCredentials: false,
    timeout: 15 * 60 * 1000
}

const _axios = axios.create(config)

axios.interceptors.request.use((response) => {
    const excludes = ['/user/login']

    if (!excludes.includes(response.url)) {
        response.headers.Authorization = 'Authorization'
    }

    return response
})

export const get = (url, params, conf = {}) => {
    return new Promise((resolve, reject) => {
        _axios.get(url, params, conf ?? {}).then((res) => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res)
            }
        })
    })
}

export const post = (url, data, conf = {}) => {
    return new Promise((resolve, reject) => {
        _axios.post(url, data, conf ?? {}).then((res) => {
            if (res.status === 200) {
                resolve(res.data)
            } else {
                reject(res)
            }
        })
    })
}

export default _axios
