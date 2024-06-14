<template>
  <div class="partner-suggestion">
    <LoadingComponent
      v-if="isLoading"
      :message="$t('Processing now, please wait ...')"
    />
    <div v-else>
      <Header />
      <div class="container-partner-suggestion payment-content-max-width">
        <div class="flex items-center justify-between">
          <div class="title">{{ $t("Partners Suggestion") }}</div>
          <button
            class="btn-bg btn-color py1 px2 rounded shadow"
            @click="processDating"
            :disabled="loadingProcess"
          >
            <i
              class="el-icon-loading"
              v-if="loadingProcess"
              style="margin-right: 5px"
            />
            <span>{{ $t("Process Dating") }}</span>
          </button>
        </div>
        <el-row :gutter="20">
          <el-col
            v-for="(partner, index) in listPartners"
            :key="index"
            class="partner-item"
          >
            <div class="flex items-center" @click="viewPartner(partner)">
              <Avatar :size="50" :user="partner" :url="partner.avatar" />
              <div class="partner-info">
                <div class="name">{{ partner.name }} - {{ partner.age }}</div>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <div class="">{{ $t("Blood Group") }}</div>
                    <div>{{ partner.blood_group }}</div>
                  </el-col>
                  <el-col :span="8">
                    <div>{{ $t("Eye Color") }}</div>
                    <div>{{ partner.eye_color }}</div>
                  </el-col>
                  <el-col :span="8">
                    <div>{{ $t("Skin Color") }}</div>
                    <div>{{ partner.skin_color }}</div>
                  </el-col>
                </el-row>
                <div>{{ $t("Favorite") }}: {{ partner.favorite }}</div>
                <img
                  src="@/assets/images/heart-red.png"
                  class="icon-heart"
                  v-if="partnersSelected.includes(partner.id)"
                  @click="choosePartner(partner)"
                />
                <img
                  src="@/assets/images/heart.svg"
                  class="icon-heart"
                  v-else
                  @click="choosePartner(partner)"
                />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <Footer />
    </div>
    <el-dialog
      :visible.sync="isDisplayDetailPartner"
      :title="$t('Detail Partner')"
    >
      <div class="detail-partner">
        <el-row
          :gutter="24"
          v-if="partnerSelected.image_dating"
          style="margin-bottom: 20px"
        >
          <el-carousel :interval="333000" arrow="always">
            <el-carousel-item
              v-for="(item, index) in getArray(partnerSelected.image_dating)"
              :key="index"
            >
              <div class="slide flex items-center justify-center">
                <img
                  :src="item"
                  style="width: 100%; height: 300px; object-fit: cover"
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Name") }}</el-col>
          <el-col :span="12">{{ partnerSelected.name }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Age") }}</el-col>
          <el-col :span="12">{{ partnerSelected.age }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Blood Group") }}</el-col>
          <el-col :span="12">{{ partnerSelected.blood_group }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Eye Color") }}</el-col>
          <el-col :span="12">{{ partnerSelected.eye_color }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Skin Color") }}</el-col>
          <el-col :span="12">{{ partnerSelected.skin_color }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Weight") }}</el-col>
          <el-col :span="12">{{ partnerSelected.weight }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Height") }}</el-col>
          <el-col :span="12">{{ partnerSelected.height }}</el-col>
        </el-row>
        <el-row :gutter="24" class="row-info">
          <el-col :span="12" class="text-right">{{ $t("Favorite") }}</el-col>
          <el-col :span="12">{{ partnerSelected.favorite }}</el-col>
        </el-row>
      </div>
      <div class="text-right">
        <el-button
          type="warning"
          size="large"
          @click="isDisplayDetailPartner = false"
          >{{ $t("Close") }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Header from "@/layout/components/Header.vue";
import Footer from "@/layout/components/Footer.vue";
import LoadingComponent from "@/layout/components/LoadingComponent.vue";
import {
  getPartnerSuggestion,
  processDating,
  getProcessDatingDetail,
} from "@/api/partner";
import Avatar from "@/components/Avatar.vue";
import { Message } from "element-ui";
import { detailOrder } from "@/api/order";
export default {
  components: { Header, LoadingComponent, Avatar, Footer },
  data() {
    return {
      isLoading: true,
      loadingProcess: false,
      listPartners: [],
      partnersSelected: [],
      isDisplayDetailPartner: false,
      partnerSelected: {},
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    viewPartner(partner) {
      console.log("@@@@@@@@@@@@", partner);
      this.isDisplayDetailPartner = true;
      this.partnerSelected = partner;
    },
    getArray(string) {
      if (!string) return [];
      return JSON.parse(string);
    },
    async getDetail() {
      const response = await getProcessDatingDetail();
      if (response.process) {
        this.$router.push({ path: "/partner/suggest/complete" });
        return;
      }
      try {
        detailOrder()
          .then(() => {
            this.getList();
          })
          .catch(() => {
            this.getList();
          });
      } catch (error) {
        // this.$router.push("/");
      }
    },
    getList() {
      getPartnerSuggestion()
        .then((res) => {
          this.isLoading = false;
          this.listPartners = res.data;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    choosePartner(partner) {
      if (this.partnersSelected.includes(partner.id)) {
        this.partnersSelected = this.partnersSelected.filter(
          (e) => e != partner.id
        );
        return;
      }
      if (this.partnersSelected.length == 3) {
        Message({
          message: this.$t("No more than 3 partners can be selected!"),
          type: "error",
          duration: 1000,
        });
        return;
      }
      this.partnersSelected.push(partner.id);
    },
    async processDating() {
      if (this.partnersSelected.length == 0) {
        Message({
          message: this.$t("Please choose at least 1 partner!"),
          type: "error",
          duration: 1000,
        });
        return;
      }
      this.loadingProcess = true;
      await processDating({
        partnersId: this.partnersSelected,
      });
      this.$router.push({ path: "/partner/suggest/complete" });
      this.loadingProcess = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.partner-suggestion {
  background: #fff;
  .container-partner-suggestion {
    min-height: calc(100vh - 80px - 65px);
    max-width: 980px;
    margin: 0px auto;
    .title {
      font-size: 24px;
      font-weight: 600;
      padding: 20px 0;
    }
    .partner-item {
      min-height: 130px;
      background: #eaebf0;
      padding: 15px 10px;
      border-radius: 8px;
      text-indent: 15px;
      position: relative;
      cursor: pointer;
      .partner-info {
        width: calc(100% - 100px);
        .name {
          font-weight: 500;
          font-size: 16px;
        }
      }
      .partner-info > div {
        padding: 5px 0;
        font-size: 14px;
        font-weight: 500;
      }
      .icon-heart {
        width: 20px;
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
    .partner-item:hover {
      background: #dfdfdf;
    }
  }
  @media (max-width: 980px) {
    .container-partner-suggestion {
      padding: 0 30px;
    }
  }
  @media (max-width: 768px) {
    .partner-item {
      width: 100%;
      margin-top: 2% !important;
    }
  }
  @media (min-width: 768px) {
    .partner-item {
      width: 48%;
      margin: 1%;
    }
  }
  .detail-partner {
    padding: 0 30px;
    .row-info {
      padding: 10px 0;
      font-size: 16px;
    }
    .text-right {
      font-weight: bold;
    }
  }
}
</style>
