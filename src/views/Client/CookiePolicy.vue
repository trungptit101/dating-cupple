<template>
  <div class="cookie-policy">
    <TopBanner :otherHome="true" />
    <div class="content">
      <h1>
        {{ $t("Cookie Policy") }}
      </h1>
      <h2>
        <span style="color: #4472c4; line-height: 40px">{{
          $t("Introduction")
        }}</span>
      </h2>
      <p>
        {{
          $t(
            "Welcome to Visicupid.com. This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them."
          )
        }}
      </p>
      <h2>
        <span style="color: #4472c4">{{ $t("What are Cookies?") }}</span>
      </h2>
      <p>
        {{
          $t(
            "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information."
          )
        }}
      </p>
      <h2>
        <span style="color: #4472c4">{{ $t("Why Do We Use Cookies?") }}</span>
      </h2>
      <p>
        {{
          $t(
            "We use cookies for several reasons. Some cookies are required for technical reasons for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes."
          )
        }}
      </p>
      <h2>
        <span style="color: #4472c4">{{ $t("Types of Cookies We Use") }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <strong>{{ $t("Essential Cookies") }}</strong
          >:
          {{
            $t(
              "These cookies are necessary to provide you with services available through our website and to use some of its features, such as access to secure areas."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Performance and Functionality Cookies") }}</strong
          >:
          {{
            $t(
              "These cookies are used to enhance the performance and functionality of our website but are non-essential to its use. However, without these cookies, certain functionality may become unavailable."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Analytics and Customization Cookies") }}</strong
          >:
          {{
            $t(
              "These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you."
            )
          }}
        </li>
        <li>
          <strong>{{ $t("Advertising Cookies") }}</strong
          >:
          {{
            $t(
              "These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases, selecting advertisements that are based on your interests."
            )
          }}
        </li>
      </ol>
      <h2>
        <span style="color: #4472c4">{{ $t("Managing Cookies") }}</span>
      </h2>
      <p>
        {{
          $t(
            "You have the right to decide whether to accept or reject cookies. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly."
          )
        }}
      </p>
      <h2>
        <span style="color: #4472c4">{{
          $t("Changes to This Cookie Policy")
        }}</span>
      </h2>
      <p>
        {{
          $t(
            "We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies."
          )
        }}
      </p>
      <h2>
        <span style="color: #4472c4">{{ $t("Contact Us") }}</span>
      </h2>
      <p>
        {{
          $t(
            "If you have any questions about our use of cookies or other technologies, please email us at"
          )
        }}
        <a style="color: #4472c4" href="mailto:jenbusiness.sg@gmail.com"
          >jenbusiness.sg@gmail.com</a
        >
      </p>
      <p>
        {{
          $t(
            "By using our website, you agree to our use of cookies as described in this Cookie Policy"
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.cookie-policy {
  .content {
    text-align: justify;
    padding: 2vh 5vw;
    line-height: 25px;
    font-size: 18px;
    ol li {
      padding: 5px 0;
    }
  }
}
</style>
