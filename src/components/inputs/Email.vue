<script setup lang="ts">
const props = defineProps({
  reference: Object,
  referenceName: String,
})
</script>
<template>
  <input
    class="p-3 border rounded-md mt-1 mb-1"
    type="text"
    placeholder="Email....."
    v-model="props.reference![props.referenceName!]"
  />
</template>
