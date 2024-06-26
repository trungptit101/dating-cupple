<template>
  <div>
    <TopBanner />
    <div
      class="section landing-bg-grey testimonial-section py2 center flex items-center justify-center"
    />

    <el-row class="section justify-between bg-white p4">
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
      <el-col :md="8" :xs="24" class="why-visicupid">
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
      <el-row>
        <el-col :xs="16" :sm="6" :md="6">
          <div class="h3 mt2 mb1 color-dark-grey">Jenny Official</div>
          <a class="block flex items-center"
            ><i
              class="el-icon-location-information icon-information"
            />S271032</a
          >
          <a class="block flex items-center"
            ><i class="el-icon-document icon-information" />53484643B</a
          >
          <a class="block flex items-center"
            ><i class="el-icon-phone-outline icon-information" />(65)
            98881336</a
          >
          <a class="block flex items-center"
            ><i
              class="el-icon-chat-dot-square icon-information"
            />jenbusiness.sg@gmail.com</a
          >
        </el-col>
        <el-col :xs="8" :sm="6" :md="6">
          <div class="h3 mt2 mb1 color-dark-grey">{{ $t("Information") }}</div>
          <a
            class="block"
            rel="nofollow"
            @click="$router.push({ path: '/about-us' })"
            >{{ $t("About Us") }}</a
          >
          <a
            class="block"
            rel="nofollow"
            @click="isDisplayFormContactUs = true"
            >{{ $t("Contact Us") }}</a
          >
          <a class="block" rel="nofollow">{{ $t("Success Stories") }}</a>
          <a class="block" @click="$router.push({ path: '/dating-safety' })">{{
            $t("Dating Safety")
          }}</a>
          <a class="block" rel="nofollow">{{ $t("Site Map") }}</a>
        </el-col>
        <el-col :xs="16" :sm="6" :md="6">
          <div class="h3 mt2 mb1 color-dark-grey">{{ $t("Legal") }}</div>
          <a
            class="block"
            @click="$router.push({ path: '/term-of-use' })"
            rel="nofollow"
            >{{ $t("Terms of Use") }}</a
          >
          <a
            class="block"
            @click="$router.push({ path: '/privacy-statement' })"
            rel="nofollow"
            >{{ $t("Privacy Statement") }}</a
          >
          <a
            class="block"
            rel="nofollow"
            @click="$router.push({ path: '/refund-policy' })"
            >{{ $t("Refund Policy") }}</a
          >
          <a rel="nofollow" @click="$router.push({ path: '/cookie-policy' })">{{
            $t("Cookie Policy")
          }}</a>

          <a
            class="block"
            rel="nofollow"
            @click="$router.push({ path: '/community-guidelines' })"
            >{{ $t("Community Guidelines") }}</a
          >
        </el-col>
        <el-col :xs="8" :sm="6" :md="6">
          <div class="h3 mt2 mb1 color-dark-grey">{{ $t("Follow Us") }}</div>
          <div class="items-center" style="text-indent: 5px">
            <a
              class="inline-block"
              href="https://www.facebook.com/Vietsyncupid"
              target="_blank"
              style="margin-left: -5px"
              ><img
                src="@/assets/images/fb.png"
                width="50"
                height="50"
                alt=""
                border="0"
                class="network"
            /></a>
            <a
              class="inline-block"
              href="https://www.tiktok.com/@jennypham0608?_t=8n6hOsqfDfj&_r=1"
              target="_blank"
              ><img
                src="@/assets/images/tiktok-logo.png"
                width="50"
                height="50"
                alt=""
                border="0"
                class="network"
            /></a>
            <a
              class="inline-block"
              href="https://www.instagram.com/visicupid?igsh=MWR5MWZub2F3NWVybA%3D%3D&utm_source=qr"
              target="_blank"
              ><img
                src="@/assets/images/instagram.png"
                width="50"
                height="50"
                alt=""
                border="0"
                class="network"
            /></a>
            <a
              class="inline-block"
              href="https://youtube.com/@jenniferpham7775?si=UEU-82YSrtM8s6qC"
              target="_blank"
              ><img
                src="@/assets/images/ytube.png"
                width="50"
                height="50"
                alt=""
                border="0"
                class="network"
            /></a>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer />
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
import RegisterServey from "@/components/RegisterServey.vue";
import Footer from "@/layout/components/Footer.vue";
import TopBanner from "@/layout/components/TopBanner.vue";
import ContactUs from "@/components/ContactUs.vue";
import AvatarUser from "@/components/AvatarUser.vue";
export default {
  components: {
    RegisterServey,
    Footer,
    AvatarUser,
    TopBanner,
    ContactUs,
  },
  data() {
    return {
      isDisplayFormContactUs: false,
    };
  },
  watch: {},
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    closeContact() {
      this.isDisplayFormContactUs = false;
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>
<style lang="scss">
@media (min-width: 992px) {
  .why-visicupid {
    padding: 0 3%;
  }
}
.icon-information {
  color: #4472c4;
  font-weight: bold;
  margin-right: 5px;
  font-size: 16px;
}
</style>
