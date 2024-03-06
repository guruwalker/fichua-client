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
    <div>
      <FormsAuthLoginForm />
    </div>
  </div>
</template>
