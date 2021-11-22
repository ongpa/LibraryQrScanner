<template>
  <b-navbar id="navbar" type="dark" variant="primary" fixed="bottom">
      <b-navbar-brand class="mx-auto">
        <router-link to="/">
          <b-icon icon="house-door-fill"></b-icon>
        </router-link>
      </b-navbar-brand>
      <b-navbar-brand class="mx-auto">
        <router-link to="/scanner">
          <b-icon icon="upc-scan"></b-icon>
        </router-link>
      </b-navbar-brand>
      <b-navbar-brand class="mx-auto">
        <router-link to="/account">
          <b-icon icon="person-lines-fill"></b-icon>
        </router-link>
      </b-navbar-brand>
  </b-navbar>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Navbar",
  components: {
  },
};
</script>

<style>
#navbar a {
  font-weight: bold;
  color: #ffffff;
}

#navbar a.router-link-exact-active {
  /* color: #42b983; */
  text-shadow: 0px 0px 20px #000000
}
</style>
