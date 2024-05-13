<template>
  <div>
    <div
      class="max-w-3xl p-4 m-auto lg:mt-16 sm:mt-6"
      v-if="question.type != QuestionType.BreakScreen"
      style="padding-bottom: 40px"
    >
      <div class="w-full">
        <h2
          class="lg:text-7xl text-6xl sm:mb-6 mb-2 text-[#D6AD60] font-semibold text-center"
        >
          {{ currentStep }}
        </h2>
        <div class="sm:mb-14 mb-4 text-center">
          <h1
            class="lg:text-2xl text-xl lg:font-normal font-semibold text-[#323232]"
          >
            {{ question.question }}
          </h1>
        </div>
      </div>
      <div class="m-auto w-full">
        <p
          class="text-md font-normal text-[#323232] text-center sm:mb-5 mb-4"
          v-if="question.type == QuestionType.MultipleOption"
        >
          Select all that apply
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
          <span class="option-text">{{ option.text }}</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="relative" style="">
        <div
          class="w-full h-full absolute left-0 top-0 bg-black bg-opacity-60"
        />
        <picture>
          <img
            style="height: calc(100vh - 64px - 122px)"
            :src="question.background"
            class="w-full object-cover"
          />
          <div class="absolute text-center intro-upgrade">
            <div class="lg:px-0 px-6">
              <h2
                class="lg:text-7xl text-3xl lg:font-normal mb-6 text-[#D6AD60] font-semibold text-center"
              >
                {{ question.question }}
              </h2>
              <p class="lg:text-2xl text-sm font-normal text-white">
                {{ question.description }}
              </p>
            </div>
          </div>
        </picture>
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
      QuestionType,
      checkedAnswers: [],
      checkedOnlyAnswer: null,
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
input[type="radio"]:checked ~ .check {
  border: 5px solid #0dff92;
}
input[type="radio"]:checked ~ .check::before {
  background: #0dff92;
}
</style>