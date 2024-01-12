<script setup lang="ts">
const wordsDictionary = useWordsDictionary();

</script>

<template>
    <div class="space-y-8">
        <QuestionCard :verb="wordsDictionary.getRandomWord()" />
    </div>
</template>
