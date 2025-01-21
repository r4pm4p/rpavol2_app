<script setup lang="ts">
import { requestStore } from '@/infrastructure/stores/requestStore'
import { ref } from 'vue'
import RegisterButton from '@/application/components/buttons/RegisterButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import Text from '@/application/components/inputs/Text.vue'
import type Response from '@/infrastructure/contracts/Response'
import User from '@/domain/entities/User'

const request = requestStore().request

const user = ref(new User())

const registerNewUser = async () => {
  await request
    .store('/register/user', user.value)
    .then((response: Response) => {
      alert('user is stored')
      console.log(response)
    })
    .catch(() => {})
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <Text :reference="user" reference-name="name" placeholder="Name....." />
    <Email :reference="user" reference-name="email" />
    <Password :reference="user" reference-name="password" doubleCheck />
    <RegisterButton @click="registerNewUser" />
    {{ user }}
  </div>
</template>
