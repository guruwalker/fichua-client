<script setup lang="ts">
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(["edit", "delete"]);

function handleResizeColumn(w: any, col: any) {
  col.width = w;
}

const handleEdit = (id: number) => {
  emits("edit", id);
};

const handleDelete = (id: number) => {
  emits("delete", id);
};
</script>

<template>
  <div style="padding: 10px;">
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      @resizeColumn="handleResizeColumn"
      :scroll="{ x: 1200 }"
    >
      <template #bodyCell="{ column, record }">
        <!-- User type -->
        <template v-if="column.key === 'role'">
          <span v-if="record.role === 'user'">
            <a-tag color="success"> User </a-tag>
          </span>
          <span v-else-if="record.role === 'admin'">
            <a-tag color="blue">Admin</a-tag>
          </span>
          <span v-else-if="record.role === 'officer'">
            <a-tag color="cyan">Officer</a-tag>
          </span>
        </template>

        <!-- Date -->
        <template v-if="column.key === 'created_at'">
          <span>
            {{ record.created_at.split("T")[0] }}
          </span>
        </template>

        <!-- Phone number -->
        <template v-if="column.key === 'phone_number'">
          <div class="d-flex align-center gap-2">
            <PhoneOutlined />
            {{ record.phone_number }}
          </div>
        </template>

        <!-- Email -->
        <template v-if="column.key === 'email'">
          <div
            style="
              color: blue !important;
              text-decoration: underline !important;
            "
          >
            {{ record.email }}
          </div>
        </template>

        <!-- Image -->
        <template v-if="column.key === 'profile_url'">
          <v-img :src="record.profile_url" style="height: 2rem; width: 2rem" />
        </template>

        <!-- Actions -->
        <template v-if="column.key === 'action'">
          <TrashIcon
            size="18"
            style="cursor: pointer"
            color="red"
            @click="handleDelete(record.id)"
          />
          <a-divider type="vertical" />
          <EditIcon
            size="18"
            color="blue"
            style="cursor: pointer"
            @click="handleEdit(record.id)"
          />
        </template>
      </template>
    </a-table>
  </div>
</template>
