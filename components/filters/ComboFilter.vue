<template>
  <v-select
    :value="value"
    :items="options"
    item-text="name"
    :multiple="true"
    :label="label"
    return-object
    dense
    @input="filterTable(value, $event)"
  ></v-select>
</template>

<script>
import { Event } from 'vue-tables-2'

export default {
  name: 'ComboFilter',
  props: {
    label: {
      type: String,
      default: () => 'Labels',
    },
    entity: {
      type: String,
      default: () => 'labels',
    },
    column: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      value: null,
    }
  },
  computed: {
    options() {
      return this.$store.getters[this.entity + '/items'] || []
    },
  },
  created() {
    this.getOptions().then((options) => {
      const selected = []
      if (this.$route.query[this.column]) {
        let params = []

        if (this.$route.query[this.column].length > 1) {
          params = this.$route.query[this.column]
        } else {
          params.push(this.$route.query[this.column])
        }

        params.forEach((id) => {
          options.some((element) => {
            if (element.id === parseInt(id)) {
              selected.push(element)
            }
          })
        })
      }

      this.value = selected
    })
  },
  methods: {
    getOptions() {
      return this.$store.dispatch(this.entity + '/getItems')
    },
    // ...mapActions({
    //   getOptions: 'contact_type/getItems',
    // }),
    filterTable(property, data) {
      const ids = []

      if (data.length) {
        data.forEach((item) => {
          ids.push(item.id)
        })
      }

      Event.$emit('vue-tables.filter::' + this.column, ids)
    },
  },
}
</script>
