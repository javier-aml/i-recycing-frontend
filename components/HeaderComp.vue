<template>
  <div class="flex justify-between items-center">
    <u-breadcrumb
      divider="/"
      :links="[
        { label: 'Home', to: '/' },
        { label: 'Login', to: '/login' }
      ]"
    />
    <div class="flex items-center">
      <u-toggle
        on-icon="i-heroicons-sun-20-solid"
        off-icon="i-heroicons-moon-20-solid"
        v-model="isDarkMode"
        size="xl"
        class="mr-5"
      />
      <u-chip class="mr-5">
        <u-button icon="i-heroicons-inbox" color="gray" />
      </u-chip>
      <u-dropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <u-button
          color="green"
          label="usuario@prueba.com.mx"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </u-dropdown>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const isDarkMode = ref(true)

watch(isDarkMode, (val) => {
  colorMode.preference = val ? "dark" : "light"
})

const items = [
  [
    {
      label: "Perfil",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4"
      }
    }
  ],
  [
    {
      label: "Cerrar sesión",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => {
        console.log("Edit")
      }
    }
  ]
]
</script>
