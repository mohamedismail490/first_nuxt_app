<template>
  <div>
    <div class="card text-dark bg-light mb-3" style="height: 95%; ">
      <div class="card-header">Post #{{ post.id }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    post: Object
  }
}
</script>
