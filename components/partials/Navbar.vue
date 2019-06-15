<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-700 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link
        class="font-semibold text-white hover:text-white no-underline text-base lg:text-xl tracking-tight"
        :to="{'name': 'index'}"
      >Django Nuxt SSR - To Do With Vue</nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        @click="toggleBurger"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <div
      :class="burgerToggled ? 'block': 'hidden'"
      class="w-full flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-sm lg:flex-grow">
        <!-- todo: find a DRY way -->
        <nuxt-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          :to="{'name': 'index'}"
          @click.native="hideBurger"
        >Home</nuxt-link>
        <nuxt-link
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          :to="{'name': 'about'}"
          @click.native="hideBurger"
        >About</nuxt-link>
        <a
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SHxKM/django-vue-ssr"
        >Github</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    burgerToggled: false
  }),

  methods: {
    toggleBurger() {
      this.burgerToggled = !this.burgerToggled;
    },
    hideBurger() {
      this.burgerToggled = false;
    }
  }
};
</script>
