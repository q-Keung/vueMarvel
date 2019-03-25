<template>
  <div>
    <div class="switch-menu items-center">
      <i class="iconfont iconliebiaomoshi_kuai" @click="switchMenu"></i>
    </div>
    <!-- <el-collapse-transition> -->
    <el-menu class="el-menu-vertical-demo" @select="selMenu" @open="openMenu" @close="closeMenu" :collapse="isCollapse" :collapse-transition="false" background-color="#fff"
      text-color="#606266" active-text-color="#2575fc" :default-active="$route.name" menu-trigger="hover">
      <router-link tag="span" :to="{path:'/main'}">
        <el-menu-item index="main">
          <i class="el-icon-setting"></i>
          <span slot="title">漫威简介</span>
        </el-menu-item>
      </router-link>
      <router-link tag="span" :to="{path:'/marveldata'}">
        <el-menu-item index="marveldata">
          <i class="iconfont iconfont-s iconbug"></i>
          <span slot="title">漫威数据</span>
        </el-menu-item>
      </router-link>
      <router-link tag="span" :to="{path:'/showheros'}">
        <el-menu-item index="showheros">
          <i class="iconfont iconfont-s iconguanfangbanben"></i>
          <span slot="title">英雄展示</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont iconfont-s iconfire-fill"></i>
          <span slot="title">英雄列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">美国队长</el-menu-item>
          <el-menu-item index="4-2">钢铁侠</el-menu-item>
          <el-menu-item index="4-3">雷神</el-menu-item>
          <el-menu-item index="4-4">浩克</el-menu-item>
          <el-menu-item index="4-5">黑寡妇</el-menu-item>
          <el-menu-item index="4-6">鹰眼</el-menu-item>
          <el-menu-item index="4-7">猎鹰</el-menu-item>
          <el-menu-item index="4-8">幻视</el-menu-item>
          <el-menu-item index="4-9">蚁人</el-menu-item>
          <el-menu-item index="4-10">旺达</el-menu-item>
          <el-menu-item index="4-11">快银</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <router-link tag="span" :to="{path:'/marvelpanel'}">
        <el-menu-item index="marvelpanel">
          <i class="el-icon-goods"></i>
          <span slot="title">英雄介绍</span>
        </el-menu-item>
      </router-link>
      <router-link tag="span" :to="{path:'/herospeck'}">
        <el-menu-item index="herospeck">
          <i class="el-icon-goods"></i>
          <span slot="title">英雄发言</span>
        </el-menu-item>
      </router-link>
      <router-link tag="span" :to="{path:'/herosposition'}">
        <el-menu-item index="herosposition">
          <i class="iconfont iconfont-s icondingwei"></i>
          <span slot="title">英雄定位</span>
        </el-menu-item>
      </router-link>
      <router-link tag="span" :to="{path:'/marvelvideo'}">
        <el-menu-item index="marvelvideo">
          <i class="iconfont iconfont-s iconshexiangtou_shiti"></i>
          <span slot="title">英雄视频</span>
        </el-menu-item>
      </router-link>
      <router-link tag="span" :to="{path:'/marvelupload'}">
        <el-menu-item index="marvelupload">
          <i class="iconfont iconfont-s iconchrome"></i>
          <span slot="title">其他设置</span>
        </el-menu-item>
      </router-link>
    </el-menu>
    <!-- </el-collapse-transition> -->
  </div>
</template>

<script>
  function routerPages(id, cb) {
    if (id) {

    }
    cb && cb();
  }
  export default {
    name: "cSlider",
    data() {
      return {
        isCollapse: false,
        curActive: 1,
      }
    },
    methods: {
      selMenu(evt) {
        console.log("selMenu:", evt)
      },
      openMenu(evt) {
        console.log("openMenu:", evt)
      },
      closeMenu(er) {
        console.log("closeMenu:", er)
      },
      switchMenu(){
        this.isCollapse = !this.isCollapse;
        this.$emit('changeMenu',{isCollapse:this.isCollapse})
      }
    },
    created() {
      console.log(this.$route);
      this.curActive = this.$route.name;
    },
    watch: {
      '$route'(to, form) {
        console.log("to", to)
        console.log("form", form)
        this.curActive = to.name;
      }
    }
  }

</script>

<style scoped lang="scss">
  //收起之后的样式
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    // width: 100px;
    min-height: 300px;
    // height: 100%;
  }

  .switch-menu {
    height: 60px;
    width: 92%;
    margin: auto 4%;
    justify-content: flex-end;
    i{
      font-size:28px;
      margin-right:50px;
    }
  }

  .el-menu {
    border: none;
  }

</style>
