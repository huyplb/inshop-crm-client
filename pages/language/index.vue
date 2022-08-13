<template>
  <is-main-template
    title="language_list"
    route-add="/language/create"
    entity="language"
  >
    <api-table
      entity="language"
      route="languages"
      path="language"
      :filterable="filterable"
      :sortable="sortable"
      :columns="columns"
      :custom-filters="customFilters"
      :templates="templates"
    >
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__name">
        <text-filter label="Name" column="name" />
      </template>
      <template slot="filter__code">
        <text-filter label="Code" column="code" />
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
        'code',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'id',
        'name',
        'code',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'name',
        'code',
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
