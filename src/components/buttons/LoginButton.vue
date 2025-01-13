<script setup lang="ts">
import type ButtonController from '@/controller/Buttons/LoginButtonController'
import type { PropType } from 'vue'

const props = defineProps({
  controller: Object as PropType<ButtonController>,
})
</script>
<template>
  <button class="bg-emerald-300 p-3 rounded-md hover:bg-emerald-400">
    {{ props.controller?.isLoading ? 'loading_icon.png' : 'Entrar' }}
  </button>
</template>
