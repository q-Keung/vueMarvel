<template>
  <div>
    <el-menu @select="selMenu" router @open="openMenu" @close="closeMenu" :collapse="isCollapse" background-color="#fff"
      text-color="#606266" active-text-color="#2575fc" default-active="1" menu-trigger="click">
      <!-- <el-submenu index="1">
               <template slot="title">
                   <i class="el-icon-star-on"></i>
                   <span slot="title">收藏</span>
               </template>
           </el-submenu> -->
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">基础设置</span>
      </el-menu-item>
      <el-menu-item index="tabel">
        <i class="el-icon-goods"></i>
        <span slot="title">漫威数据</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-goods"></i>
        <span slot="title">切换语言</span>
      </el-menu-item>
      <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span slot="title">首代漫威</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="4-1">美国队长</el-menu-item>
              <el-menu-item index="4-2">钢铁侠</el-menu-item>
              <el-menu-item index="4-3">雷神</el-menu-item>
              <el-menu-item index="4-4">浩克</el-menu-item>
              <el-menu-item index="4-5">黑寡妇</el-menu-item>
              <el-menu-item index="4-6">鹰眼</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span slot="title">二代漫威</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="5-1">鹰人</el-menu-item>
              <el-menu-item index="5-2">幻视</el-menu-item>
              <el-menu-item index="5-3">蚁人</el-menu-item>
              <el-menu-item index="5-4">旺达</el-menu-item>
              <el-menu-item index="5-5">快银</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
function routerPages(id, cb) {
  if (id) {

  }
  cb && cb();
}
export default {
  name: "slider",
  data() {
    return {
      isCollapse: false,
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
    }
  }
}

</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  // min-height: 400px;
  height: 100%;
}
</style>
