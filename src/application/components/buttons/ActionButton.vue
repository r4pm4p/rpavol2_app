<script setup lang="ts">
import ButtonController from '@/application/controller/ButtonController'
import { type PropType, type Ref } from 'vue'
import LoadingIcon from '../icons/LoadingIcon.vue'

const props = defineProps({
  controller: ButtonController,
  text: String,
})
</script>
<template>
  <button class="flex flex-row justify-center bg-emerald-300 p-3 rounded-md hover:bg-emerald-400">
    <LoadingIcon v-show="props.controller?.isLoading" />
    {{ props.controller?.isLoading ? 'loading' : props.text }}
  </button>
</template>
