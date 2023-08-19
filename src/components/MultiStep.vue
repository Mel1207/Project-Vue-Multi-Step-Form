<template>
  <div class="card">
    <div class="steps-container">
      <Steps v-for="step in steps" :key="step.stepNumber" :stepProp="step" :cStep="currentStep"/>
    </div>
    <div class="step-form-details">
      <h1>Personal Info</h1>
      <p>Please provide your name, email and phone number.</p>

      <h3>state = {{ currentStep }}</h3>

      <button @click="decStep">Prev</button>
      <button @click="incStep">Next</button>
      
    </div>
  </div>
</template>

<script setup>
import Steps from './Steps.vue'
import { ref } from 'vue';

const currentStep = ref(1)

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
  currentStep.value++
}

const decStep = () => {
  currentStep.value--
}

</script>