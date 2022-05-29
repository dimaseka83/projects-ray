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
              <select name="" id="" class="form-select" @change="statusEvent($event)" v-model="status">
        <option value="semua">Semua Status</option>
        <option value="tertunda">Tertunda</option>
        <option value="diproses">Diproses</option>
        <option value="selesai">Selesai</option>
        <option value="dikembalikan">Dikembalikan</option>
              </select>
            </div>
            <div class="col-3">
              <select name="" id="" class="form-select" @change="kurirEvent($event)" v-model="kurir">
        <option value="semua">Semua Kurir</option>
        <option value="sicepat">Sicepat</option>
        <option value="jne">JNE</option>
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
      <select name="" id="" class="form-select mt-2" @change="statusEvent($event)" v-model="status">
        <option value="">Semua Status</option>
        <option value="tertunda">Tertunda</option>
        <option value="diproses">Diproses</option>
        <option value="selesai">Selesai</option>
        <option value="dikembalikan">Dikembalikan</option>
      </select>
      <select name="" id="" class="form-select mt-2" @change="kurirEvent($event)" v-model="kurir">
        <option value="">Semua Kurir</option>
        <option value="sicepat">Sicepat</option>
        <option value="jne">JNE</option>
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
       >
       <template v-slot:item.id="{item}">
         <p v-text="item.id" class="mt-2"></p>
         <v-btn color="error" class="mb-2" small>{{item.status}}</v-btn>
       </template>
       </v-data-table>
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
        status: 'semua',
        kurir: 'semua',
        menu: false,
        date: null,
         search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [{
            text: 'ID',
            align: 'left',
            value: 'id'
          },
          {
            text: 'Tanggal',
            align: 'left',
            value: 'tanggal'
          },
          {
            text: 'Nama',
            align: 'left',
            value: 'nama'
          },
          {
            text: 'Telepon',
            align: 'left',
            value: 'telepon'
          },
          {
             text: 'Produk',
            align: 'left',
            value: 'produk'
          },
          {
            text: 'Logistik',
            align: 'left',
            value: 'logistik'
          },
          {
            text: 'Pembayaran',
            align: 'left',
            value: 'pembayaran'
          },
          {
            text: 'Status Pembayaran',
            align: 'left',
            value: 'status_pembayaran'
          },
          {
            text: 'Harga',
            align: 'left',
            value: 'harga'
          }
        ],
        table: [
          {
            id: '2022032000002',
            tanggal: 'Saturday, March 20, 2020 5:55',
            nama: 'Rigen',
            telepon: '0812-3456-7890',
            produk: 'Kaos',
            logistik: 'JNE',
            pembayaran: 'Transfer',
            status_pembayaran: 'Tertunda',
            harga: 'Rp. 100.000',
            status: 'Pending',
            date: '2020-03-20'
          },
        ]
      }
    },
    computed: {
      displayMobile() {
        return this.$vuetify.breakpoint.width >= 500
      },
    },
    methods: {
      statusEvent(e) {
        this.status = e.target.value
      },
      kurirEvent(e) {
        this.kurir = e.target.value
      },
    },
  }

</script>
