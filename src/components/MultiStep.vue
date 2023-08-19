<template>
  <div class="card">
    <div class="steps-container">
      <Steps v-for="step in steps" :key="step.stepNumber" :stepProp="step"/>
    </div>
    <div class="step-form-details">
      <h1>Personal Info + {{ someNumber }}</h1>
      <p>Please provide your name, email and phone number.</p>

      <button @click="incStep">Next</button>
      <button @click="decStep">Prev</button>
    </div>
  </div>
</template>

<script setup>
import Steps from './Steps.vue'
import { ref } from 'vue';

const someNumber = ref(1)

const steps = ref([
  { 
    stepNumber: 1, 
    stepTitle: 'Step 1',
    stepDetail: 'Your Info'
  },
  { 
    stepNumber: 2, 
    stepTitle: 'Step 2',
    stepDetail: 'Your Prize'
  },
  { 
    stepNumber: 3, 
    stepTitle: 'Step 3',
    stepDetail: 'Your Info'
  },
])

const incStep = () => {
  someNumber.value++
}

const decStep = () => {
  someNumber.value--
}

</script>