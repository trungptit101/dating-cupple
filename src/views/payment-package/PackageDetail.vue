<template>
  <div class="flex justify-center">
    <el-form
      :model="form"
      ref="ruleFormRef"
      :rules="rules"
      label-position="top"
      style="width: 400px; max-width: 100%"
    >
      <el-form-item :label="$t('Months')" prop="months">
        <el-input
          size="medium"
          v-model="form.months"
          :min="1"
          placeholder="months"
          @input.native="isNumber"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('Price VNĐ')" prop="price_vnpay">
        <el-input
          size="medium"
          :min="1"
          v-model="form.price_vnpay"
          :placeholder="$t('Price VNĐ')"
          @input.native="isNumber"
          ><template slot="append">VNĐ</template></el-input
        >
      </el-form-item>
      <el-form-item :label="$t('Price USD')" prop="price_paypal">
        <el-input
          size="medium"
          :min="1"
          v-model="form.price_paypal"
          :placeholder="$t('Price USD')"
          @input.native="isNumber"
          ><template slot="append">USD</template></el-input
        >
      </el-form-item>
      <el-form-item :label="$t('Gender')" prop="gender">
        <el-select
          v-model="form.gender"
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
import { convertBase64, isNumber } from "@/utils/common";
import { createPackage, updatePackage } from "@/api/payment-package";
export default {
  props: ["formData", "id"],
  data() {
    return {
      isNumber,
      optionTypes: [
        {
          label: this.$t("male"),
          value: "male",
        },
        {
          label: this.$t("female"),
          value: "female",
        },
      ],
      loading: false,
      form: {
        months: null,
        gender: "male",
        price_paypal: 0,
        price_vnpay: 0,
      },
      rules: {
        months: [
          {
            required: true,
            message: this.$t("Please enter months"),
            trigger: "blur",
          },
        ],
        price_paypal: [
          {
            required: true,
            message: this.$t("Please enter price USD"),
            trigger: "blur",
          },
        ],
        price_vnpay: [
          {
            required: true,
            message: this.$t("Please enter price VNĐ"),
            trigger: "blur",
          },
        ],
        gender: [
          {
            required: true,
            message: this.$t("Please choose gender"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    if (this.id) {
      this.form = {
        months: this.formData.months,
        price_paypal: this.formData.price_paypal,
        price_vnpay: this.formData.price_vnpay,
        gender: this.formData.gender,
      };
    }
  },
  methods: {
    async submitForm(formEl) {
      await this.$refs[formEl].validate(async (valid, fields) => {
        if (valid) {
          const form = { ...this.form };
          this.loading = true;
          if (!this.id) {
            await createPackage(form);
            try {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Create package successfully!"),
                type: "success",
                duration: 1000,
              });
            } catch (error) {
              this.loading = false;
            }
          } else {
            await updatePackage(form, this.id);
            try {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Update package successfully!"),
                type: "success",
                duration: 1000,
              });
            } catch (error) {
              this.loading = false;
            }
          }
        }
      });
    },
    addOptions() {
      this.optionsList.push({
        text: "",
        image: "",
      });
    },
    handlePick(index) {
      const fileName = `fileUpload_${index}`;
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async updateFile(index) {
      const fileName = `fileUpload_${index}`;
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.optionsList[index].image = base64;
    },
    handlePickBackground() {
      const fileName = "fileUploadBackground";
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async updateFileBackground() {
      const fileName = "fileUploadBackground";
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.form.background = base64;
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>
<style lang="scss" scoped>
.option-item {
}
.add-option {
  text-align: center;
  padding: 10px 0 0 0;
}
</style>
