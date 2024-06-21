<template>
  <div class="flex justify-center">
    <el-form
      :model="form"
      ref="ruleFormRef"
      :rules="rules"
      label-position="top"
      style="width: 400px; max-width: 100%"
    >
      <el-form-item :label="$t('Country')" prop="country">
        <el-select
          v-model="form.country"
          :placeholder="$t('Select')"
          style="width: 100%"
          size="medium"
        >
          <el-option
            v-for="item in optionTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('Account name')" prop="account_name">
        <el-input size="large" v-model="form.account_name"></el-input>
      </el-form-item>
      <el-form-item :label="$t('Account number')" prop="account_number">
        <el-input size="large" v-model="form.account_number"></el-input>
      </el-form-item>
      <el-form-item :label="$t('Bank')" prop="bank">
        <el-input size="large" v-model="form.bank"></el-input>
      </el-form-item>

      <el-form-item label="QRCode" prop="qrcode">
        <input
          type="file"
          ref="picker"
          rounded
          id="fileQrcode"
          class="__uploader"
          outlined
          label="Label"
          counter
          max-files="1"
          accept=".png,.jpg"
          multiple
          style="display: none"
          @change="updateFileQrcode"
        />

        <div
          class="text-center"
          style="padding: 0 10px; cursor: pointer; max-height: 300px"
          v-if="form.qrcode"
          @click="handlePickQrcode"
        >
          <img
            :src="form.qrcode"
            class="image-profile"
            style="max-width: 100%; max-height: 300px; object-fit: cover"
          />
        </div>
        <div
          class="text-center"
          style="cursor: pointer"
          @click="handlePickQrcode"
          v-else
        >
          <i class="el-icon-picture" style="font-size: 22px" />
          <div style="font-size: 12px; line-height: 15px">
            {{ $t("Upload Qrcode") }}
          </div>
        </div>
      </el-form-item>
      <el-form-item class="text-right">
        <el-button type="warning" size="medium" @click="closeDialog">{{
          $t("Cancel")
        }}</el-button>
        <el-button
          type="primary"
          size="medium"
          @click="submitForm('ruleFormRef')"
          :loading="loading"
          >{{ $t("Save") }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Message } from "element-ui";
import { createStrategy, updateStrategy } from "@/api/discount-strategy";
import { convertBase64 } from "@/utils/common";
import { create, update } from "@/api/internet-banking";
export default {
  props: ["formData", "id"],
  data() {
    return {
      loading: false,
      optionTypes: [
        {
          label: "Singapor",
          value: "en",
        },
        {
          label: "Viet Nam",
          value: "vi",
        },
      ],
      form: {
        country: "en",
        qrcode: "",
        account_name: "",
        account_number: "",
        bank: "",
      },
      rules: {
        country: [
          {
            required: true,
            message: this.$t("Please enter country"),
            trigger: "blur",
          },
        ],
        account_name: [
          {
            required: true,
            message: this.$t("Please enter account name"),
            trigger: "blur",
          },
        ],
        account_number: [
          {
            required: true,
            message: this.$t("Please enter account number"),
            trigger: "blur",
          },
        ],
        bank: [
          {
            required: true,
            message: this.$t("Please enter bank"),
            trigger: "blur",
          },
        ],
        qrcode: [
          {
            required: true,
            message: this.$t("Please enter qrcode"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    if (this.id) {
      this.form = {
        country: this.formData.country,
        qrcode: this.formData.qrcode,
        account_name: this.formData.account_name,
        account_number: this.formData.account_number,
        bank: this.formData.bank,
      };
    }
  },
  methods: {
    async updateFileQrcode() {
      const fileName = "fileQrcode";
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.form.qrcode = base64;
    },
    handlePickQrcode() {
      const fileName = "fileQrcode";
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async submitForm(formEl) {
      await this.$refs[formEl].validate(async (valid, fields) => {
        if (valid) {
          this.loading = true;
          if (!this.id) {
            create(this.form).then((res) => {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Create internet banking successfully!"),
                type: "success",
                duration: 1000,
              });
            });
          } else {
            update(this.form, this.id).then((res) => {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Update internet banking successfully!"),
                type: "success",
                duration: 1000,
              });
            });
          }
        }
      });
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
