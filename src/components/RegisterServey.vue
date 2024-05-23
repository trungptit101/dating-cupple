<template>
  <el-form :model="form" ref="ruleFormRef" :rules="rules" label-position="top">
    <el-form-item label="Name" prop="name">
      <el-input size="large" v-model="form.name"></el-input>
    </el-form-item>
    <el-row>
      <el-col :xs="8" :md="8">
        <el-form-item label="I'm a" prop="gender">
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
        <el-form-item label="I'm looking for">
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
    <el-form-item label="Email" prop="email">
      <el-input
        v-model="form.email"
        size="large"
        placeholder="email@example.com"
      />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        v-model="form.password"
        placeholder="Your password"
        size="large"
        type="password"
        show-password
      />
    </el-form-item>
    <el-form-item class="d-flex privacy-age" prop="privacy">
      <el-row>
        <el-col :span="1">
          <el-checkbox v-model="form.privacy" size="large" />
        </el-col>
        <el-col :span="23">
          Yes, I confirm that I am over 18 and agree to the
          <a class="bold">Terms of Use</a>
          and
          <a class="bold">Privacy Statement</a>.
        </el-col>
      </el-row>
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
        lookingGender: null,
      },
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
        gender: [
          {
            required: true,
            message: "Please select your gender",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
        ],
        privacy: [
          {
            required: true,
            message:
              "You must be over 18 and agree to the Terms of Use and Privacy Statement.",
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
    async submitForm(formEl) {
      await this.$refs[formEl].validate((valid, fields) => {
        if (valid) {
          console.log("submit!", this.form);
          this.loading = true;
          this.$store
            .dispatch("user/register", this.form)
            .then((res) => {
              Message({
                message: "Register User Successfully!",
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
.privacy-age {
  .el-form-item__content {
    line-height: normal !important;
  }
}
</style>
