<template>
  <FormKit type="form" @submit="submitForm">
    <FormKit type="text" name="name" label="Name" />
    <FormKit type="email" name="email" label="Email" />
    <FormKit
      type="checkbox"
      name="subscribe"
      label="Subscribe to newsletter?"
      v-model="subscribe"
    />

    <FormKit
      v-if="subscribe"
      type="select"
      name="frequency"
      label="How often?"
      :options="['Daily', 'Weekly', 'Monthly']"
    />

    <FormKit type="submit" />
  </FormKit>
</template>

<script setup>
    const subscribe = ref(null);
    function submitForm(formData) {
        console.log('Form Data:', formData);
    }
</script>
