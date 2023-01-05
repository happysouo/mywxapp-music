// 引入封装的request
import {request} from '../../utils/request';
// 因为这个数据不需要渲染，也不需要响应的，所以不用定义在 data 中
const playLists = [{idx: 0, name: '新歌榜'}, {idx: 1, name: '热歌榜'}, {idx: 2, name: '原创榜'}, {idx: 3, name: '飙升榜'}];
Page({
  
  data:{
    bannerList:[],  //轮播图列表
    RecommendList:[], //推荐歌曲
    songupList:[],  //排行榜
  },

  // 1.获取轮播图数据
  async getBannerList(){
    const res= await request({
        url:'/banner',
        data: {
            type: 2
        }
    }) ;
    // 设置数据
    this.setData({
        bannerList:res.data.banners
    })
  },

  // 2.获取推荐歌曲数据
  async getRecommendList(){
    const res=await request({
        url:'/personalized',
        data:{
            limit:8,
        }
    })
    this.setData({
        RecommendList:res.data.result
    })
  },

  // 3.获取排行榜数据，根据不同id获取
  async getSongUp(){
    // 根据不同排行榜标题获取不同数据
    for(let i=0;i<playLists.length;i++){
        const res=await request({
            url:'/top/list',
            data:{
                idx:playLists[i].idx
            }
        })
        this.setData({
            songupList:[...this.data.songupList,{
                name:res.data.playlist.name,
                privileges:res.data.playlist.tracks.slice(0,5),
            }]
        })
    }
  },
 
  // 初始化获取数据
  onLoad(){
    // 获取轮播图
    this.getBannerList();
    // 获取推荐歌单
    this.getRecommendList();
    // 获取排行榜
    this.getSongUp();
  }
})
