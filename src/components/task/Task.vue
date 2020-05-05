<template>
  <div>
    <b-tabs>
      <b-tab title="Все Задачи">
        <task-all></task-all>
      </b-tab>
      <b-tab title="Выполненые Задачи">
        <task-compileted></task-compileted>
      </b-tab>
      <b-tab title="Невыполненые Задачи">
        <task-uncompileted></task-uncompileted>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import TaskCompileted from "./TaskCompileted.vue";
import TaskUncompileted from "./TaskUncompileted.vue";
import TaskAll from "./TaskAll.vue";
export default {
  components: {
    TaskAll,
    TaskCompileted,
    TaskUncompileted
  }
};
</script>
<style>
</style>
