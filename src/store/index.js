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
      formPlan: {
        id: 1,
        planName: 'Arcade',
        planPrice: {
          monthly: 9,
          yearly: 9 * (12 - 2)
        },
        planImage: '../assets/icon-arcade.svg',
        inputID: 'arcade'
      },
      formBill: false,
      addOns: [
        { 
          id: 1,
          addName: 'Online Service',
          addValue: 'ao1',
          addCode: 'onlineService',
          description: 'Access to multiplayer games',
          planPrice: {
            monthly: 1,
            yearly: 1 * (12 - 2)
          },
        },
        { 
          id: 2,
          addName: 'Larger Storage',
          addValue: 'ao2',
          addCode: 'largerStorage',
          description: 'Access to multiplayer games',
          planPrice: {
            monthly: 2,
            yearly: 2 * (12 - 2)
          },
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
