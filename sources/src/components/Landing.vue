<template>
  <div class="hello">
    <h1>{{ authorName }}</h1>
    <span>{{ descriptions }}</span>
    <p></p>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
    <img src="https://media.giphy.com/media/EbBSfrxBz4MNO/giphy.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      authorName: 'Harrison Ng',
      descriptions: 'I make 🐞, and sometimes, I accidentally fix some'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/global.scss";
</style>
