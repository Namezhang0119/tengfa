// pages/list/list.js

const { pinpai, chexing,pinpai2 } = require("../../pulgins/apis")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        carBrand: '',
        carModel: '',
        arr: [],
        chexing: []
    },
    get() {
        pinpai(
            this.data.carBrand
        ).then(res => {
            this.setData({
                arr: res.data.data.content
            })
            console.log(this.data.arr);
        })
    },
    che(e) {
        this.setData({
            carModel:e.currentTarget.dataset.id
        })
        pinpai2(
            this.data.carModel,
        ).then(res => {
            this.setData({
                arr: res.data.data.content
            })
        })
    },
    chushi() {
        chexing().then(res => {
            this.setData({
                chexing: res.data.data.content
            })
            console.log(this.data.chexing);
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options.label);
        this.setData({
            carBrand: options.label
        })
        this.get()
        this.chushi()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})