import { post } from '../utils/request.js'

export const login = (data) => {
    const url = '/user/login'
    return post(url, data)
}
