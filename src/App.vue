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
import { reqCategoryList } from "./api";
export default {
  name: "App",
  async mounted() {
    const result = await reqCategoryList();
    console.log(result);
  },
  components: {
    Footer,
    Header
  }
};
</script>

<style>
</style>