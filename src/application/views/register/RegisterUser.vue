<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import ActionButton from '@/application/components/buttons/ActionButton.vue'
import Email from '@/application/components/inputs/Email.vue'
import Password from '@/application/components/inputs/Password.vue'
import Text from '@/application/components/inputs/Text.vue'
import User from '@/domain/entities/User'
import ButtonController from '@/application/controller/ButtonController'
import { errorStore } from '@/infrastructure/stores/errorsStore'
import ComponentController from '@/application/controller/ComponentController'

/**
 * @description Watcher global para que seja pego via PiniaStore as mensagens de erro, e partir disso
 *  realizar as atualizações visuais no componente desejado
 */
watch(
  () => errorStore().getErrors,
  () => renderErrorMessages(errorStore().getErrors),
)
const renderErrorMessages = (errors: any) => {
  console.log(errors)
  if (errors.api) {
    return alert('Api respondeu com erro')
  }

  nameController.errorMessage = errors.name
  emailController.errorMessage = errors.email
  passwordController.errorMessage = errors.password
}

const buttonController = reactive(new ButtonController())
const nameController = reactive(new ComponentController())
const emailController = reactive(new ComponentController())
const passwordController = reactive(new ComponentController())

const user = reactive(new User())

const actionCallback = async () => {
  buttonController.isDisabled = true
  buttonController.isLoading = true

  await user.registerNewUser().then((res) => {
    buttonController.isLoading = false
    buttonController.isDisabled = false
  })
}
</script>
<template>
  <div class="flex flex-col gap-1">
    <Text
      :controller="nameController"
      :reference="user"
      reference-name="name"
      placeholder="Name....."
    />
    <Email :controller="emailController" :reference="user" reference-name="email" />
    <Password
      :controller="passwordController"
      :reference="user"
      reference-name="password"
      doubleCheck
    />
    <ActionButton :controller="buttonController" :text="'Registrar'" @click="actionCallback" />
    {{ user }}
  </div>
</template>
