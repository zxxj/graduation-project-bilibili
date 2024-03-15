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

        <div class="item" @click="handleAssets">
          <div class="icon">
            <img src="../assets/images/home/上传.png" alt="" />
          </div>
          <div class="text">上传资源</div>
        </div>
        <a href="#" class="item">
          <div class="icon">
            <img src="../assets/images/home/消息对话.png" alt="" />
          </div>
          <div class="text">对话</div>
        </a>

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
    style="width: 700px"
    cancelText="关闭"
    :zIndex="1"
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
          :loading="addresseeLoading"
          :pagination="addresseePagination"
          @change="handleAddresseePageParams"
          :dataSource="addresseeDataSource"
          :columns="addresseeColumns"
          style="width: 100%"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'senderId'">
              {{ listUsername(record.senderId) }}
            </template>

            <template v-if="column.key === 'addresseeId'">
              {{ listUsername(record.addresseeId) }}
            </template>

            <template v-if="column.key === 'operation'">
              <a-button type="primary" @click="handleDetail(record, true)">查看内容</a-button>
            </template>
          </template>
        </a-table>
      </a-tab-pane>

      <a-tab-pane key="3" tab="已发送信件">
        <a-table
          :loading="sendLoading"
          :pagination="pagination"
          @change="handlePageParams"
          :dataSource="letterDataSource"
          :columns="columns"
          style="width: 100%"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'senderId'">
              {{ listUsername(record.senderId) }}
            </template>

            <template v-if="column.key === 'addresseeId'">
              {{ listUsername(record.addresseeId) }}
            </template>

            <template v-if="column.key === 'operation'">
              <a-button type="primary" @click="handleDetail(record, false)">查看内容</a-button>
            </template>
          </template>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </a-modal>

  <a-modal
    v-model:open="openDetail"
    :title="detailModalTitle"
    style="width: 700px"
    :footer="null"
    :zIndex="10"
  >
    <div>{{ detail }}</div>

    <div class="btn" style="margin-top: 230px; text-align: center; overflow-y: scroll">
      <a-popconfirm title="您确定要拒收吗?" @confirm="onDelete">
        <a-button type="primary" v-if="isDetailModal">拒收信件</a-button>
      </a-popconfirm>
    </div>
  </a-modal>

  <a-modal
    :zIndex="1"
    v-model:open="openAssets"
    style="width: 700px"
    @cancel="handleAssetsCancel"
    :footer="null"
  >
    <a-tabs v-model:activeKey="assetsActiveKey" @change="assetsTabsChange">
      <a-tab-pane key="1" tab="上传资源">
        <a-card :bordered="false">
          <a-form ref="assetsFormRef" :model="assetsForm" :label-col="{ style: { width: '80px' } }">
            <a-form-item
              label="资源内容"
              name="content"
              :rules="[{ required: true, message: '请输入资源内容!' }]"
            >
              <a-textarea v-model:value="assetsForm.content"></a-textarea>
            </a-form-item>
          </a-form>
        </a-card>
      </a-tab-pane>

      <a-tab-pane key="2" tab="已上传资源">
        <a-table
          :pagination="assetsPagination"
          @change="handleAssetsPageParams"
          :dataSource="assetsDatasource"
          :columns="assetsColumns"
          style="width: 100%"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'publisherId'">
              {{ listUsername(record.publisherId) }}
            </template>

            <template v-if="column.key === 'operation'">
              <a-button type="primary" @click="handleDetail(record, false)">查看内容</a-button>
            </template>
          </template>
        </a-table>
      </a-tab-pane>

      <!-- <a-tab-pane key="3" tab="全部资源"> </a-tab-pane> -->
    </a-tabs>

    <div
      v-if="assetsActiveKey != 2"
      style="display: flex; justify-content: center; align-items: center; margin-top: 20px"
    >
      <a-button type="primary" :icon="h(CloudUploadOutlined)" @click="handleAssetsOk"
        >上传资源</a-button
      >
    </div>
  </a-modal>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted, h } from 'vue'
import {
  addResource,
  deleteLetter,
  listResource,
  listsendLetterAllByUserId,
  sendLetter,
  userAll
} from '@/http/user'
import { message } from 'ant-design-vue'
import { CloudUploadOutlined } from '@ant-design/icons-vue'

onMounted(async () => {
  const res = await userAll()
  userList.value = res.data.body.dataList

  listAddresseeData()
  listSendLetterData()
})

const detailModalTitle = ref('信件内容')
const router = useRouter()
const route = useRoute()
const open = ref(false)
const openDetail = ref(false)
const detail = ref() // 信件内容
const isDetailModal = ref() // 控制显示拒收按钮
const letterId = ref() // 信件id
const openAssets = ref(false)
const activeKey = ref('1')
const assetsForm = ref({})
const assetsFormRef = ref()
const assetsActiveKey = ref('1')
const assetsDatasource = ref([])
const pagination = ref({
  pageSize: 10,
  pageNumber: 1,
  total: 0
})
const addresseeLoading = ref(false)
const sendLoading = ref(false)

const addresseePagination = ref({
  pageSize: 10,
  pageNumber: 1,
  total: 0
})

const assetsPagination = ref({
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

const listUsername = (id) => {
  const item = userList.value.filter((item) => {
    if (item.id === id) {
      return item.username
    }
  })

  return item[0].username
}

const columns = ref([
  {
    title: '发件人',
    dataIndex: 'senderId',
    key: 'senderId',
    align: 'center',
    customRender: ({ record }) => {
      return userList.value.map((item) => {
        if (item.id == record.senderId) {
          return item.username
        }
      })
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

  // {
  //   title: '内容',
  //   dataIndex: 'content',
  //   key: 'content',
  //   width: '60%'
  // },
  {
    key: 'operation',
    title: '操作',
    dataIndex: 'operation',
    align: 'center'
  }
])

const addresseeColumns = ref([
  {
    title: '发件人',
    dataIndex: 'senderId',
    key: 'senderId',
    align: 'center',
    customRender: ({ record }) => {
      return userList.value.map((item) => {
        if (item.id == record.senderId) {
          return item.username
        }
      })
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
    key: 'operation',
    title: '操作',
    dataIndex: 'operation',
    align: 'center'
  }
])

const assetsColumns = ref([
  {
    title: '发布人',
    dataIndex: 'publisherId',
    key: 'publisherId',
    align: 'center',
    customRender: ({ record }) => {
      return userList.value.map((item) => {
        if (item.id == record.publisherId) {
          return item.username
        }
      })
    }
  },
  {
    title: '资源内容',
    dataIndex: 'content',
    key: 'content',
    align: 'center'
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
    key: 'operation',
    title: '操作',
    dataIndex: 'operation',
    align: 'center'
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
  sendLoading.value = true
  const userId = Number(localStorage.getItem('userId'))
  const { data } = await listsendLetterAllByUserId({
    ...pagination.value,
    senderId: userId,
    audit: 1
  })
  letterDataSource.value = data.body.dataList
  pagination.value.total = data.body.allTotal
  sendLoading.value = false
}

const listAddresseeData = async () => {
  addresseeLoading.value = true
  const userId = Number(localStorage.getItem('userId'))
  const { data } = await listsendLetterAllByUserId({
    ...addresseePagination.value,
    addresseeId: userId,
    audit: 1
  })
  addresseeDataSource.value = data.body.dataList
  addresseePagination.value.total = data.body.allTotal
  addresseeLoading.value = false
}

const onDelete = async () => {
  const res = await deleteLetter({ id: letterId.value })
  console.log(res)
  message.success(res.data.reMsg)
  listAddresseeData()
  openDetail.value = false
}

const handleDetail = (record, isDetail) => {
  if (record.publisherId) {
    detailModalTitle.value = '资源内容'
    isDetailModal.value = isDetail
    detail.value = record.content
  } else {
    letterId.value = record.id
    isDetailModal.value = isDetail
    detail.value = record.content
  }
  openDetail.value = true
}

// 资源

const assetsTabsChange = (key) => {
  if (key == 2) {
    listResourceData(1)
  } else if (key == 3) {
    listResourceData(0)
  }
}

const listResourceData = async (audit = 0) => {
  const res = await listResource({
    ...assetsPagination.value,
    audit: audit,
    publisherId: Number(localStorage.getItem('userId'))
  })

  if (res && res.data.body.dataList) {
    assetsDatasource.value = res.data.body.dataList
  }
}

const handleAssetsPageParams = (page, pageSize) => {
  assetsPagination.value.pageNumber = page.current
  listResourceData(1)
}

const handleAssets = () => {
  openAssets.value = true
}

const handleAssetsOk = async () => {
  assetsFormRef.value
    .validate()
    .then(async () => {
      assetsForm.value.publisherId = Number(localStorage.getItem('userId'))
      const res = await addResource(assetsForm.value)
      message.success(res.data.reMsg)
      assetsForm.value = {}
      openAssets.value = false
    })
    .catch((error) => {
      message.success(error.data.reMsg)
    })
}

const handleAssetsCancel = () => {
  assetsForm.value = {}
  openAssets.value = false
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
  border-bottom: 1px solid #8697df;
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
        color: #8697df;
      }
    }
  }
}

a {
  text-decoration: none;
}
</style>
