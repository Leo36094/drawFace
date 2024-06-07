<script setup>
import { ref, onBeforeMount, onMounted, computed, inject } from "vue";

import { message } from "ant-design-vue";
import Group from "../components/Group.vue";
import { GAME } from "../constants";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

const { syncCurrentGame } = inject("switchGame");

const getList = () =>
  Array(36)
    .fill(0)
    .map((_, index) => index + 1);

const groups = ref(["A", "B", "C", "D"]);
const groupMap = ref({
  A: getList(),
  B: getList(),
  C: getList(),
  D: getList(),
});

const currentGroup = ref("A");
const drawResult = ref("");
const isCurrentGroupEnd = computed(
  () => groupMap.value[currentGroup.value].length === 0
);

function onDraw() {
  const length = groupMap.value[currentGroup.value].length;
  if (length === 0) {
    message.warn("已全數抽完", 1);
  } else {
    const num = Math.floor(
      Math.random() * groupMap.value[currentGroup.value].length
    );
    const currentResult = groupMap.value[currentGroup.value][num];
    drawResult.value = currentResult;
    groupMap.value[currentGroup.value].splice(num, 1);
    localStorage.setItem("drawFace", JSON.stringify(groupMap.value));
    localStorage.setItem(
      "lastResult",
      JSON.stringify({
        group: currentGroup.value,
        num: currentResult,
      })
    );
  }
}

function handleGroupChange() {
  drawResult.value = "";
}
function resetGroup() {
  groupMap.value[currentGroup.value] = getList();
  drawResult.value = "";
}
onBeforeMount(() => {
  const initGroup = JSON.parse(localStorage.getItem("drawFace"));
  const lastResult = JSON.parse(localStorage.getItem("lastResult"));

  if (initGroup !== null) {
    groupMap.value = initGroup;
  }
  if (lastResult !== null) {
    currentGroup.value = lastResult.group;
    drawResult.value = lastResult.num;
  }
});
onMounted(() => {
  syncCurrentGame(GAME.DRAW_FACE);
});
</script>

<template>
  <div class="main">
    <header>
      <a-typography-title :level="2">
        Select a group
      </a-typography-title>
    </header>
    <a-radio-group
      v-model:value="currentGroup"
      @change="handleGroupChange"
      style="margin-bottom: 16px"
      size="large"
    >
      <a-radio-button
        v-for="group in groups"
        :key="group"
        :value="group"
        >{{ group }}
      </a-radio-button>
    </a-radio-group>
    <div class="content">Current Group: {{ currentGroup }}</div>
    <Group :group="currentGroup" :imageNum="drawResult" />
    <a-button
      class="button"
      @click="onDraw"
      :disabled="isCurrentGroupEnd"
    >
      {{ isCurrentGroupEnd ? "End" : "Draw" }}
    </a-button>
    <a-button class="button" @click="resetGroup">
      Back to Groups
    </a-button>
    <a-button
      v-if="isCurrentGroupEnd"
      style="margin: 0 10px"
      @click="resetGroup"
    >
      Reset
    </a-button>
    <p>Result: {{ drawResult }}</p>
  </div>
</template>

<style lang="scss" scoped>
.main {
  max-width: 1330px;
  height: 100vh;
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
  .button {
    margin: 10px;
    width: 150px;
  }
}
</style>
