<template>
  <div class="card rounded border-2 mb-4">
    <div class="p-3">
      <div class="text-lg mb-2 font-semibold">
        {{ todo.title }}
      </div>
      <div class="text-gray-800 mb-3">
        {{ todo.description }}
      </div>
      <div class="text-right mr-1 mt-5">
        <button
          :id="todo.id"
          :class="{ 'blink-button': beingModified, 'bg-red-700 rounded p-2 text-white align-right font-bold': true }"
          @click="deleteToDo(todo.id)"
        >
          {{ removeButtonText }}
        </button>
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
      removeButtonText: "Remove"
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
      this.removeButtonText = "Couldn't remove. Retry?"
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
