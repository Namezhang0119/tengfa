// index.js
// 获取应用实例
const app = getApp()
const {ershouche,chexing,bianxie}=require("../../pulgins/apis")
Page({
  data: {
    arr:[],
    bianjiearr:[],
    chexingarr:[]
  },
  // 事件处理函数
  qingqiu(){
    ershouche().then(res=>{
        this.setData({
            arr:res.data.data.content
        })
    })
  },
  //车型
  chex(){
    chexing().then(res=>{
        this.setData({
            chexingarr:res.data.data.content
        })
        console.log(this.data.chexingarr);
    })
  },
  //便捷
  bianx(){
    bianxie().then(res=>{
        this.setData({
            bianjiearr:res.data.data.convenientBrands
        })
        console.log(this.data.bianjiearr);

    })
  },
  //go 二手
  golsit(e){
    console.log(e.currentTarget.dataset.label);
    wx.navigateTo({
      url: '/pages/list/list',
      success:res=>{
        res.eventChannel.emit('label',e.currentTarget.dataset.label)
      }
    })
  },
  //详情
  godetail(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/main/main',
      success:res=>{
        res.eventChannel.emit('id',e.currentTarget.dataset.id)
      }
    })
  },
  onLoad() {
  this.qingqiu()
  this.chex()
  this.bianx()
  }
})
