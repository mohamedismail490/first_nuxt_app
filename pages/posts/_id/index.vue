<template>
  <div>
    <div class="container">
      <h1>{{post.title}}</h1>
      <pre>{{post.body}}</pre>
      <nuxt-link to="/posts" class="btn btn-info">Back to Posts</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({params, error}) {
    // const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    // return {post: data}
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        return {post: res.data}
      })
      .catch(() => {
        return error({ statusCode: 404, message: 'Post not found!' })
      });
  },
  data() {
    return {
      post: {}
    }
  },
  // head: {
  //   title: 'Post Details'
  // OR
  //   title: 'Post #' + this.$route.params.id
  // }
  head() {
    return {
      // title: 'Post #' + this.$route.params.id
      // OR
      title: this.post.title
    }
  }
}
</script>
