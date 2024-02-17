<template>
  <a-layout class="layout">
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
    <NavigationWebHeader />

    <a-layout-content style="padding: 0 50px">
      <slot />
    </a-layout-content>

          <!-- ---------------------------------------------- -->
      <!-- Footer -->
      <!-- ---------------------------------------------- -->
    <NavigationWebFooter />
  </a-layout>
</template>
