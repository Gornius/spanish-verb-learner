<script setup lang="ts">
import type { Verb } from '~/models/Verb';
import { Icon } from '@iconify/vue';

const wordsDictionary = useWordsDictionary();

const props = defineProps<{
    verb: Verb,
}>();

const emits = defineEmits<{
    (e: 'answerGiven', answer: string): void
}>();

const answer = useState<string>();

function giveAnswer() {
    emits('answerGiven', answer.value);
    answer.value = '';
}
</script>
<template>
    <form @submit.prevent="giveAnswer">
        <Card class="mt-6 flex flex-col divide-y justify-evenly md:flex-row md:divide-y-0 md:divide-x">
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
                        <Input id="answer" class="flex-grow" v-model="answer" />
                        <Button type="submit" class="aspect-square p-0">
                            <Icon icon="ooui:next-ltr"/>
                        </Button>
                    </div>
            </CardContent>
        </Card>
    </form>
</template>
