<template>
  <div>
    <h3 class="text-3xl mb-3">Your to-do stats</h3>
    <p>
      <b>
        You have
        <transition name="fade" mode="out-in">
          <span :key="todos_counter">{{ todos_counter }}</span>
        </transition>
        <span v-if="todos_counter !== 1">items</span>
        <span v-else>item</span>
      </b>.
    </p>
    <p>
      Watch how this entirely independent component utilizes a
      <code>Vuex</code> store (state) in order to update the todo counter whenever a change occurs.
    </p>
    <div class="bg-green-200 rounded p-3 border-green-400 border-2 max-w-xs mb-3">
      <p class="text-green-800">
        <span class="font-bold">Realtime:</span> Open two different tabs to see how
        item creation and deletion are synced betwen clients.
      </p>
    </div>
    <div class="bg-yellow-200 rounded p-3 border-yellow-400 border-2 max-w-xs">
      <p class="text-yellow-800">
        <span class="font-bold">Note:</span> This demo app is hosted on a free Heroku
        dyno
        <a
          href="https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping"
          rel="noopener"
          target="_blank"
        >that sleeps</a> after 30 minutes of inactivity. Therefore it could load much slower than it's supposed to
        when it first "wakes up".
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ToDoStats",
  data: () => ({
    animateOn: "none",
    updatedBefore: false,
    initialText: "no internal (hover for disclaimer)",
    pShouldAnimate: false
  }),
  // there's no need to redefine props when we have computed
  computed: {
    ...mapGetters("todo", {
      todos_counter: "todos_counter"
    })
  },
  // watch: {
  //     todos_counter() {
  //         if (!this.updatedBefore) {
  //             this.updatedBefore = true
  //         } else {
  //             this.animateOn = "fade"
  //         }
  //     }
  // },
  methods: {
    changeText() {
      this.initialText = "very little";
    }
  }
};
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
