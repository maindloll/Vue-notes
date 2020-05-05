<template>
  <div>
    <task-board></task-board>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import TaskBoard from "./components/TaskBoard.vue";
export default {
  data() {
    return {};
  },
  components: {
    TaskBoard
  }
};
</script>

<style>
body {
  background-color: #f6f0c4;
  background-image: linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%);
}
</style>