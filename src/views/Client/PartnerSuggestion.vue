<template>
  <div class="partner-suggestion">
    <LoadingComponent
      v-if="isLoading"
      message="Processing now, please wait ..."
    />
    <div v-else>
      <Header />
      <div class="container-partner-suggestion payment-content-max-width">
        <div class="flex items-center justify-between">
          <div class="title">Partners Suggestion</div>
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
            <span>Process Dating</span>
          </button>
        </div>
        <el-row :gutter="20">
          <el-col
            v-for="(partner, index) in listPartners"
            :key="index"
            class="partner-item"
          >
            <div class="flex items-center" @click="choosePartner(partner)">
              <Avatar :size="50" :user="partner" :url="partner.avatar" />
              <div class="partner-info">
                <div class="name">{{ partner.name }} - {{ partner.age }}</div>
                <el-row :gutter="20">
                  <el-col :span="8">
                    <div class="">Blood Group</div>
                    <div>{{ partner.blood_group }}</div>
                  </el-col>
                  <el-col :span="8">
                    <div>Eye Color</div>
                    <div>{{ partner.eye_color }}</div>
                  </el-col>
                  <el-col :span="8">
                    <div>Skin Color</div>
                    <div>{{ partner.skin_color }}</div>
                  </el-col>
                </el-row>
                <div>Favorite: {{ partner.favorite }}</div>
                <img
                  src="@/assets/images/heart-red.png"
                  class="icon-heart"
                  v-if="partnersSelected.includes(partner.id)"
                />
                <img
                  src="@/assets/images/heart.svg"
                  class="icon-heart"
                  v-else
                />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <Footer />
    </div>
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
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const response = await getProcessDatingDetail();
      if (response.process) {
        this.$router.push({ path: "/partner/suggest/complete" });
        return;
      }
      try {
        await detailOrder();
        this.getList();
      } catch (error) {
        this.$router.push("/");
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
          message: "No more than 3 partners can be selected!",
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
          message: "Please choose at least 1 partner!",
          type: "error",
          duration: 1000,
        });
        return;
      }
      this.loadingProcess = true;
      await processDating({
        partnersId: this.partnersSelected,
      });
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
}
</style>
