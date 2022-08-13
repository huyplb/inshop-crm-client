<template>
  <is-main-template title="task_list" route-add="/task/create" entity="task">
    <api-table
      entity="Task"
      route="tasks"
      path="task"
      :filterable="filterable"
      :custom-filters="customFilters"
      :sortable="sortable"
      :columns="columns"
      :templates="templates"
    >
      <template slot="filter__status.id">
        <combo-filter label="Status" entity="task_status" column="status.id" />
      </template>
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__name">
        <text-filter label="Name" column="name" />
      </template>
      <template slot="filter__project.name">
        <text-filter label="Project" column="project.name" />
      </template>
      <template slot="filter__assignee.name">
        <text-filter label="Assignee" column="assignee.name" />
      </template>
      <template slot="filter__isActive">
        <select-filter label="Active" column="isActive" />
      </template>
      <template slot="filter__columnDeadline">
        <date-filter label="Select Date" column="columnDeadline" />
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
import columnDeadline from '../../table/ColumnDeadline'
import columnStatus from '../../table/ColumnStatus'
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
        'status.id',
        'project.name',
        'assignee.name',
        'columnDeadline',
        'timeEstimated',
        'timeSpent',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'status.id',
        'id',
        'name',
        'project.name',
        'assignee.name',
        'columnDeadline',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'name',
        'status.id',
        'project.name',
        'assignee.name',
        'columnDeadline',
        'timeEstimated',
        'timeSpent',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      templates: {
        columnCreatedAt,
        columnUpdatedAt,
        columnDeadline,
        'status.id': columnStatus,
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
