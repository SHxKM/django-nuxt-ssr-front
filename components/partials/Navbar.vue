<template>
  <nav class="flex flex-col justify-between items-center flex-wrap">
    <div>
      <nuxt-link
        class="font-extra-bold text-gray-900 hover:text-gray-700 no-underline text-base lg:text-xl tracking-tight"
        :to="{'name': 'index'}">
        Django Nuxt SSR - To Do With Vue
      </nuxt-link>
    </div>
      <div class="text-lg mt-3">
        <!-- todo: find a DRY way -->
        <nuxt-link
          class="mr-2"
          :to="{'name': 'index'}">
          <fa :icon="['fas', 'home']"/>
        </nuxt-link>
        <nuxt-link
          class="mr-2"
          :to="{'name': 'about'}">
          <fa :icon="['fas', 'question-circle']"/>
        </nuxt-link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SHxKM/django-vue-ssr"><fa :icon="['fab', 'github']"/></a>
      </div>
  </nav>
</template>
