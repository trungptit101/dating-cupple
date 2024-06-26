<template>
  <div class="refund-policy">
    <TopBanner :otherHome="true" />
    <div class="content">
      <h1 class="text-center">
        <span style="color: rgb(47, 84, 150); line-height: 40px">{{
          $t("Refund Policy")
        }}</span>
      </h1>
      <p>
        {{
          $t(
            "Welcome to Visicupid.com! We strive to provide our members with a high-quality matchmaking service. If you are not satisfied with our service, we have outlined our refund policy below to ensure clarity and transparency."
          )
        }}
      </p>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{
          $t("General Refund Policy")
        }}</span>
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Eligibility for Refunds") }}</strong
          >:
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Refunds are generally issued for unused services or in the event of technical issues that prevent the use of the service."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Requests for refunds must be made within 30 days of the original purchase date."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <strong>{{ $t("Non-Refundable Items") }}</strong
          >:
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Any fees related to events, promotions, or special offers are non-refundable."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Subscription fees for periods that have already been used or partially used are non-refundable."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{
          $t("Subscription Plans")
        }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <p>
            <strong>{{ $t("Monthly Subscriptions") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Monthly subscriptions are non-refundable after the first month of service has begun."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "To avoid being charged for the next month, cancel your subscription before the current billing period ends."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Quarterly and Annual Subscriptions") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Quarterly and annual subscriptions can be refunded on a pro-rata basis for unused months."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "To request a refund, contact our support team within 30 days of the initial subscription purchase."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Automatic Renewals") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Subscriptions renew automatically at the end of the subscription period unless canceled."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Refunds for auto-renewed subscriptions will only be issued if the cancellation request is made within 7 days of the renewal date."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{ $t("Event Fees") }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <p>
            <strong>{{ $t("Cancellation by User") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "If you cancel your participation in an event at least 5 working days before the event date, you are eligible for a full refund."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Cancellations made less than 5 working days before the event date are non-refundable."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Cancellation by Organizer") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "If the event is canceled or rescheduled by the organizer, you are eligible for a full refund or the option to transfer your fee to another event."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{
          $t("Special Promotions and Discounts")
        }}</span>
      </h2>
      <ol>
        <li>
          <strong>{{ $t("Promotional Offers") }}</strong
          >:
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "Refunds are not available for services purchased at a discounted rate during special promotions."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Terms of each promotion will be specified in the promotional materials."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{
          $t("How to Request a Refund")
        }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <p>
            <strong>{{ $t("Contact Customer Support") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "To request a refund, contact our customer support team via email at jenbusiness.sg@gmail.com or through the contact form on our website."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Provide your name, account information, and the reason for the refund request."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Processing Time") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{ $t("Refund requests are processed within 14 business days.") }}
            </li>
            <li>
              {{
                $t(
                  "Once approved, refunds are issued to the original payment method and may take additional time to reflect in your account depending on your bank or payment provider."
                )
              }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{
          $t("Changes to the Refund Policy")
        }}</span>
      </h2>
      <ol style="padding-left: 48px">
        <li>
          <p>
            <strong>{{ $t("Policy Updates") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{
                $t(
                  "We reserve the right to update this refund policy at any time."
                )
              }}
            </li>
            <li>
              {{
                $t(
                  "Changes will be posted on this page, and you are encouraged to review the policy periodically."
                )
              }}
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>{{ $t("Effective Date") }}</strong
            >:
          </p>
          <ul style="list-style-type: circle">
            <li>
              {{ $t("This refund policy is effective as of effective date’s") }}
            </li>
          </ul>
        </li>
      </ol>
      <h2>
        <span style="color: rgb(47, 84, 150)">{{ $t("Contact Us") }}</span>
      </h2>
      <p>
        {{
          $t(
            "If you have any questions or need further assistance regarding our refund policy, please contact us at:"
          )
        }}
      </p>
      <ul style="list-style-type: disc">
        <li>{{ $t("Email") }}: <span>jenbusiness.sg@gmail.com</span></li>
        <li>
          {{ $t("Phone") }}:
          <span>(+65) 98881336 (WhatsApp) (+84) 933888081 (Zalo)</span>
        </li>
      </ul>
      <p>
        {{
          $t(
            "Thank you for being a part of Visicupid.com! We value your satisfaction and are committed to providing the best possible service."
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
.refund-policy {
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
