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
import { ref } from 'vue';
import { useStore } from 'vuex';

  const store = useStore()
  const name = ref('')
  const email = ref('')
  const phone = ref('')

  const validateForm = () => {
    if(!name.value || !email.value || !phone.value) {
      return alert('please fill all fields')
    }

    store.state.currentStep++

  }

</script>