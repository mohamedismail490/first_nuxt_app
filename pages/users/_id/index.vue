<template>
  <div>
    <h2>User id : {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
  // validate(ctx) {
  //   return /^\d+$/.test(ctx.params.id);
  // }
  // OR This
  validate({params}) {
    return /^\d+$/.test(params.id);
  }
}
</script>

