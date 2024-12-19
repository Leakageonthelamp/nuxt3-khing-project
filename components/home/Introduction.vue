<template>
  <div class="border-b border-black pt-20 md:pt-60">
    <nuxt-img
      src="/images/homepage/comp.gif"
      class="w-full"
      alt="section1"
      placeholder="/images/homepage/comp-placeholder.png"
      :placeholder-blur="10"
    />

    <div class="mt-10 md:mt-24 mb-4 md:mb-10">
      <div class="leading-normal font-poppins text-sm md:text-base">
        I using <span class="font-mogent text-primary tracking-wider">design thinking</span> to
        create products - talk with users, find their needs, brainstorm<br />
        solutions, design prototypes, and test them. This iterative cycle ensures I'm constantly<br />
        refining my ideas based on user feedback, leading to products that are both functional<br />
        and delightful to use.
      </div>
      <div class="flex justify-end">
        <em class="ic ic-flower size-[60px] md:size-[148px] text-secondary" />
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup></script>
