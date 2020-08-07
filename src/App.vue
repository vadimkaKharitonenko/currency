<template>
  <div id="app">
    <Widget />
  </div>
</template>

<script>
  import Widget from './components/Widget';

  export default {
    name: 'App',
    components: {
      Widget
    }
  }
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
  }
</style>
