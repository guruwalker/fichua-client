<script setup lang="ts">
import {
  BellOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

const { logout } = useUsers();

const menuItems = [
  { key: "3", icon: UserOutlined, title: "Profile", to: "/profile" },
  { key: "2", icon: LogoutOutlined, title: "Logout", to: "/analytics" },
];

const handleLogout = async () => {
  await logout();

  notification["success"]({
    description: "Logout successfull.",
    message: "Success",
    placement: "bottomRight",
    duration: 8,
  });
};
</script>

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
      <a-layout-header
        style="
          background: #ffffff;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <a-menu
          v-model:selectedKeys="selectedKeys"
          style="margin-left: auto; display: flex; align-items: center"
        >
          <a-menu-item v-for="item in menuItems" :key="item.key">
            <a-tooltip placement="bottom" :color="'#4aa175'">
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <NuxtLink v-if="item.key !== '2'" :to="item.to">
                <component :is="item.icon" />
                <span></span>
              </NuxtLink>
              <a @click="handleLogout" v-else>
                <component :is="item.icon" />
                <span></span>
              </a>
            </a-tooltip>
          </a-menu-item>
        </a-menu>
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
