<script setup lang="ts">
import LoginButton from '@/application/components/buttons/LoginButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import type LoginButtonController from '@/application/controller/Buttons/LoginButtonController'
import type LoginRequest from '@/domain/entities/Login'
import type ApiResponse from '@/infrastructure/contracts/Response'
import { requestStore } from '@/infrastructure/stores/requestStore'
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
    .catch(() => {})
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
