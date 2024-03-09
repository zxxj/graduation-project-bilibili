<template>
  <div class="user-container">
    <Header />
    <div class="content banner">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="账号信息">
          <a-card :bordered="false" style="width: 500px">
            <a-form
              :model="formState"
              name="normal_login"
              class="login-form"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
              :disabled="true"
              :label-col="{ style: { width: '80px' } }"
            >
              <a-form-item label="用户名" name="username">
                <a-input v-model:value="formState.username">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item label="密码" name="password">
                <a-input-password v-model:value="formState.password">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>
            </a-form>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="2" tab="修改用户信息" force-render>
          <a-card :bordered="false" style="width: 500px">
            <a-form
              :label-col="{ style: { width: '80px' } }"
              :model="formState"
              name="normal_login"
              class="login-form"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
            >
              <a-form-item
                label="用户名"
                name="username"
                :rules="[{ required: true, message: 'Please input your username!' }]"
              >
                <a-input v-model:value="formState.username">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>

              <a-form-item
                label="密码"
                name="password"
                :rules="[{ required: true, message: 'Please input your password!' }]"
              >
                <a-input-password v-model:value="formState.password">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item
                label="确认密码"
                name="repassword"
                :rules="[{ required: true, message: 'Please input your repassword!' }]"
              >
                <a-input-password v-model:value="formState.password">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item>
                <a-button
                  :disabled="disabled"
                  type="primary"
                  html-type="submit"
                  class="login-form-button"
                >
                  确认修改
                </a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons-vue'

import { reactive, computed, ref } from 'vue'

const activeKey = ref('1')

const formState = reactive({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>

<style lang="scss" scoped>
.content {
  margin-top: 50px;
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
