<template>
  <div class="svelte-questionnaire">
    <Header />
    <div
      class="svelte-questionnaire-body w-full overflow-hidden bg-[#F8F8F8] custom-height"
    >
      <question-item
        :question="questionsList[currentStep] || {}"
        :currentStep="currentStep"
        @updateAnswer="updateAnswer"
      />
    </div>
    <footer class="calc-footer sticky bottom-0 w-full z-30 bg-white">
      <div aria-hidden="true">
        <div class="overflow-hidden bg-[#C5CBDC4D]">
          <div
            class="transition-all lg:h-3 h-1 bg-[#D6AD60]"
            style="width: 3.37079%"
          ></div>
        </div>
      </div>
      <div class="flex justify-center items-center p-6">
        <div
          class="grid grid-cols-2"
          v-if="questionsList[currentStep].type != QuestionType.BreakScreen"
        >
          <button
            type="submit"
            class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition bg-[#C5CBDC] text-[#505656] fill-[#505656] pl-0 md:mr-4 mr-2 opacity-95 w-full"
            @click="prevQuestion"
            :disabled="currentStep == 0"
          >
            Back
          </button>
          <button
            type="submit"
            style="margin-left: 20px"
            class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition opacity-95 text-white fill-white pr-0 md:ml-4 ml-2 w-full bg-[#D6AD60]"
            :disabled="!isDisableBtnNext"
            @click="nextQuestion"
          >
            Next
          </button>
        </div>
        <div class="grid grid-cols-2" v-else>
          <button
            type="submit"
            style="margin-left: 20px"
            class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition opacity-95 text-white fill-white pr-0 md:ml-4 ml-2 w-full bg-[#D6AD60]"
            @click="nextQuestion"
          >
            {{
              currentStep == 0
                ? "Start"
                : currentStep == questionsList.length - 1
                ? "Finish"
                : "Next"
            }}
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  getListQuestionUser,
  updateQuestionaireUser,
  finishSurveyQuestion,
} from "@/api/question";
import { QuestionType } from "@/define/index";
import QuestionItem from "@/components/QuestionItem.vue";
import { Message } from "element-ui";
import store from "@/store";
import Header from "@/layout/components/Header.vue";
export default {
  components: { QuestionItem, Header },
  data() {
    return {
      QuestionType,
      currentStep: 0,
      questionsList: [],
    };
  },
  computed: {
    isDisableBtnNext() {
      if (!this.questionsList[this.currentStep + 1]) return false;
      return this.questionsList[this.currentStep].answers.length;
    },
    user() {
      return store.getters.user;
    },
  },
  created() {
    if (!this.user.is_complete_survey) this.getList();
    else this.$router.push({ path: "/payment/upgrade" });
  },
  methods: {
    getList() {
      getListQuestionUser().then((data) => {
        this.questionsList = data;
        const questionHasAnswer =
          data.filter((e) => e.answers.length > 0) || [];
        if (questionHasAnswer.length) {
          const lastQuestionHasAnswer =
            questionHasAnswer[questionHasAnswer.length - 1];
          this.currentStep = this.questionsList.findIndex(
            (question) => question.id == lastQuestionHasAnswer.id
          );
        }
      });
    },
    updateAnswer(answers) {
      this.questionsList[this.currentStep].answers = answers;
    },
    nextQuestion() {
      if (
        this.questionsList[this.currentStep].type !=
        this.QuestionType.BreakScreen
      )
        updateQuestionaireUser(
          {
            answers: this.questionsList[this.currentStep].answers,
          },
          this.questionsList[this.currentStep].id
        );
      if (this.currentStep == this.questionsList.length - 1) {
        finishSurveyQuestion().then(() => {
          Message({
            message: "Congratulations on completing the survey!",
            type: "success",
            duration: 5 * 1000,
          });
          this.$router.push({ path: "/payment/upgrade" });
        });
        return;
      }
      this.currentStep++;
    },
    prevQuestion() {
      if (this.currentStep == 0) return;
      this.currentStep--;
    },
  },
};
</script>


<style lang="scss" scoped>
.svelte-questionnaire {
  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .svelte-questionnaire-body {
    height: calc(100vh - 70px - 103px);
    overflow: auto;
  }
}
</style>
