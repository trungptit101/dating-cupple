<template>
  <div class="flex justify-center">
    <el-form
      :model="form"
      ref="ruleFormRef"
      :rules="rules"
      label-position="top"
      style="width: 400px; max-width: 100%"
    >
      <el-form-item :label="$t('Discount')" prop="discount">
        <el-input-number
          style="width: 100%"
          size="medium"
          v-model="form.discount"
          :min="1"
          :max="100"
          :placeholder="$t('Discount')"
        ></el-input-number>
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
      <el-form-item :label="$t('Start')" prop="start">
        <el-date-picker
          v-model="form.start"
          style="width: 100%"
          type="date"
          :placeholder="$t('Start')"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item :label="$t('End')" prop="end">
        <el-date-picker
          style="width: 100%"
          v-model="form.end"
          type="date"
          :placeholder="$t('End')"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
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
export default {
  props: ["formData", "id"],
  data() {
    return {
      loading: false,
      pickerOptions: {
        disabledDate(time) {
          const today = new Date().toLocaleDateString();
          const todayValue = new Date(today).valueOf();
          return time.getTime() < todayValue;
        },
      },
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
      form: {
        discount: 1,
        gender: "male",
        start: null,
        end: null,
      },
      rules: {
        discount: [
          {
            required: true,
            message: this.$t("Please enter discount"),
            trigger: "blur",
          },
        ],
        gender: [
          {
            required: true,
            message: this.$t("Please enter gender"),
            trigger: "blur",
          },
        ],
        start: [
          {
            required: true,
            message: this.$t("Please enter start discount"),
            trigger: "blur",
          },
        ],
        end: [
          {
            required: true,
            message: this.$t("Please enter end discount"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    if (this.id) {
      this.form = {
        discount: this.formData.discount,
        gender: this.formData.gender,
        start: this.formData.start,
        end: this.formData.end,
      };
    }
  },
  methods: {
    async submitForm(formEl) {
      await this.$refs[formEl].validate(async (valid, fields) => {
        if (valid) {
          if (
            new Date(this.form.start).valueOf() >
            new Date(this.form.end).valueOf()
          ) {
            Message({
              message: this.$t("An error occurred"),
              type: "error",
              duration: 1000,
            });
            return;
          }
          this.loading = true;
          if (!this.id) {
            const data = {
              ...this.form,
              start: new Date(this.form.start).toLocaleDateString(),
              end: new Date(this.form.end).toLocaleDateString(),
            };
            createStrategy(data).then((res) => {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Create discount strategy successfully!"),
                type: "success",
                duration: 1000,
              });
            });
          } else {
            const data = {
              ...this.form,
              start: new Date(this.form.start).toLocaleDateString(),
              end: new Date(this.form.end).toLocaleDateString(),
            };
            updateStrategy(data, this.id).then((res) => {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Update discount strategy successfully!"),
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
