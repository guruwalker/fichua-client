<script lang="ts" setup>
const { login, loginFormState } = useAuthentication();

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
        <h1 style="text-align: center; width: 100%; font-size: 23px; margin: 20px;">Login</h1>
        <a-col :span="24">
          <a-form-item label="Email" name="email" required>
            <a-input v-model:value="loginFormState.email" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Password" name="password" required>
            <a-input-password v-model:value="loginFormState.password" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="login()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
