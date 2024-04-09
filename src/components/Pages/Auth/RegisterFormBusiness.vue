<template>
  <div class="form p-32">
    <div v-show="formStep === 1">
      <div class="form__title mb-8">Thông tin doanh nghiệp</div>
      <div class="form__description mb-24">
        Tài khoản của bạn chưa đăng ký thông tin doanh nghiệp <br />
        Bạn vui lòng đăng ký tại đây
      </div>
      <el-form
        ref="formRef1"
        :model="form1"
        :rules="rules1"
        label-position="top"
      >
        <el-form-item class="mb-16 form__item">
          <e-avatar size="120px" v-model="form1.avatar" />
        </el-form-item>
        <el-form-item
          label="Tên doanh nghiệp"
          required
          class="mb-16 form__item"
          prop="name"
        >
          <el-input placeholder="Nhập tên doanh nghiệp" v-model="form1.name" />
        </el-form-item>
        <el-form-item
          label="Loại hình kinh doanh"
          required
          prop="businessType"
          class="mb-16 form__item"
        >
          <e-select
            :clearable="false"
            :items="listBusinessType"
            item-value="value"
            item-label="description"
            class="w-full"
            v-model="form1.businessType"
            placeholder="Doanh nghiệp"
          />
        </el-form-item>
        <template v-if="form1.businessType === 1">
          <el-form-item
            label="Mã số thuế"
            required
            prop="taxcode"
            class="mb-16 form__item"
          >
            <el-input v-model="form1.taxcode" placeholder="Nhập mã số thuế" />
          </el-form-item>
        </template>
        <template v-if="form1.businessType === 2">
          <el-form-item
            label="CMND/CCCD"
            required
            prop="idCard"
            class="mb-16 form__item"
          >
            <e-input-phone-number
              v-model="form1.idCard"
              placeholder="Nhập CMND/CCCD"
            />
          </el-form-item>
          <el-form-item label="Ngày cấp" class="mb-16 form__item">
            <e-date-picker
              v-model:from="form1.idCardDeliveryDate"
              placeholder="Chọn ngày cấp"
              class="w-full"
            />
          </el-form-item>
          <el-form-item label="Nơi cấp" class="mb-16 form__item">
            <el-input
              v-model="form1.idCardDeliveryPlace"
              placeholder="Nhập nơi cấp"
            />
          </el-form-item>
        </template>
        <el-form-item
          label="Số điện thoại liên hệ"
          prop="phone"
          class="mb-16 form__item"
        >
          <e-input-phone-number
            placeholder="Nhập số điện thoại"
            v-model="form1.phone"
          />
        </el-form-item>
        <el-form-item label="Email" class="form__item mb-16" prop="email">
          <el-input v-model="form1.email" placeholder="Nhập email" />
        </el-form-item>
        <el-form-item
          label="Tải lên giấy tờ của doanh nghiệp"
          class="form__item mb-24"
        >
          <e-upload-button
            title="Tải lên"
            :format="EFileType.document"
            @change="onChangeAttachments"
          />
          <div v-if="form1?.attachments?.length" class="form__files">
            <div
              v-for="(file, index) in form1?.attachments"
              :key="index"
              class="form__files__item d-flex align-items-start justify-center"
            >
              <i class="icon-document-1 mr-8 mt-10"></i>
              <span class="mr-10">{{ file }}</span>
              <img
                src="@/assets/svgs/remove.svg"
                alt=""
                class="mt-8"
                @click="onRemoveAttachments(index)"
              />
            </div>
          </div>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        class="w-full form__btn"
        @click="onNextStep(formRef1)"
        >Tiếp theo</el-button
      >
    </div>
    <div v-show="formStep === 2">
      <div class="form__back mb-16">
        <i class="icon-Arrow-Left" @click="onBackStep1" />
      </div>
      <div class="form__title mb-8">Cập nhập địa chỉ</div>
      <div class="form__description mb-24">
        Tài khoản của bạn chưa đăng ký thông tin doanh nghiệp. Bạn vui lòng đăng
        ký tại đây
      </div>
      <el-form
        ref="formRef2"
        :model="form2"
        :rules="rules2"
        label-position="top"
      >
        <el-form-item label="Quốc gia" required class="mb-16">
          <div
            class="form__country d-flex justify-start align-items-center w-full"
          >
            Việt Nam
          </div>
        </el-form-item>
        <el-form-item
          label="Tỉnh/Thành phố"
          required
          prop="cityId"
          class="mb-16 form__item"
        >
          <e-select-location
            placeholder="Vui lòng chọn"
            :items="useLocation.listProvinces.value"
            v-model="form2.cityId"
            @change="onChangeCityId"
          />
        </el-form-item>
        <el-form-item
          label="Quận/Huyện"
          required
          prop="districtId"
          class="mb-16 form__item"
        >
          <e-select-location
            placeholder="Vui lòng chọn"
            :items="useLocation.listDistricts.value"
            v-model="form2.districtId"
          />
        </el-form-item>
        <el-form-item
          label="Địa chỉ"
          required
          prop="address"
          class="mb-24 form__item"
        >
          <el-input v-model="form2.address" placeholder="Nhập địa chỉ" />
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        class="w-full form__btn"
        @click="onSubmit(formRef2)"
        :loading="loading"
        >Hoàn tất</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { IRegisterBusinessPayload } from '@/types/auth'
import { ruleEmail, rulePhoneNumber, ruleRequired } from '@/utils'
import type { FormInstance } from 'element-plus'
import UserService from '@/services/UserService'
import { EFileType, S001 } from '@/constants'
import { ElNotification } from 'element-plus'
import { UseDmsRouter } from '@/composables'
import {
  EAvatar,
  EUploadButton,
  ESelect,
  ESelectLocation,
  EDatePicker,
  EInputPhoneNumber,
} from '@/components/Elements'
import BaseService from '@/services/Base/BaseService'
import type { IUnitItem } from '@/types/product'
import UseLocation from '@/composables/useLocation'
import type { IUploadResponse } from '@/types/upload'

const formRef1 = ref<FormInstance>()
const formRef2 = ref<FormInstance>()
const formStep = ref<number>(1)
const listBusinessType = ref<IUnitItem[]>([])
const useLocation = UseLocation()
const form1 = ref<IRegisterBusinessPayload>({
  avatar: '',
  name: '',
  businessType: 1,
  taxcode: '',
  phone: '',
  email: '',
  idCard: '',
  idCardDeliveryDate: '',
  idCardDeliveryPlace: '',
  attachments: [],
})
const form2 = ref<IRegisterBusinessPayload>({
  countryId: null,
  cityId: null,
  districtId: null,
  address: '',
})
type PropType = {
  phone: string
  icheckId: number | null
}
const props = withDefaults(defineProps<PropType>(), {
  phone: '',
  icheckId: null,
})
const loading = ref<boolean>(false)
const router = UseDmsRouter()
const rules1 = ref({
  name: [
    ruleRequired({
      required: true,
      trigger: 'change',
      message: 'Tên doanh nghiệp là bắt buộc',
    }),
  ],
  businessType: [
    ruleRequired({
      required: true,
      trigger: 'change',
      message: 'Loại hình kinh doanh là bắt buộc',
    }),
  ],
  taxcode: [
    ruleRequired({
      required: true,
      trigger: 'change',
      message: 'Mã số thuế là bắt buộc',
    }),
  ],
  idCard: [
    ruleRequired({
      required: true,
      trigger: 'change',
      message: 'CMND/CCCD là bắt buộc',
    }),
  ],
  phone: [
    rulePhoneNumber({
      required: false,
      trigger: 'change',
    }),
  ],
  email: [
    ruleEmail({
      required: false,
      trigger: 'change',
    }),
  ],
})
const rules2 = ref({
  cityId: [
    ruleRequired({
      required: true,
      message: 'Tỉnh thành là bắt buộc',
      trigger: 'change',
    }),
  ],
  districtId: [
    ruleRequired({
      required: true,
      message: 'Quận huyện là bắt buộc',
      trigger: 'change',
    }),
  ],
  address: [
    ruleRequired({
      required: true,
      message: 'Địa chỉ là bắt buộc',
      trigger: 'change',
    }),
  ],
})
const onChangeCityId = (id: number) => {
  useLocation.changeProvinceId(id)
  form2.value.districtId = null
}
const onBackStep1 = () => {
  formStep.value = 1
}
const onChangeAttachments = (e: IUploadResponse) => {
  form1.value?.attachments?.push(e.url)
}
const onRemoveAttachments = (index: number) => {
  form1.value?.attachments?.splice(index, 1)
}
const onNextStep = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      formStep.value = 2
    }
  })
}
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      try {
        const payload = {
          ...form1.value,
          ...form2.value,
          icheckPhone: props.phone,
          icheckId: props.icheckId,
          countryId: 142,
        }
        const { code } = await UserService.createBusinessAccount(payload)
        if (code === S001) {
          ElNotification({
            message: 'Đăng kí tài khoản thành công',
            type: 'success',
          })
          await router.pushByPath('/auth/login')
        }
      } catch (e) {
        console.log(e)
      } finally {
        loading.value = false
      }
    }
  })
}
const fetchListBusinessType = async () => {
  try {
    const { data } = await BaseService.getUnits('ACCOUNT')
    listBusinessType.value =
      data.BUSINESS_TYPE?.map((item) => ({
        ...item,
        value: Number(item.value),
      })) || []
  } catch (e) {
    console.log(e)
  }
}
onMounted(async () => {
  await Promise.all([fetchListBusinessType(), useLocation.getListProvinces()])
})
</script>

<style scoped lang="scss">
.form {
  color: var(--text-primary);
  &__back {
    font-size: 50px;
    i {
      cursor: pointer;
    }
  }
  &__title {
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
  }
  &__description {
    color: var(--text-secondary);
    line-height: 140%;
    font-size: 14px;
  }
  &__btn {
    height: 56px;
    font-size: 16px;
  }
  &__country {
    height: 40px;
    border: 1px solid var(--line-primary);
    border-radius: 8px;
    padding: 14px 12px;
  }
  &__files {
    margin-top: 16px;
    &__item {
      width: fit-content;
      background-color: var(--background-secondary);
      padding: 8px;
      border-radius: 8px;
      margin-bottom: 8px;
      word-break: break-word;
      line-height: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
