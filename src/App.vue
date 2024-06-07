<script setup>
import { ref, computed, onMounted, provide } from "vue";
import { useRouter, useRoute } from "vue-router";
import { GAME } from "./constants";

const router = useRouter();
const route = useRoute();

const currentGame = ref(GAME.DRAW_FACE);

const translation = {
  [GAME.DRAW_FACE]: {
    title: "猜臉遊戲",
    subTitle: "平常愛當演員的，現在該你上場了！",
  },
  [GAME.GUESS_COLOR]: { title: "猜顏色", subTitle: "好好說話！" },
};
const routesMap = {
  [GAME.DRAW_FACE]: "/",
  [GAME.GUESS_COLOR]: "/colors",
};

const nextGame = computed(() =>
  currentGame.value === GAME.DRAW_FACE
    ? GAME.GUESS_COLOR
    : GAME.DRAW_FACE
);
const switchGame = () => {
  router.push({ name: nextGame.value });
  currentGame.value = nextGame.value;
};

const syncCurrentGame = (game = GAME.DRAW_FACE) => {
  currentGame.value = game;
};
provide("switchGame", {
  syncCurrentGame,
});

const openRule = ref(false);
const handleOk = () => {
  openRule.value = false;
};
const handleRuleOpen = () => {
  console.log("click");
  openRule.value = true;
};
onMounted(() => {
  router.push({ name: currentGame.value });
});
</script>

<template>
  <div class="main">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240, 0.5)"
      :title="translation[currentGame].title"
      :sub-title="translation[currentGame].subTitle"
      @back="switchGame"
    >
      <template #extra>
        <a-button key="3" @click="handleRuleOpen">玩法參考</a-button>
      </template>
    </a-page-header>
    <a-modal v-model:visible="openRule" title="Rules" @ok="handleOk">
      <div v-if="currentGame === GAME.DRAW_FACE">
        <ul>
          <li>每組會拿到對應組別的迷因圖庫</li>
          <li>派出一名上台，模仿抽到的圖片，答案為圖片的序號</li>
          <li>此頁面只能給上台者看到</li>
          <li>答對得分，最多 36 題</li>
          <li>可以倒數兩分鐘，看大家能猜到多少</li>
        </ul>
      </div>
      <div v-else>
        <ul>
          <li>主持人投影此頁面</li>
          <li>指派一名上台</li>
          <li>進行 90 秒的倒數計時，唸出文字真正的顏色</li>
          <li>答對，主持人點擊左邊按鈕，答錯點擊右邊</li>
        </ul>
      </div>
    </a-modal>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.sider {
  position: absolute;
  left: 5%;
  top: 5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
