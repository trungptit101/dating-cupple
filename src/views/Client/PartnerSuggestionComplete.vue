<template>
  <div class="partner-suggestion-complete">
    <LoadingComponent
      v-if="isLoading"
      :message="$t('Processing now, please wait ...')"
    />
    <div v-else>
      <Header />
      <div
        class="container-partner-suggestion-complete payment-content-max-width"
      >
        <img
          src="@/assets/images/inprogress.png"
          class="image-complete"
          v-if="process.isComplete == ProcessDatingStatus.InProgress"
        />
        <img src="@/assets/images/complete.png" class="image-complete" v-else />
        <div class="title">
          {{
            process.isComplete == ProcessDatingStatus.InProgress
              ? $t("The connection request is waiting for administrator confirmation. Please wait!")
              : $t("The connection request has been confirmed by the administrator. Please wait for the email to connect.!")
          }}
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
import { getProcessDatingDetail } from "@/api/partner";
import Avatar from "@/components/Avatar.vue";
import { ProcessDatingStatus } from "@/define/index";
export default {
  components: { Header, LoadingComponent, Avatar, Footer },
  data() {
    return {
      ProcessDatingStatus,
      isLoading: true,
      process: {},
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const response = await getProcessDatingDetail();
      if (response.process) this.process = response.process;
      this.isLoading = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.partner-suggestion-complete {
  background: #fff;
  .container-partner-suggestion-complete {
    min-height: calc(100vh - 80px - 65px);
    padding-top: 10%;
    max-width: 980px;
    margin: 0px auto;
    text-align: center;
    .image-complete {
      width: 200px;
      max-width: 100%;
      margin-bottom: 40px;
    }
    .title {
      font-size: 24px;
      font-weight: 500;
      width: 60%;
      margin: 0px auto;
    }
  }
  @media (max-width: 980px) {
    .container-partner-suggestion-complete {
      padding: 20% 30px 0 30px;
    }
    .title {
      font-size: 24px;
      font-weight: 500;
      width: 100% !important;
      margin: 0px auto;
    }
  }
}
</style>
