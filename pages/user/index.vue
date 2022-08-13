<template>
  <is-main-template title="user_list" route-add="/user/create" entity="user">
    <api-table
      entity="User"
      route="users"
      path="user"
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
      <template slot="filter__email">
        <text-filter label="Email" column="email" />
      </template>
      <template slot="filter__language.name">
        <text-filter label="Language" column="language.name" />
      </template>
      <template slot="filter__groups.name">
        <text-filter label="Groups" column="groups.name" />
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
import columnGroups from '../../table/ColumnGroups'
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
        'email',
        'groups.name',
        'language.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'id',
        'name',
        'email',
        'groups.name',
        'language.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'name',
        'email',
        'groups.name',
        'language.name',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      templates: {
        columnCreatedAt,
        columnUpdatedAt,
        'groups.name': columnGroups,
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
