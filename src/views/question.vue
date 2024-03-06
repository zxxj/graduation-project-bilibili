<template>
  <div class="question-container">
    <Header />

    <div class="content banner">
      <div class="tabs">
        <a
          v-for="(item, index) in tabs"
          :key="item"
          :href="item.href"
          :class="currentTabs === index ? 'active' : 'item'"
          @click="handleTab(index)"
          >{{ item.title }}</a
        >
      </div>
    </div>

    <div class="content cate">
      <div class="text" id="sy">生涯规划</div>
    </div>
    <div class="banner question">
      <a target="_blank" :href="item.src" class="item" v-for="item in sy" :key="item">
        <img :src="item.img" class="img"></img>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </a>
    </div>

		<!-- 职业素养 -->
		<div class="zy">
			<div class="content cate">
      <div class="text" id="zy">职业素养</div>
    </div>
    <div class="banner question">
      <a  target="_blank" :href="item.src" class="item" v-for="item in zy" :key="item">
        <img :src="item.img" class="img"></img>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </a>
    </div>
		</div>

		<!-- 性格测试 -->
		<div class="zy">
			<div class="content cate">
      <div class="text" id="test">性格测试</div>
    </div>
    <div class="banner question">
      <a target="_blank" :href="item.src" class="item" v-for="item in xg" :key="item">
        <img :src="item.img" class="img"></img>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </a>
    </div>
		</div>

		<!-- 生活态度 -->
		<div class="zy">
			<div class="content cate">
      <div class="text" id="sh">生活态度</div>
    </div>
    <div class="banner question">
      <a  target="_blank" :href="item.src" class="item" v-for="item in sh" :key="item">
        <img :src="item.img" class="img"></img>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </a>
    </div>
		</div>

				<!-- 趣味测评 -->
				<div class="zy">
			<div class="content cate">
      <div class="text" id="qw">趣味测评</div>
    </div>
    <div class="banner question">
      <a  target="_blank" :href="item.src" class="item" v-for="item in qw" :key="item">
        <img :src="item.img" class="img"></img>
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </a>
    </div>
		</div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { ref } from 'vue'
import q1 from "../assets/images/question/q1.jpg"
import q2 from "../assets/images/question/q2.jpg"
import q3 from "../assets/images/question/q3.jpg"
import q4 from "../assets/images/question/q4.png"
import q5 from "../assets/images/question/q5.png"
import q6 from "../assets/images/question/q6.png"
import q7 from "../assets/images/question/q7.png"
import q8 from "../assets/images/question/q8.png"
import q9 from "../assets/images/question/q9.png"
import q10 from "../assets/images/question/q10.png"
import q11 from "../assets/images/question/q11.png"
import q12 from "../assets/images/question/q12.png"
import q13 from "../assets/images/question/q13.png"
import q14 from "../assets/images/question/q14.png"
import q15 from "../assets/images/question/q15.png"
import q16 from "../assets/images/question/q16.png"
import q17 from "../assets/images/question/q17.png"
import q18 from "../assets/images/question/q18.png"
import q19 from "../assets/images/question/q19.png"
import q20 from "../assets/images/question/q20.png"

const tabs = ref([
  {
    title: '生涯规划',
    href: '#sy'
  },
  {
    title: '职业素养',
    href: '#zy'
  },
  {
    title: '性格测试',
    href: '#test'
  },
  {
    title: '生活态度',
    href: '#sh'
  },
  {
    title: '趣味测评',
    href: '#qw'
  },
])

const currentTabs = ref(0)

const handleTab = (index) => {
  currentTabs.value = index
}

// 生涯规划
const sy = ref([
	{
		img: q1,
		title: '生涯定位系统',
		count: '8122人已测',
		src: 'https://open.xjy.cn/main/ceping72'
	},
	{
		img: q2,
		title: '霍兰德职业倾向测评',
		count: '563560人已测',
		src: 'https://open.xjy.cn/main/ceping73_details'
	},
	{
		img: q3,
		title: '职业生涯信念测评',
		count: '9802人已测',
		src: 'https://open.xjy.cn/main/ceping55_details'
	}
])

// 职业素养
const zy = ref([
	{
		img: q4,
		title: '职业价值观测评',
		count: '180945人已测',
		src: 'https://open.xjy.cn/main/professional_measurement?cid=46&channel=xjyrcjsq_eva_menu'
	},
	{
		img: q5,
		title: '职场潜意识测评',
		count: '6336人已测',
		src: 'https://open.xjy.cn/main/drawing?channel=xjyrcjsq_eva_menu'
	},
	{
		img: q6,
		title: '职业健康度测评',
		count: '11258人已测',
		src: 'https://open.xjy.cn/main/ceping71_details'
	},
	{
		img: q7,
		title: '职业发展健康指数测评',
		count: '12260人已测',
		src: 'https://open.xjy.cn/main/measurement_details?cid=44'
	},
	{
		img: q8,
		title: '大学生就业核心竞争力测评',
		count: '9980人已测',
		src: 'https://open.xjy.cn/main/ceping76_details'
	},

])

// 性格测试
const xg = ref([
	{
		img: q9,
		title: 'MBTI职业性格测试',
		count: '1368003人已测',
		src: 'https://www.xjy.cn/ceping/mbti.html?appid=xjy15c999cc0'
	},
	{
		img: q10,
		title: 'DISC性格测试',
		count: '771356人已测',
		src: 'https://www.xjy.cn/ceping/disc.html?appid=xjy15c999cc0'
	},
	{
		img: q11,
		title: '原生家庭：看它对你的职场有什么影响？',
		count: '26420人已测',
		src: 'https://open.xjy.cn/main/ceping47_details'
	},
	{
		img: q12,
		title: '三叶草测评',
		count: '262169人已测',
		src: 'https://www.xjy.cn/ceping/35.html?appid=xjy15c999cc0'
	},


])

// 生活态度
const sh = ref([
	{
		img: q13,
		title: '可迁移能力测评（通用版）',
		count: '75822人已测',
		src: 'https://open.xjy.cn/main/measurement_public_p1_details'
	},
	{
		img: q14,
		title: '工作家庭平衡状态测评',
		count: '5214人已测',
		src: 'https://open.xjy.cn/main/ceping62_details'
	},
	{
		img: q15,
		title: '心智之墙定位器',
		count: '207919人已测',
		src: 'https://www.xjy.cn/ceping/chaiqiang.html?appid=xjy15c999cc0'
	},
	{
		img: q16,
		title: '发现你的人生终极关键词',
		count: '424401人已测',
		src: 'https://www.xjy.cn/ceping/34.html?appid=xjy15c999cc0'
	},


])
// 趣味
const qw = ref([
	{
		img: q17,
		title: '给在乎的人写一封信',
		count: '1432人已测',
		src: 'https://open.xjy.cn/main/ceping82'
	},
	{
		img: q18,
		title: '我的内心“野兽”测评',
		count: '16882人已测',
		src: 'https://open.xjy.cn/main/ceping54_details'
	},
	{
		img: q19,
		title: '我的职场代言神兽',
		count: '6741人已测',
		src: 'https://open.xjy.cn/main/ceping74_details'
	},
	{
		img: q20,
		title: '星球继任计划',
		count: '2265人已测',
		src: 'https://open.xjy.cn/main/ceping79'
	},


])
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: block;
  color: #000;
}

.content {
  display: flex;
  justify-content: center;
}
.tabs {
  margin-top: 40px;
  width: 800px;
  display: flex;
  justify-content: space-around;

  .item {
    height: 40px;
    width: 120px;
    text-align: center;
    border-radius: 20px;
    line-height: 40px;
    font-size: 18px;
  }
}

.cate {
  margin-top: 40px;
  .text {
    font-size: 30px;
    font-weight: bold;
    position: relative;
  }

  .text::after {
    position: absolute;
    bottom: -20px;
    border-radius: 6px;
    width: 45px;
    height: 6px;
    content: '';
    left: 50%;
    margin-left: -22px;
    background: linear-gradient(90deg, #69ffcb 0%, #7637ff 100%, #379cff 100%);
  }
}

.question {
  margin-top: 50px;
  display: flex;
	flex-wrap: wrap;
  justify-content:center;
  .item {
    display: flex;
		margin: 30px  20px;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 300px;
    border-radius: 20px;

		img {
			width: 100%;
			height: 80%;
		}

		.title {
			margin: 20px 0;
			font-size: 20px;
		}

		.count {
			font-size: 18px;
			color: #999;
		}
  }
}

.question::after {
	content: '';
	width: 55%;
}

.zy {
	margin-top: 100px;
}

.active {
  border-radius: 20px;
  text-align: center;
  background-color: #559ef8;
  font-weight: bold;
  color: #fff;
  height: 40px;
  width: 120px;
  line-height: 40px;
  font-size: 18px;
}
</style>
