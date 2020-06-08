<template>
  <div>
    <!-- 商品分类 -->
    <TypeNav />
    <!--列表-->
    <LsitContainer />
  </div>
</template>

<script>
import LsitContainer from "./ListContainer/ListContainer";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getFloors");
  },
  components: {
    LsitContainer
  }
};
</script>

<style lang="less" scoped>
</style>
