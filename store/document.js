import * as crud from '~/utils/crud'

const defaultState = () => ({
  item: {
    files: [],
    isActive: true,
  },
  items: [],
  error: null,
  errors: {},
})

export const state = () => defaultState()

export const mutations = {
  DOCUMENT_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  DOCUMENT_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  DOCUMENT_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  DOCUMENT_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  DOCUMENT_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  DOCUMENT_RESET(state) {
    Object.assign(state, defaultState())
  },
  DOCUMENT_ADD_FILE(state, file) {
    state.item.files.push(file)
  },
  DOCUMENT_DELETE_FILE(state, fileId) {
    state.item.files = state.item.files.filter((file) => file.id !== fileId)
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
    return await crud.getItem(context, this.$axios, 'DOCUMENT', id)
  },
  async getItems(context, query) {
    return await crud.getItems(context, this.$axios, 'DOCUMENT', query)
  },
  async create(context) {
    return await crud.create(context, this.$axios, 'DOCUMENT')
  },
  async update(context) {
    return await crud.update(context, this.$axios, 'DOCUMENT')
  },
  async remove(context, item) {
    return await crud.remove(context, this.$axios, 'DOCUMENT', item)
  },
  reset(context) {
    return crud.reset(context, 'DOCUMENT')
  },
}
