<template>
  <div
    :class="[
      'draw-result',
      `draw-result--${$props.group}`,
      {
        [`draw-result--${$props.group}--${$props.imageNum}`]:
          imageNum,
      },
    ]"
  ></div>
</template>
<script setup>
defineProps({
  imageNum: String | Number,
  group: String,
});
</script>
<style scoped lang="scss">
$types: "A", "B", "C", "D";
.draw-result {
  width: 70%;
  height: 70%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 20px auto;
  @each $type in $types {
    &--#{$type} {
      background-image: url("../assets/#{$type}.jpg");
      @for $i from 1 through 36 {
        &--#{$i} {
          background-image: url("../assets/#{$type}/#{$type}_#{$i}.jpg");
        }
      }
    }
  }
}
</style>
