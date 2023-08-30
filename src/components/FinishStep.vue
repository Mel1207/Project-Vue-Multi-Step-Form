<template>
  <div class="step-description">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming</p>
  </div>

  <div class="summary-box">
    <div class="bill-state">
      <div>
        <p>{{ $store.state.newUser.formPlan.planName }} Monthly</p>
        <a role="button" @click="goStep2">Change</a>
      </div>
      <p> $ {{ $store.state.newUser.formPlan.planPrice }}/mo</p>
    </div>
    <div v-for="item in $store.state.newUser.addOns" :key="item.id" class="service-adds">
      <p class="service-name">{{ item.addName }}</p>
      <p class="service-price">+${{ item.price }}/mo</p>
    </div>
  </div>
  <div class="bill-total" v-if="!$store.state.newUser.formBill">
    <span>Total (Per Month)</span>
    <p>+${{ overall }}/mo</p>
  </div>

  <!-- <h3>{{ $store.state.newUser.addOns }}</h3> -->
  
  <div class="form-buttons">
    <button @click="handleReturn" class="btn-secondary">Go back</button>
    <button @click="handleMessage" class="btn-primary">Confirm</button>
  </div>
</template>

<script setup>
  import store from '@/store';

  let totalSum = store.state.newUser.addOns.map(item => item.price)
  const total = totalSum.reduce((a, b) => {
    return (a + b)
  }, 0)

  const overall = total + store.state.newUser.formPlan.planPrice

  // total + store.state.newUser.formPlan.planPrice
  // console.log(total)
  // console.log(overall)

  const goStep2 = () => {
    store.state.currentStep = 2
    store.state.isFinished = false
  }

  const handleReturn = () => {
    store.state.currentStep--
    store.state.isFinished = false
  }

  const handleMessage = () => {
    store.state.isConfirm = true
    store.state.isFinished = false
  }

</script>