<template>
  <h1>Select your plan</h1>
  <p>You have the option of monthly or yearly billing</p>
  <br>
  
  <form @submit="validateForm">
    <div class="form-group-select">
      <label for="arcade" class="form-select">
        <div>test</div>
        <input type="radio" id="arcade" name="promo">
      </label>
      <label for="advanced" class="form-select">
        <div>advanced</div>
        <input type="radio" id="advanced" name="promo">
      </label>
      <label for="pro" class="form-select">
        <div>pro</div>
        <input type="radio" id="pro" name="promo">
      </label>
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