// component/mod/mod.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title:String,
        subTitle:String,
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 1.
        tapMoreHandler(){
           this.triggerEvent('myevent','aaa');
        }
    }
})
