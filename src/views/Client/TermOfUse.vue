<template>
  <div class="term-of-use">
    <TopBanner @openFormRegister="openFormRegister" :otherHome="true" />
    <div class="content">
      <h1 class="text-center" style="padding-bottom: 20px">
        {{ $t("Welcome to Visicupid.com") }}
      </h1>
      <p style="font-size: 18px">
        {{ $t("By accessing or using our website, you agree to comply with and be bound by these Terms of Use. Please read them carefully. If you do not agree with these terms, you must not use our website.") }}
      </p>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Eligibility") }}</span
        >
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Age Requirement") }}</strong>: {{ $t("You must be at least 18 years old to use our services.") }}
        </li>
        <li>
          <strong>{{ $t("Single Status") }}</strong>: {{ $t("You must be single or legally divorced to register and use our services.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Account Registration") }}</span
        >
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Accuracy of Information") }}</strong>: {{ $t("You agree to provide accurate, current, and complete information during the registration process.") }}
        </li>
        <li>
          <strong>{{ $t("Confidentiality") }}</strong>: {{ $t("You are responsible for maintaining the confidentiality of your login credentials.") }}
        </li>
        <li>
          <strong>{{ $t("Prohibited Actions") }}</strong>: {{ $t("You must not use another user's account or provide your account details to another person.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("User Conduct") }}</span
        >
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Respect and Civility") }}</strong>: {{ $t("You agree to interact with other users respectfully and civilly.") }}
        </li>
        <li>
          <strong>{{ $t("Prohibited Content") }}</strong>: {{ $t("You must not post or share any content that is defamatory, abusive, obscene, threatening, or illegal.") }}
        </li>
        <li>
          <strong>{{ $t("No Commercial Use") }}</strong>: {{ $t("Our services are for personal use only. You must not use the site for commercial purposes or solicit other users for commercial ventures.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500">{{ $t("Privacy") }}</span>
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Data Collection") }}</strong>: {{ $t("We collect and use your personal data in accordance with our Privacy Policy. Yourself must understanding do not share any your contact with other candidates when you not sure is safe to personal giving. We will not responsibility of risk if you not following our Privacy Term.") }}
        </li>
        <li>
          <strong>{{ $t("Data Security") }}</strong>: {{ $t("We implement reasonable measures to protect your data, but we cannot guarantee absolute security.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Payment and Subscription") }}</span
        >
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Fees") }}</strong>: {{ $t("Some of our services require payment. You agree to pay all fees and charges associated with your use of the services.") }}
        </li>
        <li>
          <strong>{{ $t("Cancellation and Refunds") }}</strong>: {{ $t("Our refund and cancellation policies are outlined in our Refund Policy.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Termination") }}</span
        >
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Termination by User") }}</strong>: {{ $t("You may terminate your account at any time.") }}
        </li>
        <li>
          <strong>{{ $t("Termination by Us") }}</strong>: {{ $t("We reserve the right to suspend or terminate your account if you violate these terms or engage in behaviour that we deem inappropriate.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Disclaimers") }}</span
        >
      </h2>
      <ol>
        <li>
          <strong>{{ $t("No Guarantees") }}</strong>: {{ $t("We do not guarantee that you will find a match or that our services will be uninterrupted or error-free.") }}
        </li>
        <li>
          <strong>{{ $t("Third-Party Links") }}</strong>: {{ $t("Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites.") }}
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Limitation of Liability") }}</span
        >
      </h2>
      <p style="font-size: 18px">
        {{ $t("To the maximum extent permitted by law, Visicupid.com will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.") }}
      </p>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Governing Law") }}</span
        >
      </h2>
      <p style="font-size: 18px">
        {{ $t("These Terms of Use are governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles. By using our services, you agree to submit to the exclusive jurisdiction of the courts of Singapore for the resolution of any disputes that may arise out of or in connection with these terms or your use of our services. Changes to Terms") }}
      </p>
      <p>
        {{ $t("We may modify these Terms of Use at any time. We will notify you of any changes by posting the new terms on our website. Your continued use of our services after the changes have been posted constitutes your acceptance of the new terms.") }}
      </p>
      <h2>
        <span style="color: rgb(47, 84, 150); font-weight: 500"
          >{{ $t("Contact Us") }}</span
        >
      </h2>
      <p style="font-size: 18px">
        {{ $t("If you have any questions about these Terms of Use, please contact us at") }}
        <span class="bold">(+65) 98881336</span>.
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopBanner from "@/layout/components/TopBanner.vue";
import Footer from "@/layout/components/Footer.vue";
export default {
  components: { TopBanner, Footer },
  data() {
    return {};
  },
  methods: {
    openFormRegister() {
      this.isDisplayRegisterServey = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.term-of-use {
  .content {
    padding: 2vh 5vw;
    line-height: 25px;
    ol li {
      font-size: 18px;
      padding: 5px 0;
    }
  }
}
</style>
