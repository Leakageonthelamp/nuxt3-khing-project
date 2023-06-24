import HomePage from '~/features/Homepage/index.vue';
<template>
  <div class="homepage">
    <div class="header">
      <img
        class="w-full h-screen object-cover"
        src="/images/homepage/header.png"
        alt="homepage-header"
      />
      <div class="absolute inset-0 flex flex-col text-center justify-center items-center">
        <h1 class="text-secondary text-[96px] font-bold">hello :)</h1>
        <h4 class="text-3xl leading-relaxed mt-14 mb-6">
          i’m Kotchagorn Angchuan <br />
          <span class="text-secondary">you can call me</span> khing, ขิง(ginger)
        </h4>
        <h2 class="text-[48px]">I’m UX<span class="text-secondary">/UI</span> Designer</h2>
      </div>
    </div>
    <div class="homepage-body">
      <img class="w-full object-cover" src="/images/homepage/main-bg.png" alt="main-body-bg" />
      <div class="body-section">
        <HomeProjectSelection class="my-40" />
        <HomeAboutMe />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup></script>

<style lang="scss" scoped>
.homepage {
  .header {
    @apply relative;
  }

  .homepage-body {
    @apply relative;
    .body-section {
      @apply absolute inset-0;
    }
  }
}
</style>
