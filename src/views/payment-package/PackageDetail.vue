<template>
  <el-form :model="form" ref="ruleFormRef" :rules="rules" label-position="top">
    <el-form-item label="Months" prop="months">
      <el-input-number
        size="medium"
        v-model="form.months"
        :min="1"
        placeholder="months"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Price" prop="price">
      <el-input-number
        size="medium"
        :min="1"
        v-model="form.price"
        placeholder="price"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="Unit" prop="unit">
      <el-select
        v-model="form.unit"
        placeholder="Select"
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
      <el-button type="warning" size="medium" @click="closeDialog"
        >Cancel</el-button
      >
      <el-button
        type="primary"
        size="medium"
        @click="submitForm('ruleFormRef')"
        :loading="loading"
        >Save</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import { Message } from "element-ui";
import { convertBase64 } from "@/utils/common";
import { createPackage, updatePackage } from "@/api/payment-package";
export default {
  props: ["formData", "id"],
  data() {
    return {
      optionTypes: [
        {
          label: "VNĐ",
          value: "VND",
        },
        {
          label: "USD",
          value: "USD",
        },
      ],
      loading: false,
      form: {
        months: null,
        price: null,
        unit: null,
      },
      rules: {
        months: [
          {
            required: true,
            message: "Please enter months",
            trigger: "blur",
          },
        ],
        price: [
          {
            required: true,
            message: "Please enter price",
            trigger: "blur",
          },
        ],
        unit: [
          {
            required: true,
            message: "Please choose unit",
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
        price: this.formData.price,
        unit: this.formData.unit,
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
            const res = await createPackage(form);
            try {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: res.message,
                type: "success",
                duration: 1000,
              });
            } catch (error) {
              this.loading = false;
            }
          } else {
            const res = await updatePackage(form, this.id);
            try {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: res.message,
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
