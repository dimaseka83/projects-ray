<template>
  <v-container class="fill-height full-background" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12 rounded-xl">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6" class="background">
                </v-col>
                  <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <div class="text-center">
                      <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" height="100">
                    </div>
                    <h1 class="text-center display-1 primary--text text--accent-3">Selamat Datang di NuxtJS</h1>
                    <h4 class="text-center body-2 mt-4 ">Mohon isi kolom Email dan Password untuk masuk </h4>
                    <v-form>
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"
                        color="primary accent-3" />

                      <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                        type="password" color="primary accent-3" />
                    </v-form>
                    <h5 class="text-center mt-4">Belum punya akun? <v-btn text color="primary" @click="step++">
                        Daftar</v-btn>
                    </h5>
                  </v-card-text>
                  <div class="d-flex m-3">
                    <v-btn text @click="step += 2" color="blue">Forgot Password?</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary accent-3" dark @click="login">Login</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
                           <v-row>
                <v-col cols="12" md="6" class="background">
                </v-col>
                  <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <div class="text-center">
                      <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" height="100">
                    </div>
                    <h1 class="text-center display-1 primary--text text--accent-3">Selamat Datang di NuxtJS</h1>
                    <h4 class="text-center body-2 mt-4 ">Mohon isi kolom Email dan Password untuk masuk </h4>
                    <v-form>
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"
                        color="primary accent-3" />

                      <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                        type="password" color="primary accent-3" />
                    </v-form>
                    <h5 class="text-center mt-4">Sudah Punya Akun? <v-btn text color="primary" @click="step--">
                        Login</v-btn>
                    </h5>
                  </v-card-text>
                  <div class="text-center m-3">
                    <v-btn block color="primary accent-3" dark @click="login">Daftar</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
                          <v-row>
                <v-col cols="12" md="6" class="background">
                </v-col>
                  <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <div class="text-center">
                      <img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" height="100">
                    </div>
                    <h1 class="text-center display-1 primary--text text--accent-3">Lupa Password</h1>
                    <h4 class="body-2 text-center mt-4 ">Enter your email address you're using for your account bellow and we
                      will send you a password reset link</h4>
                    <v-form>
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"
                        color="primary accent-3" />
                    </v-form>
                    <h5 class="text-center mt-4">Belum punya akun? <v-btn text color="primary" @click="step++">
                        Daftar</v-btn>
                    </h5>
                  </v-card-text>
                  <div class="text-center m-3">
                    <v-btn block color="primary accent-3" dark @click="forgotpassword">Reset Password</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
          <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      step: 1,
      snackbar: false,
      text: '',
      timeout: 1000,
    }),
    props: {
      source: String
    },
    layout: 'authentication',
    methods: {
      login() {
        this.snackbar = true;
        this.text = 'Logged in successfully';
        setTimeout(() => {
          this.$router.push('/');
        }, 1000);
      },
      signup() {
        this.snackbar = true;
        this.text = 'Signed up successfully';
        setTimeout(() => {
          this.step--;
        }, 1000);
      },
      forgotpassword(){
        this.snackbar = true;
        this.text = 'Send Reset Link Successfully';
        setTimeout(() => {
          this.step = 1;
        }, 1000);
      }
    },
  };

</script>
<style>
.full-background {
  background-image: url('~/assets/images/background.svg');
  height: 100%;
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (max-width: 800px) {
  .background {
  }
}
@media screen and (min-width: 1200px) {
  .background {
    background-image: url('~/assets/images/background.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
  
</style>
