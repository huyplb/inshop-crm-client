<template>
  <div class="column-center" style="width: 6.2rem; word-wrap: break-word">
    {{ crmDateFormat(data['deadline']) }}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
