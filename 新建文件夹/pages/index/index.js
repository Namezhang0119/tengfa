// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {

  },
  // 事件处理函数

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
})
