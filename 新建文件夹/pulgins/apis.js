const axios = require('./axios')
const baseUrl = "https://api.tf2sc.cn"
const headers= {
    "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    PlatformType: "h5"
}
export function ershouche(obj) {
    return axios({
        header:headers,
        url: baseUrl  + `/api/tfcar/car/list?`,
        // ...obj
    })
}