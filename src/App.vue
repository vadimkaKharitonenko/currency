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
  :root {
    --color-black: #2B2D33;
    --color-black-dark: #282828;
    --color-gray: #B9B9B9;
    --color-gray-dark: #787878;
    --color-gold: #FFE782;
    --color-gold-dark: #CCAE68;
    --bg-gray: #EFEFEF;
  }

  body {
    background-color: #e8e8e8;
  }

  #app {
    font-family: 'Roboto', sans-serif;
  }
</style>
