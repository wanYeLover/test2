<template>
  <h1>这里是addUser 界面</h1>
  <input type="button" @click="addUserSubmit">
  <h1 v-if="check">{{message}}</h1>

</template>

<script>
import {post} from "@/axios/myAxios";



let BaseUrl = 'http://localhost:7089';
export default {
  name: "AddUser",

  data() {
    return {
      check: false,
      message: null,
    }
  },

  methods : {
    addUserSubmit: function () {
      let _this = this;
      let PromiseObject = post(BaseUrl + '/api/user/add',
          {
            "gender": 0,
            "userAccount": "diona",
            "userAvatar": "",
            "userName": "diona",
            "userPassword": "12345678",
            "userRole": "1"
          });
      PromiseObject.then((resp) => {
        console.log(resp);
        let data = resp;
        if(data.code === 0) {
            alert("增加成功")
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