<script setup lang="ts">
const quizStore = useStoreQuiz();

function handleAnswerGiven(answer: string) {
    if (!answer || !quizStore.currentVerb) {
        return;
    }
    quizStore.addAnswer({ answer: answer, verb: quizStore.currentVerb });
    quizStore.getNextVerb();
}

</script>

<template>
    <div class="space-y-4">
        <QuestionCard v-if="quizStore.currentVerb" @answer-given="handleAnswerGiven" :verb="quizStore.currentVerb" />
        <Card class="text-center text-xl p-4" v-else>Picked Time and Person criteria did not match any verbs</Card>
        <div v-auto-animate class="flex flex-col-reverse gap-2">            
            <AnsweredQuestionCard v-for="answer in quizStore.previousAnswers" :key="answer.verb.word" :answer="answer" />
        </div>
    </div>
</template>
