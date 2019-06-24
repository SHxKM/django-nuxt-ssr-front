<template>
  <div class="flex flex-col justify-between min-h-screen mx-auto max-w-lg px-3">
  <div class="py-8">
    <app-navbar id="navbar" class="mb-12 flex-grow"/>
    <nuxt class="max-w-lg mx-auto"/>
  </div>
  <app-footer class="max-w-sm mx-auto my-12"/>
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
