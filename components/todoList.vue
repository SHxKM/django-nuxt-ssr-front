<template>
  <div class="rounded border overflow-hidden">
    <div class="text-sm bg-green-500 text-white pl-3 py-1">
      <fa :icon="['fas', 'list']"/>
      <b>
        <transition
          name="fade"
          mode="out-in">
          <span :key="todos_counter">{{ todos_counter }}</span>
        </transition>
        <span v-if="todos_counter !== 1">todos</span>
        <span v-else>todo</span>
      </b>
    </div>

    <transition-group name="list-complete" class="relative-parent flex flex-col lowercase" tag="div">
      <template v-if="todos">
        <to-do-item
          v-for="item in todos"
          :key="item.id"
          :todo="item"
          class="list-complete-item w-64"/>
      </template>
    </transition-group>

    <p v-if="todos.length === 0" class="text-gray-700 w-3/4">
      Looks like you don't have any to do items...
    </p>
  </div>
</template>

<script>
import ToDoItem from "@/components/todoItem"
import { mapGetters } from "vuex"

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
    },
    ...mapGetters("todo", {
      todos_counter: "todos_counter"
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
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
  margin-top: 30px;
}

.list-complete-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
