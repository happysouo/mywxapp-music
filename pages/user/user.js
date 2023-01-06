// pages/user/user.js

// 定义滑动的初始值
let clientY='';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        translateY:'',
        transition:"",
    },

    // 1.touch按下
    touchstartHandler(e){
        console.log(e);
        clientY=e.touches[0].clientY;
        this.setData({
            transition:' '
        })
    },
    // 2.touch移动
    touchmoveHandler(e){
         //移动距离=移动距离-初始距离
         const moveY=e.touches[0].clientY-clientY;
         this.setData({
             translateY:moveY+'rpx'
         })
    },
    // 3.touch放开
    touchendHandler(){
        // 复位+过渡效果
        this.setData({
            translateY:0,
            transition:"transform 1s"
        })
    },

    // 4.点击头像跳转到登录页
    loginHandler(){
        console.log(1);
        wx.navigateTo({
          url: "/pages/login/login"
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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