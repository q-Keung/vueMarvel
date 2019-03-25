<template>
  <div class="echarts-tontainer">
    <div class="v-charts">
      <v-chart :options="polar" />
    </div>
    <div :class="className" :style="{height:height,width:width}" ref="myEchart"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  function fordata(len) {
    let data = [];
    for (let i = 0; i <= len; i++) {
      let t = i / (len / 2) * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return data;
  }
  export default {
    name: 'marvelecharts',
    // components: {
    //   'v-chart': ECharts
    // },
    props: {

    },
    data() {
      let data = fordata(360),
        tdata = fordata(540),
        wdata = fordata(460);
      return {
        height: '350px',
        width: '100%',
        chart: null,
        className: 'chart',
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            type: 'plain',
            top: 5,
            data: ['line', 'scroll', 'base']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [{
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            },
            {
              coordinateSystem: 'polar',
              name: 'scroll',
              type: 'line',
              showSymbol: false,
              data: tdata
            },
            {
              coordinateSystem: 'polar',
              name: 'base',
              type: 'line',
              showSymbol: false,
              data: wdata
            }
          ],
          animationDuration: 2000
        }
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
    methods: {
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
    }
  }

</script>

<style lang="scss">
  .echarts-tontainer {

    .v-charts {
      width: 100%;
      margin: 10px auto;
      border-radius: 10px;
      box-shadow: 0 0 2px 2px #dedfe2;
    }
    .echarts{
        width:100%;
    }
    /*漫威数据统计*/
    .chart {
      background: #f2f3f5;
      border-radius: 10px;
      box-shadow: 1px 1px 3p 2px #b7b8bb;
    }
  }

</style>
