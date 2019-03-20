<template>
  <div class="login-container">
    <div class="form-position">
      <h2>欢迎来到漫威数据管理系统</h2>
      <el-form ref="loginform" status-icon hide-required-asterisk :model="formData" label-width="30px" :rules="formRules"
        class="ruleForm">
        <el-form-item prop="username">
          <i slot="label" class="el-icon-service"></i>
          <el-input autocomplete="on" placeholder="请输入用户名" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <i slot="label" class="el-icon-view" @click="seeCode"></i>
          <el-input :type="isSee" placeholder="请输入密码" v-model="formData.password"></el-input>
        </el-form-item>
        <el-button type="primary" :loading="loading" @click="submitForm()">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loginer',
    data() {
      let valPassword = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.formData.password !== '997997') {
              callback(new Error('密码错误'));
            } else {
              callback();
            }
          }
        },
        valUsername = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入用户名'))
          } else {
            if (this.formData.username == 'keung') {
              callback();
            } else {
              callback(new Error('用户名输入错误~'));
            }
          }
        };
      return {
        isSee: 'password',
        loading: false,
        formData: {
          username: '',
          password: ''
        },
        formRules: {
          username: [{
            required: true,
            validator: valUsername,
            trigger: 'blur',
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: valPassword
          }]
        }
      }
    },
    methods: {
      //{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
      submitForm(e) {
        this.loading = true;
        let un = this.formData.username,
          pw = this.formData.password;
        this.$refs.loginform.validate((res, err) => {
          if (res) {
            this.$axios.post('/marvelLogin?username=' + un + '&password=' + pw).then(res => {
              this.loading = false;
              this.$router.push({
                path: '/'
              })
              console.log(res);
            }).catch(() => {
              this.loading = false
            })
          } else {
            return false;
          }
        })
      },
      seeCode(){
        if(this.isSee === ''){
          this.isSee = 'password';
        }else{
          this.isSee = '';
        }
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
