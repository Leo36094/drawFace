import { ref } from "vue";

export default function useInterval() {
  const interval = ref();
  function doInterval(callback, ms) {
    interval.value = setInterval(callback, ms);
  }
  function removeInterval() {
    clearInterval(interval.value);
    interval.value = null;
  }

  return [doInterval, removeInterval];
}
