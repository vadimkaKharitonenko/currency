<template>
  <div :class="`rates mobile_${isMobile}`">
    <label class="rates__field">
      <input
        class="rates__input"
        type="number"
        v-model="value"
      />
      <span class="rates__base">{{base}}</span>
    </label>

    <div class="rates__slider">
      <VueSlickCarousel
        ref="ratesSlider"
        :arrows="false"
        :slidesToShow="1"
        :infinite="false"
        :swipeToSlide="true"
        @beforeChange="getCurrentSlide"
      >
        <div
          v-for="rateGroup in rateGroups"
          class="rates__list"
        >
          <Rate
            v-for="rate in rateGroup"
            :value="Number(value)"
            :base="base"
            :currency="rate"
          />
        </div>
      </VueSlickCarousel>
    </div>

    <div class="rates__controls">
      <button
        @click="() => this.$refs.ratesSlider.prev()"
        :class="`prev ${this.currentSlide === 0 ? 'disabled' : ''}`"
      >
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.516357 10.58L4.52386 6L0.516357 1.41L1.75011 0L7.00011 6L1.75011 12L0.516357 10.58Z" fill="#CCAE68"/>
        </svg>
        <span>Назад</span>
      </button>

      <button
        @click="() => this.$refs.ratesSlider.next()"
        :class="`next ${this.currentSlide === rateGroups.length - 1 ? 'disabled' : ''}`"
      >
        <span>Вперед</span>
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.516357 10.58L4.52386 6L0.516357 1.41L1.75011 0L7.00011 6L1.75011 12L0.516357 10.58Z" fill="#CCAE68"/>
        </svg>
      </button>
    </div>

  </div>
</template>

<script>
  import Rate from './Rate';
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';

  export default {
    name: 'Rates',
    components: {
      Rate,
      VueSlickCarousel
    },
    props: {
      base: {
        type: String,
        required: true
      },
      rates: Array,
      isMobile: Boolean
    },
    data() {
      return {
        value: 5,
        currentSlide: 0,
      }
    },
    computed: {
      rateGroups() {
        const result = [];
        const step = this.isMobile ? 2 : 4;

        for (let i = 0; i < this.rates.length; i += step) {
          result.push(this.rates.slice(i, i + step));
        }

        return result;
      }
    },
    methods: {
      getCurrentSlide(_, index) {
        this.currentSlide = index;
      }
    }
  }
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .rates {
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-row-gap: 23px;
    height: 471px;
    padding: 29px 24px 24px;
    background-color: #FFFFFF;
  }

  .rates__controls {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 19px;
    margin: 0 auto;
  }

  .rates__controls button {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 8px;
    justify-content: center;
    align-items: center;
    width: 112px;
    height: 34px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #2B2D33;
    background-color: transparent;
    border: none;
    box-shadow: 0 5px 6px rgba(157, 157, 157, 0.16);
    border-radius: 8px;
    outline: none;
    user-select: none;
    cursor: pointer;
  }

  .rates__controls .disabled {
    background-color: #EFEFEF;
    color: #787878;
    box-shadow: unset;
    pointer-events: none;
  }

  .rates__controls .disabled path {
    fill: #787878;
  }

  .prev svg {
    transform: rotate(180deg);
  }

  .prev path,
  .next path {
    fill: #282828;
  }

  .rates__field {
    margin-left: auto;
  }

  .rates__input,
  .rates__base {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #2B2D33;
  }

  .rates__input {
    width: 121px;
    padding: 4px;
    border: none;
    border-bottom: 1px solid #D9D9D9;
    outline: none;
    text-align: right;
  }

  .rates__base {
    margin-left: 4px;
    color: #B9B9B9;
  }

  .rates__list {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 18px;
    width: 100%;
    height: 294px;
    padding-bottom: 18px;
    outline: none;
  }

  .rates.mobile_true .rates__list {
    grid-template-columns: 1fr;
  }

  .rates__slider {
    width: 672px;
  }

  .rates.mobile_true .rates__slider {
    width: 274px;
  }
</style>
