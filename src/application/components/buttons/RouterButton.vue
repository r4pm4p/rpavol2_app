<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  route: String,
  text: String,
})

const router = useRouter()
</script>
<template>
  <button
    class="bg-emerald-200 p-2 rounded shadow-sm"
    @click="() => router.push(`/${props.route}`)"
  >
    {{ props.text }}
  </button>
</template>
