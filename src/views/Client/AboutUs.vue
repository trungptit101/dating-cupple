<template>
  <div class="about-us">
    <TopBanner @openFormRegister="openFormRegister" :otherHome="true" />
    <div class="content">
      <div class="title bold">{{ $t("About Us") }}</div>
      <div class="text-center" style="font-size: 22px; padding-bottom: 30px">
        {{
          $t(
            "Welcome to Visicupid.com, where meaningful connections are made. Our mission is to bring together individuals who are looking for genuine relationships and help them find their perfect match."
          )
        }}
      </div>
      <div style="font-size: 20px">
        <div class="title bold">{{ $t("Our Values") }}</div>
        <div style="padding: 5px 0">
          <span style="font-weight: bold">{{ $t("Integrity") }}: </span>
          <span>{{
            $t("We conduct our services with honesty and transparency.")
          }}</span>
        </div>
        <div style="padding: 5px 0">
          <span style="font-weight: bold">{{ $t("Respect") }}: </span>
          <span>{{
            $t("We honest and respect the individuality of every client.")
          }}</span>
        </div>
        <div style="padding: 5px 0">
          <span style="font-weight: bold">{{ $t("Commitment") }}: </span>
          <span>{{
            $t("We are dedicated to helping you find a lasting relationship.")
          }}</span>
        </div>
        <div style="padding: 5px 0">
          <span style="font-weight: bold">{{ $t("Empathy") }}: </span>
          <span>{{
            $t(
              "We understand the emotional journey of finding love and offer compassionate support."
            )
          }}</span>
        </div>

        <div class="title bold" style="margin-top: 20px">
          {{ $t("What we do! “PESS”") }}
        </div>
        <div style="padding: 5px 0">
          {{
            $t(
              "At Visicupid.com, we combine the art of traditional matchmaking with the convenience of modern technology. Our comprehensive approach includes:"
            )
          }}
        </div>
        <div class="bold-character" style="padding: 5px 0">
          {{
            $t(
              "Personalized Matching: We use detailed questionnaires and in-depth profiles to understand your preferences, values, and interests. Our expert matchmakers then handpick potential matches tailored to your unique personality."
            )
          }}
        </div>
        <div class="bold-character" style="padding: 5px 0">
          {{
            $t(
              "Expert Guidance: Our team of experienced relationship coaches and matchmakers provide ongoing support and advice, ensuring you feel confident and prepared at every step of your dating journey."
            )
          }}
        </div>
        <div class="bold-character" style="padding: 5px 0">
          {{
            $t(
              "Safety and Privacy: We prioritize your safety and privacy. All profiles are verified, and we use advanced security measures to protect your information."
            )
          }}
        </div>
        <div class="bold-character" style="padding: 5px 0">
          {{
            $t(
              "Success Stories: Our greatest achievement is the countless love stories that have blossomed through our platform. We take pride in the happiness and fulfilment our clients find."
            )
          }}
        </div>
        <div class="title bold" style="margin-top: 20px">
          {{ $t("Our Story!") }}
        </div>
        <div>
          {{
            $t(
              "Founded in year’s 2023, Visicopid.com was born out of a passion for creating lasting relationship. Our founder"
            )
          }}
          <span class="bold"> Jenny Official, </span>
          {{
            $t(
              "have years of experience in relationship coaching and graduated of Matchmaker course. We saw a need for a platform that prioritizes quality over quantity. We believe that everyone deserves to find love and companionship, we’re here to make that journey smoother and more enjoyable."
            )
          }}
        </div>
        <div class="title bold" style="margin-top: 20px">
          {{ $t("Why choose Us?") }}
        </div>
        <div style="padding: 5px 0">
          {{
            $t(
              "Tailored Approach: Unlike generic dating apps, we offer a bespoke matchmaking service designed to meet your specific needs and desires."
            )
          }}
        </div>
        <div style="padding: 5px 0">
          {{
            $t(
              "Proven Track Record: With a high success rate, we have helped many individuals find meaningful relationships and lifelong partners."
            )
          }}
        </div>
        <div style="padding: 5px 0">
          {{
            $t(
              "Dedicated Support: Our friendly and professional team is always here to help, offering personalized advice and encouragement."
            )
          }}
        </div>
        <div style="padding: 5px 0">
          {{
            $t(
              "Community: Join a community of like-minded individuals who are serious about finding love. We host events and gatherings to help you connect in person"
            )
          }}
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
      title="Contact Us"
      :visible.sync="isDisplayFormContactUs"
    >
      <ContactUs @closeContact="closeContact" v-if="isDisplayFormContactUs" />
    </el-dialog>
  </div>
</template>

<script>
import TopBanner from "@/layout/components/TopBanner.vue";
import Footer from "@/layout/components/Footer.vue";
import ContactUs from "@/components/ContactUs.vue";
import RegisterServey from "@/components/RegisterServey.vue";
export default {
  components: { TopBanner, Footer, ContactUs, RegisterServey },
  data() {
    return {
      isDisplayFormContactUs: false,
      isDisplayRegisterServey: false,
    };
  },
  methods: {
    openFormRegister() {
      this.isDisplayRegisterServey = true;
    },
    finishRegister() {
      this.isDisplayRegisterServey = false;
    },
    closeContact() {
      this.isDisplayFormContactUs = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.about-us {
  .content {
    padding: 5vh;
    .title {
      font-size: 28px;
      text-align: center;
      padding-bottom: 30px;
    }
    .title-des {
      font-size: 22px;
      padding: 20px 0 10px 0;
    }
    .description {
      font-size: 16px;
    }
    .bold-character::first-letter {
      font-weight: bold;
    }
  }
}
</style>
