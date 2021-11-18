<template>
  <div class="home">
    <b-container fluid class="pt-3">
      <h3 id="ptitle"><b>Daftar Buku Dipinjam</b></h3>
      <hr style="border: 1px dashed gray;"/>
      <b-row v-if="books == null" class="text-center" style="margin: 340px 5% 0" align-v="center">
        <b-col><b-alert variant="danger" show><h5><b>No Books Loaned</b></h5></b-alert></b-col>
      </b-row>
      <b-card v-if="books == ''" title="Tidak ada buku yang sedang dipinjam" class="shadow my-3">
      </b-card>
      <b-card v-else v-for="(book, index) in books" :key="index" :title="book.title" class="shadow my-3">
        <b-card-text>
          Publisher: Kementrian Pendidikan dan Kebudayaan Republik Indonesia {{ book.title }}
        </b-card-text>
        <b-card-text>Tanggal Pinjam: {{ book.loan_date }}</b-card-text>
        <b-card-text>Tanggal Kembali: {{ book.due_date }}</b-card-text>
        <b-alert v-if="overdue(book.due_date) > 0" show variant="danger">Telat {{ overdue(book.due_date) }}  hari</b-alert>
      </b-card>
      <br /><br />
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  methods: {
    overdue(due) {
      const today = new Date();
      due = new Date(due);
      const oneday = 1000 * 60 * 60 * 24;
      return (Math.round((today - due) / oneday));
    }
  },
  computed: {
    ...mapState(["books"]),
  },
  beforeMount() {
    this.$store.dispatch("DaftarPinjam");
  }
};
</script>

<style>
#ptitle {
  color: white;
  text-shadow : 2px 2px 2px black, -2px -2px 2px black, 2px -2px 2px black, -2px 2px 2px black;
}
</style>
