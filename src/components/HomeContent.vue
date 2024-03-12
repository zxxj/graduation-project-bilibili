<template>
  <div class="home-content-container">
    <div class="top">
      <div class="left">
        <a-carousel :after-change="onChange" autoplay>
          <div class="item">
            <img src="../assets/images/content/1.jpg" alt="" />
            <div class="cover">
              <div class="l">唯美画风国漫，揭露黑暗世界观！</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="../assets/images/content/2.jpg" alt="" />
            <div class="cover">
              <div class="l">瞅一瞅到底学了啥>></div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="../assets/images/content/3.png" alt="" />
            <div class="cover">
              <div class="l">全网最全逐句解析27首内藏诗词！</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="../assets/images/content/4.png" alt="" />
            <div class="cover">
              <div class="l">我服了呀！就差一场考试了呀！</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="../assets/images/content/5.png" alt="" />
            <div class="cover">
              <div class="l">游戏高手帮我玩，用户福利大放送！</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="../assets/images/content/6.jpg" alt="" />
            <div class="cover">
              <div class="l">投稿领荣耀播报&亲密玫瑰~</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <img src="../assets/images/content/7.png" alt="" />
            <div class="cover">
              <div class="l">法国皇帝拿破仑浓缩传奇的一生</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="../assets/images/content/8.png" alt="" />
            <div class="cover">
              <div class="l">泪目！不完美的人生也值得满分的爱</div>
              <div class="r">
                <div class="btn">
                  <LeftOutlined />
                </div>
                <div class="btn">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
        </a-carousel>
      </div>
      <div class="right">
        <div class="item" v-for="item in videoList" :key="item">
          <a :href="item.link">
            <div class="top">
              <img :src="item.src" alt="" />

              <div class="desc">
                <div class="desc-left">
                  <div class="count">
                    <img src="../assets/images/content/视频.png" alt="" />
                    <div class="text">{{ item.count }}万</div>
                  </div>
                  <div class="pcount">
                    <img src="../assets/images/content/评论.png" alt="" />
                    <div class="text">{{ item.pcount }}</div>
                  </div>
                </div>
                <div class="time">{{ item.time }}</div>
              </div>
            </div>
          </a>
          <div class="bottom">
            <div class="title">{{ item.title }}</div>
            <div class="author-box">
              <img src="../assets/images/content/UP主.png" alt="" />
              <div class="author">{{ item.author }}</div>
              <div class="day">{{ item.day }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="item in videoBottomList" :key="item">
        <a :href="item.link">
          <div class="top">
            <img :src="item.src" alt="" />

            <div class="desc">
              <div class="desc-left">
                <div class="count">
                  <img src="../assets/images/content/视频.png" alt="" />
                  <div class="text">{{ item.count }}万</div>
                </div>
                <div class="pcount">
                  <img src="../assets/images/content/评论.png" alt="" />
                  <div class="text">{{ item.pcount }}</div>
                </div>
              </div>
              <div class="time">{{ item.time }}</div>
            </div>
          </div>
          <div class="bottom">
            <div class="title">{{ item.title }}</div>
            <div class="author-box">
              <img src="../assets/images/content/UP主.png" alt="" />
              <div class="author">{{ item.author }}</div>
              <div class="day">{{ item.day }}</div>
            </div>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'
import v1 from '../assets/images/content/v1.jpg'
import v2 from '../assets/images/content/v2.jpg'
import v3 from '../assets/images/content/v3.jpg'
import v4 from '../assets/images/content/v4.jpg'
import v5 from '../assets/images/content/v5.jpg'
import v6 from '../assets/images/content/v6.jpg'

const videoList = [
  {
    src: v1,
    count: 2.7,
    pcount: 185,
    time: '15:32',
    title: '前端技术的十八年风雨（2006-2024）',
    author: '织点代码',
    day: '昨天',
    link: 'https://www.bilibili.com/video/BV1eC411p73m/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v2,
    count: 2.1,
    pcount: 100,
    time: '02:28',
    title: '推荐几种网站部署方案',
    author: '狂奔滴小馬',
    day: '2-25',
    link: 'https://www.bilibili.com/video/BV1Mt42187SY/?spm_id_from=333.1007.tianma.1-1-1.click'
  },

  {
    src: v3,
    count: 119.2,
    pcount: 2678,
    time: '04:17',
    title: '【大虾沉浸式试车】7.98万！比亚迪驱逐舰05荣耀版',
    author: '大虾试车真香',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Fz421o7Gr/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v4,
    count: 105.3,
    pcount: 780,
    time: '3:23',
    title: '安和桥一响，你也会遗憾吗？',
    author: '九三的耳朵不是特别好',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Ej421Q7wj/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v5,
    count: 47.9,
    pcount: 4265,
    time: '15:32',
    title: '小米 14 Ultra 评测',
    author: '钟文泽',
    day: '2-23',
    link: 'https://www.bilibili.com/video/BV1hj421D79n/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v6,
    count: 27.5,
    pcount: 936,
    time: '08:40',
    title: '小不同，大进化！全新极氪001',
    author: '大米评测',
    day: '2-27',
    link: 'https://bilibili.com/video/BV1rr421p7Lv/?spm_id_from=333.337.search-card.all.click'
  }
]

const videoBottomList = [
  {
    src: v1,
    count: 2.7,
    pcount: 185,
    time: '15:32',
    title: '前端技术的十八年风雨（2006-2024）',
    author: '织点代码',
    day: '昨天',
    link: 'https://www.bilibili.com/video/BV1eC411p73m/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v2,
    count: 2.1,
    pcount: 100,
    time: '02:28',
    title: '推荐几种网站部署方案',
    author: '狂奔滴小馬',
    day: '2-25',
    link: 'https://www.bilibili.com/video/BV1Mt42187SY/?spm_id_from=333.1007.tianma.1-1-1.click'
  },

  {
    src: v3,
    count: 119.2,
    pcount: 2678,
    time: '04:17',
    title: '【大虾沉浸式试车】7.98万！比亚迪驱逐舰05荣耀版',
    author: '大虾试车真香',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Fz421o7Gr/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v4,
    count: 105.3,
    pcount: 780,
    time: '3:23',
    title: '安和桥一响，你也会遗憾吗？',
    author: '九三的耳朵不是特别好',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Ej421Q7wj/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v5,
    count: 47.9,
    pcount: 4265,
    time: '15:32',
    title: '小米 14 Ultra 评测',
    author: '钟文泽',
    day: '2-23',
    link: 'https://www.bilibili.com/video/BV1hj421D79n/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v6,
    count: 27.5,
    pcount: 936,
    time: '08:40',
    title: '小不同，大进化！全新极氪001',
    author: '大米评测',
    day: '2-27',
    link: 'https://bilibili.com/video/BV1rr421p7Lv/?spm_id_from=333.337.search-card.all.click'
  },
  {
    src: v1,
    count: 2.7,
    pcount: 185,
    time: '15:32',
    title: '前端技术的十八年风雨（2006-2024）',
    author: '织点代码',
    day: '昨天',
    link: 'https://www.bilibili.com/video/BV1eC411p73m/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v2,
    count: 2.1,
    pcount: 100,
    time: '02:28',
    title: '推荐几种网站部署方案',
    author: '狂奔滴小馬',
    day: '2-25',
    link: 'https://www.bilibili.com/video/BV1Mt42187SY/?spm_id_from=333.1007.tianma.1-1-1.click'
  },

  {
    src: v3,
    count: 119.2,
    pcount: 2678,
    time: '04:17',
    title: '【大虾沉浸式试车】7.98万！比亚迪驱逐舰05荣耀版',
    author: '大虾试车真香',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Fz421o7Gr/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v4,
    count: 105.3,
    pcount: 780,
    time: '3:23',
    title: '安和桥一响，你也会遗憾吗？',
    author: '九三的耳朵不是特别好',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Ej421Q7wj/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v5,
    count: 47.9,
    pcount: 4265,
    time: '15:32',
    title: '小米 14 Ultra 评测',
    author: '钟文泽',
    day: '2-23',
    link: 'https://www.bilibili.com/video/BV1hj421D79n/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v6,
    count: 27.5,
    pcount: 936,
    time: '08:40',
    title: '小不同，大进化！全新极氪001',
    author: '大米评测',
    day: '2-27',
    link: 'https://bilibili.com/video/BV1rr421p7Lv/?spm_id_from=333.337.search-card.all.click'
  },
  {
    src: v1,
    count: 2.7,
    pcount: 185,
    time: '15:32',
    title: '前端技术的十八年风雨（2006-2024）',
    author: '织点代码',
    day: '昨天',
    link: 'https://www.bilibili.com/video/BV1eC411p73m/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v2,
    count: 2.1,
    pcount: 100,
    time: '02:28',
    title: '推荐几种网站部署方案',
    author: '狂奔滴小馬',
    day: '2-25',
    link: 'https://www.bilibili.com/video/BV1Mt42187SY/?spm_id_from=333.1007.tianma.1-1-1.click'
  },

  {
    src: v3,
    count: 119.2,
    pcount: 2678,
    time: '04:17',
    title: '【大虾沉浸式试车】7.98万！比亚迪驱逐舰05荣耀版',
    author: '大虾试车真香',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Fz421o7Gr/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v4,
    count: 105.3,
    pcount: 780,
    time: '3:23',
    title: '安和桥一响，你也会遗憾吗？',
    author: '九三的耳朵不是特别好',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Ej421Q7wj/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v5,
    count: 47.9,
    pcount: 4265,
    time: '15:32',
    title: '小米 14 Ultra 评测',
    author: '钟文泽',
    day: '2-23',
    link: 'https://www.bilibili.com/video/BV1hj421D79n/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v6,
    count: 27.5,
    pcount: 936,
    time: '08:40',
    title: '小不同，大进化！全新极氪001',
    author: '大米评测',
    day: '2-27',
    link: 'https://bilibili.com/video/BV1rr421p7Lv/?spm_id_from=333.337.search-card.all.click'
  },
  {
    src: v1,
    count: 2.7,
    pcount: 185,
    time: '15:32',
    title: '前端技术的十八年风雨（2006-2024）',
    author: '织点代码',
    day: '昨天',
    link: 'https://www.bilibili.com/video/BV1eC411p73m/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v2,
    count: 2.1,
    pcount: 100,
    time: '02:28',
    title: '推荐几种网站部署方案',
    author: '狂奔滴小馬',
    day: '2-25',
    link: 'https://www.bilibili.com/video/BV1Mt42187SY/?spm_id_from=333.1007.tianma.1-1-1.click'
  },

  {
    src: v3,
    count: 119.2,
    pcount: 2678,
    time: '04:17',
    title: '【大虾沉浸式试车】7.98万！比亚迪驱逐舰05荣耀版',
    author: '大虾试车真香',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Fz421o7Gr/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v4,
    count: 105.3,
    pcount: 780,
    time: '3:23',
    title: '安和桥一响，你也会遗憾吗？',
    author: '九三的耳朵不是特别好',
    day: '2-20',
    link: 'https://www.bilibili.com/video/BV1Ej421Q7wj/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v5,
    count: 47.9,
    pcount: 4265,
    time: '15:32',
    title: '小米 14 Ultra 评测',
    author: '钟文泽',
    day: '2-23',
    link: 'https://www.bilibili.com/video/BV1hj421D79n/?spm_id_from=333.337.search-card.all.click'
  },

  {
    src: v6,
    count: 27.5,
    pcount: 936,
    time: '08:40',
    title: '小不同，大进化！全新极氪001',
    author: '大米评测',
    day: '2-27',
    link: 'https://bilibili.com/video/BV1rr421p7Lv/?spm_id_from=333.337.search-card.all.click'
  },
  {
    src: v5,
    count: 47.9,
    pcount: 4265,
    time: '15:32',
    title: '小米 14 Ultra 评测',
    author: '钟文泽',
    day: '2-23',
    link: 'https://www.bilibili.com/video/BV1hj421D79n/?spm_id_from=333.337.search-card.all.click'
  }
]
const onChange = (current) => {
  // console.log(current)
}
</script>

<style lang="scss" scoped>
.home-content-container {
  width: 100%;
  margin-top: 20px;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      width: 650px;
      height: 450px;
      // background-color: #d63025;
      background: #c9ccd3;
      background-image: linear-gradient(
        -180deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
      background-image: linear-gradient(to right, #434343 0%, black 100%);
      border-radius: 10px;

      .item {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .cover {
          padding: 0 10px 0 20px;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;

          .l {
            font-size: 20px;
            color: #fff;
          }
          .r {
            display: flex;
            font-size: 13px;
            font-weight: bold;

            .btn {
              cursor: pointer;
              width: 30px;
              height: 30px;
              background-color: #a6211c;
              text-align: center;
              line-height: 30px;
              border-radius: 8px;
              margin: 0 6px;
              color: #fff;
            }
          }
        }
      }
    }

    .right {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        border-radius: 8px;
        margin: 0 20px 60px 20px;
        width: 300px;
        height: 36%;

        .top {
          position: relative;
          img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
          }

          .desc {
            padding: 0 10px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.2);
            width: 100%;
            img {
              width: 25px;
              height: 25px;
            }
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .desc-left {
              display: flex;
              font-size: 14px;
              .count {
                display: flex;
                align-items: center;
                margin-right: 8px;
              }

              .pcount {
                display: flex;
                align-items: center;
              }
            }

            .time {
              font-size: 14px;
            }
          }
        }

        .bottom {
          margin-top: 10px;

          .title {
            font-weight: bold;
          }
          .author-box {
            display: flex;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
              margin-right: 5px;
            }
            margin-top: 10px;
            font-size: 14px;
            color: #9499ad;
            display: flex;
            .author {
              margin-right: 15px;
            }
          }
        }
      }
    }
  }

  .bottom {
    a {
      color: #9499ad;
      text-decoration: none;
    }
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      border-radius: 8px;
      margin: 0 20px 60px 20px;
      width: 300px;
      height: 36%;

      .top {
        position: relative;
        img {
          border-radius: 8px;
          width: 100%;
          height: 100%;
        }

        .desc {
          padding: 0 10px;
          color: #fff;
          background-color: rgba(0, 0, 0, 0.2);
          width: 100%;
          img {
            width: 25px;
            height: 25px;
          }
          position: absolute;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .desc-left {
            display: flex;
            font-size: 14px;
            .count {
              display: flex;
              align-items: center;
              margin-right: 8px;
            }

            .pcount {
              display: flex;
              align-items: center;
            }
          }

          .time {
            font-size: 14px;
          }
        }
      }

      .bottom {
        margin-top: 10px;

        .title {
          font-weight: bold;
          color: #000;
        }
        .author-box {
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
          margin-top: 10px;
          font-size: 14px;
          color: #9499ad;
          display: flex;
          .author {
            margin-right: 15px;
          }
        }
      }
    }
  }
}

:deep(.ant-carousel) {
  height: 100% !important;
}

:deep(.slick-slider) {
  height: 100% !important;
}

:deep(.slick-dots) {
  left: -417px !important;
}
</style>
