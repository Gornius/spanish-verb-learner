<script setup lang="ts">
import type { Answer } from '~/models/Answer';
import { Icon } from '@iconify/vue';

const wordsDictionary = useWordsDictionary();

const props = defineProps<{
    answer: Answer,
}>();

const isCorrect = computed(() => props.answer.answer.toLocaleLowerCase() === props.answer.verb.word.toLocaleLowerCase());

</script>
<template>
    <Card class="flex flex-col divide-y justify-evenly md:flex-row md:divide-y-0 md:divide-x">
        <CardContent class="grow pt-6 flex flex-col md:max-w-96 gap-2">
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
