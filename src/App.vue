<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { reqCategoryList,reqBanners,reqFloors } from "./api";
export default {
  name: "App",
  async mounted() {
    // const result = await reqCategoryList();
    // console.log(result);
    this.$store.dispatch("getCategoryList");
    //mockAjax接口
    // const result_floors  = await reqFloors()
    // const result_banners  = await reqBanners()
    // console.log(result_floors)
    // console.log(result_banners)
  },
  components: {
    Footer,
    Header
  }
};
</script>

<style>
</style>