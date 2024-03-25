<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

useHead({
  title: "Login | Fichua",
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
      <FormsAuthLoginForm />

      <p>Don't have an account? <NuxtLink to="/register">Create one</NuxtLink></p>
    </a-card>
  </div>
</template>
