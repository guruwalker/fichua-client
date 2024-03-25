<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "User profile | Fichua",
});

const activeKey = ref("1");

const { profileFormState } = useProfile();

const userId = useCookie('user_id')

const response = await useApi<IProfile>(`/pages/profile/${userId.value}`, {
  method: "GET",
});

profileFormState.value = response.data;
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
      <!-- Profile -->
      <a-tab-pane key="1" tab="Profile details">
        <FormsProfileForm />
      </a-tab-pane>
      <!-- Updates -->
      <a-tab-pane key="2" tab="Your reports" force-render>
        <div v-for="update in profileFormState.cases" :key="update.id">
          <CaseCard :case="update" />
        </div>
      </a-tab-pane>
      <!-- Password reset -->
      <!-- <a-tab-pane key="3" tab="Reset your password"
        >
        <FormsResetPasswordForm />
      </a-tab-pane> -->
    </a-tabs>
  </div>
</template>
