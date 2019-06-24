<template>
  <div>
    <h3 class="mb-3 text-3xl">
      Your to-do stats
    </h3>
    <p/>
    <p>
      Watch how this entirely independent component utilizes a
      <code>Vuex</code> store (state) in order to update the todo counter whenever a change occurs.
    </p>
    <div class="bg-green-200 rounded p-3 border-green-400 border-2 max-w-xs mb-3">
      <p class="text-green-800"/>
    </div>
    <div class="bg-yellow-200 rounded p-3 border-yellow-400 border-2 max-w-xs">
      <p class="text-yellow-800"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "ToDoStats",
  data: () => ({
    animateOn: "none"

  }),
  // there's no need to redefine props when we have computed
  computed: {
    ...mapGetters("todo", {
      todos_counter: "todos_counter"
    })
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
