<template>
  <div class="main-layout relative">
    <div class="navbar">
      <div class="flex cursor-pointer" @click="isOpen = !isOpen">
        <Icon name="radix-icons:hamburger-menu" class="size-8" />
      </div>
      <div :class="[borderColor, 'flex items-center space-x-2 border px-4 py-1 rounded-full']">
        <div :class="[dotColor, 'size-2 rounded-full']"></div>
        <p :class="[textColor, 'font-poppins']">avaliable for work!</p>
      </div>
    </div>

    <transition name="slide-down">
      <div v-if="isOpen" class="fixed w-screen h-screen bg-secondary z-[100]"></div>
    </transition>

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

const isOpen = ref(false)

const borderColor = computed(() => `border-${app.pageMeta.secondary_theme_color}`)
const dotColor = computed(() => `bg-${app.pageMeta.main_theme_color}`)
const textColor = computed(() => `text-${app.pageMeta.secondary_theme_color}`)

const navbarInfo = ref({
  title: 'ginger',
  links: [
    { name: 'works', href: '/works' },
    { name: 'about', href: '/about' },
    { name: 'contact', href: '/contact' },
  ],
})

// const getDotColor = () => {
//   switch (app.pageMeta.main_theme_color) {
//     case 'totiw':
//       return 'bg-totiw text-totiw border-totiw'
//     default:
//       return 'bg-primary'
//   }
// }

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
  @apply px-3 py-3 fixed w-full bg-white/10 backdrop-blur z-[100];
  @apply flex justify-between items-center;
}

.footer {
  @apply absolute bottom-0 bg-transparent w-full text-center py-6 z-[100];
}
</style>
