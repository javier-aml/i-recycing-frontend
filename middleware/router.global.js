import { useGlobal } from "@/store/global"
import { storeToRefs } from "pinia"

export default defineNuxtRouteMiddleware((to, from) => {
  const globalStore = useGlobal()
  const { isLoading } = storeToRefs(globalStore)
  isLoading.value = true
})
