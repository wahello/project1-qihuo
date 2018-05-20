import request from '../../../utils/request'
import config from '../../../utils/config'

export function getList(values){
    return request(config.server + 'appapi/question',{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body:values
    })
}