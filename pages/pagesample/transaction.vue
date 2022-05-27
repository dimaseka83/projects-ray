<template>
  <div>
    <div v-if="displayMobile">
      <div class="d-flex bd-highlight">
        <div class="p-2 flex-grow-1 bd-highlight">
          <h5 class="font-weight-bold">Transaksi</h5>
        </div>
        <div class="p-2 bd-highlight mr-10">
          <v-menu ref="menu" v-model="menu" :close-on-content-click="false" max-width="290"
            transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field v-model="date" label="Tanggal Transaksi" prepend-icon="mdi-calendar" readonly clearable
                @click:clear="date = null" v-bind="attrs" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" @change="menu = false" range no-title>
            </v-date-picker>
          </v-menu>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <v-btn color="teal lighten-2" class="text-white font-weight-light">Proses Bulk</v-btn>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <div class="input-group">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control" placeholder="Cari transaksi" aria-label="Username"
                  aria-describedby="basic-addon1"  v-model="search">
              </div>
            </div>
            <div class="col-3">
              <select name="" id="" class="form-select">
                <option value="">Semua Status</option>
                <option value="">Tertunda</option>
                <option value="">Diproses</option>
                <option value="">Selesai</option>
                <option value="">Dikembalikan</option>
              </select>
            </div>
            <div class="col-3">
              <select name="" id="" class="form-select">
                <option value="">Semua Kurir</option>
                <option value="">Sicepat</option>
                <option value="">JNE</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h5 class="font-weight-bold">Transaksi</h5>
      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" max-width="290" transition="scale-transition"
        offset-y min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="date" label="Tanggal Transaksi" prepend-icon="mdi-calendar" readonly clearable
            @click:clear="date = null" v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date" @change="menu = false" range no-title>
        </v-date-picker>
      </v-menu>
      <v-btn block color="teal lighten-2" class="text-white font-weight-light">Proses Bulk</v-btn>
      <div class="input-group mt-2">
        <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" class="form-control" placeholder="Cari transaksi" aria-label="Username"
          aria-describedby="basic-addon1" v-model="search">
      </div>
      <select name="" id="" class="form-select mt-2">
        <option value="">Semua Status</option>
        <option value="">Tertunda</option>
        <option value="">Diproses</option>
        <option value="">Selesai</option>
        <option value="">Dikembalikan</option>
      </select>
      <select name="" id="" class="form-select mt-2">
        <option value="">Semua Kurir</option>
        <option value="">Sicepat</option>
        <option value="">JNE</option>
      </select>
    </div>

          <v-data-table
       :headers="headers" 
       :items="table" 
       :search="search"
       :page.sync="page"
       :items-per-page="itemsPerPage"
       hide-default-footer
       class="elevation-1 mt-5"
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
</template>
<script>
  export default {
    data() {
      return {
        menu: false,
        date: null,
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
    computed: {
      displayMobile() {
        return this.$vuetify.breakpoint.width >= 400
      },
    },
  }

</script>
