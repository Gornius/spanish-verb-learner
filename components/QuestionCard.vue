<script setup lang="ts">
import type { Verb } from '~/models/Verb';
import { Icon } from '@iconify/vue';

const wordsDictionary = useWordsDictionary();
const storeQuiz = useStoreQuiz();
const wordComparator = useWordComparator();

const props = defineProps<{
    verb: Verb,
}>();

const emits = defineEmits<{
    (e: 'answerGiven', answer: string): void
}>();

const answer = useState<string>();
const previousAnswer = computed(() => storeQuiz.previousAnswers.toReversed()[0]);
const previousAnswerCorrect = computed(() => wordComparator.compareWords(previousAnswer.value.answer, previousAnswer.value.verb.word));

function giveAnswer() {
    document.getElementById('answer')?.focus();
    emits('answerGiven', answer.value);
    answer.value = '';
}

</script>
<template>
    {{ verb.word }}
    <form @submit.prevent="giveAnswer">
        <Card class="flex flex-col divide-y justify-evenly md:flex-row md:divide-y-0 md:divide-x">
            <CardContent class="grow pt-6 flex flex-col md:max-w-96 gap-2 content-center justify-center">
                <div class="text-4xl text-center">
                    {{ verb.base }}
                </div>
                <div class="text-lg text-center">
                    <Icon icon="ri:time-line" class="inline mr-2" /> {{ verb.time }}
                </div>
                <div class="text-lg text-center">
                    <Icon icon="material-symbols:person" class="inline mr-2" /> {{ wordsDictionary.getPerson(props.verb) }}
                </div>
            </CardContent>
            <CardContent class="grow pt-6 flex flex-col justify-center gap-2">
                <div>
                    <Label for="answer">Answer</Label>
                </div>
                <div class="flex flex-row gap-2">
                    <Input autofocus id="answer" class="flex-grow" v-model="answer" />
                    <Button type="submit" class="aspect-square p-0">
                        <Icon icon="ooui:next-ltr"/>
                    </Button>
                </div>
                <div class="text-sm" v-if="previousAnswer">
                    <span>Previous:&nbsp;</span>
                    <span class="text-green-500" v-if="previousAnswerCorrect === true">
                        {{ previousAnswer.answer }}
                    </span>
                    <span v-else>
                        <span class="text-red-500">{{ previousAnswer.answer }}</span>
                        <span>,&nbsp;correct:&nbsp;</span>
                        <span class="text-green-500">{{ previousAnswer.verb.word }}</span>
                    </span>
                </div>
                <div class="text-sm" v-else>
                    &nbsp; 
                </div>
            </CardContent>
        </Card>
    </form>
</template>
