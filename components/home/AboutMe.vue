<template>
  <div class="about-me relative">
    <div class="wrapper grid grid-cols-12 tracking-normal">
      <div class="col-start-6 col-end-11 z-10">
        <div class="heading mb-20">
          <h1 class="text-[48px] font-normal">About me</h1>
          <p class="my-4">kotchagorn angchuan | bangkok, Thailand</p>
          <p class="text-primary font-normal">
            Weekday adventurer (eyes, brain, tastebuds!), culinary explorer, and gamer. These
            passions help me to create UX that telling engaging stories through human-centered
            design solutions.
          </p>
        </div>
        <div class="flex flex-col space-y-16">
          <div>
            <h2 class="text-xl font-thin">
              2022.03 - Present <span class="text-secondary"> · 2 yr</span>
            </h2>
            <h5 class="font-medium text-2xl mb-4">
              <a
                href="https://www.touchtechnologies.co.th"
                target="_blank"
                class="link-underline link-underline--primary hover:text-primary"
              >
                Touch technology
              </a>
              | UX Designer
            </h5>
            <ul class="list-disc pl-6">
              <li>
                Contributed to user-centric interfaces for innovative health tech and smart city 20+
                projects.
              </li>
              <li>
                Research and empathizing with users, crafting user journeys, defining insights to
                connect product with user.
              </li>
              <li>
                Designed detailed flows, wireframes, UX writing, and interactive prototypes for use
                in usability testing. and refined designs based on user feedback.
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-thin">
              2020.06 - 2020.08 <span class="text-secondary"> · 2 mos</span>
            </h2>
            <h5 class="font-medium text-2xl mb-4">
              <a
                href="https://www.touchtechnologies.co.th"
                target="_blank"
                class="link-underline link-underline--primary hover:text-primary"
              >
                Wongnai
              </a>
              | UX/UI Designer <span class="text-secondary">Internship</span>
            </h5>
            <ul class="list-disc pl-6">
              <li>
                Contributed to the design of UI for the Wongnai platform, including app and website
                flows.
              </li>
              <li>
                Conducted user research and collected data from 5 restaurants and spas to identify
                pain points and insights for the development of Wongnai's POS product.
              </li>
              <li>
                Collaborated with cross-functional teams to present work and provide design review
                and critical feedback.
              </li>
            </ul>
          </div>

          <div>
            <h2 class="text-xl font-thin">
              2017 - 2021 <span class="text-secondary"> · 4 yr (2 yr of UX project)</span>
            </h2>
            <h5 class="font-medium text-2xl mb-4">
              <a
                href="https://www.touchtechnologies.co.th"
                target="_blank"
                class="link-underline link-underline--primary hover:text-primary"
              >
                KMITL
              </a>
              | Bachelor's Degree <span class="text-secondary">First Class Honors</span>
            </h5>
            <h5 class="mb-4">
              School of Architecture, Art, and Design
              <p class="text-secondary">3D-Based Communication Design & Integrated Media</p>
            </h5>
            <ul class="list-disc pl-6">
              <li>
                Skilled in design thinking and human-centered design to create impactful user
                experiences across a variety of media, including interaction, exhibition,
                object-based, and service design.
              </li>
              <li>
                Designed 6+ projects across apps (thesis & 2 others), service design ,exhibitions,
                and physical experiences like product, toys & eating and more.
              </li>
            </ul>
          </div>

          <h5 class="text-secondary font-medium text-xl">
            I'm a passionate designer fueled by cheer and adaptability. I bridge the gap between
            products and people, crafting experiences that bridge the gap between products and users
            that make them smile :)
          </h5>
        </div>
      </div>
    </div>

    <div class="absolute w-[35%] aspect-square top-[-10%] left-[15%]">
      <div class="w-full h-full rounded-full aspect-square cursor-pointer relative">
        <div class="absolute inset-0 hover:opacity-0 transition-opacity duration-1000">
          <img
            class="w-full h-full object-contain"
            :src="hiddenImage"
            alt="cover"
            loading="lazy"
            placeholder=""
          />
        </div>
        <img
          class="w-full h-full object-contain"
          :src="profileImage"
          alt="profile"
          loading="lazy"
          placeholder=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const hiddenImage = ref<string>('/images/homepage/profile-hidden.png')
const profileImage = ref<string>('/images/homepage/profile-img.png')
</script>
