<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="250px"
  >
    <template #activator="{ on, attrs }">
      <v-card-text
        class="pa-0 ma-0 text-wrap"
        dense
        style="
          word-break: break-word;
          font-size: 1.2em;
          font-weight: bold;
          cursor: pointer;
          width: 6.2rem;
          line-height: 90%;
          cursor: pointer;
        "
        v-bind="attrs"
        v-on="on"
      >
        {{ value }}
      </v-card-text>
    </template>
    <!-- </template> -->

    <v-card>
      <v-list-item-content>
        <v-date-picker
          v-model="dates"
          range
          scrollable
          show-adjacent-months
        ></v-date-picker>
      </v-list-item-content>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="cancel"> Cancel </v-btn>
        <v-btn color="primary" text @click="filterTable"> Apply </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { Event } from 'vue-tables-2'
export default {
  name: 'DateFilter',
  props: {
    label: {
      type: String,
      default: () => 'create at',
    },
    column: {
      type: String,
      default: () => 'CreatedAt',
    },
  },
  data() {
    return {
      dates: [],
      menu: false,
    }
  },
  computed: {
    value() {
      if (this.dates.length < 2) {
        return this.$props.label
      }
      return this.dates.join(' ')
    },
    error() {
      return Object.keys(this.errors).length > 0
        ? this.errors[this.property]
        : ''
    },
  },
  methods: {
    cancel() {
      this.menu = false
      this.dates = []
    },
    filterTable(property, data) {
      this.menu = false
      Event.$emit(
        'vue-tables.filter::' + this.$props.column,
        this.dates.join('~')
      )
    },
  },
}
</script>
