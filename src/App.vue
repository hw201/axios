<template>
  <div id="app">
    <h2>{{ result }}</h2>
    <h2>---------------------------</h2>
    <hello-word />
  </div>
</template>

<script>
import HelloWord from "./components/HelloWord";

import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWord,
  },
  data() {
    return {
      result: "",
    };
  },
  created() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      console.log(res);
      this.result = res;
    });
  },
};
</script>





<style>
</style>
