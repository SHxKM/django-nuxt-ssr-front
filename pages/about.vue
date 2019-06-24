<template>
  <div class="text-sm max-w-md border-b-2 pb-6">
      <div>
        <h4 class="text-base font-semibold">
          About To Do with Vue
        </h4>
        <p>
          <i>Django To Do With Vue v2</i> is an expirement in utilizing technologies and practices
          in web development that I haven't used before.
        </p>
        <p>
          It can serve as a general template, but is not to be relied upon to utilize best practices in produciton.
          <a
            href="https://github.com/SHxKM/django-vue-ssr"
            target="_blank"
            rel="noopener">
            <fa :icon="['fab', 'github']"/>
          </a>
        </p>
      </div>
      <div>
        <h4 class="text-base font-semibold">
          Stack
        </h4>
        <p>This web-app is built as a Vue SSR app, which means some of the content is rendered server-side in order to avoid SEO penalties.</p>
        <p>
          The backend is built in Python with Django and the
          <a
            href="https://www.django-rest-framework.org/">Django REST framework</a>.
        </p>
        <p>
          The frontend is where it gets more interesting.
          Unlike its v1 counterpart written purely in Vue, v2 isn't an SPA, and it utilizes the
          <code>Nuxt.js</code> framework to make life a little easier. A
          <code>Vuex</code> store handles state management,
          and the young but wonderful
          <code>Tailwind</code> is used as a CSS framework.
        </p>
      </div>
      <div>
        <h4 class="text-base font-semibold">
        Deployment to Heroku
        </h4>
        <p>The backend and frontend apps are deployed separately.</p>
      </div>
  </div>
</template>
