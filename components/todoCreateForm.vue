<template>
  <div class="rounded border overflow-hidden">
    <div class="text-sm bg-blue-500 text-white pl-3 py-1 uppercase">
      <fa :icon="['fas', 'plus']"/>
    </div>

    <form @submit.prevent="onAddTask">
        <div class="p-3 text-xs">
        <div class="flex mb-6 md:items-center">
          <input
              id="task-title"
              v-model="task.title"
              required
              class="py-2 px-4 text-gray-800 border-gray-200 border-2  rounded w-full focus:outline-none focus:bg-white focus:border-blue-500 appearance-none"
              type="text"
              placeholder="Go to the store">
        </div>
        <div class="md:flex md:items-center mb-6">
          <textarea
            id="task-description"
            v-model="task.description"
            class="py-2 px-4 text-gray-800 leading-none border-2 border-gray-200 appearance-none rounded w-full focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="Remember the milk.."/>
        </div>
        <div class="text-center">
            <div>
            <button
              class="py-2 px-4 bg-blue-500 leading-none bg-local text-white font-bold rounded hover:bg-blue-600 focus:shadow-outline focus:outline-none"
              :class="{ 'blink-button': beingSubmitted }"
              type="submit">
                Submit
              </button>
          </div>
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
