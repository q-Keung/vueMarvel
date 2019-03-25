<template>
  <timeline v-if="timelineData.length > 0" timeline-theme="#1989fa" timeline-bg="#1989fa">
    <timeline-title font-color="#1989fa">
      <el-card>
        <p>漫威电影宇宙（MCU）时间线</p>
      </el-card>
    </timeline-title>
    <timeline-item bg-color="#9dd8e0" v-for="(item,index) in timelineData" :key="index">
      <div class="timeline-content">
        <el-popover placement="top-start" width="200" trigger="hover" :content="item.name">
          <el-tag hit slot="reference">{{item.time}}{{item.name}}</el-tag>
        </el-popover>
        <el-card>
          <p>{{item.content}}</p>
        </el-card>
      </div>
    </timeline-item>
  </timeline>
</template>

<script>
  import {
    Timeline,
    TimelineItem,
    TimelineTitle
  } from 'vue-cute-timeline'
  import {getMarvelTimeLine} from '../API/apis'
  export default {
    components: {
      Timeline,
      TimelineItem,
      TimelineTitle
    },
    created(){
      getMarvelTimeLine().then(res=>{
        this.timelineData = res.timelineData;
      });
    },
    data() {
      return {
        timelineData: []
      }
    }
  }

</script>

<style lang="scss">
  /*漫威时间线*/
  .icon-heart {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .timeline-title {}

  .timeline-content {
    .el-tag {
      margin-bottom: 10px;
      cursor: pointer;
    }
  }

</style>
