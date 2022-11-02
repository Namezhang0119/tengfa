const axios = require('./axios')
const baseUrl = "https://api.tf2sc.cn"
const headers= {
    "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    PlatformType: "h5"
}
//首页 二手车 数据
export function ershouche(obj) {
    return axios({
        header:headers,
        url: baseUrl  + `/api/tfcar/car/list?`,
        // ...obj
    })
}
//便携
export function bianxie(obj) {
    return axios({
        header:headers,
        url: baseUrl  + `/api/tfcar/car/convenient`,
        // ...obj
    })
}
//二手车 车型接口

export function chexing(obj) {
    return axios({
        header:headers,
        url: baseUrl  + `/api/tfcar/car/model`,
        // ...obj
    })
}
//详情
export function xiangqing(obj) {
    return axios({
        header:headers,
        url: baseUrl  + `/api/tfcar/car/basicInfo/${obj}`,
        // ...obj
    })
}
//二手车 品牌
// export function pinpai(obj) {
//     return axios({
//         header:headers,
//         url: baseUrl  + `/api/tfcar/car/customSeries`,
//         // ...obj
//     })
// }
//二手车选择 品牌
export function pinpai  (obj){
    return axios({
        header:headers,
        url: baseUrl+'/api/tfcar/car/list?carBrand='+ obj,
    })
}