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
      formPlan: 'arcade',
      formBill: false,
      addOns: [
        { 
          id: 1,
          addName: 'Online Service',
          addValue: 'ao1',
          addCode: 'onlineService',
          description: 'Access to multiplayer games',
          price: 1
        },
        { 
          id: 2,
          addName: 'Larger Storage',
          addValue: 'ao2',
          addCode: 'largerStorage',
          description: 'Access to multiplayer games',
          price: 2
        },
      ], 
      addOnsSum: []
    },
    isFinished: false,
    isConfirm: false
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
    },
    setFormBill(state, newFormBill) {
      state.newUser.formBill = newFormBill
    },
    setAddOns(state, setAdds) {
      state.newUser.addOns = setAdds
    }
  },
  actions: {
  },
  modules: {
  }
})
