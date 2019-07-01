<template>
  <div class="home">
    <h1>Hello World</h1>
    <HelloWorld ref="HelloWorld"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
