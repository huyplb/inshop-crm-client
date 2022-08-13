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
  USER_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  USER_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  USER_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  USER_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  USER_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  USER_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'USER', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'USER', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'USER')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'USER')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'USER', item)
  },
  reset(context) {
    return crud.reset(context, 'USER')
  },
}
