<template>
  <div>
    <div class="d-flex bd-highlight mb-3">
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
    <v-divider></v-divider>
    <div class="row">
      <div class="col-6 ">
        <h5 class="font-weight-bold">Produk</h5>
        <div :class="classForm">
          <label for="">Gambar <span class="text-danger">*</span></label>
          <div class="form-text">.jpeg, .jpg, .png, max 10MB, ukuran min 300 x 300 px</div>
          <dropzone id="foo" ref="el" :options="linkDropzone"></dropzone>
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
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Rp</span>
                <input type="text" class="form-control" v-model="d.harga">
              </div>
            </div>
            <div class="col">
                <label for="">Stock <span class="text-danger">*</span></label>
                <input type="text" class="form-control" v-model="d.stock">
            </div>
            <div class="col">
                <button class="btn btn-danger" @click="deleteVariant" :class="disabledDelete"><i
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
              <v-img src="https://everpro.s3.ap-southeast-1.amazonaws.com/logistic/logo/sicepats.png" max-width="200">
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
              <v-switch inset :label="expresswitch" v-model="switchexpress"></v-switch>
              <v-spacer></v-spacer>
              <v-btn color="teal" class="text-white">0 Layanan</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>
<script>
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'
  export default {
    components: {
      Dropzone,
    },
    data() {
      return {
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
        switchexpress: false,
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
      expresswitch() {
        if (this.switchexpress) {
          return 'Aktif'
        } else {
          return 'Tidak Aktif'
        }
      }
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
      onlyNumber($event) {
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
          $event.preventDefault();
        }
      }
    },
  }

</script>
