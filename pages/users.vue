<template>
  <div class="child">
    <div class="container">
      <h4>Hey Their :)</h4>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Users'
  }
}
</script>
<style scoped>
  .child{
    background-color: #9ee7e7;
  }
</style>
