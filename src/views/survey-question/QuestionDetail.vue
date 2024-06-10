<template>
  <el-form :model="form" ref="ruleFormRef" :rules="rules" label-position="top">
    <div class="text-right">
      <img
        src="@/assets/images/logo-vietnamese.png"
        width="30.5"
        style="cursor: pointer"
        @click="changeMode('vi')"
        v-if="currentLanguage == 'en'"
      />
      <img
        src="@/assets/images/logo-american.png"
        width="30"
        style="cursor: pointer"
        @click="changeMode('en')"
        v-else
      />
    </div>
    <el-form-item :label="$t('Question')" prop="question">
      <el-input
        size="medium"
        v-model="form.question"
        :placeholder="$t('Question')"
        v-if="currentLanguage == 'vi'"
      ></el-input>
      <el-input
        size="medium"
        v-model="form.question_en"
        :placeholder="$t('Question')"
        v-else
      ></el-input>
    </el-form-item>
    <el-form-item :label="$t('Type')" prop="type">
      <el-select
        v-model="form.type"
        :placeholder="$t('Select')"
        style="width: 100%"
        size="medium"
      >
        <el-option
          v-for="item in optionTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      :label="$t('option')"
      v-if="
        ![QuestionType.BreakScreen, QuestionType.InputAnswer].includes(
          form.type
        )
      "
    >
      <el-row
        v-for="(option, index) in optionsList"
        :key="index"
        style="display: flex; align-items: center"
      >
        <el-col :span="12" class="option-item">
          <el-input
            size="medium"
            :placeholder="$t('option')"
            v-model="option.text"
            v-if="currentLanguage == 'vi'"
          ></el-input>
          <el-input
            size="medium"
            :placeholder="$t('option')"
            v-model="option.text_en"
            v-else
          ></el-input>
        </el-col>
        <el-col :span="12">
          <input
            type="file"
            ref="picker"
            rounded
            :id="`fileUpload_${index}`"
            class="__uploader"
            outlined
            label="Label"
            counter
            max-files="1"
            accept=".png,.jpg"
            style="display: none"
            @change="updateFile(index)"
          />
          <div @click="handlePick(index)" class="text-center">
            <div
              v-if="!option.image"
              style="text-align: center; padding: 5px 0; cursor: pointer"
            >
              <div style="display: flex; justify-content: center">
                <i
                  class="el-icon-picture"
                  style="font-size: 22px; margin-bottom: 5px"
                />
              </div>
              <div style="font-size: 12px; line-height: 15px">
                {{ $t("Upload image") }}
              </div>
            </div>
            <div v-else style="cursor: pointer">
              <img
                :src="option.image"
                style="width: 100px; height: 80px; object-fit: contain"
              />
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="add-option">
        <el-button
          type="primary"
          size="small"
          icon="el-icon-plus"
          circle
          @click="addOptions"
        ></el-button>
      </div>
    </el-form-item>
    <div v-else-if="form.type == QuestionType.BreakScreen">
      <el-form-item :label="$t('Description')" prop="description">
        <el-input
          type="textarea"
          :rows="5"
          v-model="form.description"
          :placeholder="$t('Description')"
          v-if="currentLanguage == 'vi'"
        ></el-input>
        <el-input
          type="textarea"
          :rows="5"
          v-model="form.description_en"
          :placeholder="$t('Description')"
          v-else
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('Background')" prop="background">
        <input
          type="file"
          ref="picker"
          rounded
          id="fileUploadBackground"
          class="__uploader"
          outlined
          label="Label"
          counter
          max-files="1"
          accept=".png,.jpg"
          style="display: none"
          @change="updateFileBackground"
        />
        <div @click="handlePickBackground" class="text-center">
          <div
            v-if="!form.background"
            style="text-align: center; padding: 5px 0; cursor: pointer"
          >
            <div style="display: flex; justify-content: center">
              <i
                class="el-icon-picture"
                style="font-size: 22px; margin-bottom: 5px"
              />
            </div>
            <div style="font-size: 12px; line-height: 15px">
              {{ $t("Upload background") }}
            </div>
          </div>
          <div v-else style="cursor: pointer">
            <img
              :src="form.background"
              style="width: 100%; object-fit: contain"
            />
          </div>
        </div>
      </el-form-item>
    </div>
    <el-form-item class="text-right">
      <el-button type="warning" size="medium" @click="closeDialog">{{
        $t("Cancel")
      }}</el-button>
      <el-button
        type="primary"
        size="medium"
        @click="submitForm('ruleFormRef')"
        :loading="loading"
        >{{ $t("Save") }}</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import { Message } from "element-ui";
import { convertBase64 } from "@/utils/common";
import { createQuestion, updateQuestion } from "@/api/question";
import { QuestionType } from "@/define/index";
export default {
  props: ["formData", "id"],
  data() {
    return {
      currentLanguage: localStorage.getItem("language") || "en",
      QuestionType,
      optionTypes: [
        {
          label: this.$t("Input answer"),
          value: QuestionType.InputAnswer,
        },
        {
          label: this.$t("Only 1 option"),
          value: QuestionType.OnlyOption,
        },
        {
          label: this.$t("Mutiple options"),
          value: QuestionType.MultipleOption,
        },
        {
          label: this.$t("Break Screen"),
          value: QuestionType.BreakScreen,
        },
      ],
      optionsList: [
        {
          text: "",
          image: "",
        },
      ],
      loading: false,
      form: {
        question: null,
        description: null,
        background: null,
        type: 1,
      },
      rules: {
        question: [
          {
            required: true,
            message: this.$t("Please enter question"),
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: this.$t("Please choose type question"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    if (this.id) {
      this.form = {
        question: this.formData.question,
        question_en: this.formData.question_en,
        slug: this.formData.slug,
        type: this.formData.type,
        description: this.formData.description,
        description_en: this.formData.description_en,
        background: this.formData.background,
      };
      this.optionsList = JSON.parse(this.formData.options);
    }
  },
  methods: {
    changeMode(lang) {
      this.currentLanguage = lang;
    },
    async submitForm(formEl) {
      await this.$refs[formEl].validate(async (valid, fields) => {
        if (valid) {
          const form = { ...this.form };
          form.options = this.optionsList;
          console.log("submit!", this.optionsList);
          this.loading = true;
          if (!this.id) {
            const res = await createQuestion(form);
            try {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Create question successfully!"),
                type: "success",
                duration: 1000,
              });
            } catch (error) {
              this.loading = false;
            }
          } else {
            const res = await updateQuestion(form, this.id);
            try {
              this.loading = false;
              this.$emit("closeCreateDialog");
              Message({
                message: this.$t("Update question successfully!"),
                type: "success",
                duration: 1000,
              });
            } catch (error) {
              this.loading = false;
            }
          }
        }
      });
    },
    addOptions() {
      this.optionsList.push({
        text: "",
        image: "",
      });
    },
    handlePick(index) {
      const fileName = `fileUpload_${index}`;
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async updateFile(index) {
      const fileName = `fileUpload_${index}`;
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.optionsList[index].image = base64;
    },
    handlePickBackground() {
      const fileName = "fileUploadBackground";
      let fileUpload = document.getElementById(fileName);
      if (fileUpload != null) {
        fileUpload.click();
      }
    },
    async updateFileBackground() {
      const fileName = "fileUploadBackground";
      const file = document.getElementById(fileName).files[0];
      const base64 = await convertBase64(file);
      this.form.background = base64;
    },
    closeDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>
<style lang="scss" scoped>
.option-item {
}
.add-option {
  text-align: center;
  padding: 10px 0 0 0;
}
</style>
