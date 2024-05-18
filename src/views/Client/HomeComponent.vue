<template>
  <div>
    <div
      class="flex justify-between items-center absolute top-0 left-0 col-12 z2"
    >
      <img
        src="@/assets/images/logo.png"
        style="width: 150px; cursor: pointer"
      />

      <div class="mx3 flex items-center">
        <div class="membernav">
          <ul dir="ltr">
            <li class="py1 px2 rounded">
              <a class="flex items-center border-none"> English </a>
              <!-- <ul class="p0 pt1">
              <li><a class="p1 block" href="../fr.html">Việt Nam</a></li>
            </ul> -->
            </li>
          </ul>
        </div>

        <a
          class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow ms3 my3"
          title="Login"
          @click="$router.push({ name: 'login' })"
          v-if="!user.email"
        >
          Login
        </a>
        <a
          class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow ms3 my3"
          title="Logout"
          v-else
          @click="logout"
        >
          Logout
        </a>
      </div>
    </div>
    <div class="section-top relative">
      <div class="flex items-center justify-center height-97 col-6">
        <div class="p0 intro">
          <div class="intro-text center reveal">
            <h1 class="h1 white relative m0 mb1 line-height-3 max-width-3">
              Meet Elite Singles
            </h1>
            <h2 class="h2 white relative my2 line-height-4 max-width-2 mx-auto">
              For people that value their career and time. Date like-minded
              individuals!
            </h2>
            <div
              class="intro-join mt1 center flex items-start justify-center col-12 mx-auto reveal"
              v-if="!user.email"
            >
              <a class="header-color" @click="isDisplayRegisterServey = true">
                <h3
                  class="btn-bg btn-color block py1 px2 button relative overflow-hidden rounded shadow"
                >
                  Begin Application
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="landing-benefits absolute left-0 bottom-0 col-12">
        <div class="flex items-center justify-center my2">
          <div class="flex-auto mx2 flex items-center justify-center">
            <div class="flex-none m1 dot dot-highlight circle" />
            Superior Matching Algorithms
          </div>
          <div class="flex-auto mx2 flex items-center justify-center">
            <div class="flex-none m1 dot dot-highlight circle" />
            In-depth Profiling
          </div>
          <div class="flex-auto mx2 flex items-center justify-center">
            <div class="flex-none m1 dot dot-highlight circle" />
            Trusted site backed by Cupid Media
          </div>
        </div>
      </div>
    </div>

    <div
      class="section landing-bg-grey testimonial-section py2 center flex items-center justify-center"
    />

    <div class="section flex justify-between bg-white p4">
      <div class="col-3">
        <h2>Your chance to find the one.</h2>
        <p>
          Are you looking for someone to walk through life with? Are you
          searching for a connection that transcends? If you''re interested in
          dating internationally, EliteCupid is here! We bring like-minded
          individuals together from around the world. We pride ourselves on
          success and know you do too.
        </p>
      </div>
      <div class="col-3">
        <h2>Why EliteCupid?</h2>
        <p>
          EliteCupid is the latest offering from Cupid Media, one of the
          world''s largest dating networks. Our dream? Make love possible, no
          matter where you live or whom you love.
        </p>
      </div>
      <div class="col-3">
        <h2>Find your perfect match.</h2>
        <p>
          EliteCupid is for individuals seeking long-term relationships with
          someone who is their equal. We focus on bringing accomplished and
          affluent singles together. Our comprehensive personality assessment
          matches users based on their values, aspirations, and lifestyles, thus
          creating a higher success rate.
        </p>
      </div>
    </div>
    <div class="section bg-white how-it-works p4 center landing-bg-grey">
      <h2 class="mb1 highlight">How It Works</h2>
      <h4 class="mt1 mb3">
        Get started on EliteCupid.com today in 3 simple steps:
      </h4>
      <div class="flex justify-around">
        <div class="flex-none block m2 col-2 relative">
          <div
            class="absolute top-0 left-0 step p2 circle flex justify-center items-cnter hide"
          >
            <div class="white">1</div>
          </div>
          <div class="icon-156 mx-auto">
            <img style="margin-top: -10px" src="@/assets/images/profile.jpg" />
          </div>
          <h3 class="mb1">Create A Profile</h3>

          <p class="p0 m0">
            Once you have selected who you are searching for, you will be asked
            to fill in our Compatibility Questionnaire; this helps us maintain
            our high match standards.
          </p>
        </div>

        <div class="flex-none block m2 col-2 relative">
          <div
            class="absolute top-0 left-0 step p2 circle flex justify-center items-cnter hide"
          >
            <div class="white">2</div>
          </div>
          <div class="icon-156 mx-auto">
            <img style="margin-top: -10px" src="@/assets/images/photos.jpg" />
          </div>
          <h3 class="mb1">Browse Photos</h3>

          <p class="p0 m0">
            We appreciate your time and won't make you waste it swiping, search
            our extensive member base with ease. Make specific selections with a
            range of preferences and settings.
          </p>
        </div>

        <div class="flex-none block m2 col-2 relative">
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
          <h3 class="mb1">Start Communicating</h3>

          <p class="p0 m0">
            Send a like or message to start communicating with members. You can
            always use our "Online" tab to see who else is ready to connect
            right away.
          </p>
        </div>
      </div>
    </div>
    <div class="footer py3 px4">
      <div class="clearfix">
        <div class="col col-2">
          <div class="h3 mt2 mb1 color-dark-grey">Jenny Official</div>
          <a class="block">Address: S271032</a>
          <a class="block">UEN: 53484643B</a>
          <a class="block">Phone Number: +65 98881336</a>
        </div>
        <div class="col col-2">
          <div class="h3 mt2 mb1 color-dark-grey">Company</div>
          <a
            class="block"
            href="https://www.cupidmedia.com/our-story/"
            rel="nofollow"
            target="_blank"
            >About Us</a
          >
          <a
            class="block"
            href="https://www.cupidmedia.com/our-sites/"
            target="_blank"
            >Other Sites</a
          >
          <a class="block" href="https://www.cupidmedia.com/" target="_blank"
            >Corporate</a
          >
          <a
            class="block"
            href="https://www.cupidmedia.com/affiliates/"
            target="_blank"
            rel="nofollow"
            >Affiliates</a
          >
        </div>
        <div class="col col-2">
          <div class="h3 mt2 mb1 color-dark-grey">Information</div>

          <a class="block" href="general/success.html" rel="nofollow"
            >Success Stories</a
          >

          <a class="block" href="general/contact.html" rel="nofollow"
            >Contact Us</a
          >

          <a class="block" href="general/datingsafety.html" target="_blank"
            >Dating Safety</a
          >

          <a class="block" href="general/sitemap.html" rel="nofollow"
            >Site Map</a
          >
        </div>
        <div class="col col-2">
          <div class="h3 mt2 mb1 color-dark-grey">Legal</div>
          <a class="block" href="general/termsofuse.html" rel="nofollow"
            >Terms of Use</a
          >
          <a class="block" href="general/privacystatement.html" rel="nofollow"
            >Privacy Statement</a
          >
          <a class="block" href="general/paymentRefund.html" rel="nofollow"
            >Refund Policy</a
          >
          <a href="general/privacystatement.html#cookiepolicy" rel="nofollow"
            >Cookie Policy</a
          >

          <a
            class="block"
            href="general/communityguidelines.html"
            rel="nofollow"
            >Community Guidelines</a
          >
        </div>
        <div class="col col-4">
          <div class="h3 mt2 mb1 color-dark-grey">Follow Us</div>

          <a
            class="inline-block"
            href="https://www.facebook.com/elitecupid"
            target="_blank"
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
            href="https://www.twitter.com/elitecupid_"
            target="_blank"
            ><img
              src="@/assets/images/twt.png"
              width="50"
              height="50"
              alt=""
              border="0"
              class="network"
          /></a>

          <a
            class="inline-block"
            href="https://www.instagram.com/elitecupid/"
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
            href="https://www.youtube.com/channel/UCpHjDYdw9yzsE8L5LhrHc5A"
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
      </div>
    </div>
    <div class="trademark p1 center">
      <h5>
        Cupid Media, the Cupid Media Logo are registered trademarks of Ecom
        Holdings Pty Ltd and used with permission by Cupid Media Pty Ltd.
      </h5>
    </div>
    <el-dialog :visible.sync="isDisplayRegisterServey">
      <RegisterServey @finish="finishRegister" />
    </el-dialog>
  </div>
</template>

<script>
import RegisterServey from "@/components/RegisterServey.vue";
export default {
  components: { RegisterServey },
  data() {
    return {
      isDisplayRegisterServey: false,
    };
  },
  watch: {},
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    finishRegister() {
      this.isDisplayRegisterServey = false;
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
};
</script>
