<template>
  <nuxt-img src="/logo.png" alt="logo" />
  <u-divider class="mt-4 mb-2" icon="i-heroicons-bars-3-bottom-left" :ui="{ border: { size: { horizontal: 'border-t-2' } } }" />
  <nav>
    <u-vertical-navigation :links="links" />
  </nav>
</template>

<script setup>
const links = [
  {
    label: "Perfil",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4"
    },
    to: "/profile"
  },
  {
    label: "Publicaciones",
    icon: "i-heroicons-home",
    to: "/publications"
  }
]
</script>
