<script setup lang="ts">
import type LoginButtonController from '@/application/controller/Buttons/LoginButtonController'
import type { PropType } from 'vue'

const props = defineProps({
  controller: Object as PropType<LoginButtonController>,
})
</script>
<template>
  <button class="bg-emerald-300 p-3 rounded-md hover:bg-emerald-400">
    {{ props.controller?.isLoading ? 'loading_icon.png' : 'Registrar' }}
  </button>
</template>
