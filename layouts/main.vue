<template>
  <div class="main-layout relative">
    <div class="navbar">
      <nuxt-link to="/">
        <h1 class="text-2xl font-bold text-primary">{{ navbarInfo.title }}</h1>
      </nuxt-link>
      <div class="flex space-x-16">
        <a
          v-for="(link, index) in navbarInfo.links"
          :key="index"
          href="#"
          @click="handleNavigate(link.name)"
        >
          <p class="text-2xl font-light link-underline link-underline--primary hover:text-primary">
            {{ link.name }}
          </p>
        </a>
      </div>
    </div>
    <main>
      <slot />
    </main>
    <div class="footer">
      <h5 class="text-secondary">© ginger kotchagorn 2024</h5>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import VueScrollTo from 'vue-scrollto'
import { ref } from '#imports'

const app = useApp()
const router = useRouter()

const navbarInfo = ref({
  title: 'ginger',
  links: [
    { name: 'works', href: '/works' },
    { name: 'about', href: '/about' },
    { name: 'contact', href: '/contact' },
  ],
})

const handleNavigate = (slug: string) => {
  if (app.pageMeta.title === 'main') {
    VueScrollTo.scrollTo(`#${slug}`, 500, { offset: -100 })
  } else {
    router.push(`/`)
    setTimeout(() => {
      VueScrollTo.scrollTo(`#${slug}`, 500, { offset: -100 })
    }, 500)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply px-36 py-8 fixed w-full bg-white/10 backdrop-blur z-[100];
  @apply flex justify-between items-center;
}

.footer {
  @apply absolute bottom-0 bg-transparent w-full text-center py-6 z-[100];
}
</style>
