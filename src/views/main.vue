<template>
    <el-main>
      <el-carousel height="300px" trigger="click" @change="getCarousel">
        <el-carousel-item v-for="(item,cur) in carouselArr" :key="cur">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>

      <el-row>
        <el-col :span="20" :offset="2">
          <div class="marvel-main">
            <header>
              <h2>史上最漫威英雄介绍，看完以后再也不会懵逼</h2>
              <span class="author">作者：<br/>
                张子强，一名前端码农，坐标广州，漫威的死忠粉，喜爱刺激的游乐设施。</span>
            </header>
            <div class="marvel-content">
              <p class="justify">
                《钢铁侠1、2》：Tony Stark（小罗伯特·唐尼饰）是个一点都不纨绔的富二代，有个炒鸡好用的脑子，十五岁时就进入麻省理工，十七岁以最高分毕业。可以在最快的速度里精通任何一门知识。Tony在21岁时失去父母，接管Stark家族企业，并用聪明的脑袋扩展财富。后来在一次突如其来的绑架中，差点丧生，在制作导弹的废铜烂铁中Tony鼓捣出了钢铁侠战衣，死里逃生。回来之后改良战衣，成为真正的钢铁侠，公开超级英雄的身份来保护世界。公开自己钢铁侠身份后，引来媒体、舆论和政府各界的质疑，邪恶势力再度来袭，小唐尼一一解决还不忘撩妹，秘书Pepper升级为女朋友。
              和其他超级英雄不同，钢铁侠本人是没有经过任何变异和强化改造的，没有任何超能力，用才智证明科技才是第一生产力！ 神盾局局长Nick Fury三顾茅庐，希望钢铁侠加入复仇者联盟，钢铁侠加入（神盾局是美国政府专门用于同超能力英雄接洽并进行管理的特殊部队）
              </p>
              <img src="../assets/iron1.jpg" alt="">
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
</template>

<script>
export default {
  name: 'mainer',
  data() {
    return {
      carouselArr: [
        { url: require('../assets/carousel1.jpg') },
        // { url: require('../assets/carousel5.jpg') },
        // { url: require('../assets/carousel3.jpg') },
        // { url: require('../assets/carousel4.jpg') },
      ]
    }
  },
  methods: {
    getCarousel(e) {
      // console.log(e);
    }
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
  .author::after {
  }
}
</style>
