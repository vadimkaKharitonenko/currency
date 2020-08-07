<template>
  <header :class="`header mobile_${isMobile}`">
    <span class="header__title">Курс {{base}} сегодня</span>

    <VueSlickCarousel
      class="header__tabs"
      ref="headerTabs"
      :arrows="true"
      :slidesToShow="isMobile ? 3 : 7"
      :infinite="false"
      :swipeToSlide="true"
    >
      <template #prevArrow="arrowOption">
        <button
          class="prev"
          @click="prevTab"
        ><img src="../assets/chevron-right.svg" alt=""></button>
      </template>

      <template #nextArrow="arrowOption">
        <button
          class="next"
          @click="nextTab"
        ><img src="../assets/chevron-right.svg" alt=""></button>
      </template>

      <button
        v-for="cur in Object.keys(this.rates).sort()"
        :class="`tab tab_active_${base === cur}`"
        @click="() => onChangeBase(cur)"
      >{{cur}}</button>
    </VueSlickCarousel>
  </header>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';

  export default {
    name: 'Header',
    components: {
      VueSlickCarousel
    },
    props: {
      rates: {
        type: Object,
        required: true
      },
      base: {
        type: String,
        required: true
      },
      onChangeBase: {
        type: Function,
        required: true
      },
      isMobile: Boolean
    },
    mounted() {
      this.goToBase();
    },
    methods: {
      nextTab() {
        this.$refs.headerTabs.next();
      },
      prevTab() {
        this.$refs.headerTabs.prev();
      },
      goToBase() {
        this.$refs.headerTabs.goTo(Object.keys(this.rates).sort().indexOf(this.base) - (this.isMobile ? 1 : 3));
      },
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 111px;
    padding-top: 30px;
    background-color: #FFE782;
    box-sizing: border-box;
  }

  .header__title {
    display: inline-block;
    margin: 0 24px 8px;
    font-weight: normal;
    font-size: 21px;
    line-height: 25px;
    color: #2B2D33;
  }

  .header__tabs {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 13px;
    box-sizing: border-box;
  }

  .header__tabs .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 48px;
    padding: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #CCAE68;
    border: none;
    border-radius: 10px 10px 0 0;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .header__tabs .tab.tab_active_true {
    background-color: #FFFFFF;
    color: #2B2D33;
  }

  .next,
  .prev {
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

  .prev {
    transform: rotate(180deg);
  }
</style>
