<template>
  <is-main-template
    title="client_list"
    route-add="/client/create"
    entity="client"
  >
    <api-table
      entity="Client"
      route="clients"
      path="client"
      :filterable="filterable"
      :custom-filters="customFilters"
      :sortable="sortable"
      :columns="columns"
      :templates="templates"
    >
      <template slot="filter__labels.id">
        <labels-filter />
      </template>
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__name">
        <text-filter label="Name" column="name" />
      </template>
      <template slot="filter__contacts.value">
        <text-filter label="Contacts" column="contacts.value" />
      </template>
      <template slot="filter__isActive">
        <select-filter label="Active" column="isActive" />
      </template>
      <template slot="filter__columnCreatedAt">
        <date-filter label="Select Date" column="columnCreatedAt" />
      </template>
      <template slot="filter__columnUpdatedAt">
        <date-filter label="Select Date" column="columnUpdatedAt" />
      </template>
    </api-table>
  </is-main-template>
</template>

<script>
import columnContacts from '../../table/ColumnContacts'
import columnLabels from '../../table/ColumnLabels'
import columnCreatedAt from '../../table/ColumnCreatedAt'
import columnUpdatedAt from '../../table/ColumnUpdatedAt'
import columnIsActive from '../../table/ColumnIsActive'

export default {
  components: {
    ApiTable: () => import('../../components/ApiTable'),
  },
  layout: 'dashboard',
  middleware: 'authenticated',
  data() {
    return {
      columns: [
        'id',
        'name',
        'contacts.value',
        'description',
        'labels.id',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'labels.id',
        'id',
        'name',
        'isActive',
        'contacts.value',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'name',
        'description',
        'columnCreatedAt',
        'isActive',
        'columnUpdatedAt',
      ],
      templates: {
        'contacts.value': columnContacts,
        columnCreatedAt,
        columnUpdatedAt,
        'labels.id': columnLabels,
        isActive: columnIsActive,
      },
    }
  },
  head() {
    return {
      title: 'Homepage title',
    }
  },
}
</script>
