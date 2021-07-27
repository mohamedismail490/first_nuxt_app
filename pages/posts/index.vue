<template>
  <div class="container">
    <br>
<!--    <h2 class="text-center">API Request - The Vue way</h2>-->
    <h2 class="text-center">API Request - The Nuxt way</h2>
    <table class="table">
      <thead>
        <tr>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody v-if="posts.length > 0">
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
      <tbody v-else>
      <tr>
        <td colspan="2">
          <h4 class="text-center">No Posts Found!!!</h4>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  // The Nuxt Way
  asyncData() {
      return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        return {posts: res.data}
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
      })
  },
  data() {
    return {
      posts: []
    }
  }
  // The Vue Way
  // mounted() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => {
  //     this.posts = res.data
  //   })
  //   .catch(err => {
  //     // eslint-disable-next-line no-console
  //     console.log(err.response.data);
  //   })
  // }
}
</script>

