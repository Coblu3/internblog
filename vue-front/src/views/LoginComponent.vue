<template>
  <section class="vh-100" style="background-color: #9a616d">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form @submit.prevent="submit">
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                      <span class="h1 fw-bold mb-0">Login</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Sign into your account
                    </h5>

                    <div class="form-outline mb-4">
                      <input v-model="data.username"
                        type="username"
                        id="form2Example17"
                        class="form-control form-control-lg"
                        required
                      />
                      <label class="form-label" for="form2Example17"
                        >Username</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="data.password"
                        type="password"
                        id="form2Example27"
                        class="form-control form-control-lg"
                        required
                      />
                      <label class="form-label" for="form2Example27"
                        >Password</label
                      >
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>

                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Don't have an account?
                      <a href="/register" style="color: #393f81">Register here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {reactive, ref} from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import store from '@/store';

export default {
  name: "LoginComponent",
  
  setup(){
    const api_url = "http://localhost:5000/"
    const data = reactive({
     
      username:'',
      password:'',
    
    });
    

  const router = useRouter();
  
  const submit = ()=>{
    const username = data.username
    const password = data.password

    axios
    .post(api_url+"login",{
      username,password})
    .then(response=>{
      let token = response.data.token
      console.log(response)
      localStorage.setItem("token",token)
      
      
      if (token){
      console.log(token)
      store.dispatch('setAuth',true)
      router.push('/');
    }
      
    }).catch((c)=>{
        store.dispatch('setAuth',false)
    })

    
   
  }

  
  return {
      data,
      submit
    }
  }
};
</script>

<style>
</style>