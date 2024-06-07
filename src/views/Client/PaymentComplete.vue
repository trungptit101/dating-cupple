<template>
  <div class="payment-complete">
    <LoadingComponent
      v-if="isLoading"
      message="Processing now, please wait ..."
    />
    <div v-else>
      <Header />
      <div class="container-payment-complete payment-content-max-width">
        <div class="content text-center" v-if="isComplete">
          <img src="@/assets/images/complete.png" />
          <div class="title">{{ $t("Payment Successfully!") }}</div>
          <div class="info">
            {{ $t("Order code") }}: <span class="bold">{{ orderDetail.code }}</span>
          </div>
          <div class="info">
            {{ $t("Amount") }}:
            <span class="bold">{{
              orderDetail.price.toLocaleString("it-IT", {
                style: "currency",
                currency: orderDetail.unit,
              })
            }}</span>
          </div>
          <div class="info">
            {{ $t("Time") }}:
            <span class="bold">{{
              new Date(orderDetail.created_at).toLocaleString()
            }}</span>
          </div>
          <button
            type="submit"
            style="margin-top: 20px"
            class="lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition opacity-95 text-white fill-white pr-0 md:ml-4 ml-2 bg-[#D6AD60]"
            @click="completeOrder"
          >
            {{ $t("Next") }}
            <i class="el-icon-right"></i>
          </button>
        </div>
        <div class="content text-center" v-else>
          <img src="@/assets/images/uncheck.jpg" />
          <div class="title">{{ $t(message) }}</div>
          <button
            type="submit"
            style="margin-top: 20px"
            class="lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition opacity-95 text-white fill-white pr-0 md:ml-4 ml-2 bg-[#D6AD60]"
            @click="processOrder"
          >
            <i class="el-icon-back" v-if="isBackOrder"></i>
            {{ isBackOrder ? $t("Back") : $t("Next") }}
            <i class="el-icon-right" v-if="!isBackOrder"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/layout/components/Header.vue";
import Footer from "@/layout/components/Footer.vue";
import LoadingComponent from "@/layout/components/LoadingComponent.vue";
import { detailOrder } from "@/api/order";
import { OrderStatus } from "@/define/index";
export default {
  components: { Header, LoadingComponent, Footer },
  data() {
    return {
      orderDetail: {},
      isLoading: true,
      isComplete: false,
      message: "",
      isBackOrder: false,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      detailOrder(this.$route.query)
        .then((res) => {
          this.orderDetail = res.order;
          this.isComplete = true;
          this.isLoading = false;
        })
        .catch((error) => {
          this.message = error.response.data.message;
          if (
            error.response.data.order.payment_status ==
            OrderStatus.PAYMENT_STATUS_CANCEL
          )
            this.isBackOrder = true;
          this.isLoading = false;
        });
    },
    completeOrder() {
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({ path: "/partner/suggest" });
      }, 1000);
    },
    processOrder() {
      if (this.isBackOrder) {
        this.$router.push({ path: "/payment/upgrade" });
        return;
      }
      this.isLoading = true;
      setTimeout(() => {
        this.$router.push({ path: "/partner/suggest" });
      }, 1000);
    },
  },
};
</script>


<style lang="scss" scoped>
.payment-complete {
  .container-payment-complete {
    min-height: calc(100vh - 80px - 65px);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      margin-top: -20%;
      .title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      .info {
        padding: 10px 0;
        font-size: 18px;
      }
    }
  }
}
</style>
