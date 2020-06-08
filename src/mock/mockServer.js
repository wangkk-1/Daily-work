import Mock from "mockjs"
import banners from "./banners"//引入的是json文件,得到的是对应的js的数组
import floors from "./floors"
Mock.mock("/mock/banners",{code:200,data:banners})
Mock.mock("/mock/floors",{code:200,data:floors})
// export default xxx 不需要暴露
console.log(1111)