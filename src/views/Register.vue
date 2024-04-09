<template>
  <div class="register">
    <keep-alive>
      <register-form />
    </keep-alive>
    <!--    <auth-otp-->
    <!--      v-if="step === 2"-->
    <!--      :count="6"-->
    <!--      :phone="phoneIcheck"-->
    <!--      :token="tokenIcheck"-->
    <!--      @back="onBackStep1"-->
    <!--      @submit="onSubmitStep2"-->
    <!--    />-->
    <!--    <register-form-business-->
    <!--      v-if="step === 3"-->
    <!--      :phone="phoneIcheck"-->
    <!--      :icheck-id="idIcheck"-->
    <!--    />-->
  </div>
</template>

<script lang="ts" setup>
// import RegisterFormIcheck from '@/components/Pages/Auth/RegisterFormIcheck.vue'
// import { ref } from 'vue'
import RegisterForm from '@/components/Pages/Auth/RegisterForm.vue'
// import AuthOtp from '@/components/Pages/Auth/AuthOtp.vue'
// import RegisterFormBusiness from '@/components/Pages/Auth/RegisterFormBusiness.vue'

// const step = ref<number>(1)
// const phoneIcheck = ref<string | null>(null)
// const tokenIcheck = ref<string | null>(null)
// const idIcheck = ref<number | null>(null)
// const onMoveStep2 = ({ phone, token }: { phone: string; token: string }) => {
//   if (phone && token) {
//     phoneIcheck.value = phone
//     tokenIcheck.value = token
//     step.value = 2
//   }
// }
// const onBackStep1 = () => {
//   step.value = 1
// }
// const onSubmitStep2 = (id: number) => {
//   if (id) {
//     idIcheck.value = id
//     step.value = 3
//   }
// }
</script>

<style scoped lang="scss"></style>
