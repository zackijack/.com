<template>
  <div class="links">
    <a v-for="(link, index) in links" :key=index :href="link.url" target="_blank" rel="noopener">
      {{ link.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Links',
  props: {
    links: Array,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.links > a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
