<template>
  <div class="step-description">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming</p>
  </div>
  <button @click="$store.state.currentStep--" class="btn-secondary">Go back</button>
  <button @click="handleMessage" class="btn-primary">Confirm</button>
</template>

<script setup>
  import store from '@/store';

  const handleMessage = () => {
    store.state.isConfirm = true
    store.state.isFinished = false
  }

</script>