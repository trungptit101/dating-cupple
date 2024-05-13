<template>
  <div class="svelte-questionnaire">
    <div
      class="svelte-questionnaire-header"
      style="position: sticky; top: 0; z-index: 2"
    >
      <div class="bg-[#232E4D] lg:p-4 p-2">
        <img
          src="@/assets/images/logo.png"
          style="width: 100px; cursor: pointer"
          @click="$router.push({ path: '/' })"
        />
      </div>
    </div>
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
            {{ currentStep == 0 ? "Start" : "Next" }}
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { getListQuestionUser, updateQuestionaireUser } from "@/api/question";
import { QuestionType } from "@/define/index";
import QuestionItem from "@/components/QuestionItem.vue";
export default {
  components: { QuestionItem },
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
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      getListQuestionUser().then((data) => {
        this.questionsList = data;
        const questionHasAnswer =
          data.filter((e) => e.answers.length > 0) || [];
        this.currentStep = questionHasAnswer.length;
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
  .svelte-questionnaire-header {
    position: sticky;
    top: 0;
    z-index: 2;
    .bg-\[\#232E4D\] {
      --tw-bg-opacity: 1;
      background-color: rgb(35 46 77 / var(--tw-bg-opacity));
    }
  }
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