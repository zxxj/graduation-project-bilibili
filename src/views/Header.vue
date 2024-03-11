<template>
  <div class="header-container">
    <div :class="route.path !== '/home' ? 'header2' : 'header'">
      <div class="left"></div>
      <div class="right">
        <div class="item" @click="handleMenu(0)" v-if="route.path !== '/home'">
          <div class="icon">
            <img src="../assets/images/home/房子.png" alt="" />
          </div>
          <div class="text">首页</div>
        </div>
        <div class="item" @click="handleMenu(1)">
          <div class="icon">
            <img src="../assets/images/home/心情.png" alt="" />
          </div>
          <div class="text">心情记录</div>
        </div>

        <div class="item" @click="handleMenu(2)">
          <div class="icon">
            <img src="../assets/images/home/自我评价.png" alt="" />
          </div>
          <div class="text">自我探知</div>
        </div>

        <div class="item" @click="handleMenu(3)">
          <div class="icon">
            <img src="../assets/images/home/问卷调查.png" alt="" />
          </div>
          <div class="text">问卷调查</div>
        </div>

        <div class="item" @click="handleLetter">
          <div class="icon">
            <img src="../assets/images/home/信件.png" alt="" />
          </div>
          <div class="text">信件</div>
        </div>

        <div class="item" @click="handleMenu(5)">
          <div class="icon">
            <img src="../assets/images/home/登录.png" alt="" />
          </div>
          <div class="text">个人中心</div>
        </div>
      </div>
    </div>
  </div>

  <a-modal
    v-model:open="open"
    title="信件"
    @ok="handleOk"
    @cancel="handleCancel"
    style="width: 1200px"
    cancelText="关闭"
    okText="发送"
  >
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="发送信件">
        <a-card :bordered="false">
          <a-form ref="letterFormRef" :model="letterForm" :label-col="{ style: { width: '80px' } }">
            <a-form-item
              label="收件人"
              name="addresseeId"
              :rules="[{ required: true, message: '请选择收件人!' }]"
            >
              <a-select v-model:value="letterForm.addresseeId" ref="select" style="width: 150px">
                <template v-for="item in userList" :key="item">
                  <a-select-option :value="item.id">{{ item.username }}</a-select-option>
                </template>
              </a-select>
            </a-form-item>

            <a-form-item
              label="内容"
              name="content"
              :rules="[{ required: true, message: '请输入信件内容!' }]"
            >
              <a-textarea v-model:value="letterForm.content"></a-textarea>
            </a-form-item>
          </a-form>
        </a-card>
      </a-tab-pane>

      <a-tab-pane key="2" tab="收件箱">
        <a-table
          :pagination="addresseePagination"
          @change="handleAddresseePageParams"
          :dataSource="addresseeDataSource"
          :columns="addresseeColumns"
          style="width: 100%"
        >
          <template #bodyCell="{ column, text, record }">
            <template v-if="column.dataIndex === 'operation'">
              <a-popconfirm title="您确定要拒收吗?" @confirm="onDelete(record.id)">
                <a-button type="primary">拒收信件</a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </a-tab-pane>

      <a-tab-pane key="3" tab="已发送信件">
        <a-table
          :pagination="pagination"
          @change="handlePageParams"
          :dataSource="letterDataSource"
          :columns="columns"
          style="width: 100%"
        />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { deleteLetter, listsendLetterAllByUserId, sendLetter, userAll } from '@/http/user'
import { message } from 'ant-design-vue'

onMounted(async () => {
  const res = await userAll()
  userList.value = res.data.body.dataList
  listAddresseeData()
  listSendLetterData()
})

// 1
const router = useRouter()
const route = useRoute()
const open = ref(false)
const activeKey = ref('1')
const pagination = ref({
  pageSize: 10,
  pageNumber: 1,
  total: 0
})

const addresseePagination = ref({
  pageSize: 10,
  pageNumber: 1,
  total: 0
})

const handleMenu = (index) => {
  switch (index) {
    case 0:
      router.push('/home')
      break
    case 1:
      router.push('/mood')
      break
    case 2:
      router.push('/self')
      break
    case 3:
      router.push('/question')
      break
    case 5:
      router.push('/info')
      break
  }
}

const userList = ref([]) // 用户列表
const letterForm = ref({}) // 信件表单
const letterFormRef = ref() // 信件表单ref

const handleLetter = async () => {
  open.value = true
}

const handleCancel = () => {
  letterForm.value = {}
  open.value = false
  activeKey.value = '1'
}

const handleOk = async () => {
  letterFormRef.value
    .validate()
    .then(async () => {
      letterForm.value.senderId = Number(localStorage.getItem('userId'))

      const res = await sendLetter(letterForm.value)
      open.value = false
      message.success(res.data.reMsg)
      listSendLetterData()
      letterForm.value = {}
    })
    .catch((error) => {
      message.success(error.data.reMsg)
    })
}
const columns = ref([
  {
    title: '发件人',
    dataIndex: 'senderId',
    key: 'senderId',
    align: 'center',
    customRender: ({ record }) => {
      return localStorage.getItem('username')
    }
  },
  {
    title: '收件人',
    dataIndex: 'addresseeId',
    key: 'addresseeId',
    align: 'center',
    customRender: ({ record }) => {
      return userList.value.map((item) => {
        if (item.id == record.addresseeId) {
          return item.username
        }
      })
    }
  },
  {
    title: '审核状态',
    dataIndex: 'audit',
    key: 'audit',
    align: 'center',
    customRender: ({ record }) => {
      return record.audit == 1
        ? '审核通过'
        : record.audit == 2
          ? '待审核'
          : record.audit === 0
            ? '未通过'
            : ''
    }
  },

  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    width: '60%'
  }
])

const addresseeColumns = ref([
  {
    title: '发件人',
    dataIndex: 'senderId',
    key: 'senderId',
    align: 'center',
    customRender: ({ record }) => {
      return localStorage.getItem('username')
    }
  },
  {
    title: '收件人',
    dataIndex: 'addresseeId',
    key: 'addresseeId',
    align: 'center',
    customRender: ({ record }) => {
      return userList.value.map((item) => {
        if (item.id == record.addresseeId) {
          return item.username
        }
      })
    }
  },
  {
    title: '审核状态',
    dataIndex: 'audit',
    key: 'audit',
    align: 'center',
    customRender: ({ record }) => {
      return record.audit == 1
        ? '审核通过'
        : record.audit == 2
          ? '待审核'
          : record.audit === 0
            ? '未通过'
            : ''
    }
  },

  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    width: '60%'
  },
  {
    title: '操作',
    dataIndex: 'operation'
  }
])
const letterDataSource = ref([])
const addresseeDataSource = ref([])

const handlePageParams = (page, pageSize) => {
  pagination.value.pageNumber = page.current
  listSendLetterData()
}

const handleAddresseePageParams = (page, pageSize) => {
  pagination.value.pageNumber = page.current
  listSendLetterData()
}

const listSendLetterData = async () => {
  const userId = Number(localStorage.getItem('userId'))
  const { data } = await listsendLetterAllByUserId({ ...pagination.value, senderId: userId })
  letterDataSource.value = data.body.dataList
  pagination.value.total = data.body.allTotal
}

const listAddresseeData = async () => {
  const userId = Number(localStorage.getItem('userId'))
  const { data } = await listsendLetterAllByUserId({
    ...addresseePagination.value,
    addresseeId: userId
  })
  addresseeDataSource.value = data.body.dataList
  addresseePagination.value.total = data.body.allTotal
}

const onDelete = async (letterId) => {
  const res = await deleteLetter({ id: letterId })
  console.log(res)
  message.success(res.data.reMsg)
  listAddresseeData()
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 180px;
  background: url('../assets/images/home/header.png') no-repeat center center;
  background-size: cover;

  .right {
    display: flex;
    align-items: baseline;
    .item {
      cursor: pointer;
      margin-top: 20px;
      margin: 20px 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      .icon {
        img {
          width: 30px;
        }
      }

      .text {
        margin-top: 5px;
        color: #fff;
      }
    }
  }
}

.header2 {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;
  border: 1px solid slateblue;
  .right {
    display: flex;
    align-items: baseline;
    .item {
      cursor: pointer;
      margin-top: 20px;
      margin: 20px 15px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      .icon {
        img {
          width: 30px;
        }
      }

      .text {
        margin-top: 5px;
        color: slateblue;
      }
    }
  }
}
</style>
