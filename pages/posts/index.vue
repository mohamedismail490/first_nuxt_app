<template>
  <div class="container">
    <br>
    <h2 class="text-center">API Request - The Nuxt way</h2>
    <br>
    <div class="row">
      <Card v-for="post in posts" :key="post.id" :post="post" class="col-md-3" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card';
export default {
  components: {
    Card
  },
  async asyncData() {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return {posts: data}
  },
  data() {
    return {
      posts: []
    }
  },
  head: {
    title: 'Posts'
  }
}
</script>

