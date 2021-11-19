<template>
  <div class="account">
    <b-container fluid class="pt-4 px-3">
      <h3 id="ptitle"><b>Informasi Akun</b></h3>
      <hr style="border: 1px dashed gray;"/>
      <b-form>
        <b-form-group label="Nama">
          <b-form-input disabled :value="userName"></b-form-input>
        </b-form-group>
        <b-form-group label="NISN">
          <b-form-input disabled :value="userId"></b-form-input>
        </b-form-group>
      </b-form>
      <b-button variant="warning" @click="showModal('changePassModal')">Change Password</b-button>
      <br /> <br />
      <b-button variant="danger" @click="showModal('logoutModal')">Log Out</b-button>

      <!-- MODALS -->
      <b-modal ref="changePassModal" hide-footer hide-header centered>
        <b-card title="Ganti Password" class="shadow-lg" >
          <b-form @submit.prevent="submit">
            <b-form-group label="Password Lama">
              <b-form-input v-model="oldPass" type="password" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password Baru">
              <b-form-input v-model="newPass" type="password" required></b-form-input>
            </b-form-group>
            <b-form-group label="Konfirmasi Password Baru">
              <b-form-input v-model="confPass" type="password" required></b-form-input>
            </b-form-group>
            <b-button variant="primary" type="submit">Submit</b-button>
            <b-button class="mx-1" variant="secondary" @click="hideModal('changePassModal')">Batalkan</b-button>
          </b-form>
          <b-alert v-if="msg == 'success'" show variant="success" class="mt-3">Password berhasil diganti</b-alert>
          <b-alert v-else-if="msg" show variant="danger" class="mt-3">{{ msg }}</b-alert>
        </b-card>
      </b-modal>
      <b-modal ref="logoutModal" hide-footer hide-header centered>
        <h3 class="my-4">Anda yakin untuk keluar?</h3>
        <b-button class="mx-1" variant="primary" @click="LogOut()">Keluar</b-button>
        <b-button class="mx-1" variant="secondary" @click="hideModal('logoutModal')">Batalkan</b-button>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";

export default {
  name:"Account",
  data() {
    return {
      oldPass: '',
      newPass: '',
      confPass: '',
      msg: ''
    }
  },
  computed: {
    ...mapState(["userId", "userName"]),
  },
  methods: {
    ...mapActions(["LogOut"]),
    showModal(modalId) {
      this.oldPass = "";
      this.newPass = "";
      this.confPass = "";
      this.msg = "";
      this.$refs[modalId].show();
    },
    hideModal(modalId) {
      this.$refs[modalId].hide();
    },
    async submit() {
      try {
        const changePassForm = new FormData();
        changePassForm.append("oldPass", this.oldPass);
        changePassForm.append("newPass", this.newPass);
        changePassForm.append("confPass", this.confPass);
        await axios.post("/gantiPassword.php", changePassForm).then((response) => {
          if (response.data["login_status"] == "false") {
            alert("Session anda sudah habis, silahkan login kembali");
            this.LogOut;
          } else {
            this.msg = response.data["msg"];
          }
        })
      } catch (error) {
        alert(error);
      }
    },
  },
  components: {
  },
}
</script>

<style>
#ptitle {
  color: white;
  text-shadow : 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
}
</style>
