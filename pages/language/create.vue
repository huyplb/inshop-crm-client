<template>
  <is-main-template title="language_add">
    <contact-type-form :handle-submit="onSendForm" :item="item" />
  </is-main-template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ContactTypeForm from './Form'

export default {
  components: {
    ContactTypeForm,
  },
  layout: 'dashboard',
  middleware: 'authenticated',
  head() {
    return {
      title: 'Homepage title',
    }
  },
  computed: {
    ...mapGetters({
      item: 'language/item',
    }),
  },
  beforeDestroy() {
    this.reset()
  },
  methods: {
    ...mapActions({
      create: 'language/create',
      reset: 'language/reset',
    }),
    onSendForm() {
      this.create()
        .then((item) => {
          this.$router.push({
            name: 'language-id-show___en',
            params: { id: item.id },
          })
        })
        .catch()
    },
  },
}
</script>
