<template>
  <div class="step-description">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
  </div>
  <form @submit.prevent="validateStep">
    <div v-for="item in addOnsList" :key="item.id" class="form-group-check">
      <label class="form-group-check-container" :for="item.addCode">
        <input type="checkbox" :id="item.addCode" :value="item.addValue" v-model="addOns">
        <span class="checkbox-icon"></span>
        <div class="adds-details">
          <div>
            <p>{{ item.addName }}</p>
            <span>{{ item.description }}</span>
          </div>
          <p>{{ item.price }}</p>
        </div>
      </label>
    </div>

    <button @click="$store.state.currentStep--">Go back</button>
    <button>Next</button>
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
      price: '+$1/mo'
    },
    { 
      id: 2,
      addName: 'Larger Storage',
      addValue: 'ao2',
      addCode: 'largerStorage',
      description: 'Access to multiplayer games',
      price: '+$1/mo'
    },
    { 
      id: 3,
      addName: 'Customizable Profile',
      addValue: 'ao3',
      addCode: 'customizableProfile',
      description: 'Access to multiplayer games',
      price: '+$1/mo'
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
    console.log('validated')
    store.state.currentStep++
  }

</script>