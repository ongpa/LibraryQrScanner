<template>
  <div class="account">
    <b-container fluid class="pt-4 px-3">
      <h3 id="ptitle"><b>Informasi Akun</b></h3>
      <hr style="border: 1px dashed gray;"/>
      <b-form>
        <b-form-group
          label="Nama">
          <b-form-input disabled value="Aufarizq M Niza Bayzoni"></b-form-input>
        </b-form-group>
        <b-form-group
          label="NISN">
          <b-form-input disabled value="24060118130075"></b-form-input>
        </b-form-group>
      </b-form>
      <b-button v-b-modal.logout variant="danger">Log Out</b-button>
      <b-modal hide-header centered id="logout">
        <p class="my-4">Anda yakin untuk keluar?</p>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
export default {
  name:"Account",
  components:{
  },
}
</script>

<style>
#ptitle {
  color: white;
  text-shadow : 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
}
</style>
