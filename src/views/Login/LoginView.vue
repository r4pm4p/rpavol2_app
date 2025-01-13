<script setup lang="ts">
import LoginButton from '@/components/buttons/LoginButton.vue'
import Email from '@/components/inputs/Email.vue'
import Password from '@/components/inputs/Password.vue'
import type LoginButtonController from '@/controller/Buttons/LoginButtonController'
import type LoginRequest from '@/interfaces/Login'
import type ApiResponse from '@/interfaces/Response'
import { requestStore } from '@/stores/requestStore'
import { ref, type Ref } from 'vue'

const request = requestStore().request

const buttonController: Ref<LoginButtonController> = ref({
  isDisabled: false,
  isLoading: false,
})

const loginPayload: Ref<LoginRequest> = ref({
  email: '',
  password: '',
})

const attemptToLogin = async () => {
  await request
    .store('/login', loginPayload.value)
    .then((response: ApiResponse) => {
      //@ts-expect-error
      request.setToken(response.content.token)
    })
    .catch((err) => {})
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <Email :reference="loginPayload" reference-name="email" />
    <Password :reference="loginPayload" reference-name="password" />
    <hr />
    <LoginButton :controller="buttonController" @click="attemptToLogin" />
    {{ loginPayload }}
  </div>
</template>
