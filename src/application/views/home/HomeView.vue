<script setup lang="ts">
import { requestStore } from '@/infrastructure/stores/requestStore'

const request = requestStore().request
</script>

<template>
  <p>token: {{ request.getToken() }}</p>
</template>
