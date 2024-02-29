<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "User profile | Fichua",
});

const activeKey = ref("1");
</script>


<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
    <a-breadcrumb style="height: 40px; display: flex; align-items: center">
      <a-breadcrumb-item style="color: #5f8524; font-weight: 600"
        >Dashboard</a-breadcrumb-item
      >
      <a-breadcrumb-item>{{ pageNameCapitalized }}</a-breadcrumb-item>
    </a-breadcrumb>

    <a-space direction="vertical" style="width: 100%">
      <a-row
        :gutter="[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]"
      >
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-page-header
            title="Profile"
            sub-title="Manage your account"
            :ghost="false"
          >
          </a-page-header>
        </a-col>
      </a-row>
    </a-space>

    <!-- ---------------------------------------------- -->
    <!-- Tabs -->
    <!-- ---------------------------------------------- -->
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Profile details">
        <FormsUserForm />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Your reports" force-render
        >Content of Tab Pane 2</a-tab-pane
      >
      <a-tab-pane key="3" tab="Reset your password">Content of Tab Pane </a-tab-pane>
    </a-tabs>
  </div>
</template>
