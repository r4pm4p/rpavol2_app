<script setup lang="ts">
import ComponentController from '@/application/controller/ComponentController'
import { computed, ref } from 'vue'

const props = defineProps({
  controller: ComponentController,
  reference: Object,
  referenceName: String,
  doubleCheck: Boolean,
})

const doubleCheckPassword = ref('')
const isPasswordEquals = computed(() => {
  if (props.reference![props.referenceName!] == doubleCheckPassword.value) {
    return true
  } else {
    return false
  }
})
</script>
<template>
  <input
    class="p-3 border rounded-md mt-1 mb-1"
    type="password"
    placeholder="Secret Password....."
    v-model="props.reference![props.referenceName!]"
  />
  <p v-if="props.controller?.errorMessage" class="text-rose-600 text-sm">
    {{ props.controller?.errorMessage }}
  </p>
  <input
    class="p-3 border rounded-md mt-1 mb-1"
    type="password"
    placeholder="Repeat Password....."
    v-model="doubleCheckPassword"
  />
  <p v-if="!isPasswordEquals" class="text-rose-600 text-sm">Passwords won't match</p>
</template>
