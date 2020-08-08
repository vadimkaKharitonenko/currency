<template>
  <section :class="`widget mobile_${isMobile}`">
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
        :onChangeBase="this.changeBase"
      />

      <Rates
        :base="base"
        :rates="Object.entries(rates).filter(item => item[0] !== base)"
      />
    </div>
  </section>
</template>

<script>
  import {store} from '../store';
  import Header from './Header';
  import Rates from './Rates';

  export default {
    name: 'Widget',
    components: {
      Header,
      Rates,
    },
    created() {
      window.addEventListener('resize', this.updateWidth);
    },
    mounted() {
      store.dispatch('fetchCurrency', {currency: 'EUR'});
      this.updateWidth();
    },
    computed: {
      rates() {
        return store.getters.getRates;
      },
      base() {
        return store.getters.getBase;
      },
      isMobile() {
        return store.getters.getScreenWidth < 730;
      }
    },
    methods: {
      changeBase(currency) {
        store.dispatch('fetchCurrency', {currency})
      },
      updateWidth() {
        return store.dispatch('setScreenWidth', window.innerWidth);
      },
    }
  }
</script>

<style scoped>
  .widget {
    width: 720px;
  }

  .widget.mobile_true {
    width: 320px;
  }

  .widget__error {
    color: red;
  }
</style>
