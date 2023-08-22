<template>
  <div class="step-description">
    <h1>Personal Info</h1>
    <p>Please provide your name, email and phone number.</p>
  </div>

  <form @submit.prevent="validateForm()">
    <div class="form-group">
      <div>
        <label for="name">Name</label>
        <span v-if="$store.state.newUser.formName.isComplete">This field is required</span>
      </div>
      <input type="text" id="name" v-model="name" @keydown="isTyping" :class="$store.state.newUser.formName.isComplete ? 'required' : ''">
    </div>
    <div class="form-group">
      <div>
        <label for="email">Email</label>
        <span v-if="$store.state.newUser.formEmail.isComplete">This field is required</span>
      </div>
      <input type="email" id="email" v-model="email" @keydown="isTyping" :class="$store.state.newUser.formEmail.isComplete ? 'required' : ''">
    </div>
    <div class="form-group">
      <div>
        <label for="phone">Phone</label>
        <span v-if="$store.state.newUser.formPhone.isComplete">This field is required</span>
      </div>
      <input type="number" id="phone" v-model="phone" @keydown="isTyping" :class="$store.state.newUser.formPhone.isComplete ? 'required' : ''">
    </div>
    <button>Next</button>
  </form>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

  const store = useStore()

  const name = computed({
    get() {
      return store.state.newUser.formName.name
    },
    set(newName) {
      return store.commit('setName', newName)
    }
  })

  const email = computed({
    get() {
      return store.state.newUser.formEmail.email
    },
    set(newEmail) {
      return store.commit('setEmail', newEmail)
    }
  })

  const phone = computed({
    get() {
      return store.state.newUser.formPhone.phone
    },
    set(newPhone) {
      return store.commit('setPhone', newPhone)
    }
  })

  const isTyping = () => {
    store.state.newUser.formName.isComplete = false
    store.state.newUser.formEmail.isComplete = false
    store.state.newUser.formPhone.isComplete = false
  }

  const validateForm = () => {
    if(!name.value) {
      store.state.newUser.formName.isComplete = true
      return
    }

    if(!email.value) {
      store.state.newUser.formEmail.isComplete = true
      return
    }

    if(!phone.value) {
      store.state.newUser.formPhone.isComplete = true
      return
    }

    store.state.currentStep++

  }

</script>