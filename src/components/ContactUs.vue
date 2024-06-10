<template>
  <div>
    <div class="text-center" style="font-size: 24px">Customer Service</div>
    <el-form
      :model="form"
      ref="ruleFormRef"
      :rules="rules"
      label-position="top"
    >
      <el-form-item label="Email" prop="email">
        <el-input
          size="large"
          placeholder="Email"
          v-model="form.email"
        ></el-input>
      </el-form-item>
      <el-form-item label="Contact" prop="contact">
        <el-input
          size="large"
          placeholder="Phone Number"
          v-model="form.contact"
        ></el-input>
      </el-form-item>
      <el-form-item label="Issue" prop="issue">
        <el-input size="large" v-model="form.issue"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="description">
        <el-input
          size="large"
          type="textarea"
          rows="5"
          v-model="form.description"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="warning"
          class="col-12 btn-bg"
          size="large"
          :loading="loading"
          @click="submitForm('ruleFormRef')"
          >Submit</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createContact } from "@/api/contact";
import { Message } from "element-ui";
export default {
  props: [],
  data() {
    return {
      loading: false,
      form: {},
      rules: {
        email: [
          {
            required: true,
            message: this.$t("Please enter your email"),
            trigger: "blur",
          },
        ],
        contact: [
          {
            required: true,
            message: this.$t("Please enter your contact phone"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  methods: {
    async submitForm(formEl) {
      await this.$refs[formEl].validate((valid, fields) => {
        if (valid) {
          console.log("submit!", this.form);
          this.loading = true;
          createContact(this.form)
            .then(() => {
              this.loading = false;
              Message({
                message:
                  "Contact created successfully. Admin will contact you later!",
                type: "success",
                duration: 1000,
              });
              this.$emit("closeContact");
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!", fields);
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
