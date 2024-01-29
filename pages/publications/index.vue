<template>
  <section class="ml-5 mr-5 mt-2">
    <u-button color="green" @click="navigateTo('/publications/new')"
      >Nueva publicación
    </u-button>
    <table-comp class="mt-4" />
  </section>
</template>

<script>
import { useRouter } from "vue-router"

const router = useRouter()
function navigateTo(path) {
  if (!path) return
  router.push(path)
}
</script>
