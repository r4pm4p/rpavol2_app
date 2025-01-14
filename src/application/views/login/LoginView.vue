<script setup lang="ts">
import { reactive } from 'vue'
import LoginButton from '@/application/components/buttons/LoginButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import ButtonController from '@/application/controller/ButtonController'
import Login from '@/domain/entities/Login'

/**
 * @description Controladores de componentes, sendo os controladores que define as mudanças visuais
 *  dos componentes da aplicação
 */
const buttonController = reactive(new ButtonController())

/**
 * @description Classes de dominio, sendo as classes que de fado possuem regras e funcionalidades
 */
const login = reactive(new Login())
</script>
<template>
  <div class="flex flex-col gap-1">
    <Email :reference="login" reference-name="email" />
    <Password :reference="login" reference-name="password" />
    <hr />
    <LoginButton :controller="buttonController" @click="login.attemptToLogin" />
    {{ login }}
  </div>
</template>
