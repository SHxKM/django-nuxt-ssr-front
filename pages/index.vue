<template>
  <div class="flex flex-wrap mt-6">
    <todo-list class="w-full lg:w-1/4 mr-8 mb-8" />
    <todo-create-form class="w-full lg:w-1/4 sm:w-3/4 mr-24 mb-8" />
    <todo-stats class="w-full lg:w-1/4 sm:w-3/4" />
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
        async fetch({ store, params }) {
            console.log("fetch is being called")
            await store.dispatch('todo/getToDos')
        },
        mounted() {
            // set-up websocket
            const self = this
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

<style>

</style>
