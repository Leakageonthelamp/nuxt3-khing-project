<template>
  <div class="carousel">
    <Carousel
      ref="carouselRef"
      :class="[
        'relative rounded-lg overflow-hidden',
        backgroundColor ? backgroundColor : 'bg-white',
      ]"
    >
      <Slide v-for="(slide, index) in items" :key="`slide-${index}`">
        <div class="">
          <img class="w-full max-h-[689px] object-contain" :src="slide.image" :alt="slide.title" />
        </div>
      </Slide>

      <template #addons="{ slidesCount, currentSlide }">
        <div v-if="slidesCount > 1">
          <div
            v-if="currentSlide !== 0"
            class="absolute top-[85%] left-[5%] rounded-full flex items-center justify-center p-4 cursor-pointer"
            :class="['transition-all hover:scale-110', buttonColor ? buttonColor : 'bg-primary/80']"
            @click="handlePrev"
          >
            <Icon name="i-fa6-solid:angle-left" class="w-8 h-8 text-white" />
          </div>
          <div
            v-if="currentSlide !== slidesCount - 1"
            class="absolute top-[85%] right-[5%] rounded-full flex items-center justify-center p-4 cursor-pointer"
            :class="['transition-all hover:scale-110', buttonColor ? buttonColor : 'bg-primary/80']"
            @click="handleNext"
          >
            <Icon name="i-fa6-solid:angle-right" class="w-8 h-8 text-white" />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

interface ICarouselItem {
  title: string
  image: string
}

const props = defineProps<{
  buttonColor?: string
  backgroundColor?: string
  items: ICarouselItem[]
}>()

const carouselRef = ref<unknown>(null)

const handlePrev = () => {
  const ref = carouselRef.value as any
  ref.prev()
}

const handleNext = () => {
  const ref = carouselRef.value as any
  ref.next()
}
</script>

<style lang="scss" scoped></style>
