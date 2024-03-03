<template>
  <div class="menu-container">
    <div class="left">
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/动态.png" alt="" />
        </div>
        <div class="text">发现</div>
      </div>

      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/热门.png" alt="" />
        </div>
        <div class="text">热门</div>
      </div>
    </div>
    <div class="center">
      <div class="item" v-for="item in menuList" :key="item">{{ item }}</div>
    </div>
    <div class="right">
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/专栏.png" alt="" />
        </div>
        <div class="text">专栏</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/活动2.png" alt="" />
        </div>
        <div class="text">活动</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/社区中心.png" alt="" />
        </div>
        <div class="text">社区中心</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/直播.png" alt="" />
        </div>
        <div class="text">直播</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/课堂.png" alt="" />
        </div>
        <div class="text">课堂</div>
      </div>
      <div class="item">
        <div class="icon">
          <img src="../assets/images/menu/新歌.png" alt="" />
        </div>
        <div class="text">新歌热榜</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuList = ref([
  '番剧',
  '国创',
  '综艺',
  '动画',
  '鬼畜',
  '舞蹈',
  '娱乐',
  '科技',
  '美食',
  '汽车',
  '运动',
  'VLOG',
  '电影',
  '电视剧',
  '纪录片',
  '游戏',
  '音乐',
  '影视',
  '知识',
  '资讯',
  '生活',
  '时尚',
  '动物圈',
  '更多'
])
</script>

<style lang="scss" scoped>
.menu-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    margin-right: 20px;
    display: flex;
    justify-content: space-around;
    width: 150px;
    .item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      .icon {
        img {
          width: 40px;
        }
      }

      .text {
        margin-top: 5px;
        color: #000;
      }
    }
  }

  .center {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    border-right: 2px solid #e3e5e7;

    .item {
      cursor: pointer;
      margin: 5px;
      width: 91px;
      height: 32px;
      background-color: #f6f7f8;
      text-align: center;
      line-height: 32px;
      color: #61666d;
      border-radius: 8px;
      font-size: 14px;
    }

    .item:hover {
      transition: all 0.5s;
      background-color: #e4e5e7;
      color: #000;
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // align-items: center;
    width: 300px;
    .item {
      cursor: pointer;
      margin: 10px 0;
      width: 30%;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 8px;
        img {
          width: 25px;
          vertical-align: middle;
        }
      }

      .text {
        font-size: 14px;
        color: #61666d;
      }
    }
  }
}
</style>
