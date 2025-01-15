<script setup lang="ts">
import { reactive, ref, watch, type Ref } from 'vue'
import { errorStore } from '@/infrastructure/stores/errorsStore'
import LoginButton from '@/application/components/buttons/LoginButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import ButtonController from '@/application/controller/ButtonController'
import Login from '@/domain/entities/Login'
import ComponentController from '@/application/controller/ComponentController'
import { requestStore } from '@/infrastructure/stores/requestStore'
import { useRouter } from 'vue-router'

const router = useRouter()
/**
 * @description Watcher global para que seja pego via PiniaStore as mensagens de erro, e partir disso
 *  realizar as atualizações visuais no componente desejado
 */
watch(
  () => errorStore().getErrors,
  () => renderErrorMessages(errorStore().getErrors),
)

const renderErrorMessages = (errors: any) => {
  emailController.errorMessage = errors.email
  passwordController.errorMessage = errors.password
}

const actionCallback = () => {
  buttonController.isDisabled = true
  buttonController.isLoading = true

  login
    .attemptToLogin()
    .then(() => {
      buttonController.isLoading = false
      buttonController.isDisabled = false
    })
    .finally(() => router.push('/home'))
}

/**
 * @description Controladores de componentes, sendo os controladores que define as mudanças visuais
 *  dos componentes da aplicação
 */
const buttonController = reactive(new ButtonController())
const emailController = reactive(new ComponentController())
const passwordController = reactive(new ComponentController())

/**
 * @description Classes de dominio, sendo as classes que de fado possuem regras e funcionalidades
 */
const login = reactive(new Login())
</script>
<template>
  <div class="w-full h-full flex flex-col gap-1" @keyup.enter="login.attemptToLogin">
    <Email :controller="emailController" :reference="login" reference-name="email" />
    <Password :controller="passwordController" :reference="login" reference-name="password" />
    <hr />
    <LoginButton :controller="buttonController" @click="actionCallback" />
    <p>{{ login }}</p>
    <p>{{ buttonController }}</p>
    <p>{{ requestStore().request.getToken() }}</p>
  </div>
</template>
