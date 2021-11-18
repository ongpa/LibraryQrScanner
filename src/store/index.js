import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

// Load Vuex
Vue.use(Vuex);
// Create store
export default new Vuex.Store({
  state: {
    loginStatus: false,
    userId: null,
    userName: null,
    expireDate: null,
    isExpired: null,
    books: null,
  },
  actions: {
    async LogIn({ commit }, user) {
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
      await axios.get("/daftarpinjam.php").then((response) => {
        if (response.data["login_status"] == "false") {
          dispatch("LogOut");
        } else {
          commit("setBooks", response.data);
        }
      })
    },
  },
  mutations: {
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
