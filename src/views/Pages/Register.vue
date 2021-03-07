<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Create an account</h1>
              <p class="text-lead text-white">create new account in your project for
                free.</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>sign up</small>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Fist Name"
                              name="First Name"
                              :rules="{required: true}"
                              v-model="model.firstName">
                  </base-input>
                 
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Last Name"
                              name="Last Name"
                              :rules="{required: true}"
                              v-model="model.lastName">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              name="Email"
                              :rules="{required: true, email: true}"
                              v-model="model.email">
                  </base-input>
                  
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-circle-08"
                              placeholder="Contact Number"
                              name="Contact Number"
                              type="number"
                              :rules="{required: true, min: 10}"
                              v-model="model.contactNo">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="password"
                              type="password"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              v-model="model.password">
                  </base-input>
                  
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="Confirm Password"
                              type="password"
                              name="Confirm Password"
                              :rules="{required: true, min: 6}"
                              v-model="model.cpassword">
                  </base-input>
                  <div class="d-flex">
                    <base-radio value="FARMER" name="FARMER" class="mb-3 mr-4" v-model="model.userType">
                        Farmer
                    </base-radio>

                    <base-radio value="BUYER" name="BUYER" class="mb-3" v-model="model.userType">
                        Buyer
                    </base-radio>
                  </div>
                  <div class="text-muted font-italic"><small>password strength: <span
                    class="text-success font-weight-700">strong</span></small></div>
                  <b-row class=" my-4">
                    <b-col cols="12">
                      <base-input :rules="{ required: { allowFalse: false } }" name=Privacy Policy>
                        <b-form-checkbox v-model="model.agree">
                          <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4">Create account</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="12" class="text-center">
              <router-link to="/login" class="text-light"><small>Already have an account? Sign In</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

  export default {
    name: 'register',
    data() {
      return {
        model: {
          firstName: '',
          lastName: '',
          email: '',
          contactNo: '',
          password: '',
          cpassword: '',
          userType: 'FARMER',
          agree: false
        }
      }
    },
    methods: {
      onSubmit() {
          this.$router.push({ path: 'dashboard' });
          localStorage.setItem('userType', this.userType)
        // this will be called only after form is valid. You can do an api call here to register users
      }
    }

  };
</script>
<style></style>
