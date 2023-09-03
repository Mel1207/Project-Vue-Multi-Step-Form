<template>
  <div class="step-description">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
  <form @submit.prevent="validateStep">
    <div v-for="item in addOnsList" :key="item.id" class="form-group-check">
      <label class="form-group-check-container" :for="item.addCode">
        <input type="checkbox" :id="item.addCode" :value="item" v-model="addOns">
        <span class="checkbox-icon"></span>
        <div class="adds-details">
          <div>
            <p>{{ item.addName }}</p>
            <span>{{ item.description }}</span>
          </div>
          <p v-if="!$store.state.newUser.formBill">{{ item.planPrice.monthly }}</p>
          <p v-if="$store.state.newUser.formBill">{{ item.planPrice.yearly }}</p>
        </div>
      </label>
    </div>

    <!-- <h3>{{ addOns }}</h3> -->
    <div class="form-buttons">
      <button @click="$store.state.currentStep--" class="btn-secondary">Go back</button>
      <button class="btn-primary">Next Step</button>
    </div>
    
  </form>
</template>

<script setup>
  import store from '@/store';
  import { computed } from 'vue';

  const addOnsList = [
    { 
      id: 1,
      addName: 'Online Service',
      addValue: 'ao1',
      addCode: 'onlineService',
      description: 'Access to multiplayer games',
      planPrice: {
        monthly: 1,
        yearly: 1 * (12 - 2)
      },
    },
    { 
      id: 2,
      addName: 'Larger Storage',
      addValue: 'ao2',
      addCode: 'largerStorage',
      description: 'Access to multiplayer games',
      planPrice: {
        monthly: 2,
        yearly: 2 * (12 - 2)
      },
    },
    { 
      id: 3,
      addName: 'Customizable Profile',
      addValue: 'ao3',
      addCode: 'customizableProfile',
      description: 'Access to multiplayer games',
      planPrice: {
        monthly: 2,
        yearly: 2 * (12 - 2)
      },
    }
  ]

  const addOns = computed({
    get() {
      return store.state.newUser.addOns
    },
    set(newAdds) {
      return store.commit('setAddOns', newAdds)
    }
  })

  const validateStep = () => {
    store.state.currentStep++
    store.state.isFinished = true
  }

</script>