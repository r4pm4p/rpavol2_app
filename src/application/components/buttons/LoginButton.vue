<script setup lang="ts">
import ButtonController from '@/application/controller/ButtonController'
import { type PropType, type Ref } from 'vue'

const props = defineProps({
  controller: ButtonController,
})
</script>
<template>
  <button class="bg-emerald-300 p-3 rounded-md hover:bg-emerald-400">
    {{ props.controller?.isLoading ? 'loading_icon.png' : 'Entrar' }}
  </button>
</template>
