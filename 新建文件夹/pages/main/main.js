// pages/main/main.js
const {xiangqing}=require("../../pulgins/apis")
Page({

    /**
     * 页面的初始数据
     */
    data: {
      id:'',
      arr:[]
    },
    xiangq(){
        xiangqing(
                this.data.id
            
        ).then(res=>{

            this.setData({
                arr:res.data.data
            })
            console.log(this.data.arr);
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      var id=''
      const eventChannel =this.getOpenerEventChannel()
      eventChannel.on('id',function(data){
        console.log(data);
        id=data
      })
      this.setData({
        id:id
      })
      console.log(this.data.id);
      this.xiangq()
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