<template>
  <div class="wrapper">
    <div class="colors">
      <div class="start-page" v-if="!isGameStart">
        <div class="button" @click="handleGameStatus(true)">
          Start
        </div>
      </div>
      <div class="event-page" v-else>
        <div
          class="image-wrapper"
          v-for="(item, index) in list"
          :key="item"
          :style="{ 'background-image': `url(${item})` }"
        >
          <img
            v-if="activeIndex === index"
            :src="item"
            @click="handleNextPic(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import colorImgs from "../imageData/color-image";
const {
  blackImgs,
  pinkImgs,
  purpleImgs,
  redImgs,
  whiteImgs,
  yellowImgs,
  greenImgs,
  orangeImgs,
  blueImgs,
} = colorImgs;
const initImgList = [].concat([
  ...blackImgs,
  ...pinkImgs,
  ...purpleImgs,
  ...redImgs,
  ...whiteImgs,
  ...yellowImgs,
  ...greenImgs,
  ...orangeImgs,
  ...blueImgs,
]);

const getNums = () => {
  return Math.floor(Math.random() * list.value.length);
};
const isGameStart = ref(false);
const list = ref([...initImgList]);
const activeIndex = ref(getNums());
function handleGameStatus(status) {
  isGameStart.value = status;
}

function handleNextPic(index) {
  if (list.value.length === 1) {
    // reset
    list.value = Array.from(initImgList);
  }
  list.value.splice(index, 1);
  activeIndex.value = getNums();
}
</script>
<style scoped lang="scss">
@mixin centerBg($size: contain) {
  background-size: $size;
  background-repeat: no-repeat;
  background-position: center;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-image: url('../assets/colors/steve-johnson-Xx_d26R37E4-unsplash.jpg');
  @include centerBg(cover);
}
.colors {
  margin: 0 auto;
  padding: 0;
  max-width: 1920px;
  width: 1334px;
  height: 750px;
  .start-page {
    width: 100%;
    height: 100%;
    background-image: url("../assets/colors/main-bg.png");
    @include centerBg();
    position: relative;
    .button {
      position: absolute;
      bottom: 4%;
      left: 50%;
      transform: translate(-50%);
      width: 480px;
      height: 130px;
      color: #fff;
      font-size: 40px;
      padding: 35px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  .event-page {
    width: 100%;
    height: 100%;
  }
  .image-wrapper {
    cursor: pointer;
    width: 1334px;
    img {
      width: 100%;
    }
  }
}
</style>
