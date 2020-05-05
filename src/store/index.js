import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasksCounter: 4,
    tasks: [{
        title: 'Todo-list vue project',
        status: false,
        edit: true,
      },
      {
        title: 'Поработать',
        status: true,
        edit: true,
      },
      {
        title: 'Помыть посуду',
        status: true,
        edit: true,
      },
      {
        title: 'Убрать квартиру',
        status: false,
        edit: true,
      }
    ],

  },
  getters: {
    taskUncompileted(state) {
      return state.tasks.filter(task => task.status === false)
    },
    taskCompileted(state) {
      return state.tasks.filter(task => task.status === true)
    }
  },

  mutations: {
    addNewTask(state, title) {
      state.tasks.push({
        title: title,
        status: false,
        edit: true
      })
      state.tasksCounter++;
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
      console.log(index)
      state.tasksCounter--;
    },
    taskSave(state, temp) {
      state.tasks[temp.index].title = temp.title;
      state.tasks[temp.index].edit = !state.tasks[temp.index].edit;
      console.log(temp)
    },
    taskEdit(state, temp) {
      state.tasks[temp].edit = !state.tasks[temp].edit;
    }
  },
})