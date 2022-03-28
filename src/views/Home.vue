<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDaybook" class="btn btn-primary">button1</button>
    <button class="btn btn-secondary">button1</button>
    <button class="btn btn-info">button1</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook (){
      this.$router.push( {name:'no-entry'})
    }
  },
}
</script>

