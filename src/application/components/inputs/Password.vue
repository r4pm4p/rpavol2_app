<script setup lang="ts">
import PasswordController from '@/application/controller/PasswordController'

const props = defineProps({
  controller: PasswordController,
  reference: Object,
  referenceName: String,
})
</script>
<template>
  <input
    class="p-3 border rounded-md mt-1 mb-1"
    type="password"
    placeholder="Secret Pass....."
    v-model="props.reference![props.referenceName!]"
  />
</template>
