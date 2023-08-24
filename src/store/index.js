import { createStore } from 'vuex'

export default createStore({
  state: {
    currentStep: 1,
    newUser: {
      formName: {
        name: '',
        isComplete: false
      },
      formEmail: {
        email: '',
        isComplete: false
      },
      formPhone: {
        phone: '',
        isComplete: false
      },
      formPlan: 'pro'
      // phone: ''
    }
  },
  getters: {
  },
  mutations: {
    setName(state, newName) {
      state.newUser.formName.name = newName
    },
    setEmail(state, newEmail) {
      state.newUser.formEmail.email = newEmail
    },
    setPhone(state, newPhone) {
      state.newUser.formPhone.phone = newPhone
    },
    setPlan(state, newPlan) {
      state.newUser.formPlan = newPlan
    }
  },
  actions: {
  },
  modules: {
  }
})
