<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <section>
    <p class="text-slate-400 underline cursor-pointer" @click="() => router.push('/visitors/home')">
      Continuar como visitante
    </p>
  </section>
</template>
