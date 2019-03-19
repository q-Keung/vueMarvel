<template>
  <el-main>
    <el-row>
      <el-col :span="22" :offset="1">
        <!-- <el-carousel height="350px" trigger="click" @change="getCarousel">
          <el-carousel-item v-for="(item,cur) in carouselArr" :key="cur">
            <img :src="item.url" alt="" />
          </el-carousel-item>
        </el-carousel> -->
        <div class="marvel-main">
          <!-- <header>
            <h2>史上最漫威英雄介绍，看完以后再也不会懵逼</h2>
            <span class="author">作者：<br />
              张子强，一名前端码农，坐标广州，漫威的死忠粉，喜爱刺激的游乐设施。</span>
          </header>
          <div class="marvel-content">
            <p class="justify">
              《钢铁侠1、2》：Tony
              Stark（小罗伯特·唐尼饰）是个一点都不纨绔的富二代，有个炒鸡好用的脑子，十五岁时就进入麻省理工，十七岁以最高分毕业。可以在最快的速度里精通任何一门知识。Tony在21岁时失去父母，接管Stark家族企业，并用聪明的脑袋扩展财富。后来在一次突如其来的绑架中，差点丧生，在制作导弹的废铜烂铁中Tony鼓捣出了钢铁侠战衣，死里逃生。回来之后改良战衣，成为真正的钢铁侠，公开超级英雄的身份来保护世界。公开自己钢铁侠身份后，引来媒体、舆论和政府各界的质疑，邪恶势力再度来袭，小唐尼一一解决还不忘撩妹，秘书Pepper升级为女朋友。
              和其他超级英雄不同，钢铁侠本人是没有经过任何变异和强化改造的，没有任何超能力，用才智证明科技才是第一生产力！ 神盾局局长Nick
              Fury三顾茅庐，希望钢铁侠加入复仇者联盟，钢铁侠加入（神盾局是美国政府专门用于同超能力英雄接洽并进行管理的特殊部队）
            </p>
            <img src="../assets/iron1.jpg" alt="">
          </div> -->
          <div :class="className" :style="{height:height,width:width}" ref="myEchart"></div>
          <div class="marvel-timeline">
            <time-line></time-line>
            <div class="marvel-rate">
              <div class="rate-title">
                <span class="span">了解完漫威电影宇宙，就来评个分吧！<span class="iconfont iconmysql"></span></span>
                <el-rate ref="rate" @change="changeRate" v-model="rateVal" allow-half show-score :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
              </div>
            </div>
          </div>

        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  import echarts from 'echarts'
  import timeLine from '../components/timeline'
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    name: 'mainer',
    components: {
      timeLine
    },
    data() {
      return {
        className: 'chart',
        chart: null,
        height: '350px',
        width: '100%',
        rateVal: 0,
        carouselArr: [{
            url: require('../assets/imgs/swipers/carousel1.jpg')
          },
          {
            url: require('../assets/imgs/swipers/carousel2.jpg')
          },
          {
            url: require('../assets/imgs/swipers/carousel3.jpg')
          },
        ]
      }
    },
    created() {
      this.rateVal = this.$store.getters.getRate;
    },
    methods: {
      getCarousel(e) {
        // console.log(e);
      },
      changeRate(rate) {
        //bug  tab
        this.rateVal = rate;
        this.$store.commit('setRate', rate);
        this.$message({
          type: "success",
          message: '谢谢您的评分！你真可爱！'
        })
      },
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart, 'light');
        this.chart.showLoading();
        setTimeout(_ => {
          this.chart.hideLoading();
        }, 1000)
        this.chart.setOption({
          title: {
            text: '漫威统计展示'
          },
          color: ['#ca8622', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#bda29a', '#6e7074',
            '#546570', '#c4ccd3'
          ],
          /*hover  提示 */
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          //右上角的功能区域
          toolbox: {
            feature: {
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['line', 'bar']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          legend: {
            type: 'scroll',
            // selected: data.selected
            // data: ['美国队长', '钢铁侠', '雷神', '绿巨人', '鹰眼', '黑寡妇']
            // orient:'vertical',
            // data: [{
            //   name: '美队',
            //   // 强制设置图形为圆。
            //   icon: 'circle',
            //   // 设置文本为红色
            //   textStyle: {
            //     color: 'red'
            //   }
            // }]
          },
          xAxis: {
            data: ['美国队长', '钢铁侠', '雷神', '绿巨人', '鹰眼', '黑寡妇']
          },
          yAxis: {},

          series: [{
            name: '美国队长',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
            // label: {
            //   show: true,
            //   // 标签的文字。
            //   formatter: '提示文字'
            // },
            // // 高亮样式。
            // emphasis: {
            //   itemStyle: {
            //     // 高亮时点的颜色。
            //     color: '#61a0a8'
            //   },
            //   label: {
            //     show: true,
            //     // 高亮时标签的文字。
            //     formatter: 'hoverW文字'
            //   }
            // }
          }, {
            name: '钢铁侠',
            type: 'bar',
            data: [15, 25, 40, 20, 30, 40],
          }]
        });
      }
    },
    mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    // beforeRouteLeave(to, from, next) {
    //   console.log(to)
    // }
  }

</script>

<style lang="scss">
  .el-main {
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      // z-index: 9999;
    }
  }

  .marvel-main {
    header {
      text-align: center;
    }

    /*漫威数据统计*/
    .chart {
      background: #f2f3f5;
      border-radius: 10px;
      box-shadow: 1px 1px 3p 2px #b7b8bb;
    }



    /*漫威时间线*/
    .marvel-timeline {
      width: 100%;
    }

    /*评分*/
    .marvel-rate {
      margin: 20px 0;
      width: 100%;
      display: flex;

      .rate-title {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }

      .span {
        margin-right: 20px;
      }
      .el-rate{
        width:165px;
      }
    }

    .author {
      display: block;
      width: 580px;
      height: 180px;
      background: #c0c4cc;
      margin: 0 auto;
      text-align: left;
      // text-indent: 18px;
      border-left: 8px solid #606266;
      padding-left: 20px;
    }

    .author::after {}
  }

</style>
