<template>
  <div class="card">
    <Steps v-for="step in steps" :key="step.stepNumber"/>
    <div class="step-form-details">
      <h1>Personal Info</h1>
      <p>Please provide your name, email and phone number.</p>
    </div>
  </div>
</template>

<script setup>
import Steps from './Steps.vue'
import { ref } from 'vue';

const steps = ref([
  { stepNumber: 1, },
  { stepTitle: 'Step 1'},
  { stepDetail: 'Your Info'}
])

</script>