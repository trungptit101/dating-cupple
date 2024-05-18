<template>
  <div>
    <div class="upgradebanner">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in carouselsList" :key="index">
          <div class="slide flex items-center justify-center">
            <div class="m1 flex items-center">
              <div class="me2"></div>
              <div class="left-align color-dark-grey">
                <h2 class="bold m0">{{ item.title }}</h2>
                <div class="m0 max-width-2 pre-line">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="payment-content-max-width mx-auto px2">
      <div class="max-width mx-auto my3">
        <div class="tabs center">
          <h1 class="h1 m0 pb1 bold">
            Unlock the Benefits of Diamond Membership
          </h1>
        </div>
      </div>

      <div id="paymentOptions" data-membership-selected="37">
        <div class="mb3" data-toggle-membershipoptionstab="Diamond">
          <div class="flex justify-around">
            <div class="me3">
              <label class="col-12 pointer" for="DiamondMonth3">
                <div class="flex items-center flex-none">
                  <div class="ms1">
                    <h3 class="m0 color-medium-grey">6 Months</h3>
                    <div class="flex-none">
                      <strong>
                        <span data-currency-price="Diamond3"
                          >1.063.700 ₫ VND</span
                        >
                        <span class="regular color-medium-grey">per month</span>
                      </strong>
                    </div>
                  </div>
                </div>
                <div class="col-12 my2">
                  <div class="opacity-8" data-billed="">
                    Billed in one payment of
                    <span data-currency-price="Diamond3_2"
                      >3.191.100 ₫ VND</span
                    >
                  </div>
                </div>
              </label>
            </div>

            <div class="mb3">
              <label class="col-12 pointer" for="DiamondMonth12">
                <div class="flex items-center flex-none">
                  <input
                    type="radio"
                    name="product"
                    id="DiamondMonth12"
                    value="39"
                    data-only-show="reset"
                    class="touched"
                  />
                  <div class="icon icon-40 flex-none circle relative diamond">
                    <svg class="icon-40 absolute circle unchecked">
                      <use
                        xlink:href="/assets/desktop/icons/icons.svg#icon-radio-off"
                      ></use>
                    </svg>
                    <svg class="icon-40 absolute circle checked">
                      <use
                        xlink:href="/assets/desktop/icons/icons.svg#icon-radio-on"
                      ></use>
                    </svg>
                  </div>
                  <div class="ms1">
                    <h3 class="m0 color-medium-grey">12 Months</h3>
                    <div class="flex-none">
                      <strong>
                        <span data-currency-price="Diamond12"
                          >499.400 ₫ VND</span
                        >
                        <span class="regular color-medium-grey">per month</span>
                      </strong>
                    </div>
                  </div>
                </div>
                <div class="col-12 my2">
                  <div class="opacity-8" data-billed="">
                    Billed in one payment of
                    <span data-currency-price="Diamond12_2"
                      >5.992.800 ₫ VND</span
                    >
                  </div>
                </div>
                <div class="center white rounded my1 py1 px2 bg-diamond h4">
                  SAVE <span>62</span>%
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div data-payment-options="" class="fade-in">
        <h2 class="bold body-font-color upgrade-experiment payment-title">
          Choose a payment method
        </h2>
        <div class="mb3">
          <div
            class="mb2 pointer payment-option flex items-center"
            data-only-show-this="credit"
          >
            <div class="flex items-center justify-between col-12">
              <label for="credit" class="pointer col-12">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    class="changeCurrency"
                    id="credit"
                    value="1,1"
                    checked="checked"
                  />
                  <div
                    class="icon icon-40 flex-none circle relative green upgrade-experiment payment-selector-wrapper"
                  >
                    <svg class="icon-40 absolute circle unchecked">
                      <use
                        xlink:href="/assets/desktop/icons/icons.svg#icon-radio-off"
                      ></use>
                    </svg>
                    <svg class="icon-40 absolute circle checked">
                      <use
                        xlink:href="/assets/desktop/icons/icons.svg#icon-radio-on"
                      ></use>
                    </svg>
                  </div>
                  <div class="col-3 me2">
                    <div class="ms1 upgrade-experiment payment-variant-text">
                      Credit / Debit Card
                      <div class="green regular h6 m0">Recommended</div>
                    </div>
                  </div>
                  <div class="flex items-center col-8 ms2">
                    <div class="bank-logo me1 flex items-center">
                      <img class="fit" src="@/assets/images/visa.png" />
                    </div>

                    <div class="bank-logo me1 flex items-center">
                      <img class="fit" src="@/assets/images/amex.png" />
                    </div>

                    <div class="bank-logo me1 flex items-center">
                      <img class="fit" src="@/assets/images/bank.png" />
                    </div>
                  </div>
                </div>
              </label>
              <div
                alt="info"
                id="1"
                data-title="Credit Card Payment Information"
                data-cm-modal-url="/en/payment/showPaymentMethodInformationC?paymentmethod=1"
              >
                <div
                  class="upgrade-experiment help-icon-wrapper icon icon-20 flex-none fill-action-unhighlight"
                >
                  <svg class="icon-24 absolute circle unchecked">
                    <use
                      xlink:href="/assets/desktop/icons/icons.svg#icon-help"
                    ></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-need-payment-option="true" hidden="">
          <div class="m2 flex items-center">
            <div class="icon-24 fill-red me2">
              <!--?xml version="1.0" encoding="utf-8"?-->
              <!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve"
              >
                <circle cx="25" cy="25" r="24.5"></circle>
                <path
                  class="st0"
                  d="M24.6,44.2c-2.8,0-4.9-2.2-4.9-5.1c0-3,2.1-5.2,4.8-5.2c2.8,0,4.8,2.1,4.8,5.2C29.4,42,27.4,44.2,24.6,44.2
                  L24.6,44.2z M20.6,6.5c0.4-0.4,1-0.7,1.6-0.7h4.8c0.6,0,1.2,0.2,1.6,0.7c0.4,0.4,0.6,1,0.6,1.6l-0.8,18c0,1.2-1.1,2.2-2.3,2.2h-3
                  c-1.2,0-2.2-1-2.3-2.2L20,8.1C19.9,7.5,20.2,6.9,20.6,6.5L20.6,6.5z"
                ></path>
              </svg>
            </div>
            <div class="h4">Please select a payment option</div>
          </div>
        </div>

        <div
          class="col-10 center my2 mx-auto upgrade-experiment sdv-co-reg-wrapper"
          data-incsdvcopromo="true"
          data-inc-s-d-v-co-promo="true"
        >
          <label for="incSDGCoReg" class="flex mx0">
            <input
              name="sdgCoRegSiteID"
              value="1001"
              hidden=""
              id="sdgCoRegSiteID"
            />
            <input
              type="checkbox"
              name="incSDGCoReg"
              value="1001"
              class="hide"
              id="incSDGCoReg"
            />
            <div
              class="icon icon-30 relative green pl1 upgrade-experiment sdv-co-reg-checkbox"
            >
              <svg class="absolute icon-30 left-0 mt1">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/desktop/icons/icons.svg?v=20240423110304&amp;#icon-checkbox-on"
                ></use>
              </svg>
              <svg class="absolute icon-30 left-0 unchecked mt1">
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/desktop/icons/icons.svg?v=20240423110304&amp;#icon-checkbox-off"
                ></use>
              </svg>
            </div>
            <div
              class="mt1 highlight-a relative ms2 upgrade-experiment sdv-co-reg-text"
            >
              By opting in, you receive a free 1-month trial on Dating.com and
              agree that your profile (including photos, personal and payment
              data) will be copied to Dating.com (SOL Networks Limited) and you
              accept
              <a href="" target="_blank">Terms</a>
              and
              <a href="" target="_blank">Privacy Policy</a>
              of Dating.com
            </div>
          </label>
        </div>

        <div class="col-12 center my2">
          <button
            type="submit"
            class="upgrade-experiment upgrade-button relative bg-green white h4 py2 px4 my2 rounded shadow border-none upper-case pointer"
            @click="upgradePayment"
          >
            Upgrade Now
          </button>
        </div>

        <div
          class="upgrade-experiment auto-renew-text p0 m0 my1 mx-auto max-width-3 highlight-a center opacity-8"
          data-renew-text=""
        >
          This subscription will be automatically renewed once it expires. This
          will ensure continuous access to all the benefits of a premium
          membership so you can enjoy uninterrupted communications with all your
          potential matches. You can opt out of auto renewal at any time.
          <span class="highlight pointer" data-cm-modal-btn="renew_learnmore"
            >Learn more</span
          >
        </div>
      </div>

      <div id="renew_learnmore" hidden="">
        <div class="modal max-width-2 bg-white rounded p2 fade-in">
          <div class="m2 center">
            <svg class="icon-116 fill-grey color-action-highlight">
              <use
                xlink:href="/assets/desktop/icons/icons.svg#icon-settings"
              ></use>
            </svg>
            <h1>Automatic Renewal</h1>
            <p>
              <b>Automatic Renewal - Continuous Service</b><br />
              There is nothing worse than losing touch with a potential match
              when all you want to do is continue your conversation! To avoid
              this interruption, your membership on EliteCupid.com will be
              automatically renewed. After your initial membership period
              expires, your membership will be automatically renewed for an
              additional equivalent period, at the same price. Your credit/debit
              card will be automatically charged.<br /><br />
              <b>Billing Details</b><br />

              The charge on your billing statement or card will appear as
              "EliteCupid.com Southport AU". You are being billed by Cupid Media
              Pty Ltd, Suite 2502, 5 Lawson Street, Southport, QLD 4215,
              Australia.<br /><br />

              <b>Cancel Any Time</b><br />
              We don't want to interrupt your conversations so we offer a
              continuous service. However, if you want to discontinue the
              service, you can opt out of auto renewal at any time. Simply
              select 'Billing' from the Settings menu to change your billing
              preferences.<br /><br />
              <b>Customer Service</b><br />
              Need more help or information? Feel free to contact our
              <a href="/en/general/contact">customer service team</a>.
            </p>
          </div>
          <div class="flex justify-end">
            <a class="link" aria-controls="modal">Close</a>
          </div>
        </div>
      </div>
      <div
        id="progress-spinner"
        class="overlay flex justify-center items-center col-12 fixed z4 top-0 right-0 left-0 bottom-0 white"
        data-text="Processing now, please wait ..."
        hidden=""
      >
        <svg class="icon-large heart-icon spinner m1 logo-heart site-logo">
          <use xlink:href="#icon-logoheart"></use>
        </svg>
        <span>Processing now, please wait ...</span>
      </div>

      <div class="col-12 flex items-center mb1"></div>

      <h2 class="bold body-font-color mt3">Your Diamond features</h2>

      <div class="max-width mx-auto">
        <div class="col-12 flex flex-wrap">
          <div class="mb3 col-features me4">
            <div class="h3 mb1">Basic Matching</div>

            <p class="m0 opacity-8">
              We show you profiles that match your ideal partner filtered by
              age, interests and lifestyle.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Like</div>

            <p class="m0 opacity-8">
              Show you're interested by sending profile likes to other members
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">Communicate with Paying Members</div>

            <p class="m0 opacity-8">
              Start messaging any paying member you've got your eye on!
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Send Unlimited Communications</div>

            <p class="m0 opacity-8">
              Start interacting via instant messenger chat.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Unlock Your Messages</div>

            <p class="m0 opacity-8">
              Send and receive unlimited messages to all members
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">Say Goodbye to Ads</div>

            <p class="m0 opacity-8">
              Premium members enjoy no third-party ads in their dating
              experience.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Hide Your Profile and Photos</div>

            <p class="m0 opacity-8">
              Value your privacy? Premium members can their profiles and photos
              from other members with ease.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Double Your Profile Space</div>

            <p class="m0 opacity-8">
              Eligible members get twice the profile space in search results.
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">Get Better Matches</div>

            <p class="m0 opacity-8">
              Find your perfect partner easier with access to exclusive mutual
              and reverse matching algorithms. It's never been easier to find
              that special someone.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Instantly Translate Messages</div>

            <p class="m0 opacity-8">
              Don't let language barriers get in the way of love with messages
              translated instantly.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Priority Messaging</div>

            <p class="m0 opacity-8">
              Be the top message in the inbox of all the singles that you've
              messaged.
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">Rank Above All Members</div>

            <p class="m0 opacity-8">
              Have your profile rank above all members in search results.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Profile Highlighting</div>

            <p class="m0 opacity-8">
              Show you're a serious dater with the exclusive Diamond icon on
              your profile.
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">Premium Customer Service</div>

            <p class="m0 opacity-8">
              Experience premium customer service, 24 hours a day, 7 days a
              week, 365 days a year.
            </p>
          </div>
        </div>
      </div>

      <!-- if not sparks products -->

      <div class="flex items-start mt4 pb4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselsList: [
        {
          title: "Send Unlimited Communications",
          description: "Start interacting via instant messenger chat.",
        },
        {
          title: "Access All Your Messages",
          description: "Send and receive unlimited messages to all members.",
        },
        {
          title: "Say Goodbye to Ads",
          description:
            "Premium members enjoy no third-party ads in their dating experience. Upgrade now and say goodbye to ads!",
        },
        {
          title: "Double Your Profile Space",
          description:
            "Eligible members get twice the profile space in search results. Upgrade now and enjoy the extra attention from eligible singles.",
        },
        {
          title: "Rank Above Other Members",
          description:
            "As a premium member, your profile will rank above standard members in search results.",
        },
        {
          title: "Exclusive Diamond Membership",
          description:
            "Diamond members will appear at the top of all results and have all their messages prioritised above others.",
        },
      ],
    };
  },
  watch: {},
  methods: {
    upgradePayment() {
      this.$emit('upgradePayment')
    }
  },
};
</script>
<style lang="scss">
.upgradebanner {
  .el-carousel__container {
    height: 150px;
    background-color: #e5e5e5;
  }
  .el-carousel__item {
    display: flex;
    justify-content: center;
  }
}
.payment-content-max-width {
  max-width: 980px;
  margin: 0px auto;
}
</style>
