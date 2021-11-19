import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

// Load Vuex
Vue.use(Vuex);
// Create store
export default new Vuex.Store({
  state: {
    isLoading: false,
    loginStatus: false,
    userId: null,
    userName: null,
    expireDate: null,
    isExpired: null,
    books: null,
  },
  actions: {
    async LogIn({ commit }, user) {
      commit("setIsLoading");
      try {
        var result = await axios.post("/login.php", user).then((response) => {
          if (response.data["login_status"] == "true") {
            commit("setLoginStatus", true);
            commit("setUserId", response.data["member_id"]);
            commit("setUserName", response.data["member_name"]);
            commit("setExpireDate", response.data["expire_date"]);
            commit("setIsExpired", response.data["is_expired"]);
            return false;
          }else{
            return true;
          }
        });
      } catch(error) {
        alert(error);
      }
      commit("setIsLoading");
      return result;
    },
    async LogOut({ commit }) {
      commit("setUserId", null);
      commit("setUserName", null);
      commit("setBooks", null);
      commit("setLoginStatus", false);
      axios.post("/logout.php");
    },
    async DaftarPinjam({ commit, dispatch }) {
      commit("setIsLoading");
      try {
        await axios.get("/daftarpinjam.php").then((response) => {
          if (response.data["login_status"] == "false") {
            alert("Session anda sudah habis, silahkan login kembali");
            dispatch("LogOut");
          } else {
            commit("setBooks", response.data);
          }
        });
      } catch (error) {
        alert(error);
      }
      commit("setIsLoading");
    },
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setLoginStatus(state, status) {
      state.loginStatus = status;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setExpireDate(state, expireDate) {
      state.expireDate = expireDate;
    },
    setBooks(state, books) {
      state.books = books;
    },
    setIsExpired(state, isExpired) {
      state.isExpired = isExpired;
    }
  },
  plugins: [createPersistedState()],
});
