<template>
  <div class="wrapper">
    <div class="score">SCORE: {{ score }}</div>
    <div class="colors">
      <div class="time">{{ readableCountdown }}</div>
      <div class="start-page" v-if="gameStatus === GAME_STATUS.READY">
        <div class="button" @click="gameStart">Start</div>
      </div>
      <template v-else-if="gameStatus === GAME_STATUS.PLAYING">
        <div class="event-page">
          <div
            v-for="(item, index) in list"
            :key="item"
            :class="[
              'image',
              { 'image--show': activeIndex === index },
            ]"
            :style="{ 'background-image': `url(${item})` }"
          >
          <img id="preload" :src="item" />
          </div>
        </div>
        <div class="answer-group">
          <a-button
            class="answer-group__btn"
            @click="handleNextPic(activeIndex, ANSWER.CORRECT)"
            size="large"
          >
            😎
          </a-button>
          <a-button
            class="answer-group__btn"
            @click="handleNextPic(activeIndex, ANSWER.WRONG)"
            size="large"
          >
            🤮
          </a-button>
        </div>
      </template>
      <div v-else class="gameover">
        <span>YOUR SCORE: {{ score }}</span>
        <a-button size="large" @click="resetGame">CONFIRM</a-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import useInterval from "../utils/useInterval";
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
const GAME_STATUS = {
  READY: "ready",
  PLAYING: "playing",
  END: "end",
};
const ANSWER = {
  CORRECT: "correct",
  WRONG: "wrong",
};
const TOTAL_TIME = 90;

const countdown = ref(TOTAL_TIME);
const score = ref(0);
const gameStatus = ref(GAME_STATUS.READY);

const [doInterval, removeInterval] = useInterval();
const readableCountdown = computed(() => {
  const mins = Math.floor(countdown.value / 60);
  const secs = countdown.value % 60;

  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(
    2,
    "0"
  )}`;
});

const getNums = () => {
  return Math.floor(Math.random() * list.value.length);
};
const list = ref([...initImgList]);
const activeIndex = ref(getNums());
function handleGameStatus(status) {
  gameStatus.value = status;
}

function handleNextPic(index, answer) {
  if (list.value.length === 1) {
    // reset
    list.value = Array.from(initImgList);
  }
  if (answer === ANSWER.CORRECT) score.value++;
  list.value.splice(index, 1);
  activeIndex.value = getNums();
}

function handleGameover() {
  handleGameStatus(GAME_STATUS.END);
  countdown.value = TOTAL_TIME;
  removeInterval();
}

function gameStart() {
  handleGameStatus(GAME_STATUS.PLAYING);
  doInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else handleGameover();
  }, 1000);
}

function resetGame() {
  handleGameStatus(GAME_STATUS.READY);
  score.value = 0;
  countdown.value = TOTAL_TIME;
  removeInterval();
}

const mode = import.meta.env.MODE;
const cdn = computed(() =>
  mode === "development"
    ? import.meta.env.VITE_COLORS
    : import.meta.env.VITE_COLORS_PROD
);
const bg = computed(
  () => `url(${cdn.value}/steve-johnson-Xx_d26R37E4-unsplash.jpg)`
);
const countdownBg = computed(() => `url(${cdn.value}/main-bg.png)`);
</script>
<style scoped lang="scss">
@mixin centerBg($size: contain) {
  background-size: $size;
  background-repeat: no-repeat;
  background-position: center;
}
#preload {
  display: none;
}
.wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: black;
  background-image: v-bind("bg");
  @include centerBg(cover);
}
.score {
  position: absolute;
  right: 0;
  top: 0;
  color: lemonchiffon;
  font-size: 50px;
  font-weight: bold;
}
.time {
  font-size: 50px;
  color: #0d0d0d;
  background-color: rgba(antiquewhite, 0.7);
  width: 250px;
  border-radius: 10px;
  font-weight: bold;
  margin: 0 auto 30px auto;
}
.gameover {
  width: 768px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin: 30px;
  }
  span {
    font-size: 40px;
  }
}
.answer-group {
  display: flex;
  align-items: center;
  justify-content: center;
  &__btn {
    padding: 10px 40px;
    width: 300px;
    font-size: 40px;
    height: auto;
    border-radius: 4px;
    margin: 0 15px;
  }
}
.colors {
  margin: 0 auto;
  padding: 0;
  width: 960px;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .start-page {
    width: 100%;
    height: 600px;
    background-image: v-bind("countdownBg");
    @include centerBg();
    position: relative;
    .button {
      position: absolute;
      bottom: 8%;
      left: 50%;
      transform: translate(-50%);
      width: 250px;
      height: 80px;
      color: #fff;
      font-size: 40px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  .image {
    display: none;
    width: 960px;
    height: 560px;
    @include centerBg();
    &--show {
      display: block;
    }
  }
}
</style>
