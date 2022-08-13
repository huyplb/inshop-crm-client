<template>
  <is-main-template
    title="project_list"
    route-add="/project/create"
    entity="project"
  >
    <api-table
      entity="Project"
      route="projects"
      path="project"
      :filterable="filterable"
      :custom-filters="customFilters"
      :sortable="sortable"
      :columns="columns"
      :templates="templates"
    >
      <!-- <template slot="filter__status.id">
        <project-status-filter />
      </template> -->
      <!-- <template slot="filter__type.id">
        <project-type-filter /> 
      </template>-->
      <template slot="filter__status.id">
        <combo-filter
          label="Status"
          entity="project_status"
          column="status.id"
        />
      </template>
      <template slot="filter__type.id">
        <combo-filter label="Type" entity="project_type" column="type.id" />
      </template>
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__name">
        <text-filter label="Name" column="name" />
      </template>
      <template slot="filter__client.name">
        <text-filter label="ClientName" column="client.name" />
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
import columnStatus from '../../table/ColumnStatus'
import columnType from '../../table/ColumnType'
// import ProjectStatusFilter from '../../components/filters/ProjectStatusFilter'
// import ProjectTypeFilter from '../../components/filters/ProjectTypeFilter'
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
        'status.id',
        'type.id',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'status.id',
        'type.id',
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
        'status.id',
        'type.id',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      templates: {
        columnCreatedAt,
        columnUpdatedAt,
        'status.id': columnStatus,
        'type.id': columnType,
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
