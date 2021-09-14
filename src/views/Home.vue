<template>
  <div class="home">
    <b-container fluid class="pt-3">
      <h3 id="ptitle"><b>Daftar Buku Dipinjam</b></h3>
      <hr style="border: 1px dashed gray;"/>
      <b-card title="Bahasa Indonesia untuk Kelas XII" class="shadow my-3">
        <b-card-text>
          Publisher: Kementrian Pendidikan dan Kebudayaan Republik Indonesia
        </b-card-text>
        <b-card-text>Tanggal Kembali: 22 Juni 2021</b-card-text>
        <b-alert show variant="danger">Telat 2 hari</b-alert>
      </b-card>
      <b-card title="Bahasa Indonesia untuk Kelas XII" class="shadow my-3">
        <b-card-text>
          Publisher: Kementrian Pendidikan dan Kebudayaan Republik Indonesia
        </b-card-text>
        <b-card-text>Tanggal Kembali: 22 Juni 2021</b-card-text>
        <b-alert show variant="danger">Telat 2 hari</b-alert>
      </b-card>
      <b-card title="Bahasa Indonesia untuk Kelas XII" class="shadow my-3">
        <b-card-text>
          Publisher: Kementrian Pendidikan dan Kebudayaan Republik Indonesia
        </b-card-text>
        <b-card-text>Tanggal Kembali: 22 Juni 2021</b-card-text>
        <b-alert show variant="danger">Telat 2 hari</b-alert>
      </b-card>
      <b-card title="Bahasa Indonesia untuk Kelas XII" class="shadow my-3">
        <b-card-text>
          Publisher: Kementrian Pendidikan dan Kebudayaan Republik Indonesia
        </b-card-text>
        <b-card-text>Tanggal Kembali: 22 Juni 2021</b-card-text>
        <b-alert show variant="danger">Telat 2 hari</b-alert>
      </b-card>
      <br /><br />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
};
</script>

<style>
#ptitle {
  color: white;
  text-shadow : 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
}
</style>
