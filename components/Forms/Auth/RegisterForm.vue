<script lang="ts" setup>
const { register, registerFormState } = useAuthentication();
</script>

<template>
  <div style="display: flex">
    <a-form
      :model="loginFormState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <h1
          style="text-align: center; width: 100%; font-size: 23px; margin: 20px"
        >
          Register
        </h1>
        <a-col :span="24">
          <a-form-item label="Full name" name="full_name" required>
            <a-input v-model:value="registerFormState.full_name" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Email" name="email" required>
            <a-input v-model:value="registerFormState.email" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Password" name="password" required>
            <a-input-password v-model:value="registerFormState.password" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Phone number" name="phone_number" required>
            <a-input v-model:value="registerFormState.phone_number" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="National ID" name="national_id" required>
            <a-input v-model:value="registerFormState.national_id" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="register()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
