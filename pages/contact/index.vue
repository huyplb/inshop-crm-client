<template>
  <is-main-template
    title="contact_list"
    route-add="/contact/create"
    entity="contact"
  >
    <api-table
      entity="Contact"
      route="contacts"
      path="contact"
      :filterable="filterable"
      :sortable="sortable"
      :columns="columns"
      :templates="templates"
      :custom-filters="customFilters"
    >
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__value">
        <text-filter label="Value" column="value" />
      </template>
      <template slot="filter__contactType.name">
        <combo-filter
          label="Contact Type"
          entity="contact_type"
          column="contactType.name"
        />
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
        'value',
        'contactType.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'id',
        'value',
        'contactType.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'value',
        'contactType.id',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      templates: {
        columnCreatedAt,
        columnUpdatedAt,
        // 'contactType.id': columnContactType,
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
