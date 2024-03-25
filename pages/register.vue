<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

useHead({
  title: "Register | Fichua",
});
</script>
<template>
  <div
    style="
      display: flex;
      width: 100%;
      height: 100vh;
      text-align: center;
      justify-content: center;
      align-items: center;
    "
  >
    <a-card>
      <FormsAuthRegisterForm />

      <p>Already have an account? <NuxtLink to="/">Sign in</NuxtLink></p>
    </a-card>
  </div>
</template>
