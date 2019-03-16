<template>
    <div class="login-container">
        <div class="form-position">
            <h2>欢迎来到漫威数据管理系统</h2>
            <el-form status-icon hide-required-asterisk :model="formData" label-width="30px" :rules="formRules" class="ruleForm">
            <el-form-item prop="username">
                <i slot="label" class="el-icon-service"></i>
                <el-input autocomplete="on" placeholder="请输入用户名" v-model="formData.username" ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <i slot="label" class="el-icon-view"></i>
                <el-input :type="isSee" placeholder="请输入密码" v-model="formData.password" ></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'loginer',
  data() {
    return {
      isSee: '',
      formData: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  //   background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  position: relative;
  .el-button {
    width: 100%;
  }
  .form-position {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    width: 360px;
    height: 300px;
    background: transparent;
    h2 {
      margin-bottom: 35px;
    }
    label {
      height: 100%;
      color: white;
    }
    i {
      font-size: 18px;
    }
  }
}
</style>
