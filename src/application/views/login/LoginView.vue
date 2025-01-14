<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import LoginButton from '@/application/components/buttons/LoginButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import ButtonController from '@/application/controller/ButtonController'
import Login from '@/domain/entities/Login'
import EmailController from '@/application/controller/EmailController'
import PasswordController from '@/application/controller/PasswordController'
import { requestStore } from '@/infrastructure/stores/requestStore'

const ruleError = ref('')
watch(
  () => requestStore().ruleError,
  () => {
    ruleError.value = requestStore().ruleError
  },
)

/**
 * @description Controladores de componentes, sendo os controladores que define as mudanças visuais
 *  dos componentes da aplicação
 */
const buttonController = reactive(new ButtonController())
const emailController = reactive(new EmailController())
const passwordController = reactive(new PasswordController())

/**
 * @description Classes de dominio, sendo as classes que de fado possuem regras e funcionalidades
 */
const login = reactive(new Login())
</script>
<template>
  <div class="flex flex-col gap-1">
    <Email :controller="emailController" :reference="login" reference-name="email" />
    <Password :controller="passwordController" :reference="login" reference-name="password" />
    <hr />
    <LoginButton :controller="buttonController" @click="login.attemptToLogin" />
    <p>{{ login }}</p>
    <p>{{ emailController }}</p>
    <p>{{ passwordController }}</p>
    <p>{{ buttonController }}</p>
    <p>{{ ruleError }}</p>
  </div>
</template>
