import type { Answer } from "~/models/Answer";
import { type Verb } from "~/models/Verb";

export const useStoreQuiz = defineStore('quiz', () => {
    const wordsDictionary = useWordsDictionary();
    const previousAnswers = ref<Answer[]>([]);
    function addAnswer(answer: Answer) {
        previousAnswers.value.push(answer);
    }

    const currentVerb = ref<Verb>(wordsDictionary.getRandomWord());
    function getNextVerb() {
        currentVerb.value = wordsDictionary.getRandomWord();
    }

    return {
        previousAnswers,
        addAnswer,
        currentVerb,
        getNextVerb,
    }
});
