<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" />
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="from">
        <h4 v-if="error" class="tips">
          <i></i>
          {{error}}
        </h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input v-model="username" prefix-icon="profile"></el-input>
        <el-input v-model="password" prefix-icon="password"></el-input>
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码?</b>
        </div>
        <el-button class="btn-login" type="success" size="mini " @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      error: "",
      username: "",
      password: "",
      checked: ""
    };
  },
  methods: {
    login: function() {
      let self = this;
      if (this.username == "" || this.password == "") {
        this.$message({
          showClose: true,
          message: "请输入账号和密码",
          type: "error"
        });
      } else {
        self.$axios
          .post("/users/signin", {
            username: window.encodeURIComponent(self.username),
            password: CryptoJS.MD5(self.password).toString()
          })
          .then(({ status, data }) => {
            console.log(status);
            console.log(data);
            if (status === 200) {
              if (data && data.code === 0) {
                location.href = "/";
              } else {
                self.error = data.msg;
              }
            } else {
              self.error = `服务器出错，错误码:${status}`;
            }
            setTimeout(function() {
              self.error = "";
            });
          });
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
.btn-login {
  width: 385px;
}
b:hover {
  cursor: pointer;
}
</style>