<template>
  <div :class="`rate size_${size} mobile_${getWidth < 730}`">
    <p class="rate__label">
      {{value}}
      <span>{{base}} =</span>
    </p>

    <p class="rate__value">{{calculatedValue}} <span>{{currency[0]}}</span></p>
  </div>
</template>

<script>
  import {store} from '../store';

  export default {
    name: 'Rate',
    props: {
      value: {
        type: Number,
        required: true,
      },
      base: {
        type: String,
        required: true,
      },
      currency: {
        type: Array,
        required: true,
      }
    },
    computed: {
      calculatedValue() {
        return (this.currency[1] * this.value).toFixed(2).toString().replace('.', ',')
      },
      size() {
        if (this.calculatedValue.length < 7) {
          return 'L';
        } else if (this.calculatedValue.length < 13) {
          return 'M';
        } else {
          return 'S';
        }
      },
      getWidth() {
        return store.getters.getScreenWidth;
      }
    }
  }
</script>

<style scoped>
  .rate {
    padding: 18px 30px 17px;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
    border-radius: 12px;
  }

  .rate__label {
    margin: 0 0 19px;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    color: #2B2D33;
  }

  .rate__label span {
    color: #B9B9B9;
  }

  .rate__value {
    margin: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
    color: #2B2D33;
    white-space: nowrap;
  }

  .rate__value span {
    font-size: 24px;
    line-height: 28px;
  }

  .rate.mobile_true .rate__label {
    font-weight: 300;
    font-size: 18px;
  }

  .rate.mobile_true .rate__value {
    font-size: 36px;
    line-height: 42px;
  }

  .rate.mobile_true .rate__value span {
    font-size: 18px;
    line-height: 21px;
  }

  .rate.size_M .rate__label {
    font-size: 18px;
  }

  .rate.size_M .rate__value {
    font-size: 32px;
  }

  .rate.size_M .rate__value span {
    font-size: 18px;
  }

  .rate.size_S .rate__label,
  .rate.size_S .rate__value {
    font-size: 16px;
  }

  .rate.mobile_true.size_S .rate__label,
  .rate.mobile_true.size_S .rate__value {
    font-size: 14px;
  }
</style>
