<script setup lang="ts">
import { requestStore } from '@/infrastructure/stores/requestStore'
import LogoRapmap from '@/application/components/misc/LogoRapmap.vue'
import CTOSecion from './sections/CTOSecion.vue'
import AuthSection from './sections/AuthSection.vue'
import VisitorsSection from './sections/VisitorsSection.vue'

const request = requestStore().request
</script>

<template>
  <main class="w-full h-screen flex flex-col gap-1 items-center justify-around">
    <LogoRapmap />
    <CTOSecion />
    <AuthSection />
    <hr />
    <VisitorsSection />
  </main>
</template>
