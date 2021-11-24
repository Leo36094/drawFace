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
  width: 500px;
  height: 500px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid black;
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
