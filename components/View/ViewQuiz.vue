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
    <div class="space-y-4">
        <QuestionCard @answer-given="handleAnswerGiven" :verb="quizStore.currentVerb" />
        <div v-auto-animate class="flex flex-col-reverse gap-2">            
            <AnsweredQuestionCard v-for="answer in quizStore.previousAnswers" :key="answer.verb.word" :answer="answer" />
        </div>
    </div>
</template>
