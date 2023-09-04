<template>
  <div class="steps-mobile">
    <Step v-for="step in steps" :key="step.id" :stepProp="step"/>
  </div>
  <MultiStep />
</template>

<script setup>
import Step from './components/Steps.vue'
import MultiStep from './components/MultiStep.vue'

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
