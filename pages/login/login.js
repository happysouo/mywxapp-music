// pages/login/login.js
<<<<<<< HEAD
import {request} from '../../utils/request';

=======
>>>>>>> 07243908633d47632152e63fd43bde0ede651dcc
Page({

    /**
     * 页面的初始数据
     */
    data: {
<<<<<<< HEAD
        phone:'',
        password:'',
    },

    // 1.收集用户的登录信息
    inputHandler(e){
        // 判断是手机号还是密码
        const type=e.currentTarget.id;
        this.setData({
            [type]:e.detail.value,
        })
    },

    // 2.点击登录
   async login(){
        // 成功则跳转到个人中心
     const res=  await request({
            url:'/login/cellphone',
            data:{
                phone:this.data.phone,
                password:this.data.password,
            }
        })
        // 本地缓存
        wx.setStorageSync('userinfo',res.data.profile)
        // 保存cookie
        wx.setStorageSync('mycookie', res.data.cookie);
        console.log(res.data.cookie,'res.data.cookie');
        console.log(res,'res');
        wx.showToast({
          icon:'success',
          title: '登录成功！',
        })
        setTimeout(()=>{
            wx.reLaunch({
          url: '/pages/user/user',
        })
        })
        
=======

>>>>>>> 07243908633d47632152e63fd43bde0ede651dcc
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