<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Carousel",
  props: {
    carouselList: Array, //轮播图数据
    autoplay: Boolean
  },
  mounted() {
    if (this.carouselList.length > 0) {
      this.initSwiper();
    }
  },
  watch: {
    /* carouselList() {
      this.$nextTick(() => {
        this.initSwiper();
      });
    }, */
    carouselList: {
      //监视的回调
      handler() {
        if (this.carouselList.length === 0) return;
        //利用nextTick延迟到页面更新完之后采取创建swiper对象
        this.$nextTick(() => {
          this.initSwiper();
        });
      }
      // immediate: true //初始显示就会调用一次
    }
  },
  methods: {
    //轮播图
    //使用ref不会影响到其他轮播
    initSwiper() {
      console.log("创建swiper对象");
      new Swiper(this.$refs.swiper, {
        // direction: 'horizontal', // 水平切换, 默认就是这个值
        loop: true, // 循环模式选项
        autoplay: this.autoplay, // 是否自动轮播
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
