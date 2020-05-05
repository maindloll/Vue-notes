<template>
  <div>
    <div class="input-group mb-2 mt-2" v-for="(task) in taskUncompileted" :key="task.id">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input type="checkbox" v-model="task.status" />
        </div>
      </div>
      <div class="form-control task" :class="isStatus(task.status)">
        <p>{{ task.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    taskUncompileted() {
      return this.$store.getters.taskUncompileted;
    }
  },
  methods: {
    isStatus(status) {
      if (status) {
        return "bg-success";
      }
      return "bg-info";
    }
  }
};
</script>
<style>
</style>
