<template>
  <section class="widget">
    <p
      v-if="!rates"
      class="widget__error"
    >Ошибка загрузки данных</p>

    <div
      v-else
      class="widget__container"
    >
      <Header
        :base="base"
        :rates="rates"
      />
    </div>
  </section>
</template>

<script>
  import {store} from '../store';
  import Header from './Header';

  export default {
    name: 'Widget',
    components: {
      Header
    },
    mounted() {
      store.dispatch('fetchCurrencies');
    },
    computed: {
      rates() {
        return store.getters.getRates;
      },
      base() {
        return store.getters.getBase;
      }
    }
  }
</script>

<style scoped>
  .widget {
    width: 720px;
  }

  .widget__error {
    color: red;
  }
</style>