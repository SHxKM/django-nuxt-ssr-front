<template>
  <div>
    <h3 class="mb-3 text-3xl">
      Create a new to-do item
    </h3>
    <form
      class="w-full max-w-sm"
      @submit.prevent="onAddTask"
    >
      <div class="mb-6 md:flex md:items-center">
        <div class="md:w-1/3">
          <label
            class="mb-1 md:mb-0 pr-4 block text-gray-700 font-bold md:left"
            name="to do item title"
            for="task-title"
          >Title</label>
        </div>
        <div class="md:w-2/3">
          <input
            id="task-title"
            v-model="task.title"
            required
            class="py-2 px-4 bg-gray-200 text-gray-800 border-gray-200 border-2 rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-teal-500 appearance-none"
            type="text"
            placeholder="Go to the store"
          >
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="mb-1 md:mb-0 pr-4 block md:text-left text-gray-700 font-bold"
            name="to do item description"
            for="task-description"
          >Description</label>
        </div>
        <div class="md:w-2/3">
          <textarea
            id="task-description"
            v-model="task.description"
            class="py-2 px-4 bg-gray-200 text-gray-800 border-2 border-gray-200 appearance-none rounded w-full leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            placeholder="Remember the milk.."
          />
          </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3" />
        <div class="md:w-2/3">
          <button
            class="py-2 px-4 bg-teal-700 text-white font-bold rounded hover:bg-teal-600 focus:shadow-outline focus:outline-none"
            :class="{ 'blink-button': beingSubmitted }"
            type="submit"
            >
              Submit
            </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"
function getEmptyTask() {
  return {
    title: "",
    description: ""
  }
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
      this.beingSubmitted = true
      this.CreateToDoItem(this.task).then((this.beingSubmitted = false))
      this.task = getEmptyTask()
    }
  }
}
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
