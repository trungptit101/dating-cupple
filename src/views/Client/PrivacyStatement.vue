<template>
  <div class="about-us">
    <TopBanner @openFormRegister="openFormRegister" :otherHome="true" />
    <div class="content">
      <h1 class="text-center">{{ $t("Privacy Statement") }}</h1>
      <p style="font-size: 20px"><strong>{{ $t("Introduction") }}</strong></p>
      <p>
        {{ $t("Welcome to Visicupid.com") }}.
        <span>
          {{
            $t(
              "We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Statement outlines how we collect, use, and protect your information when you use our services."
            )
          }}
        </span>
      </p>
      <p style="font-size: 20px">
        <strong>{{ $t("Information We Collect") }}</strong>
      </p>
      <ol>
        <li>
          <strong>{{ $t("Personal Information") }}</strong
          >:
          {{
            $t(
              "When you register on our website, we collect personal information such as your name, email address, date of birth, gender, and any other details you provide during registration or profile setup."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Profile Information") }}</strong
          >:
          {{
            $t(
              "This includes information you provide about yourself, such as your interests, hobbies, relationship preferences, photographs, and any other personal details you choose to share on your profile."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Usage Data") }}</strong
          >:
          {{
            $t(
              "We collect information about how you use our website, including your browsing history, search queries, interactions with other users, and any other activities you engage in while using our services."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Location Data") }}</strong
          >:
          {{
            $t(
              "With your consent, we may collect information about your geographic location to enhance your matchmaking experience."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Payment Information") }}</strong
          >:
          {{
            $t(
              "If you choose to purchase any of our premium services, we collect payment information such as credit card details, billing address, and transaction history."
            )
          }}
        </li>
      </ol>
      <p style="font-size: 20px">
        <strong>{{ $t("How We Use Your Information") }}</strong>
      </p>
      <ol>
        <li>
          <strong>{{ $t("To Provide Our Services") }}</strong
          >:
          {{
            $t(
              "We use your personal and profile information to facilitate connections and interactions with other users."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("To Improve Our Services") }}</strong
          >:
          {{
            $t(
              "We analyses usage data to enhance the functionality and user experience of our website."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("To Communicate With You") }}</strong
          >:
          {{
            $t(
              "We use your contact information to send you updates, notifications, and promotional materials related to our services."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("To Ensure Safety and Security") }}</strong
          >:
          {{
            $t(
              "We use your information to monitor and protect the security of our website and users, including preventing fraud and other illegal activities."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("To Comply With Legal Obligations") }}</strong
          >:
          {{
            $t(
              "We may use your information to comply with applicable laws, regulations, and legal processes."
            )
          }}
        </li>
      </ol>
      <p style="font-size: 20px">
        <strong>{{ $t("Sharing Your Information") }}</strong>
      </p>
      <ol>
        <li>
          <strong>{{ $t("With Service Providers") }}</strong
          >:
          {{
            $t(
              "We may share your information with third-party service providers who assist us in operating our website and providing our services, such as payment processors and hosting providers."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("With Law Enforcement") }}</strong
          >:
          {{
            $t(
              "We may disclose your information to law enforcement agencies or other governmental authorities if required by law or to protect the rights, property, or safety of our users and the public."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("With Your Consent") }}</strong
          >:
          {{
            $t(
              "We may share your information with third parties if you have given us your explicit consent to do so."
            )
          }}
        </li>
      </ol>
      <p style="font-size: 20px">
        <strong>{{ $t("Protecting Your Information") }}</strong>
      </p>
      <ol>
        <li>
          <strong>{{ $t("Data Security") }}</strong
          >:
          {{
            $t(
              "We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. This includes encryption, secure socket layer (SSL) technology, and access controls."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Data Retention") }}</strong
          >:
          {{
            $t(
              "We retain your information for as long as necessary to provide our services and fulfil the purposes outlined in this Privacy Statement, unless a longer retention period is required or permitted by law."
            )
          }}
        </li>
      </ol>
      <p style="font-size: 20px">
        <strong>{{ $t("Your Rights") }}</strong>
      </p>
      <ol>
        <li>
          <strong>{{ $t("Access and Correction") }}</strong
          >:
          {{
            $t(
              "You have the right to access and update your personal information at any time through your account settings."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Data Portability") }}</strong
          >:
          {{
            $t(
              "You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Deletion") }}</strong
          >:
          {{
            $t(
              "You have the right to request the deletion of your personal information, subject to certain exceptions as required by law."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Opt-Out") }}</strong
          >:
          {{
            $t(
              "You have the right to opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications."
            )
          }}
        </li>
      </ol>
      <p style="font-size: 20px">
        <strong>{{ $t("Changes to This Privacy Statement") }}</strong>
      </p>
      <p>
        {{
          $t(
            "We may update this Privacy Statement from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new Privacy Statement on our website and updating the effective date."
          )
        }}
      </p>
      <p>
        {{
          $t(
            "If you have any questions or concerns about this Privacy Statement or our privacy practices, please contact us at"
          )
        }}
        <strong>(+65) 98881336</strong>.
      </p>
      <p>
        {{
          $t(
            "By using our website, you acknowledge that you have read and understood this Privacy Statement and agree to the collection, use, and sharing of your information as described herein."
          )
        }}
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
.about-us {
  .content {
    padding: 2vh 5vw;
    line-height: 25px;
    font-size: 18px;
    ol li {
      padding: 5px 0;
    }
  }
}
</style>
