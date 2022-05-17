<template>
  <div>
    <div class="row">
      <div class="col-6">
        <div class="card card-custom">
          <div class="card-header">
            <h4 class="card-title">Form Controls</h4>
          </div>
          <form action="">
            <div class="card-body">
              <div class="form-group mb-5">
                <label for="">Email address <span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Enter email">
              </div>
              <div class="form-group mb-5">
                <label for="">Password <span class="text-danger">*</span></label>
                <input type="password" class="form-control" placeholder="Enter password">
              </div>
              <div class="form-group mb-5">
                <label for="">Example select <span class="text-danger">*</span></label>
                <select name="" class="form-control">
                  <option v-for="(opt,idx) in select" :key="idx" :value="opt.value">{{opt.text}}</option>
                </select>
              </div>
              <div class="form-group mb-5">
                <label for="">Example select <span class="text-danger">*</span></label>
                <select multiple name="" id="" class="form-control">
                  <option v-for="(opt,idx) in select" :key="idx" :value="opt.value">{{opt.text}}</option>
                </select>
              </div>
              <div class="form-group mb-1">
                <label for="">Example textarea</label>
                <textarea rows="3" class="form-control"></textarea>
              </div>
            </div>
            <div class="card-footer">
              <button type="reset" class="btn btn-primary mr-2 text-white">Submit</button>
              <button type="reset" class="btn btn-secondary text-white">Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <div class="col-6">
        <div class="card card-custom">
          <div class="card-header">
            <h4 class="card-title">Input Custom</h4>
          </div>
          <form action="">
            <div class="card-body">
              <div class="form-group mb-5">
                <label for="">Example Select2</label>
                <select name="" id="select2" class="form-control">
                  <option v-for="(opt,idx) in select" :key="idx" :value="opt.value">{{opt.text}}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="">Example File Upload Dropzone</label>
                <dropzone id="foo" ref="el" :options="linkDropzone"></dropzone>
              </div>
            </div>
            <div class="card-footer">
              <button type="reset" class="btn btn-primary mr-2 text-white">Submit</button>
              <button type="reset" class="btn btn-secondary text-white">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import 'select2'

  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'

  export default {
  components: {
    Dropzone
  },
    data() {
      return {
        select: [{
            text: 'Option 1',
            value: '1'
          },
          {
            text: 'Option 2',
            value: '2'
          },
          {
            text: 'Option 3',
            value: '3'
          }
        ],
      linkDropzone: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        addRemoveLinks: true,
        dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD ME"
      }
      }
    },
    computed: {
      options() {
        return this.select.map(item => ({
          label: item.text,
          value: item.value
        }))
      },
    },
    mounted() {
      $('#select2').select2({})
      const instance = this.$refs.el.dropzone
    },
  }

</script>
