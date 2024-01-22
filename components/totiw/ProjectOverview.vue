<template>
  <div>
    <div class="text-[48px] border-b border-dark pb-4">Project Overview</div>
    <div class="grid grid-cols-1 lg:grid-cols-10 space-y-10 lg:space-y-0 my-10">
      <div class="lg:col-start-1 lg:col-end-7">
        <p class="text-xl">
          This project utilizes the design thinking method. It begins with setting goals and
          understanding the needs of the target group. The application is then designed and
          structured, and real user tests and feedback are used to refine the design. Finally, the
          application is developed to its final design, ensuring a user-centered and innovative
          solution.
        </p>

        <div class="flex flex-wrap xl:flex-nowrap mt-8 w-full items-center justify-center">
          <div v-for="(flow, index) in overviewFlow" :key="index" class="flex items-center mr-2">
            <em v-if="index !== 0" class="ic ic-long-arrow-right text-primary w-10 h-2 mr-2" />
            <p class="text-center">{{ flow }}</p>
          </div>
        </div>
      </div>

      <div class="lg:col-start-8 lg:col-end-11 flex flex-col space-y-6">
        <div>
          <h5 class="font-medium">Duration</h5>
          <p class="text-primary">8 Month</p>
        </div>

        <div>
          <h5 class="font-medium">Tool</h5>
          <p class="text-primary">Figma, Miro, Overflow, Procreate</p>
        </div>

        <div>
          <h5 class="font-medium">Methods</h5>
          <p class="text-primary">
            Interviews, Empathy mapping, Persona, AEIOU framework, POINT analysis, Flowcharts,
            Wireframes, Information Architecture, Usability Testing
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const overviewFlow = ref(['Research', 'Define', 'Ideate', 'Prototype Testing', 'Final product'])
</script>
