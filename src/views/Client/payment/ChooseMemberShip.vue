<template>
  <div class="choose-member-ship">
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
            {{ $t("Unlock the Benefits of Diamond Membership") }}
          </h1>
        </div>
      </div>

      <div id="paymentOptions" data-membership-selected="37">
        <div class="mb3" data-toggle-membershipoptionstab="Diamond">
          <div class="flex justify-around">
            <div
              class="me3"
              v-for="(packPayment, index) in list"
              :key="index"
              @click="choosePackPayment(packPayment)"
            >
              <label class="col-12 pointer" for="DiamondMonth3">
                <div class="flex items-center flex-none">
                  <el-radio
                    class="pack-payment-price"
                    v-model="packageSelected"
                    :label="packPayment.id"
                  ></el-radio>
                  <div class="ms1">
                    <h3 class="m0 color-medium-grey">
                      {{ packPayment.months }} {{ $t("Months") }}
                    </h3>
                    <div class="flex-none">
                      <strong>
                        <span data-currency-price="Diamond3">{{
                          caculatePermonth(packPayment)
                        }}</span>
                        <span class="regular color-medium-grey">
                          {{ $t("per month") }}</span
                        >
                      </strong>
                    </div>
                  </div>
                </div>
                <div class="col-12 my2">
                  <div class="opacity-8" data-billed="">
                    {{ $t("Billed in one payment of") }}
                    <span data-currency-price="Diamond3_2">{{
                      discountGender
                        ? (
                            (Number(packPayment[keyPriceLanguage]) *
                              (100 - discountGender)) /
                            100
                          ).toLocaleString("it-IT", {
                            style: "currency",
                            currency: currencyLanguage,
                          })
                        : Number(packPayment[keyPriceLanguage]).toLocaleString(
                            "it-IT",
                            {
                              style: "currency",
                              currency: currencyLanguage,
                            }
                          )
                    }}</span>
                  </div>
                </div>
                <div
                  class="center white rounded my1 py1 px2 bg-diamond h4"
                  v-if="index != 0"
                >
                  {{ $t("sale off") }}
                  <span>{{ saleOffPackage(packPayment) }}</span
                  >%
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div data-payment-options="" class="fade-in">
        <h2 class="bold body-font-color upgrade-experiment payment-title">
          {{ $t("Choose a payment method") }}
        </h2>
        <div class="mb3">
          <div class="mb2 pointer payment-option flex items-center">
            <div class="flex items-center justify-between col-12">
              <label for="credit" class="pointer col-12">
                <div class="flex items-center">
                  <el-radio
                    v-model="paymentMethod"
                    class="pack-payment-price"
                    label="creditCard"
                  ></el-radio>
                  <div class="col-3 me2">
                    <div class="ms1 upgrade-experiment payment-variant-text">
                      {{ $t("Credit / Debit Card") }}
                      <div class="green regular h6 m0">
                        {{ $t("Recommended") }}
                      </div>
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
            </div>
          </div>
          <div class="mb2 pointer payment-option flex items-center">
            <div class="flex items-center justify-between col-12">
              <label for="credit" class="pointer col-12">
                <div class="flex items-center">
                  <el-radio
                    v-model="paymentMethod"
                    class="pack-payment-price"
                    label="internetBanking"
                  ></el-radio>
                  <div class="col-3 me2">
                    <div class="ms1 upgrade-experiment payment-variant-text">
                      {{ $t("Internet Banking") }}
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="text-center" v-if="paymentMethod == 'internetBanking'">
          <div v-if="getInternetBankingCountry">
            <img
              :src="getInternetBankingCountry.qrcode"
              style="width: 250px; height: 250px; object-fit: cover"
            />
            <div style="font-size: 18px; font-weight: 500">
              {{ $t("Bank transfer information") }}
            </div>
            <div
              style="
                font-size: 16px;
                background: #fceebf;
                padding: 10px 0;
                border-radius: 5px;
                width: 80%;
                margin: 0px auto;
                margin-top: 15px;
                color: #756738;
              "
            >
              {{
                $t(
                  "Please send the correct content so we can confirm payment",
                  { contentBanking: contentBanking }
                )
              }}
            </div>
            <table class="infomation-banking">
              <tr>
                <td>{{ $t("Account name") }}</td>
                <td>{{ getInternetBankingCountry.account_name }}</td>
              </tr>
              <tr>
                <td>{{ $t("Account number") }}</td>
                <td>{{ getInternetBankingCountry.account_number }}</td>
              </tr>
              <tr>
                <td>{{ $t("Bank") }}</td>
                <td>{{ getInternetBankingCountry.bank }}</td>
              </tr>
              <tr>
                <td>{{ $t("Amount") }}</td>
                <td>
                  {{
                    discountGender
                      ? (
                          (Number(
                            packPaymentInternetBanking[keyPriceLanguage]
                          ) *
                            (100 - discountGender)) /
                          100
                        ).toLocaleString("it-IT", {
                          style: "currency",
                          currency: currencyLanguage,
                        })
                      : Number(
                          packPaymentInternetBanking[keyPriceLanguage]
                        ).toLocaleString("it-IT", {
                          style: "currency",
                          currency: currencyLanguage,
                        })
                  }}
                </td>
              </tr>
              <tr>
                <td>{{ $t("Content") }}</td>
                <td>{{ contentBanking }}</td>
              </tr>
            </table>
            <el-button
              type="submit"
              class="upgrade-experiment upgrade-button relative bg-green white h4 py2 px4 my2 rounded shadow border-none upper-case pointer"
              :loading="loadingPaymentBanking"
              @click="paymentBanking"
            >
              {{ $t("I have already paid") }}
            </el-button>
          </div>
        </div>

        <div
          class="col-10 center my2 mx-auto upgrade-experiment sdv-co-reg-wrapper"
        >
          <label>
            <div
              class="mt1 highlight-a relative ms2 upgrade-experiment sdv-co-reg-text"
            >
              {{
                $t(
                  "By opting in, you receive a free 1-month trial agree that your profile (including photos, personal and payment data) will be copied to Dating.com (SOL Networks Limited) and you accept"
                )
              }}
              <a
                @click="$router.push({ path: '/term-of-use' })"
                target="_blank"
                >{{ $t("Terms") }}</a
              >
              {{ $t("and") }}
              <a
                @click="$router.push({ path: '/privacy-statement' })"
                target="_blank"
                >{{ $t("Privacy Policy") }}</a
              >
              {{ $t("of") }} visicupid.com
            </div>
          </label>
        </div>
        <!-- <div v-if="language == 'vi'">
          <el-radio v-model="methodPaymentVnPay" label="INTCARD"
            >Thanh toán qua thẻ quốc tế</el-radio
          >
          <el-radio v-model="methodPaymentVnPay" label="VNBANK"
            >Thanh toán qua thẻ ATM/Tài khoản nội địa</el-radio
          >
          <el-radio v-model="methodPaymentVnPay" label="VNPAYQR"
            >Thanh toán bằng ứng dụng hỗ trợ VNPAYQR</el-radio
          >
        </div> -->

        <div class="col-12 center my2 flex justify-center">
          <!-- <el-button
            type="submit"
            class="upgrade-experiment upgrade-button relative bg-green white h4 py2 px4 my2 rounded shadow border-none upper-case pointer"
            :loading="isLoading"
            @click="upgradePayment"
            :disabled="!packageSelected"
            v-if="language == 'vi'"
          >
            {{ $t("Pay Now") }}
          </el-button> -->
          <div
            v-if="
              packageSelected &&
              isDisplayPaypal &&
              paymentMethod == 'creditCard'
            "
            id="paypal-button-container"
            style="width: 400px"
          ></div>
        </div>

        <div
          class="upgrade-experiment auto-renew-text p0 m0 my1 mx-auto max-width-3 highlight-a center opacity-8"
          data-renew-text=""
        >
          {{
            $t(
              "This subscription will be automatically renewed once it expires. This will ensure continuous access to all the benefits of a premium membership so you can enjoy uninterrupted communications with all your potential matches. You can opt out of auto renewal at any time."
            )
          }}
          <span class="highlight pointer" data-cm-modal-btn="renew_learnmore">{{
            $t("Learn more")
          }}</span>
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
            <h1>{{ $t("Automatic Renewal") }}</h1>
            <p>
              <b>{{ $t("Automatic Renewal - Continuous Service") }}</b
              ><br />
              {{
                $t(
                  "There is nothing worse than losing touch with a potential match when all you want to do is continue your conversation! To avoid this interruption, your membership on Visicupid.com will be automatically renewed. After your initial membership period expires, your membership will be automatically renewed for an additional equivalent period, at the same price. Your credit/debit card will be automatically charged."
                )
              }}<br /><br />
              <b>{{ $t("Billing Details") }}</b
              ><br />

              {{
                $t(
                  "The charge on your billing statement or card will appear as 'Visicupid.com Southport AU'. You are being billed by Cupid Media Pty Ltd, Suite 2502, 5 Lawson Street, Southport, QLD 4215, Australia."
                )
              }}<br /><br />

              <b>{{ $t("Cancel Any Time") }}</b
              ><br />
              {{
                $t(
                  "We don't want to interrupt your conversations so we offer a continuous service. However, if you want to discontinue the service, you can opt out of auto renewal at any time. Simply select 'Billing' from the Settings menu to change your billing preferences."
                )
              }}<br /><br />
              <b>{{ $t("Customer Service") }}</b
              ><br />
              {{
                $t("Need more help or information? Feel free to contact our")
              }}
              <a href="/en/general/contact">{{ $t("customer service team") }}</a
              >.
            </p>
          </div>
          <div class="flex justify-end">
            <a class="link" aria-controls="modal">{{ $t("Close") }}</a>
          </div>
        </div>
      </div>
      <div class="col-12 flex items-center mb1"></div>

      <h2 class="bold body-font-color mt3">
        {{ $t("Your Diamond features") }}
      </h2>

      <div class="max-width mx-auto">
        <div class="col-12 flex flex-wrap">
          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Basic Matching") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "We show you profiles that match your ideal partner filtered by age, interests and lifestyle."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Like") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Show you're interested by sending profile likes to other members"
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">
              {{ $t("Communicate with Paying Members") }}
            </div>

            <p class="m0 opacity-8">
              {{
                $t("Start messaging any paying member you've got your eye on!")
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Send Unlimited Communications") }}</div>

            <p class="m0 opacity-8">
              {{ $t("Start interacting via instant messenger chat.") }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Unlock Your Messages") }}</div>

            <p class="m0 opacity-8">
              {{ $t("Send and receive unlimited messages to all members") }}
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">{{ $t("Say Goodbye to Ads") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Premium members enjoy no third-party ads in their dating experience."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Hide Your Profile and Photos") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Value your privacy? Premium members can their profiles and photos from other members with ease."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Double Your Profile Space") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Eligible members get twice the profile space in search results."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">{{ $t("Get Better Matches") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Find your perfect partner easier with access to exclusive mutual and reverse matching algorithms. It's never been easier to find that special someone."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Instantly Translate Messages") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Don't let language barriers get in the way of love with messages translated instantly."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Priority Messaging") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Be the top message in the inbox of all the singles that you've messaged."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features">
            <div class="h3 mb1">{{ $t("Rank Above All Members") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Have your profile rank above all members in search results."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Profile Highlighting") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Show you're a serious dater with the exclusive Diamond icon on your profile."
                )
              }}
            </p>
          </div>

          <div class="mb3 col-features me4">
            <div class="h3 mb1">{{ $t("Premium Customer Service") }}</div>

            <p class="m0 opacity-8">
              {{
                $t(
                  "Experience premium customer service, 24 hours a day, 7 days a week, 365 days a year."
                )
              }}
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
import { getAllPaymentPackage } from "@/api/payment-package";
import {
  createOrder,
  createOrderPaypal,
  cancelOrderPaypal,
  paymentBanking,
} from "@/api/order";
import { detailOrder } from "@/api/order";
import { OrderStatus } from "@/define/index";
import { getListStrategies } from "@/api/discount-strategy";
import store from "@/store";
import { getList } from "@/api/internet-banking";
export default {
  data() {
    return {
      carouselsList: [
        {
          title: this.$t("Send Unlimited Communications"),
          description: this.$t("Start interacting via instant messenger chat."),
        },
        {
          title: this.$t("Access All Your Messages"),
          description: this.$t(
            "Send and receive unlimited messages to all members."
          ),
        },
        {
          title: this.$t("Say Goodbye to Ads"),
          description: this.$t(
            "Premium members enjoy no third-party ads in their dating experience. Upgrade now and say goodbye to ads!"
          ),
        },
        {
          title: this.$t("Double Your Profile Space"),
          description: this.$t(
            "Eligible members get twice the profile space in search results. Upgrade now and enjoy the extra attention from eligible singles."
          ),
        },
        {
          title: this.$t("Rank Above Other Members"),
          description: this.$t(
            "As a premium member, your profile will rank above standard members in search results."
          ),
        },
        {
          title: this.$t("Exclusive Diamond Membership"),
          description: this.$t(
            "Diamond members will appear at the top of all results and have all their messages prioritised above others."
          ),
        },
      ],
      packageSelected: {},
      isDisplayPaypal: false,
      isLoading: false,
      list: [],
      listInternetBanking: [],
      methodPaymentVnPay: "INTCARD",
      discountGender: 0,
      language: localStorage.getItem("language") || "en",
      paymentMethod: "creditCard",
      contentBanking: `VSI-${Math.round(Math.random() * 100000)}`,
      loadingPaymentBanking: false,
    };
  },
  created() {
    if (!this.user.is_complete_survey) {
      this.$router.push({ path: "/survey-question" });
      return;
    }
    this.getListDiscount();
    this.getListInternetBanking();
    detailOrder()
      .then((res) => {
        if (
          res.status != "completed" ||
          res.order.payment_status != OrderStatus.PAYMENT_STATUS_COMPLETE
        ) {
          this.getList();
        } else this.$router.push({ path: "/partner/suggest" });
      })
      .catch((err) => {
        if (
          !err.response.data.order ||
          (err.response.data.order &&
            err.response.data.order.payment_status !=
              OrderStatus.PAYMENT_STATUS_COMPLETE)
        ) {
          this.getList();
        } else this.$router.push({ path: "/partner/suggest" });
      });
  },
  computed: {
    keyPriceLanguage() {
      const lang = localStorage.getItem("language") || "en";
      if (lang == "vi") return "price_vnpay";
      return "price_paypal";
    },
    currencyLanguage() {
      const lang = localStorage.getItem("language") || "en";
      if (lang == "vi") return "VND";
      return "USD";
    },
    user() {
      return store.getters.user;
    },
    getInternetBankingCountry() {
      if (!this.listInternetBanking.length) return null;
      const lang = localStorage.getItem("language") || "en";
      const bankingCountry = this.listInternetBanking.find(
        (e) => e.country == lang
      );
      if (!bankingCountry) return null;
      return bankingCountry;
    },
    packPaymentInternetBanking() {
      const packId = this.packageSelected;
      const pack = this.list.find((e) => e.id == packId);
      return pack || {};
    },
  },
  methods: {
    paymentBanking() {
      this.loadingPaymentBanking = true;
      paymentBanking({
        id: this.packageSelected,
        content: this.contentBanking,
        lang: this.language,
      })
        .then((res) => {
          this.loadingPaymentBanking = false;
          this.$router.push({ path: "/payment/inprogress" });
        })
        .catch(() => {
          this.loadingPaymentBanking = true;
        });
    },
    getListInternetBanking() {
      getList().then((res) => {
        this.listInternetBanking = res.data;
      });
    },
    getListDiscount() {
      getListStrategies().then((response) => {
        const today = new Date().toLocaleDateString();
        const todayValue = new Date(today).valueOf();
        const discountValid = response.data.find((e) => {
          const startValue = new Date(e.start).valueOf();
          const endValue = new Date(e.end).valueOf();
          return (
            e.gender == this.user.gender &&
            (todayValue > startValue || todayValue == startValue) &&
            (todayValue < endValue || todayValue == endValue)
          );
        });
        if (discountValid) this.discountGender = discountValid.discount || 0;
      });
    },
    initPaypal(packageSelected, price_paypal) {
      if (this.paymentMethod != "creditCard") return;
      window.paypal
        .Buttons({
          style: {
            shape: "rect",
            layout: "vertical",
            color: "blue",
            label: "paypal",
          },
          async createOrder(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price_paypal,
                    currency_code: "USD",
                  },
                },
              ],
            });
          },
          async onApprove(data, actions) {
            return actions.order.capture().then((orderData) => {
              createOrderPaypal({ id: packageSelected }).then((res) => {
                window.location.href =
                  window.location.origin + "/#/payment/complete";
              });
            });
          },
          async onError(err) {
            console.log(err);
          },
          async onCancel(data) {
            console.log("cancel", data);
            cancelOrderPaypal({ id: packageSelected });
          },
        })
        .render("#paypal-button-container");
    },
    upgradePayment() {
      this.isLoading = true;
      createOrder({
        id: this.packageSelected,
        returnUrl: window.location.origin,
        methodPaymentVnPay: this.methodPaymentVnPay,
      })
        .then((res) => {
          this.isLoading = false;
          window.location.href = res.vnp_Url;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    caculatePermonth(packPayment) {
      if (this.discountGender)
        return (
          (Number(packPayment[this.keyPriceLanguage]) *
            (100 - this.discountGender)) /
          100 /
          packPayment.months
        ).toLocaleString("it-IT", {
          style: "currency",
          currency: this.currencyLanguage,
        });
      return (
        Number(packPayment[this.keyPriceLanguage]) / packPayment.months
      ).toLocaleString("it-IT", {
        style: "currency",
        currency: this.currencyLanguage,
      });
    },
    saleOffPackage(packPayment) {
      if (!this.list.length) return;
      const permonth =
        Number(packPayment[this.keyPriceLanguage]) / packPayment.months;
      const permonthMin =
        Number(this.list[0][this.keyPriceLanguage]) / this.list[0].months;
      return parseFloat(
        (1 - Math.round((permonth / permonthMin) * 100) / 100) * 100
      ).toFixed(2);
    },
    getList() {
      getAllPaymentPackage().then((res) => {
        this.isLoading = false;
        this.list = res.data.filter((pack) => pack.gender == this.user.gender);
        if (!this.list.length) return;
        this.packageSelected = this.list[0].id;
      });
    },
    choosePackPayment(packPayment) {
      this.packageSelected = packPayment.id;
    },
    resetPaypal(id) {
      this.isDisplayPaypal = false;
      if (this.paymentMethod == "creditCard") {
        setTimeout(() => {
          this.isDisplayPaypal = true;
        }, 100);
        const pack = this.list.find((e) => e.id == id);
        setTimeout(() => {
          let price_paypal = pack.price_paypal;
          if (this.discountGender)
            price_paypal = (price_paypal * (100 - this.discountGender)) / 100;
          this.initPaypal(this.packageSelected, price_paypal);
        }, 300);
      }
    },
  },
  watch: {
    packageSelected(id) {
      this.resetPaypal(id);
    },

    paymentMethod() {
      this.resetPaypal(this.packageSelected);
    },
  },
};
</script>
<style lang="scss">
.choose-member-ship {
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
  .pack-payment-price {
    .el-radio__label {
      display: none;
    }
    margin-right: 10px;
  }
  .infomation-banking {
    width: 90%;
    border-collapse: collapse;
    margin: 0px auto;
    margin-top: 20px;
    td {
      width: 50%;
    }
  }
  .infomation-banking td,
  .infomation-banking th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .infomation-banking tr td:nth-child(1) {
    text-align: right;
    padding-right: 15px;
    font-weight: 600;
  }
  .infomation-banking tr td:nth-child(2) {
    text-align: left;
    padding-left: 15px;
  }

  .infomation-banking tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  .infomation-banking tr:hover {
    background-color: #ddd;
  }

  .infomation-banking th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
}
</style>
