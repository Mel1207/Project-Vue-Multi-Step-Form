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
          <img :src="item.planImage" :alt="item.planName">

          <div>
            <p>{{ item.planName }}</p>
            <span v-if="!$store.state.newUser.formBill">${{item.planPrice.monthly}}/mo</span>
            <span v-if="$store.state.newUser.formBill">${{ item.planPrice.yearly }}/yr</span>
            <span v-if="$store.state.newUser.formBill" class="span-promo">2 months free</span>
          </div>
        </label>
      </div>
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
import { computed, ref } from 'vue';
import store from '@/store';

  const planList = ref([
    {
      id: 1,
      planName: 'Arcade',
      planPrice: {
        monthly: 9,
        yearly: 9 * (12 - 2)
      },
      planImage: 'https://project-travel-buds-ui.vercel.app/img/icon-facebook.svg',
      inputID: 'arcade'
    },
    {
      id: 2,
      planName: 'Advanced',
      planPrice: {
        monthly: 12,
        yearly: 12 * (12 - 2)
      },
      planImage: 'https://project-travel-buds-ui.vercel.app/img/icon-facebook.svg',
      inputID: 'advanced'
    },
    {
      id: 3,
      planName: 'Pro',
      planPrice: {
        monthly: 12,
        yearly: 12 * (12 - 2)
      },
      planImage: 'https://project-travel-buds-ui.vercel.app/img/icon-facebook.svg',
      inputID: 'pro'
    }
  ])

  const formBill = computed({
    get() {
      return store.state.newUser.formBill
    },
    set(newFormBill) {
      return store.commit('setFormBill', newFormBill)
    }
  })


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