<template>
  <button :class="{ 'clear': clear, 'operator': operator, 'number': number }">
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'calculator-button',
  props: {
    label: {
      required: true
    },
    type: {
      required: true
    }
  },
  data() {
    return {

    }
  },
  computed: {
    number() {
      if (this.type === 'number') {
        return true
      }

      return false
    },
    operator() {
      if (this.type === 'operator') {
        return true
      }

      return false
    },
    clear() {
      if (this.type === 'clear') {
        return true
      }

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>