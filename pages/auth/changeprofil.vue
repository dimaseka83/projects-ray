<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <h5 class="card-title">Edit Profile</h5>
            <div class="card">
              <div class="card-body mx-5">
                <div class="form-group mb-5">
                  <label for="">Your Name</label>
                  <input type="text" class="form-control" placeholder="Your Name">
                </div>

                <div class="form-group mb-5">
                  <label for="">Email</label>
                  <input type="text" class="form-control" placeholder="Your Email">
                </div>

                <div class="form-group mb-5">
                  <label for="">Phone</label>
                  <input type="text" class="form-control" placeholder="Your Phone">
                </div>

                <div class="form-group mb-5">
                  <label for="">Address</label>
                  <input type="text" class="form-control" placeholder="Your Address">
                </div>
                <div class="d-flex justify-content-end mt-10">
                  <v-btn depressed color="primary" @click="snackbar = true">Save</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-snackbar v-model="snackbar" :timeout="1000">
      Profile Berhasil Diupdate

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        snackbar: false,
      }
    },
  }

</script>
