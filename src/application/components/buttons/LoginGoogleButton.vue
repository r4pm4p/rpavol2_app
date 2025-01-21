<script setup lang="ts">
/**
 * @description Para que funcione esta funcionalidade é preciso implemntar o login google via front.
 * Em caso de sucesso enviar a notificação para o back, que por sua vez precisa ter uma rota somente pra gerar token
 * Pode ser por exemplo como /login/google ou /goole/login, conferir o padrão utilizado na hora de impolementar
 */
import GoogleIcon from '../icons/GoogleIcon.vue'
</script>
<template>
  <button class="rounded border shadow-sm" @click="() => null">
    <GoogleIcon class="mx-auto h-3/4" />
  </button>
</template>
