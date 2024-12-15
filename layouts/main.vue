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
      <div
        v-if="isOpen"
        class="fixed inset-0 w-screen h-screen bg-secondary z-[100] overscroll-auto"
      >
        <div class="absolute p-8">
          <Icon
            name="heroicons:x-mark"
            class="size-10 text-light cursor-pointer"
            @click="isOpen = !isOpen"
          />
        </div>

        <div class="flex flex-col items-center justify-center text-light py-10">
          <h5 class="text-3xl font-extralight">online portfolio</h5>
          <em class="ic ic-flower size-20 mt-8" />

          <div class="flex flex-col items-center justify-center">
            <div
              v-for="item in navbarInfo"
              :key="item.name"
              class="text-light hover:text-primary font-mogent text-[120px] hover:scale-110 transition-all duration-300 leading-[1.2] cursor-pointer"
              @click="handleNavigate(item.goTo)"
            >
              {{ item.name }}
            </div>
          </div>

          <nuxt-link
            to="https://www.linkedin.com/in/ginger-kotchagorn/"
            target="_blank"
            class="border border-light px-6 py-1 rounded-full flex items-center text-2xl font-extralight mt-6"
          >
            Linkedin <em class="ic ic-arrow-up-right size-4 ml-2" />
          </nuxt-link>
        </div>

        <div class="absolute bottom-0 flex items-center justify-center w-full mb-10">
          <h5 class="text-light">© ginger kotchagorn 2024</h5>
        </div>
      </div>
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
import { ref } from '#imports'

const app = useApp()
const router = useRouter()

const isOpen = ref(false)

const borderColor = computed(() => `border-${app.pageMeta.secondary_theme_color}`)
const dotColor = computed(() => `bg-${app.pageMeta.main_theme_color}`)
const textColor = computed(() => `text-${app.pageMeta.secondary_theme_color}`)

const navbarInfo = ref([
  { name: 'home', goTo: 'home' },
  { name: 'works', goTo: 'works' },
  { name: 'about', goTo: 'about' },
  { name: 'contact', goTo: 'contact' },
])

const handleNavigate = (slug: string) => {
  router.push(`/?slug=${slug}`)

  isOpen.value = false
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
