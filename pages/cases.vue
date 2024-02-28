
<script setup lang="ts">
import UserTable from "@/components/UserTable.vue";
import type { TableColumnsType } from "ant-design-vue";

import {
  TrademarkCircleFilled,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";

useHead({
  title: "Users",
  meta: [
    {
      name: "description",
      content:
        "Explore and connect with other users on the platform. Build your network and engage with the community.",
    },
  ],
});

const route = useRoute();

const pageNameCapitalized = computed(() => {
  return route.name
    ? route.name.toString().charAt(0).toUpperCase() +
        route.name.toString().slice(1)
    : "";
});

const {
  isEditingUser,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  resetUsersFormState,
  userFormState,
} = useUsers();

const response = await useApi<IGetAllUsers>("/users", {
  method: "GET",
});

userFormState.value = response?.data;

const columns = ref<TableColumnsType>([
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    resizable: true,
    sorter: true,
  },
  {
    title: "Full Name",
    dataIndex: "full_name",
    key: "full_name",
    resizable: true,
    sorter: true,
  },

  {
    title: "Actions",
    key: "action",
    // fixed: 'right',
    // width: 100,
  },
]);

const router = useRouter();

const showEditUserDrawer = ref<boolean>(false);

const submitUpdateUser = async () => {
  console.log("user");
};

const editUser = async (user_id: string) => {
  // isEditingUser.value = true;
  // const response = await getSingleUser(user_id);

  // router.push(`/users/${response?.username}`);
  showEditUserDrawer.value = true
};

const deleteUser = async (user_id: number) => {
  Modal.confirm({
    title: "Delete user",
    content: "Are you sure you want to delete this user?",
    okText: "Yes",
    centered: true,
    okType: "danger",
    cancelText: "No",
    async onOk() {
      await deleteSingleUser(user_id);
      await getAllUsers();
    },
    onCancel() {
      return;
    },
  });
};
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
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

    <!-- Page Title -->
    <div class="header">
      <a-card :title="pageNameCapitalized"> </a-card>
    </div>
    <!-- ---------------------------------------------- -->
    <!-- Search bar -->
    <!-- ---------------------------------------------- -->

    <!-- ---------------------------------------------- -->
    <!-- Datagrid -->
    <!-- ---------------------------------------------- -->
    <Datagrid
      :dataSource="userFormState"
      :columns="columns"
      @edit="editUser"
      @delete="deleteUser"
    />
  </div>

  <!-- Edit User Drawer -->
  <a-drawer
    :width="500"
    title="Edit user"
    placement="bottom"
    :open="showEditUserDrawer"
    @close="showEditUserDrawer = false"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="showEditUserDrawer = false"
        >Cancel</a-button
      >
      <a-button type="primary" @click="submitUpdateUser">Submit</a-button>
    </template>
    <FormsUserForm />
  </a-drawer>
</template>
