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
  PROJECT_TYPE_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  PROJECT_TYPE_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  PROJECT_TYPE_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  PROJECT_TYPE_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  PROJECT_TYPE_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  PROJECT_TYPE_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'PROJECT_TYPE', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'PROJECT_TYPE', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'PROJECT_TYPE')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'PROJECT_TYPE')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'PROJECT_TYPE', item)
  },
  reset(context) {
    return crud.reset(context, 'PROJECT_TYPE')
  },
}
