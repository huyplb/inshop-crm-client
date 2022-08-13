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
  TASK_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  TASK_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  TASK_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  TASK_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  TASK_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  TASK_RESET(state) {
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
    return await crud.getItem(context, this.$axios, 'TASK', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'TASK', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'TASK')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'TASK')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'TASK', item)
  },
  reset(context) {
    return crud.reset(context, 'TASK')
  },
}
