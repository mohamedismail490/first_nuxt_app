<template>
  <div>
    <h1>Hello Users</h1>
    <div class="row">
      <div class="col-md-3">
        <input v-model="id" type="text" class="form-control col-md-3" @keypress.enter="loadUser">
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="loadUser">Load User</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id : ''
    }
  },
  methods: {
    loadUser() {
      if (this.id !== ''){
        this.$router.push({name: 'users-id', params: {id: this.id}});
      }else {
        alert('Enter User ID');
      }

    }
  }
}
</script>

