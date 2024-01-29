<template>
  <section class="w-full">
    <u-button
      icon="i-heroicons-arrow-left"
      size="xl"
      color="green"
      variant="ghost"
      label="Regresar"
      :trailing="false"
      @click="navigateTo('/publications')"
    />
  </section>
  <section>
    <u-form
      :validate="validate"
      :state="state"
      @submit="onSubmit"
      class="w-full p-4"
    >
      <div class="space-y-4 mt-3">
        <hr class="border-1 border-gray-300" />
        <div class="flex justify-center">
          <div class="w-1/4">Logo</div>
          <div
            class="border-2 border-gray-300 rounded-lg p-4 w-3/4 shadow-lg bg-white"
          >
            <u-form-group label="Email" name="email" required>
              <u-input />
            </u-form-group>

            <u-form-group label="Password" name="password" required>
              <u-input type="password" />
            </u-form-group>

            <u-form-group label="Password" name="password" required>
              <u-input type="file" />
            </u-form-group>
          </div>
        </div>
        <hr class="border-1 border-gray-300" />
        <div class="flex justify-center">
          <div class="w-1/4">Logo</div>
          <div
            class="border-2 border-gray-300 rounded-lg p-4 w-3/4 shadow-lg bg-white"
          >
            <u-form-group label="Email" name="email" required>
              <u-input />
            </u-form-group>

            <u-form-group label="Password" name="password" required>
              <u-input type="password" />
            </u-form-group>
          </div>
        </div>
        <hr class="border-1 border-gray-300" />
      </div>

      <u-button type="submit" class="mt-4"> Submit </u-button>
    </u-form>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router"

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state) => {
  const errors = []
  if (!state.email) errors.push({ path: "email", message: "Required" })
  if (!state.password) errors.push({ path: "password", message: "Required" })
  return errors
}

async function onSubmit(event) {
  console.log(event.data)
}

const router = useRouter()
function navigateTo(path) {
  if (!path) return
  router.push(path)
}

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
