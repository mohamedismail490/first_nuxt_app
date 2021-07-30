<template>
  <div>
    <br>
    <h1 class="text-center">Hello, This is my first Nuxt App</h1>
    <no-ssr>
      <v-select v-model="selected" :options="categories" placeholder="Select Category"></v-select>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data(){
    return {
      selected: '',
      categories: ['foo','bar']
    }
  },
  head: {
    title: 'Nuxt App - Homepage'
  }
}
</script>
