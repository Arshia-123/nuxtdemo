<template>
  <BlurReveal :delay="0.1" :duration="0.5" class="p-8">
    <div class="min-h-screen flex items-center justify-center">
      <div class="p-8 rounded-lg shadow-md max-w-xl w-full">
        <BlurReveal :delay="0.5" :duration="0.5" yOffset="-10">
          <RadiantText :duration="5" class="text-5xl font-bold text-center mb-6"
            >Welcome to Vue 3!</RadiantText
          >
        </BlurReveal>
        <CardContainer>
          <CardBody
            class="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
          >
            <CardItem
              :translateZ="50"
              class="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem :translateZ="100" class="w-full mt-4">
              <NuxtImg
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="1000"
                width="1000"
                class="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div class="flex justify-between items-center mt-20">
              <CardItem
                :translateZ="20"
                as="a"
                href="https://rahulv.dev"
                target="__blank"
                class="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Visit →
              </CardItem>
              <CardItem
                :translateZ="20"
                as="button"
                class="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Get Started
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <BlurReveal :delay="0.5" :duration="0.5" :yOffset="-5">
          <p class="text-gray-700 text-center mb-4">
            This is a sample page using Vue 3 Composition API with Tailwind CSS.
          </p>
        </BlurReveal>
        <BlurReveal :delay="0.7" :duration="0.5">
          <div class="flex flex-col items-center mt-4">
            <p>Count</p>
            <p class="text-lg mb-2">{{ count }}</p>
            <Button class="px-4 py-2" @click="increment"> Increment </Button>
          </div>
        </BlurReveal>
      </div>
    </div>
  </BlurReveal>
</template>

<script setup>
import { ref } from "vue";
import BlurReveal from "~/components/inspira-ui/BlurReveal.vue";
import CardBody from "~/components/inspira-ui/3DCard/CardBody.vue";
import CardContainer from "~/components/inspira-ui/3DCard/CardContainer.vue";
import CardItem from "~/components/inspira-ui/3DCard/CardItem.vue";
import RadiantText from "~/components/inspira-ui/RadiantText.vue";

const count = ref(0);

function increment() {
  count.value++;
}

const { data } = await useFetch("/api/ping");
</script>
