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
  ROLE_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  ROLE_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  ROLE_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  ROLE_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  ROLE_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  ROLE_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'ROLE', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'ROLE', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'ROLE')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'ROLE')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'ROLE', item)
  },
  reset(context) {
    return crud.reset(context, 'ROLE')
  },
}
