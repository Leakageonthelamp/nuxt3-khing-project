<template>
  <div>
    <section>
      <h1 class="text-4xl text-cnvr">Persona</h1>
      <p class="mt-6">
        From my observation and interviews, I learned that officials provide dog neutering services
        using the CNVR method. Dogs are either caught or brought by community members to specific
        locations on scheduled dates. After neutering, the dogs are returned to their original
        areas.
      </p>
      <p class="mt-6 text-cnvr">
        This led me to interview the officials responsible for the CNVR process. From them, I
        learned about the challenges they face in managing and implementing the program effectively.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <img src="/images/works/cnvr/define1.png" alt="define-1" class="w-full" />
        <img src="/images/works/cnvr/define2.png" alt="define-2" class="w-full" />
      </div>
    </section>

    <div class="divider my-10" />

    <section>
      <h1 class="text-4xl text-cnvr">Journey Map</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div class="flex flex-col">
          <img
            src="/images/works/cnvr/define3.png"
            alt="journey-1"
            class="w-full object-contain max-h-[480px]"
          />
          <p class="text-cnvr text-sm">
            Yellow boxes in the journey map indicate design opportunities.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <img
            src="/images/works/cnvr/define4.png"
            alt="journey-2"
            class="w-full object-contain max-h-[480px]"
          />
        </div>
      </div>

      <p class="mt-10">
        Based on the collected data, neutering agents schedule appointments with residents for dog
        neutering and provide additional vaccines for dogs that were not brought in, as some dogs
        can be aggressive. They also collect statistics and report them to the Department of
        Livestock Development or the local district office. Make me create objectives and scope for
        design.
      </p>
    </section>

    <div class="divider my-10" />

    <section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-16">
        <img src="/images/works/cnvr/define5.png" alt="define-5" class="w-full" />

        <div class="col-span-2 flex flex-col justify-center">
          <h1 class="text-cnvr text-4xl">Objective</h1>
          <img src="/images/works/cnvr/define6.png" alt="define-6" class="w-full mt-10" />
        </div>
      </div>

      <h1 class="text-cnvr text-4xl mt-16">Scope of work</h1>
      <img src="/images/works/cnvr/define7.png" alt="define-7" class="w-full mt-10" />
    </section>

    <div class="divider my-10" />

    <section>
      <h1 class="text-cnvr text-4xl">Brand Analysis</h1>
      <p class="mt-6">
        This project is part of my university course, requiring a brand to be integrated into the
        design like a campaign. I chose 7-Eleven because its identity aligns with the objectives.
      </p>
      <p class="mt-6">
        7-Eleven is a trusted and convenient brand, familiar to everyone, with its “หมาหน้าเซเว่น”
        image. The idea is to use 7-Eleven locations for vaccination registration and require
        additional vaccination points. Its presence in every community makes it accessible and easy
        to remember.
      </p>

      <div class="mt-10">
        <ImageCarousel :items="slideItems" buttonColor="bg-cnvr" backgroundColor="bg-cnvr/50" />
        <p class="text-cnvr text-sm">Some section form my brand analysis presentation.</p>
      </div>
    </section>
  </div>
</template>

<script lang="tsx" setup>
const slideItems = ref([
  {
    title: 'slide_1',
    image: '/images/works/cnvr/define-slide1.png',
  },
  {
    title: 'slide_2',
    image: '/images/works/cnvr/define-slide2.png',
  },
  {
    title: 'slide_3',
    image: '/images/works/cnvr/define-slide3.png',
  },
  {
    title: 'slide_4',
    image: '/images/works/cnvr/define-slide4.png',
  },
  {
    title: 'slide_5',
    image: '/images/works/cnvr/define-slide5.png',
  },
  {
    title: 'slide_6',
    image: '/images/works/cnvr/define-slide6.png',
  },
])
</script>
