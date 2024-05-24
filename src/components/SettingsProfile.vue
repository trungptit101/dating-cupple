<template>
  <div>
    <div class="user-profile">
      <div class="box-center text-center" style="position: relative">
        <input
          type="file"
          ref="picker"
          rounded
          id="fileUploadAvatarProfile"
          class="__uploader"
          outlined
          label="Label"
          counter
          max-files="1"
          accept=".png,.jpg"
          style="display: none"
          @change="updateFile"
        />
        <i class="el-icon-upload icon-upload" @click="handlePick" />
        <Avatar :user="form" :url="form.avatar" :size="200" />
      </div>
      <div class="box-center">
        <div class="user-email text-center">{{ user.email }}</div>
      </div>
    </div>
    <div class="user-bio">
      <el-form
        :model="form"
        ref="ruleFormRef"
        :rules="rules"
        label-position="top"
      >
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="Name" prop="name">
              <el-input
                size="large"
                placeholder="Name"
                v-model="form.name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Age" prop="age">
              <el-select
                v-model="form.age"
                placeholder="Select"
                style="width: 100%"
                size="large"
              >
                <el-option
                  v-for="item in optionsAge"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="Phone" prop="phone">
              <el-input
                size="large"
                placeholder="Phone"
                v-model="form.phone"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"> </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="Favorite" prop="favorite">
              <el-input
                size="large"
                placeholder="Favorite"
                v-model="form.favorite"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Weight" prop="weight">
              <el-input
                size="large"
                placeholder="Weight"
                v-model="form.weight"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="Height" prop="height">
              <el-input
                size="large"
                placeholder="Height"
                v-model="form.height"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Skin Color" prop="skin_color">
              <el-input
                size="large"
                placeholder="Skin Color"
                v-model="form.skin_color"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="Blood Group" prop="blood_group">
              <el-input
                size="large"
                placeholder="Blood Group"
                v-model="form.blood_group"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Eye Color" prop="eye_color">
              <el-input
                size="large"
                placeholder="Eye Color"
                v-model="form.eye_color"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

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
    </div>
  </div>
</template>
<script>
import store from "@/store";
import Avatar from "@/components/Avatar.vue";
import { convertBase64 } from "@/utils/common";
import { Message } from "element-ui";
export default {
  components: { Avatar },
  data() {
    return {
      user: JSON.parse(JSON.stringify(store.getters.user)),
      form: JSON.parse(JSON.stringify(store.getters.user)),
      loading: false,
      optionsAge: [],
      rules: {
        name: [
          {
            required: true,
            message: "Please enter your name",
            trigger: "blur",
          },
        ],
        age: [
          {
            required: true,
            message: "Please enter your age",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Please enter your phone number",
            trigger: "blur",
          },
        ],
      },
    };
  },
  mounted() {
    for (let index = 1; index < 100; index++) {
      if (index > 17) this.optionsAge.push({ value: index, lable: index });
    }
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    handlePick() {
      const fileName = "fileUploadAvatarProfile";
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async updateFile() {
      const fileName = "fileUploadAvatarProfile";
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.form.avatar = base64;
    },
    async submitForm(formEl) {
      await this.$refs[formEl].validate((valid, fields) => {
        if (valid) {
          console.log("submit!", this.form);
          this.loading = true;

          this.$store
            .dispatch("user/updateUserDetail", this.form)
            .then((res) => {
              Message({
                message: "Update profile successfully!",
                type: "success",
                duration: 1000,
              });
              this.closeDialog();
              this.loading = false;
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
.user-profile {
  .user-email {
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
  }
  padding-bottom: 20px;
  border-bottom: 1px solid #dfe6ec;
  .icon-upload {
    position: absolute;
    right: calc(50% - 110px);
    bottom: 0px;
    font-size: 30px;
    z-index: 9;
    cursor: pointer;
  }
}
.user-bio {
  margin-top: 10px;
}
</style>
