<template>
  <div class="card">
    <div class="steps-container">
      <Steps v-for="step in steps" :key="step.stepNumber" :stepProp="step" :cStep="currentStep"/>
    </div>
    <div class="step-form-details">
      <PersonalInfo v-if="currentStep == 1"/>
      <PlansInfo v-if="currentStep == 2"/>
      <AddOnsInfo v-if="currentStep == 3"/>
      <FinishStep v-if="currentStep == 4"/>


      <h3>state = {{ currentStep }}</h3>
      <button @click="decStep">Prev</button>
      <button @click="incStep">Next</button>
    </div>
  </div>
</template>

<script setup>
import Steps from './Steps.vue'
import PersonalInfo from './PersonalInfo.vue'
import PlansInfo from './PlansInfo.vue'
import AddOnsInfo from './AddOnsInfo.vue'
import FinishStep from './FinishStep.vue'
import { ref } from 'vue'

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
  { 
    stepNumber: 4, 
    stepTitle: 'Step 4',
    stepDetail: 'Summary'
  }
])

const incStep = () => {
  currentStep.value++
}

const decStep = () => {
  currentStep.value--
}

</script>