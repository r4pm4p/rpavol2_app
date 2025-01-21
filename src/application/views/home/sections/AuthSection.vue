<script setup lang="ts">
import LoginGoogleButton from '@/application/components/buttons/LoginGoogleButton.vue'
import RouterButton from '@/application/components/buttons/RouterButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <section class="flex flex-col gap-1 mb-1">
    <RouterButton :text="'Já colei antes'" :route="'login'" />
    <RouterButton :text="'É minha primera vez'" :route="'register/user'" />

    <LoginGoogleButton />
  </section>
</template>
