<template>
  <div class="login-container">
    <div class="content">
      <div class="left">
        <!-- <div class="title">欢迎来到我的毕设项目</div> -->
      </div>
      <div class="right">
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          :label-col="{ style: { width: '100px' } }"
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

          <a-form-item>
            <a-button
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="login-form-button"
              style="width: 60%; margin-left: 90px"
              @click="() => router.push('/home')"
            >
              登录
            </a-button>
          </a-form-item>
          <a-form-item style="margin-left: 125px">
            <a @click="() => router.push('/register')">没有账号?去注册!</a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { reactive, computed } from 'vue'

const router = useRouter()
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
  display: flex;
  height: 100vh;

  .left {
    flex: 1;
    background-color: slateblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
    }

    .subtitle {
      color: #fff;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    background-color: #fff;
  }
}
</style>
