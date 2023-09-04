<template>
  <h2>{{questionName}}</h2>
  <div v-for="(ques) in question" :key="ques">
    <div style="font-size: 24px;">{{ques}}</div>
    <br>
    <div style="font-size: 20px;">请输入答案</div>
    <input type="text" v-model="answer">
    <input type="button" @click="submit">

  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Question",

  mounted() {
    this.question = ['1 + 1 = ?'];
    this.questionName = '问题1';
  },

  data() {
    return {
      question: [],
      questionName: null,
      answer: null,
    }
  },

  methods: {
    submit: function() {

    }
  }
}
</script>

<style scoped>
  .que-font{
      font-size: 24px;

  }
</style>