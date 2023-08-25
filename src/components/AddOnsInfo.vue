<template>
  <div class="step-description">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
  <form @submit.prevent="validateStep">
    <div class="form-group-check">
      <input type="checkbox" id="onlineService" value="ao1" v-model="addOns">
      <label for="onlineService">Online Service</label>
    </div>
    <div class="form-group-check">
      <input type="checkbox" id="largeStorage" value="ao2" v-model="addOns">
      <label for="largeStorage">Large Storage</label>
    </div>
    <div class="form-group-check">
      <input type="checkbox" id="customizableProfile" value="ao3" v-model="addOns">
      <label for="customizableProfile">Customizable Profile</label>
    </div>

    <button @click="$store.state.currentStep--">Go back</button>
    <button>Next</button>
  </form>

  <h3>{{ addOns }}</h3>
  
</template>

<script setup>
  import store from '@/store';
import { computed } from 'vue';

  const addOns = computed({
    get() {
      return store.state.newUser.addOns
    },
    set(newAdds) {
      return store.commit('setAddOns', newAdds)
    }
  })

  const validateStep = () => {
    console.log('validated')
    store.state.currentStep++
  }

</script>