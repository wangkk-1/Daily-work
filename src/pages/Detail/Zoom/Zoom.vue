<template>
  <div class="spec-preview">
    <img :src="imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="mask" ref="mask"></div>

    <div class="big">
      <img :src="bigImg" ref="bigMig" />
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
export default {
  name: "Zoom",
  props: {
    imgUrl: String,
    bigImg: String
  },
  methods: {
    //放大器鼠标移入事件
    move: throttle(function(event) {
      let left, top;
      const maskDiv = this.$refs.mask;
      const bigImg = this.$refs.bigMig;
      //当鼠标事件发生时，鼠标相对于事件源x/y轴的位置
      const { offsetX, offsetY } = event;
      const maskWidth = maskDiv.clientWidth;
      //计算left/top值
      left = offsetX - maskWidth / 2;
      top = offsetY - maskWidth / 2;
      //判断left/top值
      if (left < 0) {
        left = 0;
      } else if (left > maskWidth) {
        left = maskWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > maskWidth) {
        top = maskWidth;
      }
      //赋值
      maskDiv.style.left = left + "px";
      maskDiv.style.top = top + "px";
      bigImg.style.left = -2 * left + "px";
      bigImg.style.top = -2 * top + "px";
    }, 50)
  }
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>