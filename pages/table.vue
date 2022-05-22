<template>
  <div>
    <h5 class="font-weight-bold mb-8">Table</h5>
    <div class="card card-custom">
      <div class="card-header">
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-grow-1 bd-highlight"><h5>DataTable</h5></div>
          <div class="p-2 bd-highlight">
            <input type="text" class="form-control" v-model="search" placeholder="Search">
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <v-data-table
       :headers="headers" 
       :items="table" 
       :search="search"
       :page.sync="page"
       :items-per-page="itemsPerPage"
       hide-default-footer
       class="elevation-1"
       @page-count="pageCount = $event"
       ></v-data-table>
       <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
          color="teal"
        ></v-pagination>
       </div>
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [{
            text: '#',
            align: 'left',
            value: 'id'
          },
          {
            text: 'First',
            align: 'left',
            value: 'first'
          },
          {
            text: 'Last',
            align: 'left',
            value: 'last'
          },
          {
            text: 'Handle',
            align: 'left',
            value: 'handle'
          }
        ],
        table: [{
            id: 1,
            first: 'Mark',
            last: 'Otto',
            handle: '@mdo'
          },
          {
            id: 2,
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat'
          },
          {
            id: 3,
            first: 'Larry',
            last: 'the Bird',
            handle: '@twitter'
          }
        ]
      }
    },
  }

</script>
