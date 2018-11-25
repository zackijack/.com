<template>
  <div class="flex-center position-ref full-height">
    <div class="content">
      <Title text="zackijack"/>
      <Links :links="links"/>
    </div>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Links from './components/Links.vue';

export default {
  name: 'app',
  components: {
    Title,
    Links,
  },
  data: () => ({
    links: [{
      url: 'https://github.com/zackijack',
      text: 'GitHub',
    }, {
      url: 'https://www.linkedin.com/in/zackijack',
      text: 'LinkedIn',
    }, {
      url: 'https://twitter.com/zackijack',
      text: 'Twitter',
    }, {
      url: 'https://www.facebook.com/zackijackx',
      text: 'Facebook',
    }],
  }),
};
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
