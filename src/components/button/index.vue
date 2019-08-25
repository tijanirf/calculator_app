<template>
  <button :class="{ 'clear': clear, 'operator': operator, 'number': number, 'disable': disable }" @click="clicked">
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
    },
    disable() {
      if (this.type === 'disable') {
        return true
      }

      return false
    }
  },
  methods: {
    clicked() {
      if (this.type !== 'disable') {
        if (this.label === 'x') {
          // eval function does not detect 'x' character for multiplication
          this.$emit('clicked', '*')
        } else {
          this.$emit('clicked', this.label)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>