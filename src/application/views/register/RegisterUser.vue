<script setup lang="ts">
import { requestStore } from '@/infrastructure/stores/requestStore'
import { ref, type Ref } from 'vue'
import type RegisterUser from '@/domain/entities/RegisterUser'
import RegisterButton from '@/application/components/buttons/RegisterButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import Text from '@/application/components/inputs/Text.vue'
import type ApiResponse from '@/infrastructure/contracts/Response'

const request = requestStore().request

const registerNewUserPayload: Ref<RegisterUser> = ref({
  name: '',
  email: '',
  password: '',
})

const registerNewUser = async () => {
  await request
    .store('/register/user', registerNewUserPayload.value)
    .then((response: ApiResponse) => {
      alert('user is stored')
      console.log(response)
    })
    .catch(() => {})
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <Text :reference="registerNewUserPayload" reference-name="name" placeholder="Name....." />
    <Email :reference="registerNewUserPayload" reference-name="email" />
    <Password :reference="registerNewUserPayload" reference-name="password" />
    <RegisterButton @click="registerNewUser" />
    {{ registerNewUserPayload }}
    teste
  </div>
</template>
