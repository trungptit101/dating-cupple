<template>
  <div>
    <LoadingComponent
      v-if="isLoading"
      :message="$t('Processing now, please wait ...')"
    />
    <div v-else class="svelte-questionnaire">
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
        <div
          class="percentage-question"
          :style="`width: ${caculatorPercentage}%`"
        >
          <div class="overflow-hidden bg-[#C5CBDC4D]">
            <div class="transition-all lg:h-3 h-1 bg-[#D6AD60]"></div>
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
              {{ $t("Back") }}
            </button>
            <button
              type="submit"
              style="margin-left: 20px"
              class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition opacity-95 text-white fill-white pr-0 md:ml-4 ml-2 w-full bg-[#D6AD60]"
              :disabled="!isDisableBtnNext"
              @click="nextQuestion"
            >
              {{ $t("Next") }}
            </button>
          </div>
          <div class="grid grid-cols-2" v-else>
            <button
              type="submit"
              class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition bg-[#C5CBDC] text-[#505656] fill-[#505656] pl-0 md:mr-4 mr-2 opacity-95 w-full"
              @click="prevQuestion"
              :disabled="currentStep == 0"
              v-if="currentStep"
            >
              {{ $t("Back") }}
            </button>
            <button
              type="submit"
              style="margin-left: 20px"
              class="flex justify-center items-center lg:py-4 py-3 px-8 text-[16px] lg:text-[20px] font-medium rounded-[4px] transition opacity-95 text-white fill-white pr-0 md:ml-4 ml-2 w-full bg-[#D6AD60]"
              @click="nextQuestion"
            >
              {{
                currentStep == 0
                  ? $t("Start")
                  : currentStep == questionsList.length - 1
                  ? $t("Finish")
                  : $t("Next")
              }}
            </button>
          </div>
        </div>
      </footer>
    </div>
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
import LoadingComponent from "@/layout/components/LoadingComponent.vue";
export default {
  components: { QuestionItem, Header, LoadingComponent },
  data() {
    return {
      QuestionType,
      isLoading: false,
      currentStep: 0,
      questionsList: [],
    };
  },
  computed: {
    caculatorPercentage() {
      return Math.round((this.currentStep / this.questionsList.length) * 100);
    },
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
      this.isLoading = true;
      getListQuestionUser()
        .then((data) => {
          this.isLoading = false;
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
        })
        .catch(() => {
          this.isLoading = false;
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
          this.$store.dispatch("user/completeSurvey");
          setTimeout(() => {
            this.$router.push({ path: "/payment/upgrade" });
          }, 200);
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
    height: calc(100vh - 70px - 110px);
    overflow: auto;
  }
}
</style>
