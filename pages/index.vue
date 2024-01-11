<script setup lang="ts">
const wordsDictionary = useWordsDictionary();

</script>

<template>
    <div class="space-y-8">
        <QuestionCard v-for="verb in wordsDictionary.irregularVerbsList" :verb="verb"/>
    </div>
</template>
