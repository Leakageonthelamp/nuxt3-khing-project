<template>
  <div class="flex gap-20 justify-between py-20 px-10 overflow-hidden">
    <div class="w-full flex gap-10">
      <div class="flex justify-center w-full max-w-[368px]">
        <div class="flex items-center w-full max-w-[368px] min-w-[240px] relative">
          <nuxt-img
            :class="['w-full object-contain transition-opacity duration-500', 'hover:opacity-0']"
            src="/images/homepage/profile1.png"
            alt="profile1"
          />
          <nuxt-img
            :class="['w-full object-contain absolute duration-500 z-[-1]']"
            src="/images/homepage/profile1-alt.png"
            alt="profile1-alt"
          />
        </div>
      </div>
      <div class="flex flex-col gap-10 justify-center w-full min-w-[260px]">
        <div class="max-w-[368px] relative">
          <nuxt-img
            :class="['w-full object-contain transition-opacity duration-500', 'hover:opacity-0']"
            src="/images/homepage/profile2.png"
            alt="profile2"
          />
          <nuxt-img
            :class="['w-full object-contain absolute inset-0 duration-500 z-[-1]']"
            src="/images/homepage/profile2-alt.png"
            alt="profile2-alt"
          />
        </div>
        <div class="max-w-[518px] relative">
          <nuxt-img
            :class="['w-full object-contain transition-opacity duration-500', 'hover:opacity-0']"
            src="/images/homepage/profile3.png"
            alt="profile3"
          />
          <nuxt-img
            :class="['w-full object-contain absolute inset-0 duration-500 z-[-1]']"
            src="/images/homepage/profile3-alt.png"
            alt="profile3-alt"
          />
        </div>
      </div>
    </div>

    <div class="w-[600px] mt-4">
      <h2 class="text-[128px] leading-[0.72]">
        Kotchagorn
        <div class="flex items-center justify-between">
          <span><em class="ic ic-flower size-[70px]" /></span>
          <h2 class="mr-[7.6px]">angchuan</h2>
        </div>
      </h2>
      <div class="text-2xl text-secondary font-light font-poppins text-right mt-10">
        A junior designer who loves reading, doodling, collecting stickers — and yes, playing games.
        These passions inspire me to explore new ideas, build meaningful connections with people,
        and craft UX designs that bring joy through the thoughtful little details I put into every
        project.

        <div class="size-[400px] relative mt-20">
          <em
            class="ic ic-flower size-[400px] text-primary absolute -right-[25rem] animate-spin-slow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const isHoverProfile1 = ref(false)
</script>
