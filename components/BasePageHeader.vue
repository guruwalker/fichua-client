<script setup lang="ts">
const route = useRoute();

const pageNameCapitalized = computed(() => {
return route.name;
});
</script>

<template>
  <!-- Breadcrumb -->
  <a-breadcrumb style="height: 40px; display: flex; align-items: center">
    <a-breadcrumb-item style="color: #5f8524; font-weight: 600"
      >Dashboard</a-breadcrumb-item
    >
    <a-breadcrumb-item>{{ route.name }}</a-breadcrumb-item>
  </a-breadcrumb>

  <!-- Page Title -->
  <div class="header">
    <a-card :title="pageNameCapitalized"> </a-card>
  </div>
</template>
