<template>
  <div class="user-container">
    <Header />
    <div class="content banner">
      <div class="top"></div>

      <div class="bottom">
        <div class="avatar"></div>

        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="我的账号">
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

                <a-form-item label="年龄" name="age">
                  <a-input v-model:value="formState.age"> </a-input>
                </a-form-item>

                <a-form-item label="性别" name="gender">
                  <a-input v-model:value="formState.gender"> </a-input>
                </a-form-item>

                <a-form-item label="邮箱" name="email">
                  <a-input v-model:value="formState.email"> </a-input>
                </a-form-item>

                <a-form-item label="手机号" name="phone">
                  <a-input v-model:value="formState.phone"> </a-input>
                </a-form-item>

                <a-form-item label="用户类型" name="flag">
                  <a-select v-model:value="formState.flag">
                    <a-select-option value="0">普通用户</a-select-option>
                    <a-select-option value="1">医生</a-select-option>
                    <a-select-option value="2">管理员</a-select-option>
                  </a-select>
                </a-form-item>
              </a-form>

              <div style="display: flex; justify-content: center">
                <a-button type="primary" danger @click="logout">退出登录</a-button>
              </div>
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
                <a-form-item label="用户名" name="username">
                  <a-input v-model:value="formState.username">
                    <template #prefix>
                      <UserOutlined class="site-form-item-icon" />
                    </template>
                  </a-input>
                </a-form-item>

                <a-form-item label="年龄" name="age">
                  <a-input v-model:value="formState.age"> </a-input>
                </a-form-item>

                <a-form-item label="性别" name="gender">
                  <a-select v-model:value="formState.gender">
                    <a-select-option value="1">男</a-select-option>
                    <a-select-option value="0">女</a-select-option>
                  </a-select>
                </a-form-item>

                <a-form-item label="邮箱" name="email">
                  <a-input v-model:value="formState.email"> </a-input>
                </a-form-item>

                <a-form-item label="手机号" name="phone">
                  <a-input v-model:value="formState.phone"> </a-input>
                </a-form-item>

                <a-form-item label="用户类型" name="flag">
                  <a-select v-model:value="formState.flag">
                    <a-select-option value="0">普通用户</a-select-option>
                    <a-select-option value="1">医生</a-select-option>
                    <a-select-option value="2">管理员</a-select-option>
                  </a-select>
                </a-form-item>

                <div style="display: flex; justify-content: center">
                  <a-button type="primary" html-type="submit" class="login-form-button">
                    确认修改
                  </a-button>
                </div>
              </a-form>
            </a-card>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <div class="footer">Copyright @ 2024 me.com 个人网 版权所有</div>
  </div>

  <a-modal v-model:open="open" title="退出登录" @ok="handleOk" okText="确定" cancelText="取消">
    您确定要退出登录吗?
  </a-modal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
import { message } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import Header from './Header.vue'
import { listUserInfo, updateUser } from '../http/user'

onMounted(async () => {
  const res = await listUserInfo({
    id: localStorage.getItem('userId'),
    username: localStorage.getItem('username')
  })
  if (res && res.data.body.dataList) {
    const userInfo = res.data.body.dataList[0]
    userInfo.gender = userInfo.gender === 1 ? '男' : '女'
    userInfo.flag =
      userInfo.flag == 0
        ? '普通用户'
        : userInfo.flag == 1
          ? '医生'
          : userInfo.flag == 2
            ? '管理员'
            : ''
    formState.value = userInfo
  }
})
const open = ref(false)
const logout = () => {
  open.value = true
}

const handleOk = () => {
  localStorage.removeItem('userId')
  localStorage.removeItem('username')
  router.push('/login')
  window.location.reload()
}

const activeKey = ref('1')

const formState = ref({
  username: '',
  password: ''
})
const onFinish = async (values) => {
  values.id = localStorage.getItem('userId')
  values.gender = values.gender === '男' ? 1 : 0
  values.age = Number(values.age)
  values.phone = Number(values.phone)
  values.flag = Number(values.flag)
  const res = await updateUser(values)

  if (res && res.data.reCode == '200') {
    message.success('修改成功,即将重新登录!!')
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    router.push('/login')
    window.location.reload()
  }

  const info = await listUserInfo({
    id: localStorage.getItem('userId'),
    username: localStorage.getItem('username')
  })

  if (info && info.data.body.dataList) {
    const userInfo = info.data.body.dataList[0]
    userInfo.flag = userInfo.flag === 1 ? '管理员' : '医生'
    userInfo.gender = userInfo.gender === 1 ? '男' : '女'
    formState.value = userInfo
  }
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .top {
    height: 200px;
    width: 100%;
    background-color: red;
    background: url('../assets/images/userinfo/userinfo.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 20px;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: baseline;

    .avatar {
      margin-right: 20px;
      margin-top: 20px;
      width: 300px;
      height: 300px;
      background: url('../assets/images/userinfo/avatar.png') center center no-repeat;
      background-size: cover;
      vertical-align: baseline;
    }
  }
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 100px;
  color: #fff;
  height: 100px;
  background-color: #8697df;
  width: 100%;
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
