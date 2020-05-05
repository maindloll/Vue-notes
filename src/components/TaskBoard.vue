<template>
  <div class="container">
    <div class="input-group mt-5 mb-4">
      <input
        class="form-control"
        v-model="newTask"
        placeholder="Новая задача"
        @keyup.enter="addNewTask(newTask)"
      />
      <button class="btn buttonAdd" @click="addNewTask(newTask)">Добавить</button>
    </div>

    <div class="taskCounter">
      <h2>Всего задач : {{tasksCounter}}</h2>
    </div>
    <task></task>
  </div>
</template>
<script>
import Task from "./task/Task.vue";
export default {
  data() {
    return {
      newTask: ""
    };
  },
  components: {
    Task
  },
  computed: {
    tasksCounter() {
      return this.$store.state.tasksCounter;
    }
  },
  methods: {
    addNewTask: function() {
      if (this.newTask.length > 0) {
        this.$store.commit("addNewTask", this.newTask);
        this.newTask = "";
      }
    }
  }
};
</script>
<style>
.taskCounter h2 {
  text-align: center;
  color: white;
}
</style>
