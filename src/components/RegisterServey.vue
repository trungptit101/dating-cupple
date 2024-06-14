<template>
  <el-form
    class="register"
    :model="form"
    ref="ruleFormRef"
    :rules="rules"
    label-position="top"
  >
    <el-form-item :label="$t('Avatar')" prop="avatar">
      <input
        type="file"
        ref="picker"
        rounded
        id="fileAvatar"
        class="__uploader"
        outlined
        label="Label"
        counter
        max-files="1"
        accept=".png,.jpg"
        multiple
        style="display: none"
        @change="updateFileAvatar"
      />

      <div
        class="text-center"
        style="padding: 0 10px; cursor: pointer; max-height: 300px"
        v-if="form.avatar"
        @click="handlePickAvatar"
      >
        <img
          :src="form.avatar"
          class="image-profile"
          style="max-width: 300px; max-height: 250px"
        />
      </div>
      <div
        class="text-center"
        style="cursor: pointer"
        @click="handlePickAvatar"
        v-else
      >
        <i class="el-icon-picture" style="font-size: 22px" />
        <div style="font-size: 12px; line-height: 15px">
          {{ $t("Upload Avatar") }}
        </div>
      </div>
    </el-form-item>
    <el-form-item :label="$t('Name')" prop="name">
      <el-input size="large" v-model="form.name"></el-input>
    </el-form-item>
    <el-row>
      <el-col :span="8">
        <el-form-item :label="$t(`I'm a`)" prop="gender">
          <div class="gender-group flex">
            <input type="hidden" name="seek" value="male" />
            <div class="gender-checkbox gender-male flex-none">
              <label for="radio1">
                <input
                  class="hide touched"
                  type="radio"
                  name="gender"
                  value="male"
                  id="radio1"
                  v-model="form.gender"
                  data-validate="requireone"
                  data-validate-legend="true"
                  data-gtm-form-interact-field-id="2"
                />
                <div
                  class="flex items-center justify-center block bg-white m0 border-color border-top border-bottom border-left rounded-left"
                >
                  <svg>
                    <use
                      xlink:href="@/assets/images/icons-person.svg?v=20240407103928&amp;#icon-male"
                    ></use>
                  </svg>
                  <span class="hide">Male</span>
                </div>
              </label>
            </div>

            <div class="gender-checkbox gender-female flex-none">
              <label for="radio2">
                <input
                  class="hide touched"
                  type="radio"
                  name="gender"
                  value="female"
                  id="radio2"
                  v-model="form.gender"
                  data-validate="requireone"
                  data-validate-legend="true"
                  data-gtm-form-interact-field-id="0"
                />
                <div
                  class="flex items-center justify-center block bg-white m0 border-color border-top border-bottom border-right rounded-right"
                >
                  <svg>
                    <use
                      xlink:href="@/assets/images/icons-person.svg?v=20240407103928&amp;#icon-female"
                    ></use>
                  </svg>
                  <span class="hide">Female</span>
                </div>
              </label>
            </div>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :label="$t(`I'm looking for`)">
          <div class="gender-group flex">
            <div class="gender-checkbox gender-male flex-none">
              <label for="form-registration-gender_w-male">
                <input
                  class="hide touched"
                  type="radio"
                  name="gender_w"
                  v-model="form.lookingGender"
                  id="form-registration-gender_w-male"
                  value="male"
                  data-gtm-form-interact-field-id="3"
                />
                <div
                  class="flex items-center justify-center block bg-white m0 border-color border-top border-bottom border-left rounded-left"
                >
                  <svg>
                    <use
                      xlink:href="@/assets/images/icons-person.svg?v=20240407103928&amp;#icon-male"
                    ></use>
                  </svg>
                  <span class="hide">Male</span>
                </div>
              </label>
            </div>

            <div class="gender-checkbox gender-female flex-none">
              <label for="form-registration-gender_w-female">
                <input
                  class="hide touched"
                  type="radio"
                  name="gender_w"
                  v-model="form.lookingGender"
                  id="form-registration-gender_w-female"
                  value="female"
                  data-gtm-form-interact-field-id="1"
                />
                <div
                  class="flex items-center justify-center block bg-white m0 border-color border-top border-bottom border-right rounded-right"
                >
                  <svg>
                    <use
                      xlink:href="@/assets/images/icons-person.svg?v=20240407103928&amp;#icon-female"
                    ></use>
                  </svg>
                  <span class="hide">Female</span>
                </div>
              </label>
            </div>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :label="$t('Age')" prop="age">
          <el-select v-model="form.age" style="width: 100%" size="large">
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
    <el-form-item :label="$t('Email')" prop="email">
      <el-input
        v-model="form.email"
        size="large"
        placeholder="email@example.com"
      />
    </el-form-item>
    <el-form-item :label="$t('Phone Number')" prop="phone">
      <el-input
        v-model="form.phone"
        size="large"
        :placeholder="$t('Phone Number')"
      />
    </el-form-item>
    <el-form-item :label="$t('Password')" prop="password">
      <el-input
        v-model="form.password"
        :placeholder="$t('Your password')"
        size="large"
        type="password"
        show-password
      />
    </el-form-item>
    <el-form-item :label="$t('Portrait')" prop="image_dating">
      <input
        type="file"
        ref="picker"
        rounded
        id="fileUpload"
        class="__uploader"
        outlined
        label="Label"
        counter
        max-files="1"
        accept=".png,.jpg"
        multiple
        style="display: none"
        @change="updateFile"
      />
      <div class="text-center">
        <div
          style="text-align: center; padding: 5px 0px 10px 0; cursor: pointer"
          @click="handlePick"
        >
          <div style="display: flex; justify-content: center">
            <i
              class="el-icon-picture"
              style="font-size: 22px; margin-bottom: 5px"
            />
          </div>
          <div style="font-size: 12px; line-height: 15px">
            {{ $t("Upload image") }}
          </div>
        </div>
        <div class="flex">
          <div
            v-for="(image, index) in form.image_dating"
            :key="index"
            style="width: 33%; padding: 0 10px"
            class="image-parent"
          >
            <img :src="image" class="image-profile" />
            <div class="delete-image" @click="deleteImage(image)">
              <i class="el-icon-close" />
            </div>
          </div>
        </div>
        <div style="font-style: italic; font-size: 13px">
          ({{
            $t(
              "Require 03 of your most recent photos. 01 portrait, 01 full body, 01 art"
            )
          }})
        </div>
      </div>
    </el-form-item>
    <el-form-item class="d-flex privacy-age" prop="privacy">
      <div class="flex">
        <el-checkbox
          v-model="form.privacy"
          size="large"
          style="margin-right: 10px"
        />
        <div>
          {{ $t("Yes, I confirm that I am over 18 and agree to the") }}
          <a class="bold" @click="$router.push({ path: '/term-of-use' })">{{
            $t("Terms of Use")
          }}</a>
          {{ $t("and") }}
          <a class="bold">{{ $t("Privacy Statement") }}</a
          >.
        </div>
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        type="warning"
        class="col-12 btn-bg"
        size="large"
        :loading="loading"
        @click="submitForm('ruleFormRef')"
        >{{ $t("Find Your Beloved") }}</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import { Message } from "element-ui";
import { convertBase64 } from "@/utils/common";
export default {
  data() {
    return {
      loading: false,
      form: {
        avatar: null,
        name: null,
        age: null,
        email: null,
        password: null,
        privacy: null,
        gender: null,
        phone: null,
        lookingGender: null,
        image_dating: [],
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t("Please enter your name"),
            trigger: "blur",
          },
        ],
        // avatar: [
        //   {
        //     required: true,
        //     message: this.$t("Please upload your avatar"),
        //     trigger: "blur",
        //   },
        // ],
        age: [
          {
            required: true,
            message: this.$t("Please enter your age"),
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: this.$t("Please enter your phone number"),
            trigger: "blur",
          },
        ],
        gender: [
          {
            required: true,
            message: this.$t("Please select your gender"),
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: this.$t("Please enter your email"),
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("Please enter your password"),
            trigger: "blur",
          },
        ],
        image_dating: [
          {
            required: true,
            message: this.$t("Please upload image"),
            trigger: "blur",
          },
        ],
        privacy: [
          {
            required: true,
            message: this.$t(
              "You must be over 18 and agree to the Terms of Use and Privacy Statement."
            ),
            trigger: "blur",
          },
        ],
      },
      optionsAge: [],
    };
  },
  mounted() {
    for (let index = 1; index < 100; index++) {
      if (index > 17) this.optionsAge.push({ value: index, lable: index });
    }
  },
  watch: {
    "form.gender"(val) {
      if (val == "male") {
        this.form.lookingGender = "female";
      } else if (val == "female") {
        this.form.lookingGender = "male";
      }
    },
  },
  methods: {
    deleteImage(image) {
      this.form.image_dating = this.form.image_dating.filter((i) => i != image);
    },
    async updateFile() {
      const fileName = "fileUpload";
      const files = document.getElementById(fileName).files;
      if (files.length + this.form.image_dating.length > 3) {
        Message({
          message: this.$t("The number of photos cannot exceed 3"),
          type: "error",
          duration: 1000,
        });
        return;
      }
      files.forEach(async (file) => {
        const base64 = await convertBase64(file);
        this.form.image_dating.push(base64);
      });
    },
    async updateFileAvatar() {
      const fileName = "fileAvatar";
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.form.avatar = base64;
    },
    handlePick() {
      if (this.form.image_dating.length == 3) {
        Message({
          message: this.$t("The number of photos cannot exceed 3"),
          type: "error",
          duration: 1000,
        });
        return;
      }
      const fileName = "fileUpload";
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    handlePickAvatar() {
      const fileName = "fileAvatar";
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async submitForm(formEl) {
      await this.$refs[formEl].validate((valid, fields) => {
        if (valid) {
          if (this.form.image_dating.length != 3) {
            Message({
              message: this.$t("Must have 3 personal photos"),
              type: "error",
              duration: 1000,
            });
            return;
          }
          console.log("submit!", this.form);
          this.loading = true;
          this.$store
            .dispatch("user/register", this.form)
            .then((res) => {
              Message({
                message: this.$t("Register User Successfully!"),
                type: "success",
                duration: 1000,
              });
              this.$emit("finish");
              this.loading = false;
              this.$router.push({ path: "/survey-question" });
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
<style lang="scss">
.register {
  .privacy-age {
    .el-form-item__content {
      line-height: normal !important;
    }
  }
  .image-parent {
    position: relative;
    .image-profile {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 4px;
    }
    .delete-image {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      top: 6px;
      right: 16px;
      line-height: 24px;
      font-size: 16px;
      display: none;
      cursor: pointer;
      font-weight: bold;
    }
  }
  .image-parent:hover {
    .delete-image {
      display: block !important;
    }
  }
}
</style>
