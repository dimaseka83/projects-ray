<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">Sign in to Account</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="primary">
                        <v-icon dark>
                          mdi-facebook
                        </v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="red">
                        <v-icon dark>
                          mdi-google-plus
                        </v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="primary">
                        <v-icon dark>
                          mdi-linkedin
                        </v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">Ensure your email for registration</h4>
                    <v-form>
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"
                        color="teal accent-3" />

                      <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                        type="password" color="teal accent-3" />
                    </v-form>
                    <h5 class="text-center mt-4">Forgot your password ? <v-btn text color="primary" @click="step += 2">
                        Click Here</v-btn>
                    </h5>
                  </v-card-text>
                  <div class="text-center m-3">
                    <v-btn rounded color="teal accent-3" dark @click="login">SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Hello, Friend!</h1>
                    <h5 class="text-center">Enter your personal details and start journay with us</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h5 class="text-center">To Keep connected with us please login with your personnel info</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                  </div>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="primary">
                        <v-icon dark>
                          mdi-facebook
                        </v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="red">
                        <v-icon dark>
                          mdi-google-plus
                        </v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="primary">
                        <v-icon dark>
                          mdi-linkedin
                        </v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-4">Ensure your email for registration</h4>
                    <v-form>
                      <v-text-field label="Name" name="Name" prepend-icon="mdi-account" type="text"
                        color="teal accent-3" />
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"
                        color="teal accent-3" />

                      <v-text-field id="password" label="Password" name="" prepend-icon="mdi-lock" type="password"
                        color="teal accent-3" />
                    </v-form>
                  </v-card-text>
                  <div class="text-center m-5">
                    <v-btn rounded color="teal accent-3" dark @click="signup">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="teal accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Welcome Back!</h1>
                    <h5 class="text-center">To Keep connected with us please login with your personnel info</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                  </div>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h5 class="text-center display-1 teal--text text--accent-3">Did you forgot your password</h5>
                    <p class="text-center mt-4">Enter your email address you're using for your account bellow and we
                      will send you a password reset link</p>
                    <v-form>
                      <v-text-field label="Email" name="Email" prepend-icon="mdi-email" type="text"
                        color="teal accent-3" />
                    </v-form>
                  </v-card-text>
                  <div class="text-center m-5">
                    <v-btn rounded color="teal accent-3" dark @click="forgotpassword">Register Reset Link</v-btn>
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
