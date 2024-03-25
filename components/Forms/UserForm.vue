<script lang="ts" setup>
const { userFormState, updateSingleUser, getAllUsers } = useUsers();

const onFinish = (values: any) => {
  notification["success"]({
    description: "Your profile has been updated successfully.",
    message: "Success",
    placement: "bottomRight",
    duration: 8,
  });
};

const onFinishFailed = (errorInfo: any) => {
  notification["error"]({
    description: "Could not update your profile. Please try again.",
    message: "Failed",
    placement: "bottomRight",
    duration: 8,
  });
};

</script>

<template>
  <div style="display: flex">
    <a-form
      :model="userFormState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="Full name" name="full_name" required>
            <a-input v-model:value="userFormState.full_name" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Phone number" name="phone_number" required>
            <a-input v-model:value="userFormState.phone_number" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="National ID" name="national_id" required>
            <a-input v-model:value="userFormState.national_id" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Email" name="email" required>
            <a-input v-model:value="userFormState.email" />
          </a-form-item>
        </a-col>

        <a-col :span="24">
          <a-form-item label="Role" name="role" required>
            <a-select v-model:value="casesFormState.role">
              <a-select-option value="admin">Super admin</a-select-option>
              <a-select-option value="officer">Officer</a-select-option>
              <a-select-option value="user">Use</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
