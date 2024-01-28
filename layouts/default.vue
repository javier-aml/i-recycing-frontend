import SideBar from '../components/SideBar.vue';
<template>
  <div class="h-screen flex flex-1">
    <aside class="border-r">
      <nav class="p-2">
        <side-bar-comp />
      </nav>
    </aside>
    <div class="w-full">
      <header class="p-4 border-b-2">
        <header-comp />
      </header>
      <section class="p-2">
        <slot />
      </section>
    </div>
  </div>
</template>
