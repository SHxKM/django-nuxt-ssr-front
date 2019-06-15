<template>
  <div class="p-6">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/4 mr-8">
        <h4 class="text-3xl">About To Do with Vue</h4>
        <p>
          <b>Django To Do With Vue v2</b> is an expirement in utilizing technologies and practices
          in web development that I haven't used before.
        </p>
        <p>
          This project is over-engineered on the one hand,
          and not really production-ready on the other (you can help with that).
          My goal wasn't to build a todo app per se, but to expirement with all the "cutting-edge" stuff
          out there.
        </p>
        <p>
          It can serve as a general template, but is not to be relied upon to utilize best practices in produciton.
          <a
            href="https://github.com/SHxKM/django-vue-ssr"
            target="_blank"
            rel="noreferrer"
          >
            <fa :icon="['fab', 'github']"/>
          </a>
        </p>
      </div>
      <div class="w-full md:w-1/3 mr-8">
        <h4 class="text-3xl">Stack</h4>
        <p>This web-app is built as a Vue SSR app, which means some of the content is rendered server-side in order to avoid SEO penalties.</p>
        <p>
          The backend is built in Python with Django and the
          <a
            href="https://www.django-rest-framework.org/"
          >Django REST framework</a>.
        </p>
        <p>
          The frontend is where it gets more interesting.
          Unlike its v1 counterpart written purely in Vue, v2 isn't an SPA, and it utilizes the
          <code>Nuxt.js</code> framework to make life a little easier. A
          <code>Vuex</code> store handles state management,
          and the young but wonderful
          <code>Tailwind</code> is used as a CSS framekwork.
        </p>
      </div>
      <div class="w-full md:w-1/3">
        <h4 class="text-3xl">Deployment to Heroku</h4>
        <p>The backend and frontend apps are deployed separately.</p>
      </div>
    </div>
  </div>
</template>
