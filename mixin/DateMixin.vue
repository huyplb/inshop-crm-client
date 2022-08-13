<script>
export default {
  methods: {
    crmDateFormat(date, format = 'DD-MM-YYYY HH:mm') {
      if (date) {
        return this.$date(date).format(format)
      }
    },
  },
}
</script>
