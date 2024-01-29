<template>
    PROFILE
</template>

<script setup>
import { useGlobal } from "@/store/global"
import { storeToRefs } from "pinia"
import { onMounted } from "vue";

const globalStore = useGlobal()
const { isLoading } = storeToRefs(globalStore)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})
</script>
