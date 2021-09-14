<template>
  <div v-if="login" id="app">
    <Topbar></Topbar>
    <router-view />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/qrcode">About</router-link>
    </div> -->
    <Navbar></Navbar>
  </div>
  <div v-else id="app">
    <b-container fluid id="login" class="pt-5">
      <b-card title="Login Siswa" class="shadow-lg" style="margin: 200px 5% 0">
        <b-form>
          <b-form-group  label="Username">
            <b-form-input></b-form-input>
          </b-form-group>
          <b-form-group  label="Password">
            <b-form-input type="password"></b-form-input>
          </b-form-group>
          <b-button variant="primary" @click="login = !login">Login</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  data() {
    return {
      login: false,
    }
  },
  components: {
    Topbar,
    Navbar
  }
}
</script>

<style>
body {
  background-color: #e3e3e3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#login {
  height: 100vh;
  background-image: url(./assets/smanda3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
