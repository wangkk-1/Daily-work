<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideSubCategorys" @mouseenter="showCategorys">
        <h2 class="all">全部商品分类</h2>
        <transition name="move">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch2">
              <div class="item" @mouseenter="showSubScategorys(index)" :class="{item_on:index===currentIndex}" v-for="(c1,index) in categoryList" :key="c1.categoryId">
                <h3>
                  <!-- <router-link :to="`/search?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}`" >{{c1.categoryName}}</router-link> -->
                  <!-- <a href="javascript:" @click="toSearch({categoryName:c1.categoryName,category1Id:c1.categoryId})">{{c1.categoryName}}</a> -->
                  <a href="javascript:" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <router-link :to="`/search?categoryName=${c2.categoryName}&category2Id=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                        <!-- <a href="javescript:" @click="toSearch({categoryName:c2.categoryName,category2Id:c2.categoryId})">{{c2.categoryName}}</a> -->
                        <a href="javascript:" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <!-- <router-link :to="`/search?categoryName=${c3.categoryName}&category3Id=${c3.categoryId}`">{{c3.categoryName}}</router-link> -->
                          <!-- <a href="javescript:"  @click="toSearch({categoryName:c3.categoryName,category3Id:c3.categoryId})">{{c3.categoryName}}</a> -->
                          <a href="javascript:" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "loadsh/throttle";
// import { mapActions,mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -2,
      isShowFirst: this.$route.path === "/"
    };
  },
  computed: {
    //3级列表数据
    categoryList() {
      return this.$store.state.home.categoryList;
    },
     
  },
  mounted() {
    // this.getCategoryList();
    this.$store.dispatch("getCategoryList")
   
  },
  methods: {
    // ...mapActions(["getCategoryList"]),//getCategoryList(){this.$store.dispatch("getCategoryList")}
    //移入子列表显示    函数节流
    showSubScategorys: throttle(function(index) {
      if (this.currentIndex !== -2) {
        this.currentIndex = index;
      }
    }, 200),
    //移出隐藏子列表   (解决快速移出问题)
    hideSubCategorys() {
      this.currentIndex = -2;
      //如果当前不是首页,需要隐藏一级列表
      if (this.$route.path !== "/") {
        this.isShowFirst = false;
      }
    },
    //移入显示列表
    showCategorys() {
      this.isShowFirst = true;
      this.currentIndex = -1;
    },
    //编程式路由导航  事件太多 已注释
    toSearch({ categoryName, category1Id, category2Id, category3Id }) {
      const query = {
        categoryName: categoryName
      };
      if (category1Id) {
        query.category1Id = category1Id;
      } else if (category2Id) {
        query.category2Id = category2Id;
      } else if (category3Id) {
        query.category3Id = category3Id;
      }
      const location = {
        name: "search",
        query
      };
      this.$router.push(location);
    },
    //使用事件委派进行编程式路由跳转  (点击A标签时调用hideSubCategorys隐藏列表)
    toSearch2(event) {
      // console.log(event.target.tagName)
      // const tagName = event.target.tagName
      //取出data自定义属性
      const {categoryname,category1id,category2id,category3id} = event.target.dataset;
      if (!categoryname) return;
      const query = {
        categoryName: categoryname
      };
      if (category1id) {
        query.category1Id = category1id;
      } else if (category2id) {
        query.category2Id = category2id;
      } else if (category3id) {
        query.category3Id = category3id;
      }
      
      const location = {
        name: "search",
        query
      };
      //取出当前params中的keyword
      const keyword = this.$route.params.keyword
      if (keyword) {
        location.params = {keyword}
      }
      if(this.$route.path.indexOf("/search")!==0){
        this.$router.push(location)
      }else{
        this.$router.replace(location)
      }
      //自动隐藏列表
      this.hideSubCategorys();
    }
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.move-enter-active{
        transition: all .5s;
      }
      &.move-enter,&.move-leave-to{
        opacity: 0;
        height: 0;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
