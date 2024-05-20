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
            and authorize Visicupid to charge your credit/debit card now, and
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
            and authorize Visicupid to securely store and charge your
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
          "Visicupid". You are being billed by Cupid Media Pty Ltd, Suite 2502,
          5 Lawson Street, Southport, QLD 4215, Australia. Your billing currency
          is VND.
        </p>
        <p data-country-in-eu="" class="highlight-a hide">
          The charge on your billing statement or card will appear as
          "Visicupid". You are being billed by SOL Networks Ltd, Malta. Your
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
