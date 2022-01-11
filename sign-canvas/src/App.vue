<template>
  <div>
    <SignCanvas></SignCanvas>
  </div>
</template>

<script>
import SignCanvas from './components/SignCanvas.vue'

export default {
  name: 'App',
  components: {
    SignCanvas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
