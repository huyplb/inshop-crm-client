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
  SEARCH_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  SEARCH_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  SEARCH_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  SEARCH_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  SEARCH_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  SEARCH_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'SEARCH', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'SEARCH', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'SEARCH')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'SEARCH')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'SEARCH', item)
  },
  reset(context) {
    return crud.reset(context, 'SEARCH')
  },
}
