<template>
  <is-main-template
    title="document_list"
    route-add="/document/create"
    entity="document"
  >
    <api-table
      entity="Document"
      route="documents"
      path="document"
      :filterable="filterable"
      :custom-filters="customFilters"
      :sortable="sortable"
      :columns="columns"
      :templates="templates"
    >
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__name">
        <text-filter label="Name" column="name" />
      </template>
      <template slot="filter__client.name">
        <text-filter label="Client" column="client.name" />
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
import ApiTable from '../../components/ApiTable'
import columnCreatedAt from '../../table/ColumnCreatedAt'
import columnUpdatedAt from '../../table/ColumnUpdatedAt'
import columnIsActive from '../../table/ColumnIsActive'

export default {
  components: { ApiTable },
  layout: 'dashboard',
  middleware: 'authenticated',
  data() {
    return {
      columns: [
        'id',
        'name',
        'client.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'id',
        'name',
        'client.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'name',
        'client.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      templates: {
        columnCreatedAt,
        columnUpdatedAt,
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
