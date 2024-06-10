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
        <div class="login relative max-width-1 white mx-auto">
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
                <a class="white">{{ $t("Forgot Password") }}</a>
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
            <div class="flex justify-center">
              <a
                href="https://www.facebook.com/elitecupid"
                class="fb"
                target="_blank"
              />
              <a
                href="https://www.twitter.com/elitecupid_"
                class="tw"
                target="_blank"
              />
              <a
                href="https://www.instagram.com/elitecupid/"
                class="insta"
                target="_blank"
              />
              <a
                href="https://www.youtube.com/channel/UCpHjDYdw9yzsE8L5LhrHc5A"
                class="youtube"
                target="_blank"
              />
            </div>
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
export default {
  components: { ContactUs, MultipleLanguage },
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: "",
      },
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
    };
  },
  watch: {},
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
            .catch((error) => {
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
  },
};
</script>
<style lang="scss">
.form-login {
  .el-form-item__label {
    font-size: 16px !important;
    color: white !important;
  }
}
</style>
