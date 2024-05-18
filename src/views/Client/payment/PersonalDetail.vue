<template>
  <div class="flex justify-between payment-content-max-width mx-auto px2">
    <div class="col-8 me3 mt2">
      <h2 class="m0">Billing Information</h2>
      <div class="mb2">(as on your credit card)</div>

      <div class="flex mb2">
        <div class="col-6 me3">
          <label for="firstName">First Name*:</label>
          <div class="form-field mb1 relative" aria-invalid="false">
            <el-input v-model="form.firstName" size="medium" />
          </div>
        </div>
        <div class="flex-auto">
          <label for="lastName">Last Name*:</label>
          <div class="form-field mb1 relative" aria-invalid="false">
            <el-input v-model="form.lastName" size="medium" />
          </div>
        </div>
      </div>

      <div class="col-12">
        <label for="addressline1">Address*:</label>
        <div class="form-field mb1 relative" aria-invalid="false">
          <el-input v-model="form.address" size="medium" />
        </div>
      </div>

      <div class="col-12 flex mb2">
        <div class="col-6 me3">
          <label class="flex" for="r_country">Country*:</label>
          <el-select
            v-model="form.country"
            placeholder="Select"
            style="width: 100%"
            size="medium"
          >
            <el-option
              v-for="item in countries"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>

        <div class="flex-auto">
          <label class="flex" for="r_state">State/Province*:</label>
          <el-select
            v-model="form.country"
            placeholder="Select"
            style="width: 100%"
            size="medium"
          >
            <el-option
              v-for="item in countries"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>

      <div class="flex mb2">
        <div class="col-6 me3">
          <label for="city">City*:</label>

          <div class="form-field mb1 relative" aria-invalid="false">
            <el-input v-model="form.city" size="medium" />
          </div>
        </div>

        <div class="flex-auto">
          <label for="zip">Post Code*:</label>

          <div class="form-field mb1 relative" aria-invalid="false">
            <el-input v-model="form.postCode" size="medium" />
          </div>
        </div>
      </div>

      <div class="flex mb2">
        <div class="flex-auto hide">
          <label for="fiscalNumber">Fiscal Number*:</label>

          <div class="form-field mb1 relative" aria-invalid="false">
            <input
              type="text"
              name="fiscalNumber"
              id="fiscalNumber"
              class="col-12 nls_protected"
              required=""
              data-required-message="A value is required."
              pattern="^(\d{11}|\d{14})$"
              disabled=""
            />
          </div>
        </div>
      </div>

      <h2 class="mt3">Credit / Debit Card</h2>

      <div class="flex flex-wrap items-start">
        <div class="col-6 me3">
          <div class="flex-auto mb2">
            <label for="cardnumber">Card Number</label>
            <el-input v-model="form.cardNumber" size="medium" />
          </div>

          <div class="mb2">
            <div>Expiration Date*:</div>
            <div class="flex items-center">
              <el-select
                v-model="form.expireDate"
                placeholder="Select"
                style="width: 100%"
                size="medium"
              >
                <el-option label="MM" value="" />
                <el-option label="01" value="01" />
                <el-option label="02" value="02" />
                <el-option label="03" value="03" />
                <el-option label="04" value="04" />
                <el-option label="05" value="05" />
                <el-option label="06" value="06" />
                <el-option label="07" value="07" />
                <el-option label="08" value="08" />
                <el-option label="09" value="09" />
                <el-option label="10" value="10" />
                <el-option label="11" value="11" />
                <el-option label="12" value="12" />
              </el-select>
              <div class="flex mx2">
                <p class="m0 self-center">/</p>
              </div>
              <el-select
                v-model="form.expireYear"
                placeholder="Select"
                style="width: 100%"
                size="medium"
              >
                <el-option label="YY" value="" />
                <el-option label="24" value="24" />
                <el-option label="25" value="25" />
                <el-option label="26" value="26" />
                <el-option label="27" value="27" />
                <el-option label="28" value="28" />
                <el-option label="29" value="29" />
                <el-option label="30" value="30" />
                <el-option label="31" value="31" />
                <el-option label="32" value="32" />
                <el-option label="33" value="33" />
                <el-option label="34" value="34" />
                <el-option label="35" value="35" />
              </el-select>
            </div>
          </div>
        </div>
        <div id="cvvHanger" class="col-5">
          <div class="mb2 nls_protected">
            <label for="cvv">Security Code*:</label>
            <div class="form-field mb1 relative" aria-invalid="false">
              <el-input
                v-model="form.securityCode"
                placeholder="4 digits"
                size="medium"
              />
            </div>
          </div>

          <div id="amexHint" class="flex items-center">
            <img
              src="@/assets/images/amex-CVV.png"
              id="cvvImg"
              class="col-4 bank-logo me2"
            />
            <div class="flex-none col-7">
              Your <strong>"4 Digit Security Code (CVV)"</strong> is an
              additional 4-digit security code located on the front of your
              credit card.
            </div>
          </div>
        </div>
      </div>

      <div class="mt3 center highlight-a">
        <div class="mb2">
          <p data-country-not-in-eu="" class="">
            Your membership will be automatically renewed at 3.191.100 ₫ VND
            unless cancelled by you. By clicking "Make Payment", you accept the
            <a href="../general/termsofuse" target="_blank">Terms of Use</a>,
            <a href="../general/cancellationpolicy" target="_blank"
              >Cancellation Policy</a
            >
            and
            <a href="../general/paymentrefund" target="_blank">Refund Policy</a>
            and authorize EliteCupid to charge your credit/debit card now, and
            at the beginning of any subsequent renewals. You can cancel
            auto-renewal payments on the Settings -&gt; Billing page, at any
            time.
          </p>
          <p data-country-in-eu="" class="highlight-a hide">
            Your membership will be automatically renewed at 3.191.100 ₫ VND
            unless cancelled by you. By clicking "Make Payment", you accept the
            <a href="../general/termsofuse" target="_blank">Terms of Use</a>,
            <a href="../general/cancellationpolicy" target="_blank"
              >Cancellation Policy</a
            >
            and
            <a href="../general/paymentrefund" target="_blank">Refund Policy</a>
            and authorize EliteCupid to securely store and charge your
            credit/debit card now, and at the beginning of any subsequent
            renewals. You can cancel auto-renewal payments on the Settings -&gt;
            Billing page, at any time.
          </p>
        </div>

        <button
          name="submitForm"
          type="submit"
          class="relative btn-color btn-bg my2 h4 py1 px2 rounded shadow border-none upper-case pointer overflow-hidden"
        >
          Make Payment
        </button>

        <p data-country-not-in-eu="" class="mb2">
          The charge on your billing statement or card will appear as
          "EliteCupid". You are being billed by Cupid Media Pty Ltd, Suite 2502,
          5 Lawson Street, Southport, QLD 4215, Australia. Your billing currency
          is VND.
        </p>
        <p data-country-in-eu="" class="highlight-a hide">
          The charge on your billing statement or card will appear as
          "EliteCupid". You are being billed by SOL Networks Ltd, Malta. Your
          billing currency is VND.
        </p>
      </div>
    </div>

    <div class="relative col-3 mt2">
      <div class="fixed review">
        <div class="rounded p1 bg-light-grey mb2">
          <h2 class="m0 mb1">Review Order</h2>
          <div><strong>3 Months Diamond Membership</strong></div>

          <div class="bold mt1">1 Month Free on Dating.com</div>

          <div class="mt1 bold">TOTAL</div>
          <div class="mb2">3.191.100 ₫ VND</div>

          <div class="italic">
            Your 3 Months Diamond Membership will be renewed automatically.
            <a
              class="underline"
              data-cm-modal-url="/en/accountmanagement/rebilllearnmore"
              >Learn more</a
            >
          </div>
        </div>

        <div class="flex">
          <div
            class="trustedsite-trustmark"
            data-type="212"
            data-width="120"
            data-height="50"
          ></div>
        </div>
        <div class="flex items-center mt2 hide" data-country-in-eu="">
          <svg class="flex-none icon-56 me1">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/desktop/icons/payment/payment.svg?v=20240423110304&amp;#icon-visa-secure-blu"
            ></use>
          </svg>
          <svg class="flex-none icon-80">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/desktop/icons/payment/payment.svg?v=20240423110304&amp;#icon-mc-idcheck"
            ></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: null,
        lastName: null,
        address: null,
        country: "Viet Nam",
        expireDate: "",
        expireYear: "",
        city: null,
        postCode: null,
      },
      countries: [
        {
          label: "Viet Nam",
          value: "Viet Nam",
        },
      ],
    };
  },
  watch: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
