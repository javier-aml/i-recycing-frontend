import SideBar from '../components/SideBar.vue';
<template>
  <div class="h-screen flex flex-1 border-2 border-red-500">
    <aside class="h-full border-2 border-red-500">
      <nav class="p-2">
        <SideBar />
      </nav>
    </aside>
    <div class="h-full w-full border-2 border-red-500">
      <header class="p-2">
        <Header />
      </header>
      <section class="h-full p-2 border-2 border-red-500">
        <slot />
      </section>
    </div>
  </div>
</template>
