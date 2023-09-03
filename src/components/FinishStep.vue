<template>
  <div class="step-description">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming</p>
  </div>

  <div class="summary-box">
    <div class="bill-state">
      <div>
        <p class="bill">{{ $store.state.newUser.formPlan.planName }}
          <span v-if="!$store.state.newUser.formBill">(Monthly)</span>
          <span v-if="$store.state.newUser.formBill">(Yearly)</span>
        </p>
        <a role="button" @click="goStep2">Change</a>
      </div>
      <p v-if="!$store.state.newUser.formBill" class="bill-price"> ${{ $store.state.newUser.formPlan.planPrice.monthly }}/mo</p>
      <p v-if="$store.state.newUser.formBill" class="bill-price"> ${{ $store.state.newUser.formPlan.planPrice.yearly }}/yr</p>
    </div>
    <div v-for="item in $store.state.newUser.addOns" :key="item.id" class="service-adds">
      <p class="service-name">{{ item.addName }}</p>
      <p v-if="!$store.state.newUser.formBill" class="service-price">+${{ item.planPrice.monthly }}/mo</p>
      <p v-if="$store.state.newUser.formBill" class="service-price">+${{ item.planPrice.yearly }}/yr</p>
    </div>
  </div>
  <div class="bill-total">
    <span v-if="!$store.state.newUser.formBill">Total (Per Month)</span>
    <span v-if="$store.state.newUser.formBill">Total (Per Year)</span>
    <p v-if="!$store.state.newUser.formBill">+${{ overallMonth }}/mo</p>
    <p v-if="$store.state.newUser.formBill">+${{ overallYear }}/yr</p>
  </div>
  
  <div class="form-buttons">
    <button @click="handleReturn" class="btn-secondary">Go back</button>
    <button @click="handleMessage" class="btn btn-primary-light">Confirm</button>
  </div>
</template>

<script setup>
  import store from '@/store';

  let totalSumMonth = store.state.newUser.addOns.map(item => item.planPrice.monthly)
  let totalSumYear = store.state.newUser.addOns.map(item => item.planPrice.yearly)

  const totalMonth = totalSumMonth.reduce((a, b) => {
    return (a + b)
  }, 0)
  const totalYear = totalSumYear.reduce((a, b) => {
    return (a + b)
  })

  const overallMonth = totalMonth + store.state.newUser.formPlan.planPrice.monthly
  const overallYear = totalYear + store.state.newUser.formPlan.planPrice.yearly

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
    console.log(store.state.newUser)
  }

</script>