<template>
  <div id="app">
    <div class="calculator">
      <div class="calculator__preview">
        <h2 v-for="(obj, index) in calculationArray" :key="index">{{obj}}</h2>
      </div>
      <div class="calculator__result">
        <h1>=</h1>
        <h1 class="amount">{{result}}</h1>
      </div>
      <div class="calculator__buttons">
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="CLEAR" type="clear" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="x" type="operator" @clicked="clicked"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="1" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="2" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="3" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="+" type="operator" @clicked="clicked"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="4" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="5" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="6" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="-" type="operator" @clicked="clicked"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="7" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="8" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="9" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="/" type="operator" @clicked="clicked"/>
        </div>
        <div class="calculator__buttons__row">
          <calc-button class="calculator__buttons__row__button" label="" type="disable" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="0" type="number" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="." type="operator" @clicked="clicked"/>
          <calc-button class="calculator__buttons__row__button" label="=" type="operator" @clicked="clicked"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button'
import store from '@/store/'
import { mapGetters } from 'vuex'

export default {
  name: 'calculator-app',
  components: {
    'calc-button': Button
  },
  data() {
    return {
      result: 0,
      calculationArray: [],
      operators: ['+', '-', '/', 'x'],
      historyStorage: []
    }
  },
  mounted() {
    if (localStorage.getItem('history')) {
      try {
        this.historyStorage = JSON.parse(localStorage.getItem('history'));
      } catch(e) {
        localStorage.removeItem('history');
      }
    }
  },
  computed: {
    ...mapGetters({
      history: 'history'
    }),
  },
  methods: {
    clicked(data) {
      if (data === 'CLEAR') {
        // Empty array and result
        this.calculationArray = []
        this.result = 0
      } else if (data === '=') {
        // Do calculation
        this.calculation()
      } else if (this.operators.includes(data)) {
        // Validation for prevent push operator after operator
        let lastIndex = this.calculationArray[this.calculationArray.length-1]
        
        if (lastIndex && this.operators.includes(lastIndex)) {
          this.$set(this.calculationArray, this.calculationArray.length-1, data)
        } else {
          this.calculationArray.push(data)
        }

      } else {
        this.calculationArray.push(data)
      }
    },
    calculation() {
      // Showing how to use Vuex to save history
      const combinedArray = this.calculationArray.join('')
      this.result = eval(combinedArray)
      this.$store.dispatch('addResult', { calculation: combinedArray, result: this.result })

      // Showing how to use localStorage to save history
      this.historyStorage.push({ calculation: combinedArray, result: this.result })
      const parsed = JSON.stringify(this.historyStorage);
      localStorage.setItem('history', parsed);
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~@/styles/base.scss';
@import '~@/styles/calculator.scss';
</style>
