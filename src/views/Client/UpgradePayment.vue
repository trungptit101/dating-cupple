<template>
  <div class="upgrade-payment">
    <!-- <div class="header-strip height-auto px2 pt2 flex justify-center">
      <div class="max-width my1 mx-auto flex items-center justify-center">
        <div
          class="flex items-center opacity-3"
          :class="{ selected: componentName == 'ChooseMemberShip' }"
        >
          <p>Choose Membership</p>
        </div>
        <i
          class="el-icon-arrow-right opacity-3"
          style="font-size: 30px; font-weight: bold"
        />
        <div
          class="flex items-center opacity-3"
          :class="{ selected: componentName == 'PersonalDetail' }"
        >
          <p>Personal Details</p>
        </div>
        <i
          class="el-icon-arrow-right opacity-3"
          style="font-size: 30px; font-weight: bold"
        />
        <div
          class="flex opacity-3 items-center"
          :class="{ selected: componentName == 'Receipt' }"
        >
          <p>Receipt</p>
        </div>
      </div>
    </div> -->
    <Header />
    <component :is="componentName" />
  </div>
</template>

<script>
import ChooseMemberShip from "./payment/ChooseMemberShip.vue";
import PersonalDetail from "./payment/PersonalDetail.vue";
import Header from "@/layout/components/Header.vue";
import Receipt from "./payment/Receipt.vue";
import { createOrder } from "@/api/order";
export default {
  components: { ChooseMemberShip, PersonalDetail, Receipt, Header },
  data() {
    return {
      step: 1,
      stepsList: [
        {
          title: "Choose Membership",
          code: "ChooseMemberShip",
        },
        {
          title: "Personal Details",
          code: "PersonalDetail",
        },
        {
          title: "Receipt",
          code: "Receipt",
        },
      ],
    };
  },
  watch: {},
  computed: {
    componentName() {
      if (this.step == 1) return "ChooseMemberShip";
      else if (this.step == 2) return "PersonalDetail";
      else if (this.step == 3) return "Receipt";
      return "ChooseMemberShip";
    },
  },
  methods: {},
};
</script>


<style lang="scss">
.upgrade-payment {
  min-height: 100vh;
  background: #fff;
  .payment-content-max-width {
    max-width: 980px;
    margin: 0px auto;
  }
  .selected {
    opacity: 1;
  }
}
</style>
