import { createStore } from 'vuex'

export default createStore({
  state: {
    currentStep: 1,
    newUser: {
      name: '',
      email: '',
      phone: ''
    }
  },
  getters: {
  },
  mutations: {
    setName(state, newName) {
      state.newUser.name = newName
    },
    setEmail(state, newEmail) {
      state.newUser.email = newEmail
    },
    setPhone(state, newPhone) {
      state.newUser.phone = newPhone
    },
  },
  actions: {
  },
  modules: {
  }
})
