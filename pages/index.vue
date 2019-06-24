<template>
  <div class="flex flex-wrap flex-col justify-center items-center sm:justify-start sm:items-start justify-start  sm:flex-row">
    <todo-list class="mb-6 sm:mb-0 mr-0 sm:mr-3 shadow-lg"/>
    <todo-create-form class="shadow-lg "/>
</div>
</template>

<script>
import todoList from "../components/todoList"
import todoCreateForm from "../components/todoCreateForm"

export default {
  components: {
    todoList,
    todoCreateForm
  },

  async fetch({ store }) {
    // noinspection ES6ShorthandObjectProperty
    await store.dispatch("todo/getToDos")
  },

  mounted() {
    // set-up websocket
    const chatSocket = new WebSocket(process.env.BASE_WS)
    chatSocket.onmessage = (e) => {
      const data = JSON.parse(e.data)
      if (data.message === "do_update") {
        this.$store.dispatch("todo/getToDos")
      }
    }
  }
}
</script>
