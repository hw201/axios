<template>
  <h2>{{ category }}</h2>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWord',
  data() {
    return {
      category: ''
    }
  },
  created() {
    axios({
      url: 'http://123.207.32.32:8000/category'
    }).then((res) => {
      this.category = res
    })
  }
}
</script>

<style>
</style>