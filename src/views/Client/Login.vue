<template>
  <div id="headerouter" class="col-12 absolute top-0 min-height-12">
    <div class="overlay-7 fixed top-0 left-0 right-0 bottom-0"></div>
    <div
      class="absolute top-0 left-0 col-12 z2 flex items-center justify-between"
    >
      <a href="/" class="flex items-center white text-decoration-none m3">
        <svg class="logo-heart site-logo">
          <use xlink:href="#icon-logoheart"></use>
        </svg>

        <svg class="logo-domain mx1">
          <use xlink:href="#site-logo-elitecupid"></use>
        </svg>
      </a>

      <div class="mx3 flex items-center">
        <div class="membernav">
          <ul dir="ltr">
            <li class="py1 px2 rounded">
              <a class="flex items-center border-none">
                <div class="flex-none flex item-center">
                  <svg>
                    <use
                      xlink:href="/assets/desktop/icons/icons.svg?v=20240407103928&amp;#icon-globe"
                    ></use>
                  </svg>
                </div>
                English
                <div class="arrow inline-block">
                  <svg>
                    <use
                      xlink:href="/assets/desktop/icons/icons.svg?v=20240407103928&amp;#icon-menuright"
                    ></use>
                  </svg>
                </div>
              </a>
              <ul class="p0 pt1">
                <li><a class="p1 block" href="/fr/auth/login">Français</a></li>

                <li><a class="p1 block" href="/es/auth/login">Español</a></li>

                <li><a class="p1 block" href="/ar/auth/login">العربية</a></li>

                <li><a class="p1 block" href="/no/auth/login">Norsk</a></li>

                <li><a class="p1 block" href="/sv/auth/login">Svenska</a></li>

                <li><a class="p1 block" href="/ja/auth/login">日本語</a></li>

                <li>
                  <a class="p1 block" href="/nl/auth/login">Nederlands</a>
                </li>

                <li><a class="p1 block" href="/de/auth/login">Deutsch</a></li>

                <li><a class="p1 block" href="/it/auth/login">Italiano</a></li>

                <li>
                  <a class="p1 block" style="border: 0" href="/fi/auth/login"
                    >Suomi</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="relative white flex">
    <div
      class="blackscreen-min-height col-12 flex flex-column items-center justify-center"
    >
      <div class="login relative max-width-1 white mx-auto">
        <h1 class="center" style="font-size: 34px">Members Login</h1>
        <div class="loginform">
          <el-form
            :model="form"
            ref="ruleFormRef"
            :rules="rules"
            label-position="top"
          >
            <el-form-item class="form-login" label="Email" prop="email">
              <el-input
                v-model="form.email"
                size="large"
                placeholder="email@example.com"
              />
            </el-form-item>
            <el-form-item class="form-login" label="Password" prop="password">
              <el-input
                v-model="form.password"
                placeholder="Your password"
                size="large"
                type="password"
                show-password
              />
            </el-form-item>
            <div class="flex justify-end">
              <a class="white" href="/en/auth/showforgotpassword" tabindex="4"
                >Forgot Password</a
              >
            </div>
          </el-form>
          <div class="h3 center mt3 link-color">
            Not a member?
            <a href="/en/registration/showstep1"><strong>Join Now!</strong></a>
          </div>
        </div>
        <p class="p0 mt0 mb3">
          <em>Don't check this box if you're at a public or shared computer</em>
        </p>

        <button
          type="submit"
          class="h3 rounded py1 px2 btn-color btn-bg border-none col-12 relative overflow-hidden shadow"
          tabindex="3"
          data-disable-on-click="true"
        >
          Login
        </button>

        <div class="mt2 white">
          <p class="center m0 mb1">Help spread the word about EliteCupid!</p>
          <div class="flex justify-center">
            <a
              href="https://www.facebook.com/elitecupid"
              class="fb"
              target="_blank"
              ><svg class="icon-30 inline-block mx1 fill-white">
                <title>Facebook</title>
                <use
                  xlink:href="/assets/desktop/icons/icons.svg?v=20240407103928&amp;#icon-FB"
                ></use></svg
            ></a>
            <a
              href="https://www.twitter.com/elitecupid_"
              class="tw"
              target="_blank"
              ><svg class="icon-30 inline-block mx1 fill-white">
                <title>Twitter</title>
                <use
                  xlink:href="/assets/desktop/icons/icons.svg?v=20240407103928&amp;#icon-twitter"
                ></use></svg
            ></a>
            <a
              href="https://www.instagram.com/elitecupid/"
              class="insta"
              target="_blank"
              ><svg class="icon-30 inline-block mx1 fill-white">
                <title>Instagram</title>
                <use
                  xlink:href="/assets/desktop/icons/icons.svg?v=20240407103928&amp;#icon-instagram"
                ></use></svg
            ></a>
            <a
              href="https://www.youtube.com/channel/UCpHjDYdw9yzsE8L5LhrHc5A"
              class="youtube"
              target="_blank"
              ><svg class="icon-30 inline-block mx1 fill-white">
                <title>YouTube</title>
                <use
                  xlink:href="/assets/desktop/icons/icons.svg?v=20240407103928&amp;#icon-youTube"
                ></use></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="col-11 p2 mx-auto relative mt1">
    <div class="flex justify-center mb1">
      <a class="me2 white" href="/en/general/about" rel="nofollow">About Us</a>
      <a class="me2 white" href="/en/general/contact">Contact Us</a>

      <a class="me2 white" href="/en/general/success">Success Stories</a>

      <a
        class="me2 white"
        href="https://www.cupidmedia.com/our-sites/"
        target="_blank"
        >Other Sites</a
      >

      <a class="me2 white" href="/en/general/termsofuse">Terms of Use</a>
      <a class="me2 white" href="/en/general/paymentRefund">Refund Policy</a>
      <a class="me2 white" href="/en/general/privacystatement"
        >Privacy Statement</a
      >
      <a class="me2 white" href="/en/general/privacystatement#cookiepolicy"
        >Cookie Policy</a
      >

      <a class="me2 white" href="/en/general/datingsafety">Dating Safety</a>
      <a class="me2 white" href="/en/general/sitemap">Site Map</a>
      <a class="me2 white" href="/en/general/communityguidelines"
        >Community Guidelines</a
      >
      <a class="me2 white" href="https://www.cupidmedia.com" target="_blank"
        >Corporate</a
      >
      <a
        class="me2 white"
        href="https://www.cupidmedia.com/affiliates/"
        target="_blank"
        >Affiliates</a
      >
    </div>

    <div class="center trademark white">
      <p>
        Cupid Media, the Cupid Media Logo are registered trademarks of Ecom
        Holdings Pty Ltd and used with permission by Cupid Media Pty Ltd.
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const form = ref({
  email: null,
  password: null,
})
const rules = {
  email: [
    {
      required: true,
      message: 'Please enter your email',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please enter your password',
      trigger: 'blur',
    },
  ],
}
</script>
<style lang="scss">
.form-login {
  .el-form-item__label {
    font-size: 16px !important;
    color: white !important;
  }
}
</style>