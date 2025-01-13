<script setup lang="ts">
import { requestStore } from '@/stores/requestStore'
import { ref, type Ref } from 'vue'
import type RegisterUser from '@/interfaces/RegisterUser'
import RegisterButton from '@/components/buttons/RegisterButton.vue'
import Email from '@/components/inputs/Email.vue'
import Password from '@/components/inputs/Password.vue'
import Text from '@/components/inputs/Text.vue'
import type ApiResponse from '@/interfaces/Response'

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
  </div>
</template>
