<script setup lang="ts">
import LogoRapmap from '@/application/components/misc/LogoRapmap.vue'
import CTOSecion from './sections/CTOSecion.vue'
import AuthSection from './sections/AuthSection.vue'
import VisitorsSection from './sections/VisitorsSection.vue'
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
