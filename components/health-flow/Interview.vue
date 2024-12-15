<template>
  <div>
    <h1 class="text-healthflow text-4xl">Interview</h1>
    <div class="mt-4 grid grid-cols-4 gap-4 divide-x-2 divide-gray-200">
      <div v-for="item in listCard" class="flex items-center justify-center space-x-4 px-4 py-8">
        <h5 class="text-healthflow-secondary font-bold text-4xl">{{ item.description }}</h5>
        <p v-html="item.title" class="w-fit"></p>
      </div>
    </div>

    <div class="mt-4">
      <img src="/images/works/healthflow/interview1.png" alt="interview" />
    </div>

    <div class="grid grid-cols-2 gap-10 mt-10">
      <div>
        <h5 class="text-2xl text-healthflow-secondary font-medium">Objective</h5>
        <ul class="list-disc text-healthflow-secondary ml-6 mt-4 flex flex-col gap-1">
          <li>
            Collected data from the Health Tech
            <span class="text-black"
              >after 7 months of service to identify problems and opportunities for improvement.
            </span>
          </li>
          <li>
            Studied proactive health screening processes
            <span class="text-black">to design a streamlined health care system.</span>
          </li>
          <li>
            <span class="text-black"
              >Focused on making services faster, reducing staff workload, and
            </span>
            improving user experience.
          </li>
        </ul>
      </div>

      <div>
        <h5 class="text-2xl text-healthflow-secondary font-medium">Scope</h5>
        <p class="mt-4">
          Conducted interviews and collected data at
          <span class="text-healthflow-secondary font-bold">4 Health Tech:</span>
        </p>
        <ul class="list-disc px-12 flex flex-col gap-1 my-2">
          <li>Health Tech Sanam Luang 2</li>
          <li>Health Tech Victoria Gardens</li>
          <li>Health Tech Nong Khaem District Office</li>
          <li>Health Tech Seacon Bangkae</li>
        </ul>
        <p>
          Observed and gathered insights during
          <span class="text-healthflow-secondary font-bold">3 health screening caravan events</span>
          organized by the company.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
const listCard = ref([
  {
    title: 'Health Tech <br /> Centers Observed',
    description: '4',
  },
  {
    title: 'Health Caravan <br /> Events Observed',
    description: '3',
  },
  {
    title: 'Users Interviewed',
    description: '4',
  },
  {
    title: 'Health Staff <br /> Interviews',
    description: '10+',
  },
])
</script>
