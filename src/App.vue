<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { message } from "ant-design-vue";
import Group from "./components/Group.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
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
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
