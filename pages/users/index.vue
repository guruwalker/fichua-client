
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

const editUser = async (user_id: string) => {
  isEditingUser.value = true;
  const response = await getSingleUser(user_id);

  router.push(`/users/${response?.username}`);
};

const deleteUser = async (user_id: number) => {
  Modal.confirm({
    title: "Delete user",
    icon: "TrademarkCircleFilled",
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
    here we go
    <Datagrid
      :dataSource="userFormState"
      :columns="columns"
      @edit="editUser"
      @delete="deleteUser"
    />
  </div>
</template>
