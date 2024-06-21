<template>
  <div>
    <div id="headerouter" class="col-12 absolute top-0 min-height-12">
      <div class="overlay-7 fixed top-0 left-0 right-0 bottom-0" />
      <div
        class="absolute top-0 left-0 col-12 z2 flex items-center justify-between"
      >
        <a href="/" class="flex items-center white text-decoration-none m2">
          <img
            src="@/assets/images/logo-text-white.png"
            style="cursor: pointer; object-fit: contain; width: 90px"
          />
        </a>

        <div class="mx2 flex items-center">
          <MultipleLanguage style="margin-right: 10px" />
        </div>
      </div>
    </div>
    <div class="relative white flex">
      <div
        class="blackscreen-min-height col-12 flex flex-column items-center justify-center"
      >
        <div
          class="login relative form-login-width white mx-auto"
          v-if="isLogin == 1"
        >
          <h1 class="center" style="font-size: 34px">
            {{ $t("Members Login") }}
          </h1>
          <div class="loginform">
            <el-form
              ref="loginForm"
              :model="form"
              :rules="rules"
              label-position="top"
            >
              <el-form-item
                class="form-login"
                :label="$t('Email')"
                prop="email"
              >
                <el-input
                  v-model="form.email"
                  size="large"
                  placeholder="email@example.com"
                  @keyup.enter="login"
                />
              </el-form-item>
              <el-form-item
                class="form-login"
                :label="$t('Password')"
                prop="password"
              >
                <el-input
                  v-model="form.password"
                  :placeholder="$t('Your password')"
                  size="large"
                  type="password"
                  show-password
                  @keyup.enter="login"
                />
              </el-form-item>
              <div class="flex justify-end">
                <a class="white" @click="isLogin = 2">{{
                  $t("Forgot Password")
                }}</a>
              </div>
            </el-form>
          </div>
          <p class="p0 mt2 mb3">
            <em>{{
              $t(
                "Don't check this box if you're at a public or shared computer"
              )
            }}</em>
          </p>

          <el-button
            type="submit"
            class="h3 rounded py1 px2 btn-color btn-bg border-none col-12 relative overflow-hidden shadow"
            :loading="loading"
            @click="login"
          >
            {{ $t("Login") }}
          </el-button>
          <div class="h3 center mt3 link-color">
            {{ $t("Not a member?") }}
            <a @click="$router.push({ path: '/' })"
              ><strong>{{ $t("Join Now!") }}</strong></a
            >
          </div>

          <div class="mt2 white">
            <p class="center m0 mb1">
              {{ $t("Help spread the word about Visicupid!") }}
            </p>
          </div>
        </div>
        <div
          class="login relative form-login-width white mx-auto"
          v-else-if="isLogin == 2"
        >
          <h1 class="center" style="font-size: 34px">
            {{ $t("Forgot Password") }}
          </h1>
          <div class="loginform">
            <el-form
              ref="resetForm"
              :model="resetform"
              :rules="rulesResetForm"
              label-position="top"
            >
              <el-form-item
                class="form-login"
                :label="$t('Email')"
                prop="email"
              >
                <el-input
                  v-model="resetform.email"
                  size="large"
                  placeholder="email@example.com"
                />
              </el-form-item>
            </el-form>
          </div>
          <el-button
            type="submit"
            class="h3 rounded py1 px2 btn-color btn-bg border-none col-12 relative overflow-hidden shadow"
            :loading="loadingReset"
            @click="forgotPassword"
          >
            {{ $t("Send") }}
          </el-button>
          <div
            class="h3 center mt2 link-color"
            style="cursor: pointer"
            @click="isLogin = 1"
          >
            <strong>{{ $t("Login") }}</strong>
          </div>
          <div class="h3 center mt2 link-color">
            {{ $t("Not a member?") }}
            <a @click="$router.push({ path: '/' })"
              ><strong>{{ $t("Join Now!") }}</strong></a
            >
          </div>

          <div class="mt2 white">
            <p class="center m0 mb1">
              {{ $t("Help spread the word about Visicupid!") }}
            </p>
          </div>
        </div>
        <div class="login relative form-login-width white mx-auto" v-else>
          <h1 class="center" style="font-size: 34px">
            {{ $t("Reset Password") }}
          </h1>
          <div class="loginform">
            <el-form
              ref="resetPassword"
              :model="resetPassword"
              :rules="rulesResetPassword"
              label-position="top"
            >
              <el-form-item
                class="form-login"
                :label="$t('Email')"
                prop="email"
              >
                <el-input
                  v-model="resetPassword.email"
                  size="large"
                  placeholder="email@example.com"
                />
              </el-form-item>
              <el-form-item class="form-login" :label="$t('OTP')" prop="otp">
                <el-input
                  v-model="resetPassword.otp"
                  size="large"
                  :placeholder="$t('OTP')"
                />
              </el-form-item>
              <el-form-item
                class="form-login"
                :label="$t('Password')"
                prop="password"
              >
                <el-input
                  v-model="resetPassword.password"
                  type="password"
                  size="large"
                  :placeholder="$t('Password')"
                />
              </el-form-item>
            </el-form>
          </div>
          <el-button
            type="submit"
            class="h3 rounded py1 px2 btn-color btn-bg border-none col-12 relative overflow-hidden shadow"
            :loading="loadingResetPassword"
            @click="resetPasswordApply"
          >
            {{ $t("Reset Password") }}
          </el-button>
          <div
            class="h3 center mt2 link-color"
            style="cursor: pointer"
            @click="isLogin = 1"
          >
            <strong>{{ $t("Login") }}</strong>
          </div>
          <div class="h3 center mt2 link-color">
            {{ $t("Not a member?") }}
            <a @click="$router.push({ path: '/' })"
              ><strong>{{ $t("Join Now!") }}</strong></a
            >
          </div>
          <div class="mt2 white">
            <p class="center m0 mb1">
              {{ $t("Help spread the word about Visicupid!") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer class="col-11 p2 mx-auto relative mt1">
      <div class="flex justify-center mb1 items-center">
        <a
          class="me2 white"
          @click="$router.push({ path: '/about-us' })"
          rel="nofollow"
          >{{ $t("About Us") }}</a
        >
        <a class="me2 white" href="">{{ $t("Our Values") }}</a>

        <a class="me2 white">{{ $t("What we do") }}</a>

        <a class="me2 white">{{ $t("Our Stories") }}</a>

        <a class="me2 white">{{ $t("why Choose Us") }}</a>
        <a class="me2 white" @click="isDisplayFormContactUs = true">{{
          $t("Contact Us")
        }}</a>
        <a class="me2 white" href="https://wa.me/6598881336" target="_blank">
          <img src="@/assets/images/whatsapp.png" style="width: 35px"
        /></a>
        <a class="me2 white" href="http://zalo.me/6598881336" target="_blank"
          ><img src="@/assets/images/zalo-logo.png" style="width: 35px"
        /></a>
      </div>

      <div class="center white">
        <p>
          {{
            $t(
              "Visicupid Media, the Visicupid Media Logo are registered trademarks of Ecom Holdings Pty Ltd and used with permission by Visicupid Media Pty Ltd."
            )
          }}
        </p>
      </div>
    </footer>
    <el-dialog
      :close-on-click-modal="false"
      title="Contact Us"
      :visible.sync="isDisplayFormContactUs"
    >
      <ContactUs @closeContact="closeContact" v-if="isDisplayFormContactUs" />
    </el-dialog>
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs.vue";
import MultipleLanguage from "@/layout/components/MultipleLanguage.vue";
import { Message } from "element-ui";
import { forgotPassword, resetPassword } from "@/api/user";
export default {
  components: { ContactUs, MultipleLanguage },
  data() {
    return {
      loading: false,
      loadingReset: false,
      loadingResetPassword: false,
      isLogin: 1,
      form: {
        email: "",
        password: "",
      },
      resetform: {
        email: "",
      },
      resetPassword: {
        email: "",
        otp: "",
        password: "",
      },
      redirect: undefined,
      isDisplayFormContactUs: false,
      rules: {
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
      },
      rulesResetForm: {
        email: [
          {
            required: true,
            message: this.$t("Please enter your email"),
            trigger: "blur",
          },
        ],
      },
      rulesResetPassword: {
        email: [
          {
            required: true,
            message: this.$t("Please enter your email"),
            trigger: "blur",
          },
        ],
        otp: [
          {
            required: true,
            message: this.$t("Please enter your OTP"),
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
      },
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
        }
      },
      immediate: true,
    },
  },
  methods: {
    closeContact() {
      this.isDisplayFormContactUs = false;
    },
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.form)
            .then((res) => {
              Message({
                message: this.$t("Login successfully!"),
                type: "success",
                duration: 1000,
              });
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
              Message({
                message: this.$t("Invalid login information"),
                type: "error",
                duration: 5 * 1000,
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    forgotPassword() {
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          this.loadingReset = true;
          forgotPassword(this.resetform)
            .then((res) => {
              this.loadingReset = false;
              this.isLogin = 3;
              this.resetPassword = {
                email: this.resetform.email,
                otp: "",
                password: "",
              };
              Message({
                message: this.$t("The OTP code has been sent to your email"),
                type: "success",
                duration: 2 * 1000,
              });
            })
            .catch((err) => {
              this.loadingReset = false;
              Message({
                message: this.$t(err.response.data.message),
                type: "error",
                duration: 2 * 1000,
              });
            });
        }
      });
    },

    resetPasswordApply() {
      this.$refs.resetPassword.validate((valid) => {
        if (valid) {
          this.loadingResetPassword = true;
          resetPassword(this.resetPassword)
            .then((res) => {
              this.loadingResetPassword = false;
              this.isLogin = 1;
              Message({
                message: this.$t(
                  "Reset password successfully! Please try login"
                ),
                type: "success",
                duration: 5 * 1000,
              });
            })
            .catch((err) => {
              this.loadingResetPassword = false;
              Message({
                message: this.$t("Invalid information"),
                type: "error",
                duration: 5 * 1000,
              });
            });
        }
      });
    },
  },
};
</script>
<style lang="scss">
.form-login-width {
  width: 24rem;
}
.form-login {
  .el-form-item__label {
    font-size: 16px !important;
    color: white !important;
  }
}
</style>
