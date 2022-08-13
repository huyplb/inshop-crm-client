<template>
  <div style="width: 5rem">
    <v-chip :key="data.contactType.id" color="gray" class="ma-1">
      {{ data.contactType.name }}
    </v-chip>
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
