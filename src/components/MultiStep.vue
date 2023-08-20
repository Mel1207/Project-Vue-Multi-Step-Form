<template>
  <h3>state = {{ $store.state.currentStep }}</h3>  
  <div class="card">
    <div class="steps-container">
      <Steps v-for="step in steps" :key="step.stepNumber" :stepProp="step"/>
    </div>
    <div class="step-form-details">
      <PersonalInfo v-if="$store.state.currentStep == 1"/>
      <PlansInfo v-if="$store.state.currentStep == 2"/>
      <AddOnsInfo v-if="$store.state.currentStep == 3"/>
      <FinishStep v-if="currentStep == 4 && !closeSummary"/>
      <Message v-if="messageIsConfirmed"/>
      


      <!-- <div v-if="!closeSummary">
        <button v-if="currentStep >= 2" @click="decStep">Go Back</button>
        <button v-if="currentStep < 4 && currentStep != null" @click="incStep">Next</button>
        <button v-if="currentStep == 4" @click="openMessage">Confirm</button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import Steps from './Steps.vue'
import PersonalInfo from './PersonalInfo.vue'
import PlansInfo from './PlansInfo.vue'
import AddOnsInfo from './AddOnsInfo.vue'
import FinishStep from './FinishStep.vue'
import Message from './Message.vue'
import { ref } from 'vue'

const currentStep = ref(1)
const messageIsConfirmed = ref(false)
const closeSummary = ref(false)
const openMessage = () => {
  messageIsConfirmed.value = true
  closeSummary.value = true

  if(currentStep.value == 4) {
    return
  }
}

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