// 封装一个promise
// 获取cookie
const cookie=wx.getStorageSync('mycookie');
export const request=(config)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
          url: 'http://localhost:3000'+config.url,
          data:config.data,
          header:{...config.header,cookie:cookie},
          method:config.method,
          success(res){
              if(res.data.code!==200){
                wx.showToast({
                    icon:'error',
                    title: res.data.message,
                  })
                reject(res.data.message);
              }else{
              
                    resolve(res);
              }
          },
          fail(e){ 
            wx.showToast({
                icon:'error',
                title: e,
              })
            reject(e);
          }
        })
    })
}