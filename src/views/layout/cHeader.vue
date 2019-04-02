<template>
  <div>
    <el-row :getter="20">
      <el-col :span="8">
        <div class="marvel-logo">
          <img src="../../assets/marvel-l-logo.jpg" alt="">
        </div>
      </el-col>
      <el-col :span="12" :offset="2">
        <div class="marvel-option">
          <el-input :class="{'more-width': isWidth}" ref="searchInput" placeholder="请输入内容" @blur="isWidth = !isWidth"
            @focus="isWidth = !isWidth" prefix-icon="el-icon-search" v-model="searchVal"></el-input>

          <!-- <el-menu :default-active="menuIndex" active-text-color="#b01002" class="el-menu-demo" mode="horizontal"
            @select="handleSelect">
            <el-menu-item index="1">漫威简介</el-menu-item>
            <el-menu-item index="2">漫威历史</el-menu-item>
            <el-menu-item index="3">干货</el-menu-item>
          </el-menu> -->
          <div class="items-center">
            <el-color-picker @change="switchColor" v-model="defaultColor"></el-color-picker>
            <el-dropdown @command="showMenu">
              <span class="el-dropdown-link user-avatar">
                <img src="../../assets/ironman.jpg" alt=""><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="user">个人中心</el-dropdown-item>
                <el-dropdown-item divided command="out">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="items-line">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'cHeader',
    data() {
      return {
        defaultColor: '#2575fc',
        // menuIndex: '1',
        searchVal: '',
        isWidth: false,
      }
    },
    methods: {
      switchColor(e) {
        console.log(e);
        //使用Vuex改变颜色

      },
      showMenu(e) {
        if(e == 'out'){
          this.$store.dispatch('logout').then(_=>{
            this.$router.push({path:'/login'});
          });
        }
      },
    }
  }

</script>

<style lang="scss">
  .marvel-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    .el-color-picker{
      margin-right:20px;
    }
    .el-input {
      width: 200px;
      transition: width 0.2s ease-in-out;
      // border: 1px solid #b01002;
    }

    .more-width {
      width: 250px;
    }

    .el-input__inner:focus {
      border-color: #2575fc;
    }

    .el-menu {
      margin-left: 20px;
    }

    .el-menu-item {
      font-size: 15px;
    }

    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
  }

  .marvel-logo {
    width: 70%;
    height: 60px;
    // outline: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      float: left;
      height: 45px;
      // width: 60%;
    }

    &:after {
      clear: both;
      display: block;
    }
  }

  .user-avatar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>
