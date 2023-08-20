<template>
  <h1>Select your plan</h1>
  <p>You have the option of monthly or yearly billing</p>
  <button @click="$store.state.currentStep--">Go Back</button>
  <button @click="$store.state.currentStep++">Next</button>
</template>

<script setup>

</script>