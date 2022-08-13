<template>
  <v-select
    v-model="value"
    :items="options"
    :menu-props="{ bottom: true, offsetY: true }"
    :label="label"
    item-text="name"
    :multiple="true"
    return-object
    dense
    @input="filterTable(value, $event)"
  ></v-select>
</template>

<script>
import { Event } from 'vue-tables-2'
export default {
  name: 'SelectFilter',
  props: {
    label: {
      type: String,
      default: () => 'Active',
    },
    column: {
      type: String,
      default: () => 'isActive',
    },
  },
  data() {
    return {
      value: [],
      options: [
        { name: 'Yes', id: true },
        { name: 'No', id: false },
      ],
    }
  },
  methods: {
    filterTable(property, data) {
      this.menu = false
      const ids = []
      if (this.value.length) {
        this.value.forEach((item) => {
          ids.push(item.id)
        })
      }
      if (this.value.length === this.options.length) {
        ids.splice(0, ids.length)
      }

      Event.$emit('vue-tables.filter::' + this.$props.column, ids)
    },
  },
}
</script>
