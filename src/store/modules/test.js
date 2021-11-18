import axios from "axios"

const state = {
  user: null,
  books: null,
}

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateBooks: (state) => state.books,
  StateUser: (state) => state.user,
}

const actions = {
  async Login({})
}
