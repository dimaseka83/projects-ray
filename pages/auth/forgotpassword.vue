<template>
    <div class="h-100 row align-items-center">
        <div class="col">
            <div class="d-flex justify-content-center">
                <div class="card p-5">
                <div class="card-title">
                    <div class="d-flex justify-content-center">
                            <h1 class="display-4">Forgot Password</h1>
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
                              <div class="d-grid gap-2">
                                <button class="btn btn-primary">Send</button>
                              </div>
                              <div class="d-flex justify-content-center">
                              <span class="text-muted form-text">Already have account <nuxt-link to="/auth/login" class="text-muted">Login</nuxt-link></span>
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
