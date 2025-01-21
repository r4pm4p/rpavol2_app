<script setup lang="ts">
import ComponentController from '@/application/controller/ComponentController'

const props = defineProps({
  controller: ComponentController,
  reference: Object,
  referenceName: String,
  placeholder: String,
})
</script>
<template>
  <input
    class="p-3 border rounded-md mt-1 mb-1"
    type="text"
    :placeholder="props.placeholder"
    v-model="props.reference![props.referenceName!]"
  />
  <p v-if="props.controller?.errorMessage" class="text-rose-600 text-sm">
    {{ props.controller?.errorMessage }}
  </p>
</template>
