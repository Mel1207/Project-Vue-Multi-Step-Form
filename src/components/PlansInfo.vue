<template>
  <h1>Select your plan</h1>
  <p>You have the option of monthly or yearly billing</p>
  <br>
  
  <form @submit.prevent="validateForm">
    <div class="form-group-select">
      <div class="form-group-radio">
        <input type="radio" id="arcade" name="promo" class="radio" v-model="formPlan" value="arcade">
        <label for="arcade" class="radio-ui">
          <img src="../assets/icon-arcade.svg" alt="arcade">
          <p>arcade</p>
          <span>$9/mo</span>
        </label>
      </div>
      <div class="form-group-radio">
        <input type="radio" id="advanced" name="promo" class="radio" v-model="formPlan" value="advanced">
        <label for="advanced" class="radio-ui">
          <img src="../assets/icon-advanced.svg" alt="advanced">
          <p>advanced</p>
          <span>$12/mo</span>
        </label>
      </div>
      <div class="form-group-radio">
        <input type="radio" id="pro" name="promo" class="radio" v-model="formPlan" value="pro">
        <label for="pro" class="radio-ui">
          <img src="../assets/icon-pro.svg" alt="pro">
          <p>pro</p>
          <span>$15/mo</span>
        </label>
      </div>
    </div>

    <div class="bill-plan">
      
      <label class="form-group-checkbox">
        <p>Montly</p>
        <input type="checkbox" class="check">
        <span class="checkbox"></span>
        <p>Annual</p>
      </label>
      
    </div>

    <h1>{{ formPlan }}</h1>
  
    <button>Next</button>
    <button @click.self="goBack" type="button">Go Back</button>
  </form>
  
  
</template>

<script setup>
import { computed } from 'vue';
import store from '@/store';

  const formPlan = computed({
    get() {
      return store.state.newUser.formPlan
    },
    set(newPlan) {
      return store.commit('setPlan', newPlan)
    }
  })

  const validateForm = () => {
    console.log('validated')
    store.state.currentStep++
  }

  const goBack = () => {
    store.state.currentStep--
  }

</script>