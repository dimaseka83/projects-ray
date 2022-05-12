<template>
    <div class="h-100 row align-items-center">
        <div class="col">
            <div class="d-flex justify-content-center">
                <div class="card p-5">
                <div class="card-title">
                    <div class="d-flex justify-content-center">
                            <h1 class="display-4">Login</h1>
                      </div>
                </div>
                  <div class="card-body m-5">
                      <div class="row">
                          <div class="col">
                              <input type="text" class="form-control" placeholder="Email / No HP">
                          </div>
                      </div>
                      <div class="row">
                          <div class="col">
                              <input type="password" class="form-control" placeholder="Password">
                              <nuxt-link to="/auth/forgotpassword" class="form-text">Forgot Password</nuxt-link>
                          </div>
                      </div>
                    <div class="row">
                          <div class="col">
                              <div class="d-grid gap-2">
                                <button class="btn btn-primary">Login</button>
                              </div>
                              <div class="d-flex justify-content-end">
                              <nuxt-link to="/auth/register" class="text-muted form-text">Create Account</nuxt-link>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    layout: 'authentication',
  }

</script>
