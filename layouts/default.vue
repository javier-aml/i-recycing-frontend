import SideBar from '../components/SideBar.vue';
<template>
  <div class="flex flex-1">
    <aside>
      <nav>
        <SideBar />
      </nav>
    </aside>
    <div>
      <header>
        <Header />
      </header>
      <section>
        <slot />
      </section>
    </div>
  </div>
</template>
