<template>
  <h1>Select your plan</h1>
  <p>You have the option of monthly or yearly billing</p>
  <br>
  
  <form @submit="validateForm">
    <div class="form-group-select">
      <div class="form-select">
        <label for="arcade">test</label>
        <input type="radio" id="arcade" name="promo">
      </div>
      <div class="form-select">
        <label for="advanced">advanced</label>
        <input type="radio" id="advanced" name="promo">
      </div>
      <div class="form-select">
        <label for="pro">pro</label>
        <input type="radio" id="pro" name="promo">
      </div>
    </div>

    <div class="form-group checkbox">
      <input type="checkbox">
    </div>
  
    <button>Next</button>
    <button @click.self="goBack" type="button">Go Back</button>
  </form>
  
  
</template>

<script setup>
import store from '@/store';

  const validateForm = () => {
    console.log('validated')
    store.state.currentStep++
  }

  const goBack = () => {
    store.state.currentStep--
  }

</script>