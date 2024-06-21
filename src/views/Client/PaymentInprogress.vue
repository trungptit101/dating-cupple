<template>
  <div class="payment-complete">
    <LoadingComponent
      v-if="isLoading"
      :message="$t('Processing now, please wait ...')"
    />
    <div v-else>
      <Header />
      <div class="container-payment-complete payment-content-max-width">
        <div class="content text-center">
          <img src="@/assets/images/inprogress.png" />
          <div class="title" style="margin-top: 20px">
            {{ $t("The order is waiting for admin to confirm, please wait!") }}
          </div>
          <div class="info">
            {{ $t("Amount") }}:
            <span class="bold">{{
              orderDetail.price.toLocaleString("it-IT", {
                style: "currency",
                currency: orderDetail.unit == "VNPAY" ? "VND" : "USD",
              })
            }}</span>
          </div>
          <div class="info">
            {{ $t("Time") }}:
            <span class="bold">{{
              new Date(orderDetail.created_at).toLocaleString()
            }}</span>
          </div>
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
import { detailOrderBanking } from "@/api/order";
import { OrderStatus } from "@/define/index";
export default {
  components: { Header, LoadingComponent, Footer },
  data() {
    return {
      orderDetail: {},
      isLoading: true,
      message: "",
      isBackOrder: false,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      detailOrderBanking().then((res) => {
        this.orderDetail = res.order;
        this.isLoading = false;
        if (!this.orderDetail.id) {
          this.$router.push({ path: "/payment/upgrade" });
        }
      });
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
