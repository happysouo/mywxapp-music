// 封装一个promise
<<<<<<< HEAD
// 获取cookie
const cookie=wx.getStorageSync('mycookie');
=======
>>>>>>> 07243908633d47632152e63fd43bde0ede651dcc
export const request=(config)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
          url: 'http://localhost:3000'+config.url,
          data:config.data,
<<<<<<< HEAD
          header:{...config.header,cookie:cookie},
=======
          header:config.header,
>>>>>>> 07243908633d47632152e63fd43bde0ede651dcc
          method:config.method,
          success(res){
              if(res.data.code!==200){
                wx.showToast({
                    icon:'error',
                    title: res.data.message,
                  })
                reject(res.data.message);
              }else{
<<<<<<< HEAD
              
=======
>>>>>>> 07243908633d47632152e63fd43bde0ede651dcc
                    resolve(res);
              }
          },
          fail(e){ 
<<<<<<< HEAD
            wx.showToast({
                icon:'error',
                title: e,
              })
=======
>>>>>>> 07243908633d47632152e63fd43bde0ede651dcc
            reject(e);
          }
        })
    })
}