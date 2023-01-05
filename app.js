// app.js
App({
  onLaunch(){
    // 设置本地存储
    wx.setStorage({
      key:'todo',
      data:{
        uid:3,
        todoList:[ 
        {id:1,title:'学习',done:true},
        {id:2,title:'学习',done:false},
        {id:3,title:'学习',done:false},
      ],
      }
    })
  },
  // 设置全局数据，用来保存共享的数据
  globalData:{
   
  }
})
