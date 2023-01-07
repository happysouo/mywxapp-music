// pages/user/user.js

import { request } from "../../utils/request";

// 定义滑动的初始值
let clientY='';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        translateY:'',
        transition:"",
        // 用户信息
        userInfo:{

        },
        // 播放记录
        records:[],
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

    // 5.获取用户的播放记录
    async getRecord(){
        const res=await request({
            url: '/user/record',
            data: {
                   uid: this.data.userInfo.userid,
                   // type: 0 表示所有的播放记录，1 表示最近一周的播放记录
                   type: 1
            }
        })
        // 保存数据
        this.setData({
            records:res.data.weekData?.slice(0,10) || [],
        })
    },

    //  初始化获取数据
    onLoad() {
        // 获取本地存储数据-用户信息
        const userInfo=wx.getStorageSync('userinfo');
        this.setData({
            userInfo:{
            userid:userInfo.userId,
            avater:userInfo.avatarUrl,
            nickName:userInfo.nickname,
            }
        })
        // 调用获取播放记录
        this.getRecord();
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