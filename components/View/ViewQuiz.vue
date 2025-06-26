<script setup lang="ts">
const quizStore = useStoreQuiz();
const storeSettings = useStoreSettings();
const noWordsAvailable = computed(() => storeSettings.verbsPool.length === 0);

function handleAnswerGiven(answer: string) {
  if (!quizStore.currentVerb) {
    return;
  }
  if (!answer) {
    answer = "-";
  }
  quizStore.addAnswer({ answer: answer, verb: quizStore.currentVerb });
  quizStore.getNextVerb();
}
</script>

<template>
  <div class="space-y-4">
    <QuestionCard
      v-if="quizStore.currentVerb"
      @answer-given="handleAnswerGiven"
      :verb="quizStore.currentVerb"
    />
    <Card class="text-center text-xl p-4" v-else>
      <div v-if="noWordsAvailable">
        Picked Time, Person and List criteria did not match any verbs
      </div>
      <div v-else>
        🎉 Congratulations, you've finished all the words! 🎉<br />
        <span @click="quizStore.resetAnswers()" class="cursor-pointer underline"
          >Reset quiz!
        </span>
      </div>
    </Card>
    <div v-auto-animate class="flex flex-col-reverse gap-2">
      <AnsweredQuestionCard
        v-for="answer in quizStore.previousAnswers"
        :key="answer.verb.word"
        :answer="answer"
      />
    </div>
  </div>
</template>
