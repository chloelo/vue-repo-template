<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <h2 class="my-4">表單驗證範例</h2>
  <form @submit="onSubmit" class="my-4">
    <div class="mb-2">
      <input
        v-model="email"
        v-bind="emailAttrs"
        name="email"
        type="email"
        placeholder="請輸入電子信箱"
      />
      <small class="block text-red-500">{{ errors.email }}</small>
    </div>

    <div class="mb-2">
      <input
        v-model="password"
        v-bind="passwordAttrs"
        autocomplete="on"
        name="password"
        type="password"
        placeholder="請輸入密碼"
      />
      <small class="block text-red-500">{{ errors.password }}</small>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>
