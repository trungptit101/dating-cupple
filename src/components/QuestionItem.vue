<template>
  <div>
    <div
      class="max-w-3xl p-4 m-auto lg:mt-16 sm:mt-6"
      v-if="question.type != QuestionType.BreakScreen"
      style="padding-bottom: 40px"
    >
      <div class="w-full">
        <div
          class="text-[#D6AD60] font-semibold text-center"
          style="font-size: 35px; margin-top: 20px"
        >
          {{ currentStep }}
        </div>
        <div class="sm:mb-14 mb-4 text-center">
          <h1
            class="lg:text-2xl text-xl lg:font-normal font-semibold text-[#323232]"
          >
            {{
              currentLanguage == "vi" ? question.question : question.question_en
            }}
          </h1>
        </div>
      </div>
      <div
        class="m-auto w-full"
        v-if="
          [QuestionType.MultipleOption, QuestionType.OnlyOption].includes(
            question.type
          )
        "
      >
        <p
          class="text-md font-normal text-[#323232] text-center sm:mb-5 mb-4"
          v-if="question.type == QuestionType.MultipleOption"
        >
          {{ $t("Select all that apply") }}
        </p>
        <div
          class="flex items-center group space-x-3 p-6 text-base bg-white answer-item"
          v-for="(option, index) in question.options"
          :key="index"
          @click="chooseAnswer(option.key)"
        >
          <div
            class="w-7 h-7 rounded-md checkbox-option"
            v-if="question.type == QuestionType.MultipleOption"
            :class="
              checkedAnswers.includes(option.key)
                ? 'checked-checkbox-option'
                : ''
            "
          >
            <span
              class="text-white text-lg font-bold"
              v-if="checkedAnswers.includes(option.key)"
            >
              <i class="el-icon-check font-bold" style="font-size: 22px"></i>
            </span>
          </div>
          <input
            type="radio"
            :checked="checkedAnswers.includes(option.key)"
            style="display: block"
            v-if="question.type == QuestionType.OnlyOption"
          />
          <span class="option-text">{{
            currentLanguage == "vi" ? option.text : option.text_en
          }}</span>
        </div>
      </div>
      <div
        class="m-auto w-full"
        v-if="[QuestionType.InputAnswer].includes(question.type)"
      >
        <el-input
          type="textarea"
          :autosize="{ minRows: 8 }"
          placeholder="Input Answer"
          style="margin-top: 30px"
          v-model="inputTextAnswer"
          @blur="changeTextAnswer"
        >
        </el-input>
      </div>
    </div>
    <div v-else>
      <div class="relative" style="">
        <div
          class="w-full h-full absolute left-0 top-0 bg-black bg-opacity-60"
        />
        <div
          :style="`background: url(${question.background})`"
          style="height: calc(100vh - 64px - 122px); background-size: cover"
        >
          <!-- <img
            style="height: calc(100vh - 64px - 122px)"
            :src="question.background"
            class="w-full object-cover"
          /> -->
          <div class="absolute text-center intro-upgrade">
            <div class="lg:px-0 px-6">
              <h2
                class="lg:text-7xl text-3xl lg:font-normal mb-6 text-[#D6AD60] font-semibold text-center"
              >
                {{
                  currentLanguage == "vi"
                    ? question.question
                    : question.question_en
                }}
              </h2>
              <p class="lg:text-2xl text-sm font-normal text-white">
                {{
                  currentLanguage == "vi"
                    ? question.description
                    : question.description_en
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { QuestionType } from "@/define/index";
export default {
  props: ["question", "currentStep"],
  data() {
    return {
      inputTextAnswer: null,
      QuestionType,
      checkedAnswers: [],
      checkedOnlyAnswer: null,
      currentLanguage: localStorage.getItem("language") || "en",
    };
  },
  created() {
    if (this.question.answers) {
      this.checkedAnswers = this.question.answers;
    }
  },
  watch: {
    question: {
      handler(val) {
        if (val.answers) {
          this.checkedAnswers = val.answers;
          if (val.type == QuestionType.InputAnswer)
            this.inputTextAnswer = val.answers[0];
        }
      },
      deep: true,
    },
  },
  methods: {
    chooseAnswer(key) {
      if (this.question.type == this.QuestionType.MultipleOption) {
        if (this.checkedAnswers.includes(key))
          this.checkedAnswers = this.checkedAnswers.filter((e) => e != key);
        else this.checkedAnswers.push(key);
      } else if (this.question.type == this.QuestionType.OnlyOption) {
        this.checkedAnswers = [key];
      }
      this.$emit("updateAnswer", this.checkedAnswers);
    },
    changeTextAnswer(e) {
      this.$emit("updateAnswer", [e.target.value]);
    },
  },
};
</script>
<style lang="scss" scoped>
.border-\[\#232E4D\] {
  border-color: rgb(35 46 77 / 1);
}
.answer-item {
  margin-bottom: 5px;
}
.answer-item:hover {
  background-color: rgb(255 253 248);
  cursor: pointer;
  .checkbox-option {
    border-color: rgb(214 173 96 / 1);
  }
}
.checkbox-option {
  border: 2px solid #232e4d;
  .checked {
    z-index: 99;
  }
}
.checked-checkbox-option {
  border-color: rgb(214 173 96 / 1);
  background-color: rgb(214 173 96 / 1);
}

.option-text {
  font-size: 16px;
  line-height: 24px;
  color: rgb(50 50 50 / 1);
  font-weight: 400;
  margin-left: 10px;
}
</style>
