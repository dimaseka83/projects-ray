<template>
<div class="overflowFixed">
    <div class="d-flex bd-highlight" v-if="displayMobile">
      <div class="me-auto p-2 bd-highlight">
        <v-btn color="grey lighten-5">Cancel</v-btn>
      </div>
      <div class="p-2 bd-highlight">
        <v-btn color="teal accent-2">Simpan Sebagai Draft</v-btn>
      </div>
      <div class="p-2 bd-highlight">
        <v-btn color="teal" class="text-white">Publikasikan</v-btn>
      </div>
    </div>
    <div v-else>
        <div class="row">
          <div class="col">
        <v-btn color="grey lighten-5">Cancel</v-btn><br>
          </div>
        </div>
        <div class="row">
          <div class="col">
        <v-btn color="teal accent-2">Simpan Sebagai Draft</v-btn>
          </div>
        </div>
        <div class="row">
          <div class="col">
        <v-btn color="teal" class="text-white">Publikasikan</v-btn>
          </div>
        </div>
    </div>
    <v-divider></v-divider>
    <div class="row">
      <div :class="columnFull">
        <div class="overflowAuto">
          <h5 class="font-weight-bold">Produk</h5>
          <div :class="classForm">
            <label for="">Gambar <span class="text-danger">*</span></label>
            <div class="form-text">.jpeg, .jpg, .png, max 10MB, ukuran min 300 x 300 px</div>
            <dropzone id="foo" ref="el" :options="linkDropzone" :duplicateCheck="true"></dropzone>
          </div>
          <div :class="classForm">
            <label for="">Nama <span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="form.name">
          </div>
          <div :class="classForm">
            <label for="">Slug <span class="text-danger">*</span></label>
            <input type="text" class="form-control">
          </div>
          <div :class="classForm">
            <label for="">Deskripsi <span class="text-danger">*</span></label>
            <textarea name="" id="" rows="5" class="form-control"></textarea>
          </div>
          <div :class="classForm">
            <div class="row" v-for="(d, index) in form.variants" :key="index">
              <div class="col">
                <label for="">Varian <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="d.varian">
              </div>
              <div class="col">
                <label for="">Berat (gr) <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="d.berat">
              </div>
              <div class="col">
                <label for="">Harga <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="d.harga">
              </div>
              <div class="col">
                <label for="">Stock <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="d.stock">
              </div>
              <div class="col">
                <button class="btn btn-danger mt-6" @click="deleteVariant" :class="disabledDelete"><i
                    class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          </div>
          <v-btn color="teal accent-2" @click="addVariant">Tambah varian</v-btn>
          <v-divider></v-divider>
          <h5 class="text-muted body-1">TRACKING</h5>
          <div :class="classForm">
            <label for="">FB Pixel</label>
            <input type="text" class="form-control" @keypress="onlyNumber">
          </div>
          <v-divider></v-divider>
          <h5 class="text-muted body-1">PILIHAN KURIR</h5>
          <div :class="classForm">
            <v-card class="mx-auto">
              <v-card-title>
                <v-img src="https://everpro.s3.ap-southeast-1.amazonaws.com/logistic/logo/sicepats.png" max-width="100">
                </v-img>
                <v-row class="ml-5">
                  <v-col>
                    <span class="font-weight-bold">SiCepat</span>
                    <p class="font-weight-light">Regular | Same Day</p>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-switch inset :label="expresswitch" v-model="switchexpress" class="ml-2"></v-switch>
                <v-spacer></v-spacer>
                <v-btn color="teal" class="text-white" @click="layanancepat">{{ sicepattext }} Layanan<v-icon right dark
                    v-if="layanansicepat == true">mdi-arrow-up</v-icon>
                  <v-icon right dark v-else>mdi-arrow-down</v-icon>
                </v-btn>
              </v-card-actions>
              <div class="d-flex bd-highlight" v-if="layanansicepat">
                <div class="me-auto p-2 bd-highlight">
                  <p class="text-muted body-1 ml-2 pt-5">Reguler</p>
                </div>
                <div class="p-2 bd-highlight">
                  <v-switch inset :label="expresswitch1" v-model="switchexpress1"></v-switch>
                </div>
              </div>
              <v-card-subtitle v-if="layanansicepat">
                <p class="text-black body-1">HALU (Harga Mulai Lima Ribu)</p>
                <p class="text-black body-1">SIUNTUNG (SIUNTUNG)</p>
                <p class="text-black body-1">SIUNT (Regular)</p>
                <p class="text-black body-1">REG (Regular)</p>
                <v-divider></v-divider>
                <div class="d-flex bd-highlight">
                  <div class="me-auto p-2 bd-highlight">
                    <p class="text-muted body-1 pt-5">Same Day</p>
                  </div>
                  <div class="p-2 bd-highlight">
                    <v-switch inset :label="expresswitch2" v-model="switchexpress2"></v-switch>
                  </div>
                </div>
                <p class="text-black body-1 ml-2">SDS (Same Day)</p>
              </v-card-subtitle>
            </v-card>
          </div>
          <div :class="classForm">
            <v-card class="mx-auto">
              <v-card-title>
                <v-img src="https://upload.wikimedia.org/wikipedia/commons/9/92/New_Logo_JNE.png" max-width="100">
                </v-img>
                <v-row class="ml-5">
                  <v-col>
                    <span class="font-weight-bold">JNE</span>
                    <p class="font-weight-light">Regular</p>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-switch inset :label="jneswitch" v-model="switchjne" class="ml-2"></v-switch>
                <v-spacer></v-spacer>
                <v-btn color="teal" class="text-white" @click="layananjne">{{ jnetext }} Layanan<v-icon right dark
                    v-if="layanansijne == true">mdi-arrow-up</v-icon>
                  <v-icon right dark v-else>mdi-arrow-down</v-icon>
                </v-btn>
              </v-card-actions>
              <div class="d-flex bd-highlight" v-if="layanansijne">
                <div class="me-auto p-2 bd-highlight">
                  <p class="text-muted body-1 ml-2 pt-5">Reguler</p>
                </div>
                <div class="p-2 bd-highlight">
                  <v-switch inset :label="jneswitch" v-model="switchjne"></v-switch>
                </div>
              </div>
              <v-card-subtitle v-if="layanansijne">
                <p class="text-black body-1">REG19 (Regular)</p>
                <p class="text-black body-1">CTC19 (CTC (City to City))</p>
                <p class="text-black body-1">OKE19 (OKE (Ongkos Kirim Ekonomis))</p>
              </v-card-subtitle>
            </v-card>
            <div :class="classForm">
              <label for="">Asal Pengiriman <span class="text-danger">*</span></label>
              <select name="" id="select2" class="form-control">
                <option v-for="(opt, id) in asalpengiriman" :key="id" :value="opt.value">{{opt.text}}</option>
              </select>
            </div>
            <h5 class="text-muted body-1">COD DITANGGUNG OLEH</h5>
            <span class="text-decoration-underline text-teal">Contoh Simulasi Pencarian</span>
            <div :class="classForm">
              <v-card color="grey lighten-4">
                <v-card-text>
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <span class="text-black">Penjual akan dikenakan biaya COD sebesar 3% pada saat pencairan </span>
                </v-card-text>
              </v-card>
            </div>
            <div :class="classForm">
              <v-card class="mx-auto">
                <v-card-title>
                  <v-radio-group v-model="cod">
                    <v-radio label="Pembeli" color="teal" value="pembeli"></v-radio>
                  </v-radio-group>
                </v-card-title>
                <v-card-text class="ml-7 pr-16">
                  <p class="text-black body-1">Biaya COD <span class="text-danger">*</span></p>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
                    <span class="input-group-text" id="basic-addon1">%</span>
                  </div>
                  <span class="text-muted"><i class="fa-solid fa-circle-exclamation"></i> Biaya COD akan dibayarkan oleh
                    pembeli kepada penjual berdasarkan harga barang + ongkir </span>
                </v-card-text>
              </v-card>
            </div>
            <div :class="classForm">
              <v-card class="mx-auto">
                <v-card-title>
                  <v-radio-group v-model="cod">
                    <v-radio label="Penjual" color="teal" value="pembeli" class="my-n4"></v-radio>
                  </v-radio-group>
                </v-card-title>
              </v-card>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6" v-if="displayMobile">
        <div class="overflowAuto">
        <select name="" id="" class="form-select col-4" v-model="preview">
          <option value="desktop">Desktop Preview</option>
          <option value="mobile">Mobile Preview</option>
        </select>
        <div class="card mt-5" v-if="preview == 'desktop'">
          <div class="card-body">
            <div class="row">
              <div class="col-4">
                <v-carousel :show-arrows="false" height="200">
                  <v-carousel-item v-for="(item,i) in imgcarousel" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
              </div>
              <div class="col-8">
                <div class="row" v-for="(prd, idx) in formpreview.prd" :key="idx">
                  <div class="col">
                    <label for="">Pilih Produk</label>
                    <select name="" id="" class="form-control" v-model="prd.name">
                      <option :value="id" v-for="(pd, id) in produk" :key="id">{{pd.name}}</option>
                    </select>
                  </div>
                  <div class="col">
                    <label for="">Jumlah</label>
                    <input type="text" class="form-control" v-model="prd.jumlah">
                  </div>
                  <div class="col">
                    <button class="btn btn-danger mt-6" :class="disabledDeletePreview" @click="deletePrdPreview"><i
                        class="fa-solid fa-trash"></i></button>
                  </div>
                </div>
                <v-btn color="teal accent-2 mt-2" @click="addPrdPreview">Tambah Pesanan</v-btn>
                <v-divider></v-divider>
                <div :class="classForm">
                  <label for="">Nama Penerima</label>
                  <input type="text" class="form-control">
                </div>
                <div :class="classForm">
                  <label for="">No. Whatsapp</label>
                  <input type="text" class="form-control" @keypress="onlyNumber">
                </div>
                <div :class="classForm">
                  <label for="">Alamat</label>
                  <textarea name="" id="" rows="5" class="form-control"></textarea>
                </div>
                <div :class="classForm">
                  <label for="">Kelurahan/Kecamatan</label>
                  <input type="text" class="form-control">
                </div>
                <div :class="classForm">
                  <label for="">Kodepos</label>
                  <input type="text" class="form-control">
                </div>
                <div :class="classForm">
                  <label for="">Pilih Ekspedisi</label>
                  <select name="" id="" class="form-control"></select>
                </div>
                <div :class="classForm">
                  <label for="">Pilih Layanan</label>
                  <select name="" id="" class="form-control"></select>
                </div>
                <v-divider></v-divider>
                <h5 class="body-1 text-muted mt-2">RINCIAN PESANAN</h5>
                <v-card>
                  <v-card-text>
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight mb-n5">
                        <span class="font-weight-black">Product Name</span>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight mb-n5">
                        <span>(x0)</span>
                      </div>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight my-n5">
                        <span class="font-weight-normal body-1">Biaya COD</span>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight my-n5">
                        <span>(x0)</span>
                      </div>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-text>
                    <div class="d-flex bd-highlight">
                      <div class="p-2 flex-grow-1 bd-highlight my-n5">
                        <span class="font-weight-bold body-1 ">Total</span>
                      </div>
                      <div class="p-2 bd-highlight my-n5">
                        <span class="font-weight-bold">Rp 0</span>
                      </div>
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn class="font-weight-light teal text-white" block>Beli Sekarang</v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>
          </div>
        </div>
        <div class="card mt-5" v-else>
          <div class="card-body">
            <v-carousel :show-arrows="false" height="300">
              <v-carousel-item v-for="(item,i) in imgcarousel" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>
          </div>
          <v-divider></v-divider>
          <div class="card-body">
            <div class="row" v-for="(prd, idx) in formpreview.prd" :key="idx">
              <div class="col-6">
                <label for="">Pilih Produk</label>
                <select name="" id="" class="form-control" v-model="prd.name">
                  <option :value="id" v-for="(pd, id) in produk" :key="id">{{pd.name}}</option>
                </select>
              </div>
              <div class="col-4">
                <label for="">Jumlah</label>
                <input type="text" class="form-control" v-model="prd.jumlah">
              </div>
              <div class="col">
                <button class="btn btn-danger mt-6" :class="disabledDeletePreview" @click="deletePrdPreview"><i
                    class="fa-solid fa-trash"></i></button>
              </div>
            </div>
            <v-btn color="teal accent-2 mt-2" @click="addPrdPreview">Tambah Pesanan</v-btn>
          </div>
          <v-divider></v-divider>
          <div class="card-body">
            <div :class="classForm">
              <label for="">Nama Penerima</label>
              <input type="text" class="form-control">
            </div>
            <div :class="classForm">
              <label for="">No. Whatsapp</label>
              <input type="text" class="form-control" @keypress="onlyNumber">
            </div>
            <div :class="classForm">
              <label for="">Alamat</label>
              <textarea name="" id="" rows="5" class="form-control"></textarea>
            </div>
            <div :class="classForm">
              <label for="">Kelurahan/Kecamatan</label>
              <input type="text" class="form-control">
            </div>
            <div :class="classForm">
              <label for="">Kodepos</label>
              <input type="text" class="form-control">
            </div>
            <div :class="classForm">
              <label for="">Pilih Ekspedisi</label>
              <select name="" id="" class="form-control"></select>
            </div>
            <div :class="classForm">
              <label for="">Pilih Layanan</label>
              <select name="" id="" class="form-control"></select>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="card-body">
            <h5 class="body-1 text-muted mt-2">RINCIAN PESANAN</h5>
            <v-card>
              <v-card-text>
                <div class="d-flex bd-highlight">
                  <div class="p-2 w-100 bd-highlight mb-n5">
                    <span class="font-weight-black">Product Name</span>
                  </div>
                  <div class="p-2 flex-shrink-1 bd-highlight mb-n5">
                    <span>(x0)</span>
                  </div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <div class="d-flex bd-highlight">
                  <div class="p-2 w-100 bd-highlight my-n5">
                    <span class="font-weight-normal body-1">Biaya COD</span>
                  </div>
                  <div class="p-2 flex-shrink-1 bd-highlight my-n5">
                    <span>(x0)</span>
                  </div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text>
                <div class="d-flex bd-highlight">
                  <div class="p-2 flex-grow-1 bd-highlight my-n5">
                    <span class="font-weight-bold body-1 ">Total</span>
                  </div>
                  <div class="p-2 bd-highlight my-n5">
                    <span class="font-weight-bold">Rp 0</span>
                  </div>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn class="font-weight-light teal text-white" block>Beli Sekarang</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
      </div>
    </div>
</div>
</template>
<script>
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'
  import 'select2'
  export default {
    components: {
      Dropzone,
    },
    data() {
      return {
        imgcarousel: [{
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        produk: [{
            name: 'Produk 1',
            price: 'Rp. 100.000',
          },
          {
            name: 'Produk 2',
            price: 'Rp. 100.000',
          },
          {
            name: 'Produk 3',
            price: 'Rp. 100.000',
          },
          {
            name: 'Produk 4',
            price: 'Rp. 100.000',
          },
        ],
        cod: 'pembeli',
        linkDropzone: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 200,
          addRemoveLinks: true,
          dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD ME"
        },
        form: {
          name: '',
          variants: [{
            varian: '',
            berat: '',
            harga: '',
            stock: ''
          }]
        },
        formpreview: {
          prd: [{
            nama: '',
            jumlah: ''
          }]
        },
        preview: 'mobile',
        asalpengiriman: [{
          text: 'Jakarta',
          value: 'Jakarta'
        }, {
          text: 'Bandung',
          value: 'Bandung'
        }, {
          text: 'Surabaya',
          value: 'Surabaya'
        }, {
          text: 'Yogyakarta',
          value: 'Yogyakarta'
        }, {
          text: 'Semarang',
          value: 'Semarang'
        }, {
          text: 'Bogor',
          value: 'Bogor'
        }, {
          text: 'Bekasi',
          value: 'Bekasi'
        }, {
          text: 'Depok',
          value: 'Depok'
        }, {
          text: 'Tangerang',
          value: 'Tangerang'
        }, {
          text: 'Bogor',
          value: 'Bogor'
        }, {
          text: 'Bekasi',
          value: 'Bekasi'
        }],
        switchexpress: false,
        switchexpress1: false,
        switchexpress2: false,
        layanansicepat: false,
        sicepattext: 0,
        switchjne: false,
        layanansijne: false,
        jnetext: 0,
      }
    },
    computed: {
      classForm() {
        return 'form-group my-5'
      },
      disabledDelete() {
        if (this.form.variants.length <= 1) {
          return 'disabled'
        }
      },
      disabledDeletePreview() {
        if (this.formpreview.prd.length <= 1) {
          return 'disabled'
        }
      },
      expresswitch() {
        if (this.switchexpress) {
          return 'Aktif'
        } else {
          return 'Tidak Aktif'
        }
      },
      expresswitch1() {
        if (this.switchexpress1) {
          return 'Aktif'
        } else {
          return 'Tidak Aktif'
        }
      },
      expresswitch2() {
        if (this.switchexpress2) {
          return 'Aktif'
        } else {
          return 'Tidak Aktif'
        }
      },
      jneswitch() {
        if (this.switchjne) {
          return 'Aktif'
        } else {
          return 'Tidak Aktif'
        }
      },
      displayMobile() {
        return this.$vuetify.breakpoint.width >= 500
      },
      columnFull() {
        if (this.displayMobile) {
          return 'col-6'
        } else {
          return 'col-12'
        }
      },
    },
    methods: {
      deleteVariant() {
        this.form.variants.splice(this.form.variants.indexOf(this.form.variants), 1)
      },
      addVariant() {
        this.form.variants.push({
          varian: '',
          berat: '',
          harga: '',
          stock: ''
        })
      },
      deletePrdPreview() {
        this.formpreview.prd.splice(this.formpreview.prd.indexOf(this.formpreview.prd), 1)
      },
      addPrdPreview() {
        this.formpreview.prd.push({
          nama: '',
          jumlah: ''
        })
      },
      onlyNumber($event) {
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
          $event.preventDefault();
        }
      },
      layanancepat() {
        this.layanansicepat = !this.layanansicepat
      },
      layananjne() {
        this.layanansijne = !this.layanansijne
      },
    },
    watch: {
      switchexpress(val) {
        if (val) {
          this.layanansicepat = true
          this.switchexpress1 = true
          this.switchexpress2 = true
        } else {
          this.layanansicepat = false
          this.switchexpress1 = false
          this.switchexpress2 = false
        }
      },
      switchexpress1(val) {
        if (val) {
          this.sicepattext = this.sicepattext + 4
        } else {
          this.sicepattext = this.sicepattext - 4
        }
      },
      switchexpress2(val) {
        if (val) {
          this.sicepattext = this.sicepattext + 1
        } else {
          this.sicepattext = this.sicepattext - 1
        }
      },
      switchjne(val) {
        if (val) {
          this.jnetext = this.jnetext + 3
          this.layanansijne = true
        } else {
          this.jnetext = this.jnetext - 3
          this.layanansijne = false
        }
      },
    },
    mounted() {
      $('#select2').select2({})
    },
  }
</script>
<style>
  .overflowAuto {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 500px;
  }

  @media screen and (max-width: 500px) {
    .overflowFixed{
      position: fixed;
      height: 500px;
      width: 95%;
    }
  }
  @media screen and (min-width: 500px) {
      .overflowFixed{
    position: fixed;
    width: 80% !important;
    bottom: 0;
  }
  }
    
  </style>