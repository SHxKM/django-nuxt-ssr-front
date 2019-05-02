<template>
  <div class="flex flex-wrap mt-6 mr-6 lg:justify-between">
    <todo-list class="mb-8 lg:mr-0 mr-12" />
    <todo-create-form class="mb-8 lg:w-1/3" />
    <todo-stats class="lg:w-1/3 md:w-2/3" />
  </div>
</template>

<script>

    import todoList from '../components/todoList'
    import todoStats from '../components/todoStats'
    import todoCreateForm from '../components/todoCreateForm'

    export default {
        components: {
            todoList,
            todoStats,
            todoCreateForm
        },

        async fetch({ store }) {
            // noinspection ES6ShorthandObjectProperty
            await store.dispatch('todo/getToDos')
        },

        mounted() {
            // set-up websocket
            const chatSocket = new WebSocket(process.env.BASE_WS)
            chatSocket.onmessage = (e) => {
                const data = JSON.parse(e.data)
                if (data.message === "do_update") {
                    this.$store.dispatch('todo/getToDos')
                }
            }
        }
    }
</script>
