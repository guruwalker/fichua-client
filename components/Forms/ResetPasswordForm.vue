<script lang="ts" setup>
const { profileFormState, updateProfile } = useProfile();

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
    description: "Could not reset your password. Please try again.",
    message: "Failed",
    placement: "bottomRight",
    duration: 8,
  });
};

// const isDisabled = ref(true);
const update = async () => {
  // const response = updateProfile(1)
  console.log('nothing yet')
}
</script>

<template>
  <div style="display: flex">
    <a-form
      :model="profileFormState.user"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="Old password" name="old_password" required>
            <a-input v-model:value="profileFormState.user.full_name" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="New password" name="new_password" required>
            <a-input v-model:value="profileFormState.user.phone_number" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Confirm new password" name="confirm_new_password" required>
            <a-input v-model:value="profileFormState.user.national_id" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="update()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
