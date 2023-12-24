<template>
  <!-- <h3>state = {{ $store.state.currentStep }}</h3>   -->
  <div class="card">
    <div class="steps-container">
      <Steps v-for="step in steps" :key="step.stepNumber" :stepProp="step"/>
    </div>
    <div class="step-form-details">
      <PersonalInfo v-if="$store.state.currentStep == 1"/>
      <PlansInfo v-if="$store.state.currentStep == 2"/>
      <AddOnsInfo v-if="$store.state.currentStep == 3"/>
      <FinishStep v-if="$store.state.isFinished"/>
      <Message v-if="$store.state.isConfirm"/>
    </div>
  </div>
</template>

<script setup>
import Steps from './Steps/Steps.vue'
import PersonalInfo from './PersonalInfo.vue'
import PlansInfo from './PlansInfo.vue'
import AddOnsInfo from './AddOnsInfo.vue'
import FinishStep from './FinishStep.vue'
import Message from './Message.vue'

const steps = [
  { 
    stepNumber: 1, 
    stepTitle: 'Step 1',
    stepDetail: 'Your Info'
  },
  { 
    stepNumber: 2, 
    stepTitle: 'Step 2',
    stepDetail: 'Select Plan'
  },
  { 
    stepNumber: 3, 
    stepTitle: 'Step 3',
    stepDetail: 'Add-ons'
  },
  { 
    stepNumber: 4, 
    stepTitle: 'Step 4',
    stepDetail: 'Summary'
  }
]

</script>