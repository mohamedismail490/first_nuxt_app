<template>
  <div class="container">
    <br>
    <h2 class="text-center">API Request - The Nuxt way</h2>
    <br>
    <div v-if="allPosts.length > 0" class="row">
<!--        <Card v-for="post in posts" :key="post.id" :post="post" class="col-md-3" />-->
        <Card v-for="post in allPosts" :key="post.id" :post="post" class="col-md-3" />
    </div>
    <div v-else>
      <h4 class="text-center text-danger">No Posts Found!!!</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card';
// import {mapGetters} from 'vuex';
export default {
  components: {
    Card
  },
  data() {
    return {
      posts: []
      // allPosts: []
    }
  },
  // async asyncData({store}) {
  //   const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   return {posts: data}
    // store.dispatch('setPosts', data);

  // OR

    // async asyncData({error,store}) {
  async fetch({error,store}) { // Fetch only works with Vuex Store
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // return {posts: res.data ?? res}
        store.dispatch('setPosts', res.data ?? res);
      })
      .catch(() => {
        return error({ statusCode: 404, message: 'No Posts Found!!!' })
      });
  },
  // data() {
  //   return {
  //      posts: []
  //     // allPosts: []
  //   }
  // },
  head: {
    title: 'Posts'
  },
  computed: {
    allPosts() {
      return this.$store.getters.posts;
    }

    // OR

    // ...mapGetters(['posts'])
  }
}
</script>

