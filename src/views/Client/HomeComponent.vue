<template>
  <div>
    <TopBanner
      @openFormRegister="openFormRegister"
      @settingProfile="settingProfile"
    />

    <div
      class="section landing-bg-grey testimonial-section py2 center flex items-center justify-center"
    />

    <el-row :gutter="24" class="section justify-between bg-white p4">
      <el-col :md="8" :xs="24">
        <h2>{{ $t("Your chance to find the one.") }}</h2>
        <p>
          {{
            $t(`Are you looking for someone to walk through life with? Are you
          searching for a connection that transcends? If you're interested in
          dating internationally, Visicupid is here! We bring like-minded
          individuals together from around the world. We pride ourselves on
          success and know you do too.`)
          }}
        </p>
      </el-col>
      <el-col :md="8" :xs="24">
        <h2>{{ $t("Why Visicupid?") }}</h2>
        <p>
          {{
            $t(`Visicupid is the latest offering from Cupid Media, one of the world''s
          largest dating networks. Our dream? Make love possible, no matter
          where you live or whom you love.`)
          }}
        </p>
      </el-col>
      <el-col :md="8" :xs="24">
        <h2>{{ $t("Find your perfect match.") }}</h2>
        <p>
          {{
            $t(`Visicupid is for individuals seeking long-term relationships with
          someone who is their equal. We focus on bringing accomplished and
          affluent singles together. Our comprehensive personality assessment
          matches users based on their values, aspirations, and lifestyles, thus
          creating a higher success rate.`)
          }}
        </p>
      </el-col>
    </el-row>
    <div class="section bg-white how-it-works p4 center landing-bg-grey">
      <h2 class="mb1 highlight">{{ $t("How It Works") }}</h2>
      <h4 class="mt1 mb3">
        {{ $t("Get started on Visicupid.com today in 3 simple steps:") }}
      </h4>
      <el-row :gutter="24" class="justify-around">
        <el-col :md="8" :xs="24" style="margin-top: 20px">
          <div
            class="absolute top-0 left-0 step p2 circle flex justify-center items-cnter hide"
          >
            <div class="white">1</div>
          </div>
          <div class="icon-156 mx-auto">
            <img style="margin-top: -10px" src="@/assets/images/profile.jpg" />
          </div>
          <h3 class="mb1">{{ $t("Create A Profile") }}</h3>
          <p class="p0 m0">
            {{
              $t(`Once you have selected who you are searching for, you will be asked
            to fill in our Compatibility Questionnaire; this helps us maintain
            our high match standards.`)
            }}
          </p>
        </el-col>
        <el-col :md="8" :xs="24" style="margin-top: 20px">
          <div
            class="absolute top-0 left-0 step p2 circle flex justify-center items-cnter hide"
          >
            <div class="white">2</div>
          </div>
          <div class="icon-156 mx-auto">
            <img style="margin-top: -10px" src="@/assets/images/photos.jpg" />
          </div>
          <h3 class="mb1">{{ $t("Browse Photos") }}</h3>

          <p class="p0 m0">
            {{
              $t(`We appreciate your time and won't make you waste it swiping, search
            our extensive member base with ease. Make specific selections with a
            range of preferences and settings.`)
            }}
          </p>
        </el-col>
        <el-col :md="8" :xs="24" style="margin-top: 20px">
          <div
            class="absolute top-0 left-0 step p2 circle flex justify-center items-cnter hide"
          >
            <div class="white">3</div>
          </div>
          <div class="icon-156 mx-auto">
            <img
              style="margin-top: -10px"
              src="@/assets/images/comunicating.jpg"
            />
          </div>
          <h3 class="mb1">{{ $t("Start Communicating") }}</h3>

          <p class="p0 m0">
            {{
              $t(
                "Send a like or message to start communicating with members. You can always use our 'Online' tab to see who else is ready to connect right away."
              )
            }}
          </p>
        </el-col>
      </el-row>
    </div>
    <div class="footer py3 px4">
      <div class="clearfix">
        <div class="col col-2" style="float: left">
          <div class="h3 mt2 mb1 color-dark-grey">Jenny Official</div>
          <a class="block">{{ $t("Address") }}: S271032</a>
          <a class="block">{{ $t("UEN") }}: 53484643B</a>
          <a class="block">{{ $t("Phone Number") }}: +65 98881336</a>
        </div>
        <div class="col col-2" style="float: left">
          <div class="h3 mt2 mb1 color-dark-grey">{{ $t("Company") }}</div>
          <a
            class="block"
            rel="nofollow"
            @click="$router.push({ path: '/about-us' })"
            >{{ $t("About Us") }}</a
          >
          <a class="block">{{ $t("Other Sites") }}</a>
          <a class="block">{{ $t("Corporate") }}</a>
          <a class="block" rel="nofollow">{{ $t("Affiliates") }}</a>
        </div>
        <div class="col col-2" style="float: left">
          <div class="h3 mt2 mb1 color-dark-grey">{{ $t("Information") }}</div>

          <a class="block" rel="nofollow">{{ $t("Success Stories") }}</a>
          <a class="block" rel="nofollow">{{ $t("Contact Us") }}</a>
          <a class="block">{{ $t("Dating Safety") }}</a>
          <a class="block" rel="nofollow">{{ $t("Site Map") }}</a>
        </div>
        <div class="col col-2" style="float: left">
          <div class="h3 mt2 mb1 color-dark-grey">Legal</div>
          <a class="block" rel="nofollow">{{ $t("Terms of Use") }}</a>
          <a
            class="block"
            @click="$router.push({ path: '/privacy-statement' })"
            rel="nofollow"
            >{{ $t("Privacy Statement") }}</a
          >
          <a class="block" rel="nofollow">{{ $t("Refund Policy") }}</a>
          <a rel="nofollow">{{ $t("Cookie Policy") }}</a>

          <a class="block" rel="nofollow">{{ $t("Community Guidelines") }}</a>
        </div>
        <div class="col col-2" style="float: left">
          <div class="h3 mt2 mb1 color-dark-grey">{{ $t("Follow Us") }}</div>
          <a
            class="inline-block"
            href="https://www.facebook.com/Vietsyncupid?"
            target="_blank"
            ><img
              src="@/assets/images/fb.png"
              width="50"
              height="50"
              alt=""
              border="0"
              class="network"
          /></a>

          <a class="inline-block"
            ><img
              src="@/assets/images/twt.png"
              width="50"
              height="50"
              alt=""
              border="0"
              class="network"
          /></a>

          <a class="inline-block" target="_blank"
            ><img
              src="@/assets/images/instagram.png"
              width="50"
              height="50"
              alt=""
              border="0"
              class="network"
          /></a>

          <a class="inline-block"
            ><img
              src="@/assets/images/ytube.png"
              width="50"
              height="50"
              alt=""
              border="0"
              class="network"
          /></a>
        </div>
      </div>
    </div>
    <Footer />
    <el-dialog
      top="5vh"
      :close-on-click-modal="false"
      :visible.sync="isDisplayRegisterServey"
    >
      <RegisterServey @finish="finishRegister" />
    </el-dialog>
    <el-dialog
      :close-on-click-modal="false"
      title="Settings Profile"
      :visible.sync="isDisplaySettingsProfile"
      top="5vh"
    >
      <SettingsProfile
        v-if="isDisplaySettingsProfile"
        @closeDialog="isDisplaySettingsProfile = false"
      />
    </el-dialog>
  </div>
</template>

<script>
import RegisterServey from "@/components/RegisterServey.vue";
import Footer from "@/layout/components/Footer.vue";
import TopBanner from "@/layout/components/TopBanner.vue";
import AvatarUser from "@/components/AvatarUser.vue";
import SettingsProfile from "@/components/SettingsProfile.vue";
export default {
  components: {
    RegisterServey,
    Footer,
    AvatarUser,
    SettingsProfile,
    TopBanner,
  },
  data() {
    return {
      isDisplayRegisterServey: false,
      isDisplaySettingsProfile: false,
    };
  },
  watch: {},
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    openFormRegister() {
      this.isDisplayRegisterServey = true;
    },
    settingProfile() {
      this.isDisplaySettingsProfile = true;
    },
    finishRegister() {
      this.isDisplayRegisterServey = false;
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
