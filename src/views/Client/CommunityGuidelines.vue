<template>
  <div class="community-guildelines">
    <TopBanner @openFormRegister="openFormRegister" :otherHome="true" />
    <div class="content">
      <h1 class="text-center">{{ $t("Community Guidelines") }}</h1>
      <p>
        {{
          $t(
            "Welcome to Visicupid.com ! Our community is built on mutual respect, trust, and kindness. To ensure a positive experience for all members, we ask that you adhere to the following guidelines. By using our website, you agree to these community standards."
          )
        }}
      </p>
      <p>
        <span style="color: #4472c4">{{ $t("Respect and Kindness") }}</span>
      </p>
      <ol>
        <li>
          <strong>{{ $t("Treat Others with Respect") }}</strong
          >:
          {{
            $t(
              "Always be kind, respectful, and courteous in your interactions. Harassment, hate speech, and offensive behavior are strictly prohibited."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Be Honest") }}</strong
          >:
          {{
            $t(
              "Be truthful in your profile information and communications. Misrepresentation, including using fake photos or false information, undermines trust and is not tolerated."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Safety and Privacy") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Protect Personal Information") }}</strong
          >:
          {{
            $t(
              "Never share your personal information such as home address, phone number, financial details, or work address with strangers."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Respect Others’ Privacy") }}</strong
          >:
          {{
            $t(
              "Do not ask for personal details from others that they are not comfortable sharing. Respect their boundaries and privacy."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Report Suspicious Activity") }}</strong
          >:
          {{
            $t(
              "If you encounter any suspicious behavior, harassment, or violations of these guidelines, report it to our support team immediately."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Appropriate Content") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Profile Photos and Information") }}</strong
          >:
          {{
            $t(
              "Ensure that your profile photos and information are appropriate and respectful. Inappropriate or explicit content is not allowed."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Communication") }}</strong
          >:
          {{
            $t(
              "Keep your messages polite and respectful. Avoid using offensive language, making inappropriate comments, or sending unsolicited explicit content."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("No Harassment or Discrimination") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Harassment") }}</strong
          >:
          {{
            $t(
              "Any form of harassment, including but not limited to, unwanted messages, stalking, or threats, is strictly prohibited."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Discrimination") }}</strong
          >:
          {{
            $t(
              "Discriminatory behavior based on race, ethnicity, gender, sexual orientation, religion, or any other characteristic is not tolerated."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Authentic Connections") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Genuine Intentions") }}</strong
          >:
          {{
            $t(
              "Use the website with genuine intentions to form meaningful connections. Any form of deceit, manipulation, or scam is strictly prohibited."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("No Solicitation") }}</strong
          >:
          {{
            $t(
              "Do not use the platform for commercial purposes, solicitation, or advertising."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">
        {{ $t("Responsibility and Accountability") }}
      </p>
      <ol>
        <li>
          <strong>{{ $t("Own Your Actions") }}</strong
          >:
          {{
            $t(
              "Take responsibility for your actions and words. If you make a mistake, acknowledge it and apologize."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Follow the Rules") }}</strong
          >:
          {{
            $t(
              "Adhere to these guidelines and the terms of service. Failure to comply may result in suspension or termination of your account."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Conflict Resolution") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Address Conflicts Maturely") }}</strong
          >:
          {{
            $t(
              "If a conflict arises, address it calmly and respectfully. If you cannot resolve the issue, contact our support team for assistance."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Avoid Public Disputes") }}</strong
          >:
          {{
            $t(
              "Do not engage in public disputes on the platform. Handle conflicts privately and maturely."
            )
          }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Reporting and Support") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Report Violations") }}</strong>: {{ $t("If you witness or experience any violations of these guidelines, report them immediately using the reporting tools provided or by contacting our support team.") }}
        </li>
        <li>
          <strong>{{ $t("Support Each Other") }}</strong>: {{ $t("Be a supportive member of the community. Offer help and encouragement to others, and contribute positively to the community environment.") }}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Updates and Changes") }}</p>
      <ol>
        <li>
          <strong>{{ $t("Stay Informed") }}</strong>: {{ $t("These guidelines may be updated periodically. Stay informed about any changes by regularly reviewing this page.") }}
        </li>
        <li>
          <strong>{{$t("Feedback Welcome")}}</strong>: {{$t("We value your feedback. If you have suggestions for improving these guidelines or the community experience, please contact us.")}}
        </li>
      </ol>
      <p style="color: #4472c4">{{ $t("Conclusion") }}</p>
      <p style="font-size: 15px">
        <i
          >{{ $t("At Visicupid.com, we are committed to creating a safe, respectful, and enjoyable environment for everyone. By following these community guidelines, you help us achieve this goal. Thank you for being a valuable member of our community.") }}</i
        >
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
.community-guildelines {
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
