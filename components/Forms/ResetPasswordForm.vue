<script lang="ts" setup>
const { resetPasswordFormState, resetPassword } = useAuthentication();

const reset = async () => {
  await resetPassword();
}
</script>

<template>
  <div style="display: flex">
    <a-form
      :model="resetPasswordFormState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="New password" name="new_password" required>
            <a-input v-model:value="resetPasswordFormState.password" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Confirm new password" name="confirm_new_password" required>
            <a-input v-model:value="resetPasswordFormState.confirm_password" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="reset()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
