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
  CLIENT_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  CLIENT_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  CLIENT_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  CLIENT_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  CLIENT_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  CLIENT_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'CLIENT', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'CLIENT', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'CLIENT')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'CLIENT')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'CLIENT', item)
  },
  reset(context) {
    return crud.reset(context, 'CLIENT')
  },
}
