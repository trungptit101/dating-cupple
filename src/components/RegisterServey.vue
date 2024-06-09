<template>
  <el-form
    class="register"
    :model="form"
    ref="ruleFormRef"
    :rules="rules"
    label-position="top"
  >
    <el-form-item :label="$t('Name')" prop="name">
      <el-input size="large" v-model="form.name"></el-input>
    </el-form-item>
    <el-row>
      <el-col :xs="8" :md="8">
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
      <el-col :xs="8" :md="8">
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
      <el-col :xs="8" :md="8">
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
    <el-form-item :label="$t('Image')" prop="image_dating">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 5.4375H16.8009L15.4688 3.43781C15.4173 3.36069 15.3476 3.29748 15.2658 3.25381C15.184 3.21014 15.0927 3.18736 15 3.1875H9C8.90729 3.18736 8.81598 3.21014 8.7342 3.25381C8.65242 3.29748 8.5827 3.36069 8.53125 3.43781L7.19812 5.4375H4.5C3.95299 5.4375 3.42839 5.6548 3.04159 6.04159C2.6548 6.42839 2.4375 6.95299 2.4375 7.5V18C2.4375 18.547 2.6548 19.0716 3.04159 19.4584C3.42839 19.8452 3.95299 20.0625 4.5 20.0625H19.5C20.047 20.0625 20.5716 19.8452 20.9584 19.4584C21.3452 19.0716 21.5625 18.547 21.5625 18V7.5C21.5625 6.95299 21.3452 6.42839 20.9584 6.04159C20.5716 5.6548 20.047 5.4375 19.5 5.4375ZM20.4375 18C20.4375 18.2486 20.3387 18.4871 20.1629 18.6629C19.9871 18.8387 19.7486 18.9375 19.5 18.9375H4.5C4.25136 18.9375 4.0129 18.8387 3.83709 18.6629C3.66127 18.4871 3.5625 18.2486 3.5625 18V7.5C3.5625 7.25136 3.66127 7.0129 3.83709 6.83709C4.0129 6.66127 4.25136 6.5625 4.5 6.5625H7.5C7.59271 6.56264 7.68402 6.53986 7.7658 6.49619C7.84758 6.45252 7.9173 6.38931 7.96875 6.31219L9.30094 4.3125H14.6981L16.0312 6.31219C16.0827 6.38931 16.1524 6.45252 16.2342 6.49619C16.316 6.53986 16.4073 6.56264 16.5 6.5625H19.5C19.7486 6.5625 19.9871 6.66127 20.1629 6.83709C20.3387 7.0129 20.4375 7.25136 20.4375 7.5V18ZM12 8.4375C11.2212 8.4375 10.46 8.66843 9.81244 9.10109C9.16492 9.53375 8.66024 10.1487 8.36222 10.8682C8.0642 11.5877 7.98623 12.3794 8.13816 13.1432C8.29009 13.907 8.6651 14.6086 9.21577 15.1592C9.76644 15.7099 10.468 16.0849 11.2318 16.2368C11.9956 16.3888 12.7873 16.3108 13.5068 16.0128C14.2263 15.7148 14.8413 15.2101 15.2739 14.5626C15.7066 13.915 15.9375 13.1538 15.9375 12.375C15.9375 11.3307 15.5227 10.3292 14.7842 9.59077C14.0458 8.85234 13.0443 8.4375 12 8.4375ZM12 15.1875C11.4437 15.1875 10.9 15.0226 10.4375 14.7135C9.97495 14.4045 9.61446 13.9652 9.40159 13.4513C9.18872 12.9374 9.13302 12.3719 9.24154 11.8263C9.35006 11.2807 9.61793 10.7796 10.0113 10.3863C10.4046 9.99293 10.9057 9.72506 11.4513 9.61654C11.9969 9.50802 12.5624 9.56372 13.0763 9.77659C13.5902 9.98946 14.0295 10.3499 14.3385 10.8125C14.6475 11.275 14.8125 11.8187 14.8125 12.375C14.8125 13.1209 14.5162 13.8363 13.9887 14.3637C13.4613 14.8912 12.7459 15.1875 12 15.1875Z"
                fill="#7E7261"
              />
            </svg>
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
          <a class="bold">{{ $t("Terms of Use") }}</a>
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
        >Find Your Beloved</el-button
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
