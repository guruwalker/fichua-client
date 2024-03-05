<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Overview | Fichua",
});
const route = useRoute();

const pageNameCapitalized = computed(() => {
  return route.name
    ? route.name.toString().charAt(0).toUpperCase() +
        route.name.toString().slice(1)
    : "";
});
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
    <!-- Breadcrumb -->
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
            title="Overview"
            sub-title="Description of how the system works"
            :ghost="false"
          >
          </a-page-header>
        </a-col>
      </a-row>
    </a-space>

    <h1 style="margin: 40px;">
      Our crime reporting app is a robust and user-friendly platform designed to
      empower communities and law enforcement agencies alike. With intuitive
      case management, advanced analytics, and seamless collaboration features,
      our app streamlines the reporting process, enhances data-driven
      decision-making, and fosters a safer and more secure environment for all.
      Join us in creating a stronger, more connected community where everyone
      plays a role in promoting safety and justice.
    </h1>

    <a-row
      :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]"
    >
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For citizens" style="margin-top: 20px">
          <h3>What citizens can do with Fichua</h3>
          <a-list>
            <a-list-item> Report new cases </a-list-item>
            <a-list-item> Manage their own accounts </a-list-item>
            <a-list-item> See the status of their reported cases </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For officers" style="margin-top: 20px">
          <h3>Roles of officers with Fichua</h3>
          <a-list>
            <a-list-item
              >Analyze statistics of cases to make informed
              decisions</a-list-item
            >
            <a-list-item
              >Investigate cases they have been assigned to</a-list-item
            >
            <a-list-item></a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>

    <a-row
      :gutter="[
        { xs: 8, sm: 16, md: 24, lg: 32 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]"
    >
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <a-card title="For super admin" style="margin-top: 20px">
          <h3>Abilities of the Super Admin with Fichua</h3>
          <a-list>
            <a-list-item
              >Manage all modules: users, cases and analytics
            </a-list-item>
            <a-list-item>Assign officers to new cases</a-list-item>
            <a-list-item></a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
