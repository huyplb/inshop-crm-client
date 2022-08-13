import * as crud from '~/utils/crud'

const defaultState = () => ({
  item: {
    isActive: true,
  },
  items: [],
  error: null,
  errors: {},
})

export const state = () => defaultState()

export const mutations = {
  CONTACT_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  CONTACT_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  CONTACT_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  CONTACT_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  CONTACT_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  CONTACT_RESET(state) {
    Object.assign(state, defaultState())
  },
}

export const getters = {
  item: (state) => state.item,
  items: (state) => state.items,
  error: (state) => state.error,
  errors: (state) => state.errors,
}

export const actions = {
  async getItem(context, id) {
    return await crud.getItem(context, this.$axios, 'CONTACT', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'CONTACT', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'CONTACT')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'CONTACT')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'CONTACT', item)
  },
  reset(context) {
    return crud.reset(context, 'CONTACT')
  },
}
