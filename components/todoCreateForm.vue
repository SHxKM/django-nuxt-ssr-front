<template>
  <div>
    <h3 class="text-3xl mb-3">Create a new to-do item</h3>
    <form class="w-full max-w-sm" @submit.prevent="onAddTask">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-700 font-bold md:left mb-1 md:mb-0 pr-4"
            name="to do item title"
            for="task-title"
          >Title</label>
        </div>
        <div class="md:w-2/3">
          <input
            id="task-title"
            v-model="task.title"
            required
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            type="text"
            placeholder="Go to the store"
          >
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4"
            name="to do item description"
            for="task-description"
          >Description</label>
        </div>
        <div class="md:w-2/3">
          <textarea
            id="task-description"
            v-model="task.description"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            placeholder="Remember the milk.."
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"/>
        <div class="md:w-2/3">
          <button
            class="bg-teal-700 hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            :class="{ 'blink-button': beingSubmitted }"
            type="submit"
          >Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
function getEmptyTask() {
  return {
    title: "",
    description: ""
  };
}

// @ is an alias to /src
export default {
  data: () => ({
    task: getEmptyTask(),
    beingSubmitted: false,
    showModal: false
  }),
  methods: {
    ...mapActions("todo", {
      CreateToDoItem: "CreateToDoItem"
    }),
    onAddTask() {
      this.beingSubmitted = true;
      this.CreateToDoItem(this.task).then((this.beingSubmitted = false));
      this.task = getEmptyTask();
    }
  }
};
</script>

<style scoped>
@keyframes blink {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0;
  }
}
</style>
