<template>
  <v-text-field
    ref="input"
    v-model="number"
    type="number"
    step="any"
    width="100px"
    dense
    :label="placeholder"
    :placeholder="placeholder"
    @keypress="onlyNumber"
    @change="filterNumber"
  ></v-text-field>
</template>

<script>
import { Event } from 'vue-tables-2'
export default {
  name: 'NumberFilter',
  props: {
    label: {
      type: String,
      default: () => 'No.',
    },
    column: {
      type: String,
      default: () => 'id',
    },
  },
  data() {
    return { number: null }
  },
  computed: {
    placeholder() {
      return this.$props.label
    },
    error() {
      return Object.keys(this.errors).length > 0
        ? this.errors[this.property]
        : ''
    },
  },
  methods: {
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault()
      }
    },
    filterNumber(property, data) {
      Event.$emit('vue-tables.filter::' + this.$props.column, this.number)
    },
  },
}
</script>

<!-- <v-card>
      <v-text-field
        ref="input"
        v-model.number="number"
        type="number"
        step="any"
        hide-details
        single-line
        min="0"
        :rules="[numberRule]"
        v-bind="attrs"
        v-on="on"
      ></v-text-field> -->
