<template>
  <a-layout style="min-height: 100vh">
    <!-- ---------------------------------------------- -->
    <!-- Sider -->
    <!-- ---------------------------------------------- -->
    <NavigationAppSider />
    <a-layout>
      <!-- ---------------------------------------------- -->
      <!-- Header -->
      <!-- ---------------------------------------------- -->
      <a-layout-header style="background: #fff; padding: 0" >
        <div style="height: 100%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 20px;">
          FICHUA: NAIROBI COUNTY CRIME REPORTING SYSTEM
        </div>
      </a-layout-header>

      <!-- ---------------------------------------------- -->
      <!-- Content -->
      <!-- ---------------------------------------------- -->
      <a-layout-content style="margin: 0 16px">
        <slot />
      </a-layout-content>

      <!-- ---------------------------------------------- -->
      <!-- Footer -->
      <!-- ---------------------------------------------- -->
      <NavigationAppFooter />
    </a-layout>
  </a-layout>
</template>
