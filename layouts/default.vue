import SideBar from '../components/SideBar.vue';
<template>
  <div class="h-screen flex flex-1">
    <aside class="border-r-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700">
      <nav class="p-2">
        <side-bar-comp />
      </nav>
    </aside>
    <div class="w-full bg-gray-200 dark:bg-gray-800">
      <header class="p-4 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
        <header-comp />
      </header>
      <span v-show="isLoading" class="loading-spinner mt-2 ml-2"></span>
      <section class="p-2" v-show="!isLoading">
        <slot />
      </section>
    </div>
  </div>
</template>

<script setup>
import { useGlobal } from "@/store/global"
import { storeToRefs } from "pinia"

const globalStore = useGlobal()
const { isLoading } = storeToRefs(globalStore)
</script>
