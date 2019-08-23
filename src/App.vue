<template>
  <div id="app">
    <div class="calculator">
      <div class="calculator__preview">
        <h2>{{dummyPreview}}</h2>
      </div>
      <div class="calculator__result">
        <h1>=</h1>
        <h1 class="amount">{{dummyResult}}</h1>
      </div>
      <div class="calculator__buttons">
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="CLEAR" type="clear"/>
          <calc-button class="calculator__buttons__row__button" label="x" type="operator"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="1" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="2" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="3" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="+" type="operator"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="4" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="5" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="6" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="-" type="operator"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="7" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="8" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="9" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="%" type="operator"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="c" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="0" type="number"/>
          <calc-button class="calculator__buttons__row__button" label="." type="number"/>
          <calc-button class="calculator__buttons__row__button" label="=" type="operator"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button'

export default {
  name: 'calculator-app',
  components: {
    'calc-button': Button
  },
  data() {
    return {
      dummyResult: 123,
      dummyPreview: '100 + 10 + 13',
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~@/styles/base.scss';
@import '~@/styles/calculator.scss';
</style>
