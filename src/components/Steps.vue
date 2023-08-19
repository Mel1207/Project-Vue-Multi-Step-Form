<template>
  <div class="steps">
    <div class="dot">{{ stepProp.stepNumber }}</div>
    <div class="dot-details">
      <span>{{ stepProp.stepTitle }}</span>
      <p>{{ stepProp.stepDetail }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    stepProp: Object
  })
</script>