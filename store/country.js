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
  COUNTRY_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  COUNTRY_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  COUNTRY_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  COUNTRY_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  COUNTRY_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  COUNTRY_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'COUNTRY', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'COUNTRY', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'COUNTRY')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'COUNTRY')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'COUNTRY', item)
  },
  reset(context) {
    return crud.reset(context, 'COUNTRY')
  },
}
