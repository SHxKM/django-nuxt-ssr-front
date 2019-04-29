<template>
    <div>
        <h3 class="text-3xl mb-3">
            Your to-do items
        </h3>
        <transition-group name="list-complete" class="relative-parent flex flex-col" tag="div">
            <template v-if="todos">
                <to-do-item
                        v-for="item in todos"
                        :key="item.id"
                        :todo="item"
                        class="list-complete-item w-64"
                />
            </template>
        </transition-group>

        <p v-if="todos.length === 0" class="text-gray-700 w-3/4">
            Looks like you don't have any to do items...
        </p>
    </div>
</template>

<script>
    import ToDoItem from '@/components/todoItem'
    export default {
        components: {
            ToDoItem
        },
        data: () => ({
            // uniqueDates: [],
        }),
        computed: {
            todos() {
                return this.$store.state.todo.todos
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .relative-parent {
        position: relative;
    }

    .list-complete-item {
        transition: all 1s;
        display: inline-block;
    }

    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);

    }

    .list-complete-leave-active {
        position: absolute;

    }
</style>
