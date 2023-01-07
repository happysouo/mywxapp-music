// pages/video/video.js
import { request } from "../../utils/request";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        groupList:[],
        itemId:'scroll58100',
        videoList:[],
    },

    // 1.获取视频页所有导航列表
    async getGroupList(){
        const res=await request({
            url:'/video/group/list',
        })
        // 保存数据
        this.setData({
            groupList:res.data.data?.slice(0,10) || [],
        })
    },

    // 2.点击切换视频导航
    changeItem(e){
        console.log(e,'nav');
        this.setData({
            itemId:e.currentTarget.id,
        })
        this.getVideoList();
    },

    // 3.获取视频列表
    async getVideoList(){
        const id= this.data.itemId.slice(6,11)
        const res=await request({
            url:'/video/group',
            data: { id: id },
        })
        console.log(res,'vv');
        this.setData({
            videoList:res.data.datas,
        })
    },
   
    // 初始化获取数据
    onLoad() {
        // 1.
        this.getGroupList();
        // 2.
        this.getVideoList();
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