<template>
  <div class="flex-center position-ref full-height">
    <div class="content">
      <Title text="zackijack"/>
      <Link/>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue'
import Link from './components/Link.vue'

export default {
  name: 'app',
  components: {
    Title,
    Link
  }
}
</script>

<style>
html, body {
  background-color: #fff;
  color: #636b6f;
  font-family: 'Nunito', sans-serif;
  font-weight: 200;
  height: 100vh;
  margin: 0;
}

.full-height {
  height: 100vh;
}

.flex-center {
  align-items: center;
  display: flex;
  justify-content: center;
}

.content {
  text-align: center;
}
</style>
