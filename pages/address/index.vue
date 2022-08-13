<template>
  <is-main-template title="address_list" route-add="/address/create">
    <api-table
      entity="Address"
      route="addresses"
      path="address"
      :filterable="filterable"
      :sortable="sortable"
      :columns="columns"
      :custom-filters="customFilters"
      :templates="templates"
    >
      <template slot="filter__postCode">
        <text-filter label="PostCode" column="postCode" />
      </template>
      <template slot="filter__id">
        <number-filter />
      </template>
      <template slot="filter__country.name">
        <text-filter label="Country name" column="country.name" />
      </template>
      <template slot="filter__city">
        <text-filter label="City" column="City" />
      </template>
      <template slot="filter__region">
        <text-filter label="Region" column="region" />
      </template>
      <template slot="filter__district">
        <text-filter label="District" column="district" />
      </template>
      <template slot="filter__street">
        <text-filter label="Street" column="street" />
      </template>
      <template slot="filter__building">
        <text-filter label="Building" column="building" />
      </template>
      <template slot="filter__apartment">
        <text-filter label="Apartment" column="apartment" />
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
const columnCreatedAt = () => import('../../table/ColumnCreatedAt')
const columnUpdatedAt = () => import('../../table/ColumnUpdatedAt')
const columnIsActive = () => import('../../table/ColumnIsActive')
export default {
  components: { ApiTable: () => import('../../components/ApiTable') },
  layout: 'dashboard',
  middleware: 'authenticated',
  data() {
    return {
      columns: [
        'id',
        'postCode',
        'country.name',
        'city',
        'region',
        'district',
        'street',
        'building',
        'apartment',
        'comment',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
        'actions',
      ],
      filterable: [],
      customFilters: [
        'id',
        'postCode',
        'country.name',
        'city',
        'region',
        'district',
        'street',
        'building',
        'apartment',
        'isActive',
        'columnCreatedAt',
        'columnUpdatedAt',
      ],
      sortable: [
        'id',
        'postCode',
        'country.id',
        'city',
        'region',
        'district',
        'street',
        'building',
        'apartment',
        'comment',
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
