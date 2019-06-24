<template>
  <div class="card">
    <div class="p-3">
      <div class="flex justify-between text-gray-700 text-sm font-bold leading-none tracking-tighter">
          <p class="mb-1">
            {{ todo.title }}
          </p>
          <span class="align-middle">
          <fa
          :id="todo.id"
          :icon="taskIcon"
          :class="{ 'blink-button': beingModified, 'mr-1 shadow-lg text-gray-600 text-xs align-bottom hover:text-green-500 cursor-pointer': true }"
          @click="deleteToDo(todo.id)"/>
          </span>
      </div>
        <div class="text-gray-600 text-xs">
          {{ todo.description }}
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

// helper function
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export default {
  props: {
    todo: { default: null, type: Object }
  },
  data() {
    return {
      beingModified: false,
      removeButtonText: "Remove",
      taskIcon: "window-close"
    }
  },
  methods: {
    ...mapActions("todo", {
      deleteToDoItem: "deleteToDoItem"
    }),
    deleteToDo(toDoID) {
      this.beingModified = true
      this.removeButtonText = "Removing.."
      sleep(420).then(() => deleteFunc())
      const deleteFunc = () => {
        this.deleteToDoItem(toDoID)
          .then()
          .catch(() => this.markAsFailed())
          .finally((this.beingModified = false))
      }
    },
    markAsFailed() {
      this.beingModified = false
      this.taskIcon = "exclamation-triangle"
    }
  }
}
</script>

<style scoped lang="postcss">
.card {
  .blink-button {
    animation: blink 1s linear infinite;
  }

  @keyframes blink {
    from {
      opacity: 100%;
    }
    to {
      opacity: 0;
    }
  }
}
</style>
