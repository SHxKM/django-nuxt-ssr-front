<template>
  <div class="min-h-screen flex flex-col font-sans">
    <app-navbar />
    <nuxt class="ml-6 flex-grow" />
    <app-footer />
  </div>
</template>

<script>
  import appNavbar from '~/components/partials/Navbar'
  import appFooter from '~/components/partials/footer'
  
  export default {
    components: {
      appNavbar,
      appFooter
    }
  }

</script>

<style>
/*eslint-disable */
.page-enter-active, .page-leave-active {
  transition: all .25s linear;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
/*eslint-enable */
</style>
