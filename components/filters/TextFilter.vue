<template>
  <v-text-field
    ref="input"
    v-model="value"
    type="text"
    min="0"
    max="65"
    width="100px"
    dense
    :label="placeholder"
    :placeholder="placeholder"
    @change="filterNumber"
  ></v-text-field>
</template>

<script>
import { Event } from 'vue-tables-2'
export default {
  name: 'TextFilter',
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
    return { value: null }
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
  mounted() {
    const inputElement = this.$refs.input.$el.querySelector('input')
    inputElement.min = 0
    inputElement.max = 65
  },
  methods: {
    filterNumber(property, data) {
      Event.$emit('vue-tables.filter::' + this.$props.column, this.value)
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
