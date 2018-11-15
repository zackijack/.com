<template>
  <div class="title m-b-md">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 84px;
}

.m-b-md {
  margin-bottom: 30px;
}
</style>
