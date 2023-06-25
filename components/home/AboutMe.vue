<template>
  <div class="about-me relative">
    <div class="wrapper grid grid-cols-12 tracking-normal">
      <div class="col-start-6 col-end-11 z-10">
        <div class="heading w-[50%]">
          <h1 class="text-4xl font-normal mb-10">About me</h1>
          <p class="text-secondary">
            cooking enthusiast, gamer and food lover,<br />
            love discovering new experiences for my eyes,<br />
            knowledge, and tongue every weekday.
          </p>
        </div>
        <div class="description mt-20 mb-32">
          <p class="text-xl break-words">
            My colleague describes me as cheerful attitude and adaptability, as well as my ability
            to work efficiently and effectively. I have a passion for understanding the people and
            using my empathy to find solutions to their problems. Made bridge between product and
            user for the best experience use.
          </p>
          <p class="text-xl mt-16 break-words text-primary">
            l am currently seeking full-time opportunities in UX and UX/UI position both in hybrid
            and remote work.
          </p>
        </div>
        <div class="exp flex flex-col space-y-16">
          <div>
            <h2 class="text-2xl font-medium">2022 - now</h2>
            <h5 class="text-secondary font-medium text-xl mb-4">
              <a
                href="https://www.touchtechnologies.co.th"
                target="_blank"
                class="link-underline link-underline--primary hover:text-primary"
              >
                Touch technology
              </a>
              - 1y 10m
            </h5>
            <p>
              Research, interviews, and stakeholder engagement to understand the needs of the target
              audience. Using design thinking methods, I summarize information and create flowcharts
              and wireframes for usability testing, as well as to effectively communicate with
              developers and ensure a seamless collaboration in implementing the final UI design.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-medium">2021 - graduate</h2>
            <a href="https://www.3dbcd.com" target="_blank">
              <h5
                class="text-secondary font-medium text-xl mb-4 link-underline link-underline--primary hover:text-primary"
              >
                3D-Based Communication Design & Integrated Media, KMITL
              </h5>
            </a>
            <p>
              Communication and Media Design that Enhancing User Experience with Creative and Design
              Thinking. study and practice for designing 3D-based media, integrated media,
              object-based media in both physical and digital space to convey a meaningful
              experience to users.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-medium">2020 - join internship</h2>
            <h5 class="text-secondary font-medium text-xl mb-4">
              <a
                href="https://www.wongnai.com"
                target="_blank"
                class="link-underline link-underline--primary hover:text-primary"
              >
                Lineman wongnai
              </a>
              - 2m
            </h5>
            <p>
              My responsibility is to ensure a seamless user experience through user interaction and
              research to implement the best designs for the Wongnai platform.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute w-[35%] aspect-square top-[-10%] left-[15%]">
      <div class="w-full h-full rounded-full aspect-square cursor-pointer relative">
        <div class="absolute inset-0 hover:opacity-0 transition-opacity duration-1000">
          <img class="w-full h-full object-contain" :src="hiddenImage" alt="cover" />
        </div>
        <img class="w-full h-full object-contain" :src="profileImage" alt="profile" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hiddenImage = ref<string>('/images/homepage/profile-hidden.png')
const profileImage = ref<string>('/images/homepage/profile-img.png')
</script>
