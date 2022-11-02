// index.js
// 获取应用实例
const app = getApp()
const {ershouche}=require("../../pulgins/apis")
Page({
  data: {
    arr:[]
  },
  // 事件处理函数
  qingqiu(){
    ershouche().then(res=>{
     
        this.setData({
            arr:res.data.data.content
        })
        console.log(this.data.arr);
    })
  },
  onLoad() {
  this.qingqiu()
  }
})
