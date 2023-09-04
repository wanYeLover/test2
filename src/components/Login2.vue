<template>
  <div>
    <h1 style="color:#42b983">欢迎来到银河球棒手的登录页面</h1>
    <form>
      <p style="font-size: 18px">账号: <input type="text" v-model="userAccount"> </p>
      <p style="font-size: 18px">密码: <input type="text" v-model="userPassword"> </p>
      <p v-if="check" style="color:red;">{{message}}</p>
      &nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="提交" @click="userLogin" style="font-size: 18px;color:green;border:none;background-color: white">
    </form>
  </div>
</template>

<script>
import {post} from "@/axios/myAxios";
import router from "@/router";
import {setLocalStorage } from "@/localStorge/localStorge";
import {HAVE_LOGIN} from "@/constant/constant";

//var BaseUrl = 'http://101.34.208.249:7089';
var BaseUrl = 'http://localhost:7089';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login2",
  props: {
    msg: String
  },

  mounted() {
    this.check = false;
  },
  data() {
      return {
        userAccount: null,
        userPassword: null,
        check: false,
        message: null,
      }
  },

  methods:{

      userLogin: function() {
        let _this = this;
        let PromiseObject = post(BaseUrl + '/api/user/login',
            {
              userAccount: this.userAccount,
              userPassword: this.userPassword
            });
        //console.log(PromiseObject);
        PromiseObject.then((resp) => {
          console.log(resp);
          let data = resp;
          if(data.code === 0) {
            _this.check = false;
            _this.$forceUpdate();
            alert('登录成功')
            // 前往addUser
            router.push("/addUser");
            setLocalStorage(HAVE_LOGIN, "saabkdjagshcyabeakjc");
          }else {
            _this.message = data.msg;
            _this.check = true;
            _this.$forceUpdate();
          }
        }, null);


      }
  }
}
</script>

<style scoped>

</style>