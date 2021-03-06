//element-ui相关
import { Button,Select,Pagination,MessageBox,Message } from 'element-ui'
import Vue from 'vue'

//注册全局组件
Vue.component(Button.name, Button) //el-button
Vue.component(Select.name, Select) //el-select
Vue.component(Pagination.name, Pagination) //el-pagination-- //也可以使用 Vue.use(Pagination)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

//2种UI组件
// 1. 标签组件 ==> 写对应的标签产生对应的界面效果
// 2. 函数/对象组件  ==>执行函数或者调用对象的方法出现对应的效果
/* 对画框
    this.#msgbox()   -----通用的显示对话框的函数
    this.$alert()    -----$msgbox的包装函数,专门用来显示alert框
    this.$confirm()  -----$msgbox的包装函数,专门用来显示confirm框

    axios()
    axios.get()     内部都是调用axios()发的get请求
    axios.post()    内部都是调用axios()发的post请求
*/