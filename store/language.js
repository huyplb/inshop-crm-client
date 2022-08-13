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
  LANGUAGE_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  LANGUAGE_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  LANGUAGE_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  LANGUAGE_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  LANGUAGE_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  LANGUAGE_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'LANGUAGE', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'LANGUAGE', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'LANGUAGE')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'LANGUAGE')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'LANGUAGE', item)
  },
  reset(context) {
    return crud.reset(context, 'LANGUAGE')
  },
}
