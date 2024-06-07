<template>
  <div class="analysic-dashboard app-container">
    <div class="filter-search">
      <el-row :gutter="20" style="display: flex; align-items: flex-end">
        <el-col :span="6" class="question-item-filter">
          <div class="label">{{ $t("Select year for statistics") }}</div>
        </el-col>
        <el-col :span="8" class="question-item-filter">
          <el-select
            v-model="yearSelected"
            :placeholder="$t('Select')"
            style="width: 100%"
            size="large"
          >
            <el-option
              v-for="item in optionsYears"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="8" class="question-item-filter">
          <el-button
            type="primary"
            icon="el-icon-search"
            size="medium"
            :loading="loading"
            @click="search"
            >{{ $t("Search") }}</el-button
          >
        </el-col>
      </el-row>
    </div>
    <h2 class="text-center">
      {{ $t("Statistical chart of registered users by months in") }}
      {{ yearSelected }}
    </h2>
    <VueApexCharts
      type="bar"
      height="450"
      :options="options"
      :series="dataUsersAnalysic"
    ></VueApexCharts>

    <el-row :gutter="20" style="display: flex; align-items: flex-end">
      <el-col :xs="24" :md="12">
        <h2 class="text-center">
          {{ $t("Monthly sales unit VND statistics chart in") }}
          {{ yearSelected }}
        </h2>
        <VueApexCharts
          type="bar"
          height="450"
          :options="optionsSale"
          :series="dataSalesAnalysicVND"
        ></VueApexCharts>
      </el-col>
      <el-col :xs="24" :md="12">
        <h2 class="text-center">
          {{ $t("Monthly sales unit USD statistics chart in") }} {{ yearSelected }}
        </h2>
        <VueApexCharts
          type="bar"
          height="450"
          :options="optionsSale"
          :series="dataSalesAnalysicUSD"
        ></VueApexCharts>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { getAnalysic } from "@/api/analysic";

export default {
  components: { VueApexCharts },
  data() {
    return {
      yearSelected: new Date().getFullYear().toString(),
      optionsYears: [
        {
          value: "2024",
          label: "2024",
        },
        {
          value: "2025",
          label: "2025",
        },
        {
          value: "2026",
          label: "2026",
        },
        {
          value: "2027",
          label: "2027",
        },
        {
          value: "2028",
          label: "2028",
        },
        {
          value: "2029",
          label: "2029",
        },
        {
          value: "2030",
          label: "2030",
        },
      ],
      loading: false,
      options: {
        chart: {
          id: "vuechart-users",
        },
        xaxis: {
          categories: [
            this.$t("January"),
            this.$t("February"),
            this.$t("March"),
            this.$t("April"),
            this.$t("May"),
            this.$t("June"),
            this.$t("July"),
            this.$t("August"),
            this.$t("September"),
            this.$t("October"),
            this.$t("November"),
            this.$t("December"),
          ],
        },
      },
      optionsSale: {
        chart: {
          id: "vuechart-sales",
        },
        xaxis: {
          categories: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
        },
      },
      dataUsersAnalysic: [
        {
          name: this.$t("Users"),
          data: [],
        },
      ],
      dataSalesAnalysicVND: [
        {
          name: this.$t("Sales"),
          data: [],
        },
      ],
      dataSalesAnalysicUSD: [
        {
          name: this.$t("Sales"),
          data: [],
        },
      ],
    };
  },
  created() {
    this.getChart();
  },
  methods: {
    search() {
      this.loading = true;
      this.getChart();
    },
    getChart() {
      const params = {
        year: this.yearSelected,
      };
      getAnalysic(params)
        .then((res) => {
          this.loading = false;
          if (res.users) {
            const data = [];
            Object.keys(res.users).forEach((key) => data.push(res.users[key]));
            this.dataUsersAnalysic = [
              {
                name: this.$t("Users"),
                data: data,
              },
            ];
          }
          if (res.ordersDataVND) {
            const data = [];
            Object.keys(res.ordersDataVND).forEach((key) =>
              data.push(res.ordersDataVND[key])
            );
            this.dataSalesAnalysicVND = [
              {
                name: this.$t("Sales"),
                data: data,
              },
            ];
          }
          if (res.ordersDataUSD) {
            const data = [];
            Object.keys(res.ordersDataUSD).forEach((key) =>
              data.push(res.ordersDataUSD[key])
            );
            this.dataSalesAnalysicUSD = [
              {
                name: this.$t("Sales"),
                data: data,
              },
            ];
          }
        })
        .catch(() => (this.loading = false));
    },
  },
};
</script>
<style lang="scss">
.analysic-dashboard {
  .filter-search {
    padding-bottom: 10px;
    .question-item-filter {
      padding: 10px 0;
      .label {
        line-height: 40px;
        font-weight: 500;
        font-size: 15px;
      }
      .setting-filter {
        width: 100%;
      }
    }
  }
  .apexcharts-yaxis,
  .apexcharts-xaxis-texts-g {
    text {
      font-weight: 600;
      font-size: 14px;
    }
  }
}
</style>
