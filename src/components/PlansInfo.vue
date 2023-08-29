<template>
  <div class="step-description">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing</p>
  </div>
  
  <form @submit.prevent="validateForm">
    <div class="form-group-select">
      <div class="form-group-radio" v-for="item in planList" :key="item.id">
        <input type="radio" :id="item.inputID" name="promo" class="radio" v-model="formPlan" :value="item">
        <label :for="item.inputID" class="radio-ui">
          <img :src="`../assets/${item.planImage}`" :alt="item.planName">
          <p>{{ item.planName }}</p>
          <span>${{item.planPrice}}/mo</span>
        </label>
      </div>
      <!-- <div class="form-group-radio">
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
      </div> -->
    </div>

    <div class="bill-plan">
      
      <label class="form-group-checkbox">
        <p>Montly</p>
        <input type="checkbox" class="check" v-model="formBill">
        <span class="checkbox"></span>
        <p>Annual</p>
      </label>
      
    </div>

    <div class="form-buttons"> 
      <button @click.self="goBack" type="button" class="btn-secondary">Go Back</button>
      <button class="btn-primary">Next Step</button>
    </div>
  </form>
  
  
</template>

<script setup>
import { computed } from 'vue';
import store from '@/store';

  const planList = [
    {
      id: 1,
      planName: 'Arcade',
      planPrice: 9,
      planImage: 'icon-arcade.svg',
      inputID: 'arcade'
    },
    {
      id: 2,
      planName: 'Advanced',
      planPrice: 12,
      planImage: 'icon-advanced.svg',
      inputID: 'advanced'
    },
    {
      id: 3,
      planName: 'Pro',
      planPrice: 15,
      planImage: 'icon-pro.svg',
      inputID: 'pro'
    }
  ]

  const formPlan = computed({
    get() {
      return store.state.newUser.formPlan
    },
    set(newPlan) {
      return store.commit('setPlan', newPlan)
    }
  })

  const formBill = computed({
    get() {
      return store.state.newUser.formBill
    },
    set(newFormBill) {
      return store.commit('setFormBill', newFormBill)
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