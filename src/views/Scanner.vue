<template>
  <div class="scanner">
    <b-container fluid class="pt-4 px-3">
      <h3 id="ptitle"><b>Barcode Scanner</b></h3>
      <hr style="border: 1px dashed gray;"/>
      <StreamBarcodeReader
          @decode="onDecode"
          @loaded="onLoaded"
      ></StreamBarcodeReader>
      <b-alert show variant="warning"><p>Jika mengalami kesulitan, coba lakukan scan barcode tanpa memasukkan bagian huruf ke dalam area scan</p></b-alert>

      <b-modal ref="loanModal" hide-footer hide-header centered>
        <h3 class="my-4">Yakin ingin meminjam buku {{ codeBuku }} {{ judulBuku }} ?</h3>
        <b-button class="mx-1" variant="primary" @click="pinjam()">Pinjam</b-button>
        <b-button class="mx-1" variant="secondary" @click="hideModal()">Batalkan</b-button>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapMutations } from "vuex";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  name:"Scanner",
  data() {
    return {
      codeBuku: null,
      judulBuku: null,
    }
  },
  methods: {
    ...mapActions(["LogOut"]),
    ...mapMutations(["setIsLoading"]),
    async onDecode(codeBuku) {
      this.setIsLoading();
      try {
        const scanned = new FormData();
        scanned.append("itemCode", codeBuku);
        scanned.append("operation", "s");
        await axios.post("/pinjamBuku.php", scanned).then((response) => {
          if (response.data["login_status"] == "false") {
            alert("Session anda sudah habis, silahkan login kembali");
            this.LogOut();
          } else if (response.data["msg"]) {
            alert(response.data["msg"]);
          } else {
            this.codeBuku = response.data["item_code"];
            this.judulBuku = response.data["title"];
            this.$refs.["loanModal"].show();
          }
        })
      } catch (error) {
        alert(error);
      }
      this.setIsLoading();
    },
    async pinjam() {
      this.setIsLoading();
      try {
        const scanned = new FormData();
        scanned.append("operation", "p");
        await axios.post("/pinjamBuku.php", scanned).then((response) => {
          if (response.data["login_status"] == "false") {
            alert("Session anda sudah habis, silahkan login kembali");
            this.LogOut();
          } else{
            alert(response.data["msg"]);
          }
        })
      } catch (error) {
        alert(error);
      }
      this.setIsLoading();
    },
    hideModal() {
      this.codeBuku = null;
      this.judulBuku = null;
      this.$refs["loanModal"].hide();
    },
  },
  components:{
    StreamBarcodeReader,
  },
}
</script>

<style>
#ptitle {
  color: white;
  text-shadow : 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
}
</style>
