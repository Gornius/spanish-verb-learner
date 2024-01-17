<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { Answer } from '~/models/Answer';

const wordsDictionary = useWordsDictionary();

const props = defineProps<{
    answer: Answer,
}>();

const isCorrect = computed(() => props.answer.answer === props.answer.verb.word);

</script>
<template>
    <Card class="mt-6 flex flex-row divide-x justify-evenly">
        <CardContent class="grow pt-6 flex flex-col max-w-96 gap-2">
            <div class="text-4xl text-center">
                {{ answer.verb.base }}
            </div>
            <div class="text-lg text-center">
                <Icon icon="ri:time-line" class="inline mr-2" /> {{ answer.verb.time }}
            </div>
            <div class="text-lg text-center">
                <Icon icon="material-symbols:person" class="inline mr-2" /> {{ wordsDictionary.getPerson(props.answer.verb) }}
            </div>
        </CardContent>
        <CardContent class="grow pt-6 flex flex-col justify-center gap-2 text-center">
            <div :class="['text-4xl', isCorrect ? 'text-green-500' : 'text-red-500']">{{ answer.answer }}</div>
            <div v-if="!isCorrect" class="text-xl">Correct: <span class="text-green-500">{{ answer.verb.word }}</span></div>
        </CardContent>
    </Card>
</template>
