<template>
  <div class="p-4 border-2 rounded-lg">
    <section>
      <u-input
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="Search..."
      />
    </section>
    <section class="mt-2">
      <u-table :rows="people" :columns="columns">
        <template #actions-data="{ row }">
          <u-dropdown :items="items(row)">
            <u-button
              color="green"
              variant="soft"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </u-dropdown>
        </template>
      </u-table>
      <div
        class="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-700"
      >
        <u-pagination
          v-model="page"
          :page-count="pageCount"
          :total="people.length"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const page = ref(1)
const pageCount = 5
const rows = computed(() => {
  return people.slice((page.value - 1) * pageCount, page.value * pageCount)
})

const items = (row) => [
  [
    {
      label: "Editar",
      icon: "i-heroicons-pencil-square-20-solid"
    },
    {
      label: "Eliminar",
      icon: "i-heroicons-trash-20-solid"
    }
  ]
]

const columns = [
  {
    key: "name",
    label: "Name"
  },
  {
    key: "title",
    label: "Title"
  },
  {
    key: "email",
    label: "Email"
  },
  {
    key: "role",
    label: "Role"
  },
  {
    key: "actions"
  }
]

const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin"
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    email: "tom.cook@example.com",
    role: "Member"
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    email: "whitney.francis@example.com",
    role: "Admin"
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
    role: "Owner"
  },
  {
    id: 6,
    name: "Floyd Miles",
    title: "Principal Designer",
    email: "floyd.miles@example.com",
    role: "Member"
  }
]
</script>
