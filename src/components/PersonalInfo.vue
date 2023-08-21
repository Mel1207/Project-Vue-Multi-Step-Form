<template>
  <h1>Personal Info</h1>
  <p>Please provide your name, email and phone number.</p>

  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name">
  </div>
  <div class="form-group">
    <label for="email">Email Address</label>
    <input type="email" id="email" v-model="email">
  </div>
  <div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="number" id="phone" v-model="phone">
  </div>

  <button @click="validateForm">Next</button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

  const store = useStore()
  const name = computed({
    get() {
      return store.state.newUser.name
    },
    set(newName) {
      return store.commit('setName', newName)
    }
  })

  const email = computed({
    get() {
      return store.state.newUser.email
    },
    set(newEmail) {
      return store.commit('setEmail', newEmail)
    }
  })

  const phone = computed({
    get() {
      return store.state.newUser.phone
    },
    set(newPhone) {
      return store.commit('setPhone', newPhone)
    }
  })

  


  const validateForm = () => {
    if(!name.value || !email.value || !phone.value) {
      return alert('no value')
    }
    

    store.state.currentStep++
    // console.log(store.state.newUser)

  }

</script>