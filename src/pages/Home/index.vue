<template>
  <div>
    <!-- 商品分类 -->
    <TypeNav />
    <!--列表-->
    <LsitContainer />
    <Foolr v-for="floor in floors" :key="floor.id" :floor="floor" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LsitContainer from "./ListContainer/ListContainer";
import Foolr from "./Foolr/Foolr";
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getBanners");
    this.$store.dispatch("getFloors");
  },
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  },
  components: {
    LsitContainer,
    Foolr
  }
};
</script>

<style lang="less" scoped>
</style>
