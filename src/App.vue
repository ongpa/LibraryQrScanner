<template>
  <div v-if="loginStatus" id="app">
    <Topbar></Topbar>
    <router-view />
    <Navbar></Navbar>
  </div>
  <div v-else id="app">
    <b-container fluid id="login" class="pt-5">
      <b-card title="Library QR Scanner" class="shadow-lg" style="margin: 200px 5% 0">
        <b-form @submit.prevent="submit">
          <b-form-group label="Username">
            <b-form-input v-model="userId" required></b-form-input>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input v-model="password" type="password" required></b-form-input>
          </b-form-group>
          <b-button variant="primary" type="submit" >Login</b-button>
        </b-form>
        <b-alert v-if="wrongCredentials" show variant="danger" class="mt-3">Username atau Password salah!</b-alert>
      </b-card>
    </b-container>

    <!-- Loading Component -->
     <loading :active.sync="isLoading" 
        :is-full-page="true"></loading>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapState } from "vuex";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      userId: "",
      password: "",
      wrongCredentials: false,
    }
  },
  computed: {
    ...mapState(["loginStatus", "isLoading"]),
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const user = new FormData();
      user.append("userId", this.userId);
      user.append("password", this.password);
      this.wrongCredentials = await this.LogIn(user);
      if (!this.wrongCredentials) {
        this.$router.push("/");
      }
      this.password = "";
    },
  },
  components: {
    Topbar,
    Navbar,
    Loading,
  },
};
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
