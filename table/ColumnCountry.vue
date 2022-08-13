<template>
  <div style="min-width: 6rem; width: 12rem">
    <v-text-field
      :key="data.country.id"
      :value="data.country.name"
      readonly
      class="ma-1"
      style="
         {
          border-style: none;
        }
      "
    >
    </v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none;
}
</style>
