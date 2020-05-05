<template>
  <div>
    <div class="input-group mb-2 mt-2" v-for="(task, index) in tasks" :key="task.id">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input type="checkbox" v-model="task.status" />
        </div>
      </div>
      <div
        class="form-control task"
        :class="isStatus(task.status)"
        @dblclick="taskEdit(index)"
        v-show="task.edit"
      >
        <p>{{ task.title }}</p>
      </div>
      <button class="btn btn-danger" @click="removeTask(index)" v-show="task.edit">Удалить</button>
      <input type="text" class="form-control" v-model="newTask" key="task.id" v-show="!task.edit" />
      <button class="btn btn-info" @click="taskSave(index, newTask)" v-show="!task.edit">Сохранить</button>
      <button class="btn btn-secondary" @click="taskEdit(index)" v-show="!task.edit">Отмена</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: false,
      newTask: ""
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    removeTask(index) {
      this.$store.commit("removeTask", index);
    },
    isStatus(status) {
      if (status) {
        return "taskDone";
      }
      return "taskToDo";
    },
    taskSave(index) {
      this.$store.commit("taskSave", { index: index, title: this.newTask });
      console.log(this.newTask);
      this.newTask = "";
    },
    taskEdit(index) {
      this.$store.commit("taskEdit", index);
    }
  }
};
</script>
<style>
.task {
  color: white;
  padding-left: 20px;
  padding-top: 5px;
}
.task:hover {
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.taskDone {
  background-image: linear-gradient(315deg, #3bb78f 0%, #0bab64 74%);
}
.taskToDo {
  background-image: linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);
}
.buttonAdd {
  background-color: #94c997;
  background-image: linear-gradient(315deg, #94c997 0%, #daacec 74%);
  color: white;
}
</style>