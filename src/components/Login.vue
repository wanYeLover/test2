<template>
  <div>
<!--    <a href="/login2">回答问题</a>-->
    <h1 style="color:#42b983">欢迎来到银河球棒手的登录页面</h1>
    <form>
      <p style="font-size: 18px">账号: <input type="text" v-model="username"> </p>
      <p style="font-size: 18px">密码: <input type="text" v-model="password"> </p>
      <p v-if="check" style="color:red;">{{message}}</p>
      &nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="提交" @click="userLogin" style="font-size: 18px;color:green;border:none;background-color: white">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

var BaseUrl = 'http://101.34.208.249:7089';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  props: {
    msg: String
  },

  mounted() {
    this.check = false;
  },
  data() {
      return {
        username: null,
        password: null,
        check: false,
        message: null,
      }
  },

  methods:{

      userLogin: function() {
        let _this = this;
        axios.defaults.crossDomain = true
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = process.env.VUE_APP_Access_Control_Allow_Origin;
        axios.post(
            BaseUrl + '/login',
            {
              username: _this.username,
              password: _this.password
            }
        ).then(function(resp) {
          console.log(resp);
          if(resp.data.code === 200) {
            alert("登录成功")
          }else {
            console.log(resp.data.msg);
            _this.message = resp.data.msg;
            _this.check = true;
            _this.$forceUpdate();
          }
        }).catch(function(err){
            this.message = "请求错误";
            this.check = true;
            console.log('err' + err);
        })
      }

  }
}
</script>

<style scoped>

</style>