import pluralize from 'pluralize'
import decamelize from '../utils/decamelize'
import { mutations } from '~/store'

export const getItem = async ({ commit }, $axios, namespace, id) => {
  const link = 'http://localhost:3001/admin' // /tasks/getitems'
  commit(`${namespace}_SET_ERROR`, null)
  return await $axios
    // .get(
    //   `${process.env.NUXT_ENV_API_URL}/${pluralize(
    //     namespace.toLowerCase()
    //   )}/${id}`
    // )
    .get(link + `/${pluralize(namespace.toLowerCase())}/${id}`)
    .then((response) => response.data)
    .then(function (data) {
      commit(`${namespace}_SET_ITEM`, data.data)
      return data.data
    })
    .catch((e) => {
      commit(`${namespace}_SET_ERROR`, e.message)
    })
}

export const getItems = async ({ commit }, $axios, namespace, query) => {
  const link = 'http://localhost:3001/admin' // /tasks/getitems'
  let url = `/${pluralize(namespace.toLowerCase())}`
  commit(`${namespace}_SET_ERROR`, null)

  if (query) {
    url += `?${Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&')}`
  }

  return await $axios
    .get(link + url, { query })
    .then((response) => response.data)
    .then(function (data) {
      commit(`${namespace}_SET_ITEMS`, data.data)
      return data.data
    })
    .catch(function (e) {
      commit(`${namespace}_SET_ERROR`, e.message)
      // console.error('error', e)
    })
}
// Using API TABLE COMPONENT
export const getDataAsynC = async (
  store,
  $axios,
  route,
  namespace,
  queryParams
) => {
  const link = 'http://localhost:3001/admin' // /tasks/getitems'
  const mutation = `${namespace}/${decamelize(namespace).toUpperCase()}`
  // clear error
  store.commit(`${mutation}_SET_ERROR`, null)
  return await $axios
    .get(`${link}/${route}`, {
      params: queryParams,
    })
    .then((response) => response.data)
    .then(function (data) {
      const response = {
        data: data.data,
        count: data.page.total_rows,
      }
      store.commit(`${mutation}_SET_ITEMS`, data.data)
      return response
    })
    .catch((e) => {
      store.commit(`${mutation}_SET_ERROR`, e.message)
    })
}

export const create = async ({ commit, state }, $axios, namespace) => {
  commit(`${namespace}_SET_ERROR`, null)
  const link = 'http://localhost:3001/admin' // /tasks/getitems'
  return await $axios
    .post(`${link}/${pluralize(namespace.toLowerCase())}`, state.item)
    .then((response) => response.data)
    .catch((e) => {
      const { data } = e.response
      debugger
      if (data.violations) {
        const errors = {}

        data.violations.map((violation) => {
          Object.assign(errors, { [violation.propertyPath]: violation.message })
        })

        commit(`${namespace}_SET_ERRORS`, errors)
      }
      const error = data.status ? data['hydra:description'] : data.message
      commit(`${namespace}_SET_ERROR`, error)

      throw data
    })
}

export const update = async ({ commit, state }, $axios, namespace) => {
  commit(`${namespace}_SET_ERROR`, null)
  const link = 'http://localhost:3001/admin' // /tasks/getitems'
  return await $axios
    .put(
      `${link}/${pluralize(namespace.toLowerCase())}/${state.item.id}`,
      state.item
    )
    .then((response) => response.data)
    .catch((e) => {
      const { data } = e.response

      if (data.violations) {
        const errors = {}

        data.violations.map((violation) => {
          Object.assign(errors, { [violation.propertyPath]: violation.message })
        })

        commit(`${namespace}_SET_ERRORS`, errors)
      }

      const error = data.status ? data['hydra:description'] : data.message
      commit(`${namespace}_SET_ERROR`, error)

      throw data
    })
}

export const remove = async ({ commit }, $axios, namespace, item) => {
  const link = 'http://localhost:3001/admin' // /tasks/getitems'

  return await $axios
    .delete(`${link}/${pluralize(namespace.toLowerCase())}/${item.id}`)
    .catch((e) => {
      const message =
        e.response.status === 409
          ? 'Not possible to remove. This record has relations.'
          : e.message

      commit(`${namespace}_SET_ERROR`, message)

      throw e
    })
}
export const reset = ({ commit }, namespace) => {
  commit(`${namespace}_RESET`)
}
