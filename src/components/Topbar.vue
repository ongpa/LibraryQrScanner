<template>
  <b-navbar type="dark" variant="primary">
    <b-navbar-brand>
      <b>SMANDA LIBRARY APP</b><br />
      <div id="greeting">Halo, {{ userName }}</div>
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Topbar",
  computed: {
    ...mapState(["userName"]),
  },
  components: {
  },
};
</script>

<style>
#greeting {
  font-size: smaller;
  text-align: left;
}
</style>
