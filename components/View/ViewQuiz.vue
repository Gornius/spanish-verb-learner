<script setup lang="ts">
const quizStore = useStoreQuiz();

function handleAnswerGiven(answer: string) {
    if (!answer) {
        return;
    }
    quizStore.addAnswer({ answer: answer, verb: quizStore.currentVerb });
    quizStore.getNextVerb();
}

</script>

<template>
    <div class="space-y-8">
        <QuestionCard @answer-given="handleAnswerGiven" :verb="quizStore.currentVerb" />
        <AnsweredQuestionCard v-for="answer in quizStore.previousAnswers.toReversed()" :answer="answer" />
    </div>
</template>
