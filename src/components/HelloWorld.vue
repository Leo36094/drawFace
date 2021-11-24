<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  Hello Vite
  <div class="test">
    <div class="vite">Under test</div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  .vite {
    color: #42b983;
  }
}
</style>
