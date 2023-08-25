<template>
  <div class="step-description">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
  <form @submit.prevent="validateStep">
    <div class="form-group-check">
      <input type="checkbox">
    </div>
    <div class="form-group-check">
      <input type="checkbox">
    </div>
    <div class="form-group-check">
      <input type="checkbox">
    </div>

    <button @click="$store.state.currentStep--">Go back</button>
    <button>Next</button>
  </form>

  
</template>

<script setup>
  import store from '@/store';

  const validateStep = () => {
    console.log('validated')
    store.state.currentStep++
  }

</script>