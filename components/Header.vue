<template>
  <div class="bg-white w-full h-full border-red-500">
    <UBreadcrumb
      divider="/"
      :links="[
        { label: 'Home', to: '/' },
        { label: 'Login', to: '/login' }
      ]"
    />
  </div>
</template>
