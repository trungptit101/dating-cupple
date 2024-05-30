<template>
  <el-form :model="form" ref="ruleFormRef" :rules="rules" label-position="top">
    <el-form-item label="Question" prop="question">
      <el-input
        size="medium"
        v-model="form.question"
        placeholder="question"
      ></el-input>
    </el-form-item>
    <el-form-item label="Type" prop="type">
      <el-select
        v-model="form.type"
        placeholder="Select"
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
      label="option"
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
            placeholder="option"
            v-model="option.text"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.5 5.4375H16.8009L15.4688 3.43781C15.4173 3.36069 15.3476 3.29748 15.2658 3.25381C15.184 3.21014 15.0927 3.18736 15 3.1875H9C8.90729 3.18736 8.81598 3.21014 8.7342 3.25381C8.65242 3.29748 8.5827 3.36069 8.53125 3.43781L7.19812 5.4375H4.5C3.95299 5.4375 3.42839 5.6548 3.04159 6.04159C2.6548 6.42839 2.4375 6.95299 2.4375 7.5V18C2.4375 18.547 2.6548 19.0716 3.04159 19.4584C3.42839 19.8452 3.95299 20.0625 4.5 20.0625H19.5C20.047 20.0625 20.5716 19.8452 20.9584 19.4584C21.3452 19.0716 21.5625 18.547 21.5625 18V7.5C21.5625 6.95299 21.3452 6.42839 20.9584 6.04159C20.5716 5.6548 20.047 5.4375 19.5 5.4375ZM20.4375 18C20.4375 18.2486 20.3387 18.4871 20.1629 18.6629C19.9871 18.8387 19.7486 18.9375 19.5 18.9375H4.5C4.25136 18.9375 4.0129 18.8387 3.83709 18.6629C3.66127 18.4871 3.5625 18.2486 3.5625 18V7.5C3.5625 7.25136 3.66127 7.0129 3.83709 6.83709C4.0129 6.66127 4.25136 6.5625 4.5 6.5625H7.5C7.59271 6.56264 7.68402 6.53986 7.7658 6.49619C7.84758 6.45252 7.9173 6.38931 7.96875 6.31219L9.30094 4.3125H14.6981L16.0312 6.31219C16.0827 6.38931 16.1524 6.45252 16.2342 6.49619C16.316 6.53986 16.4073 6.56264 16.5 6.5625H19.5C19.7486 6.5625 19.9871 6.66127 20.1629 6.83709C20.3387 7.0129 20.4375 7.25136 20.4375 7.5V18ZM12 8.4375C11.2212 8.4375 10.46 8.66843 9.81244 9.10109C9.16492 9.53375 8.66024 10.1487 8.36222 10.8682C8.0642 11.5877 7.98623 12.3794 8.13816 13.1432C8.29009 13.907 8.6651 14.6086 9.21577 15.1592C9.76644 15.7099 10.468 16.0849 11.2318 16.2368C11.9956 16.3888 12.7873 16.3108 13.5068 16.0128C14.2263 15.7148 14.8413 15.2101 15.2739 14.5626C15.7066 13.915 15.9375 13.1538 15.9375 12.375C15.9375 11.3307 15.5227 10.3292 14.7842 9.59077C14.0458 8.85234 13.0443 8.4375 12 8.4375ZM12 15.1875C11.4437 15.1875 10.9 15.0226 10.4375 14.7135C9.97495 14.4045 9.61446 13.9652 9.40159 13.4513C9.18872 12.9374 9.13302 12.3719 9.24154 11.8263C9.35006 11.2807 9.61793 10.7796 10.0113 10.3863C10.4046 9.99293 10.9057 9.72506 11.4513 9.61654C11.9969 9.50802 12.5624 9.56372 13.0763 9.77659C13.5902 9.98946 14.0295 10.3499 14.3385 10.8125C14.6475 11.275 14.8125 11.8187 14.8125 12.375C14.8125 13.1209 14.5162 13.8363 13.9887 14.3637C13.4613 14.8912 12.7459 15.1875 12 15.1875Z"
                    fill="#7E7261"
                  />
                </svg>
              </div>
              <div style="font-size: 12px; line-height: 15px">Upload image</div>
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
      <el-form-item label="Description" prop="description">
        <el-input
          type="textarea"
          :rows="5"
          v-model="form.description"
          placeholder="Description"
        ></el-input>
      </el-form-item>
      <el-form-item label="Background" prop="background">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 5.4375H16.8009L15.4688 3.43781C15.4173 3.36069 15.3476 3.29748 15.2658 3.25381C15.184 3.21014 15.0927 3.18736 15 3.1875H9C8.90729 3.18736 8.81598 3.21014 8.7342 3.25381C8.65242 3.29748 8.5827 3.36069 8.53125 3.43781L7.19812 5.4375H4.5C3.95299 5.4375 3.42839 5.6548 3.04159 6.04159C2.6548 6.42839 2.4375 6.95299 2.4375 7.5V18C2.4375 18.547 2.6548 19.0716 3.04159 19.4584C3.42839 19.8452 3.95299 20.0625 4.5 20.0625H19.5C20.047 20.0625 20.5716 19.8452 20.9584 19.4584C21.3452 19.0716 21.5625 18.547 21.5625 18V7.5C21.5625 6.95299 21.3452 6.42839 20.9584 6.04159C20.5716 5.6548 20.047 5.4375 19.5 5.4375ZM20.4375 18C20.4375 18.2486 20.3387 18.4871 20.1629 18.6629C19.9871 18.8387 19.7486 18.9375 19.5 18.9375H4.5C4.25136 18.9375 4.0129 18.8387 3.83709 18.6629C3.66127 18.4871 3.5625 18.2486 3.5625 18V7.5C3.5625 7.25136 3.66127 7.0129 3.83709 6.83709C4.0129 6.66127 4.25136 6.5625 4.5 6.5625H7.5C7.59271 6.56264 7.68402 6.53986 7.7658 6.49619C7.84758 6.45252 7.9173 6.38931 7.96875 6.31219L9.30094 4.3125H14.6981L16.0312 6.31219C16.0827 6.38931 16.1524 6.45252 16.2342 6.49619C16.316 6.53986 16.4073 6.56264 16.5 6.5625H19.5C19.7486 6.5625 19.9871 6.66127 20.1629 6.83709C20.3387 7.0129 20.4375 7.25136 20.4375 7.5V18ZM12 8.4375C11.2212 8.4375 10.46 8.66843 9.81244 9.10109C9.16492 9.53375 8.66024 10.1487 8.36222 10.8682C8.0642 11.5877 7.98623 12.3794 8.13816 13.1432C8.29009 13.907 8.6651 14.6086 9.21577 15.1592C9.76644 15.7099 10.468 16.0849 11.2318 16.2368C11.9956 16.3888 12.7873 16.3108 13.5068 16.0128C14.2263 15.7148 14.8413 15.2101 15.2739 14.5626C15.7066 13.915 15.9375 13.1538 15.9375 12.375C15.9375 11.3307 15.5227 10.3292 14.7842 9.59077C14.0458 8.85234 13.0443 8.4375 12 8.4375ZM12 15.1875C11.4437 15.1875 10.9 15.0226 10.4375 14.7135C9.97495 14.4045 9.61446 13.9652 9.40159 13.4513C9.18872 12.9374 9.13302 12.3719 9.24154 11.8263C9.35006 11.2807 9.61793 10.7796 10.0113 10.3863C10.4046 9.99293 10.9057 9.72506 11.4513 9.61654C11.9969 9.50802 12.5624 9.56372 13.0763 9.77659C13.5902 9.98946 14.0295 10.3499 14.3385 10.8125C14.6475 11.275 14.8125 11.8187 14.8125 12.375C14.8125 13.1209 14.5162 13.8363 13.9887 14.3637C13.4613 14.8912 12.7459 15.1875 12 15.1875Z"
                  fill="#7E7261"
                />
              </svg>
            </div>
            <div style="font-size: 12px; line-height: 15px">
              Upload background
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
      <el-button type="warning" size="medium" @click="closeDialog"
        >Cancel</el-button
      >
      <el-button
        type="primary"
        size="medium"
        @click="submitForm('ruleFormRef')"
        :loading="loading"
        >Save</el-button
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
      QuestionType,
      optionTypes: [
        {
          label: "Input answer",
          value: QuestionType.InputAnswer,
        },
        {
          label: "Only 1 option",
          value: QuestionType.OnlyOption,
        },
        {
          label: "Mutiple options",
          value: QuestionType.MultipleOption,
        },
        {
          label: "Break Screen",
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
            message: "Please enter question",
            trigger: "blur",
          },
        ],
        type: [
          {
            required: true,
            message: "Please choose type question",
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
        slug: this.formData.slug,
        type: this.formData.type,
        description: this.formData.description,
        background: this.formData.background,
      };
      this.optionsList = JSON.parse(this.formData.options);
    }
  },
  methods: {
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
                message: res.message,
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
                message: res.message,
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
