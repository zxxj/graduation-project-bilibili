<template>
  <div class="mood-container">
    <Header />
    <div class="content banner">
      <a-tabs v-model:activeKey="activeKey" @change="handleTabsChange">
        <a-tab-pane key="1" tab="选择心情">
          <div class="top">
            <div class="left">
              <div class="seletedMood">
                <span class="hello">Hello!!</span>
                &nbsp;
                <span class="title"
                  >欢迎来到我的主页,祝您有美好的一天,让我来记录您当前的心情吧~</span
                >
                <a-select
                  ref="select"
                  v-model:value="moodOption"
                  style="width: 200px; margin-left: 20px"
                  @focus="focus"
                  @change="handleChange"
                  placeholder="请选择心情"
                >
                  <a-select-option value="1">快乐</a-select-option>
                  <a-select-option value="2">悲伤</a-select-option>
                  <a-select-option value="3">愤怒</a-select-option>
                  <a-select-option value="4">狂喜</a-select-option>
                  <a-select-option value="5">平静</a-select-option>
                </a-select>
              </div>

              <div style="margin-left: 20px">
                <a-input
                  v-model:value="description"
                  placeholder="请输入心情描述"
                  style="width: 500px"
                ></a-input>
              </div>
            </div>

            <div class="right">
              <a-button type="primary" @click="handleClick">保存</a-button>
            </div>
          </div>

          <!-- <div class="center">
        <div class="days">
          <div class="name">周杰伦，</div>
          <div class="total">您累计记录心情: 215 天</div>
        </div>

        <p class="time">您上次记录时间:2024-03-05 11:17</p>
      </div> -->
          <div class="bottom">
            <a-table
              :loading="moodListLoading"
              :dataSource="dataSource"
              :columns="columns"
              :pagination="pagination"
              @change="handlePageParams"
            >
            </a-table>
          </div>
        </a-tab-pane>

        <a-tab-pane key="2" tab="心情统计">
          <div style="display: flex; justify-content: center; align-items: center">
            <div ref="moodChartRef" class="moodChart" style="width: 700px; height: 700px">123</div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { ref, onMounted, nextTick } from 'vue'
import { listMood, addMood } from '../http/user'
import { message } from 'ant-design-vue'
import * as echarts from 'echarts'

onMounted(async () => {
  listMoodData()
  listAllMoodList()
})

const moodChartRef = ref()

const activeKey = ref('1')

const pagination = ref({
  pageSize: 10,
  pageNumber: 1,
  total: 0
})

const moodOption = ref()
const description = ref()
const moodListLoading = ref(false)

const focus = () => {
  console.log('focus')
}

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

// 1
const handleClick = async () => {
  switch (Number(moodOption.value)) {
    case 1:
      addMoodData()
      break
    case 2:
      addMoodData()
      break
    case 3:
      addMoodData()
      break
    case 4:
      addMoodData()
      break
    case 5:
      addMoodData()
      break
  }
}

const dataSource = ref([])

const columns = ref([
  {
    title: '心情状态',
    dataIndex: 'moodOption',
    key: 'moodOption',
    customRender: (text, record, index) => {
      if (text.record.moodOption === 1) {
        text.record.moodOption = '快乐'
      }

      if (text.record.moodOption === 2) {
        text.record.moodOption = '悲伤'
      }

      if (text.record.moodOption === 3) {
        text.record.moodOption = '愤怒'
      }

      if (text.record.moodOption === 4) {
        text.record.moodOption = '狂喜'
      }

      if (text.record.moodOption === 5) {
        text.record.moodOption = '平静'
      }

      return text.record.moodOption
    }
  },
  {
    title: '心情描述',
    dataIndex: 'description',
    key: 'description',
    width: '70%'
  }
  // {
  //   title: '记录时间',
  //   dataIndex: 'time',
  //   key: 'time'
  // }
])

const listMoodData = async () => {
  moodListLoading.value = true
  const userId = localStorage.getItem('userId')
  const body = {
    ...pagination.value,
    userId: userId
  }
  const res = await listMood(body)
  if (res && res.data.body.dataList) {
    dataSource.value = res.data.body.dataList
    pagination.value.total = res.data.body.allTotal
  } else {
    message.error('心情记录列表获取失败')
  }

  moodListLoading.value = false
}

// 饼图数据
// 查当前用户所有的心情列表 不分页
const moodTotal = ref({
  total1: 0,
  total2: 0,
  total3: 0,
  total4: 0,
  total5: 0,
  total6: 0
})
const listAllMoodList = async () => {
  const res = await listMood({
    pageSize: 999999,
    pageNumber: 1,
    userId: Number(localStorage.getItem('userId'))
  })

  if (res && res.data.body.dataList) {
    res.data.body.dataList.map((item) => {
      if (item.moodOption == 1) {
        moodTotal.value.kuaile = moodTotal.value.total1 += item.moodOption
      } else if (item.moodOption == 2) {
        moodTotal.value.beishang = moodTotal.value.total2 += item.moodOption
      } else if (item.moodOption == 3) {
        moodTotal.value.fennu = moodTotal.value.total3 += item.moodOption
      } else if (item.moodOption == 4) {
        moodTotal.value.kuangxi = moodTotal.value.total4 += item.moodOption
      } else if (item.moodOption == 5) {
        moodTotal.value.pingjing = moodTotal.value.total5 += item.moodOption
      }
    })
  }

  console.log(moodTotal.value)
}

const addMoodData = async () => {
  const body = {
    description: description.value,
    moodOption: Number(moodOption.value),
    userId: Number(localStorage.getItem('userId'))
  }
  const res = await addMood(body)
  if (res && res.data.reCode == '200') {
    message.success('添加成功!!')
    listMoodData()
    moodOption.value = ''
    description.value = ''
  } else {
    message.error('添加失败!!')
  }
}

const handlePageParams = (page, pageSize) => {
  console.log(page, pageSize)
  pagination.value.pageNumber = page.current
  listMoodData()
}

function initChart() {
  const chart = echarts.init(moodChartRef.value)

  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center',
      textStyle: {
        fontSize: 18
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: moodTotal.value.kuaile, name: '快乐' },
          { value: moodTotal.value.beishang, name: '悲伤' },
          { value: moodTotal.value.fennu, name: '愤怒' },
          { value: moodTotal.value.kuangxi, name: '狂喜' },
          { value: moodTotal.value.pingjing, name: '平静' }
        ]
      }
    ]
  }

  chart.setOption(option)
}

const handleTabsChange = (key) => {
  if (key == 1) {
    console.log(1)
  } else if (key == 2) {
    nextTick(() => {
      initChart()
    })
  }
}
</script>

<style lang="scss" scoped>
.mood-container {
  .top {
    padding-top: 50px;
    display: flex;
    align-items: baseline;

    .left {
      display: flex;
      align-items: baseline;
      .seletedMood {
        .hello {
          font-size: 30px;
          font-weight: bold;
          color: #8697df;
        }

        .title {
          color: #8697df;
        }
      }
    }

    .right {
      margin-left: 40px;
    }
  }

  .center {
    font-size: 14px;
    .days {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .name {
        color: #8697df;
        font-weight: bold;
      }
    }

    .time {
      margin-top: 10px;
    }
  }

  .bottom {
    margin-top: 40px;
  }
}
</style>
