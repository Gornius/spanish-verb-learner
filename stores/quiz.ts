import type { Answer } from "~/models/Answer";
import { type Verb } from "~/models/Verb";

export const useStoreQuiz = defineStore('quiz', () => {
    const wordsDictionary = useWordsDictionary();
    const storeSettings = useStoreSettings();
    const previousAnswers = ref<Answer[]>([]);
    function addAnswer(answer: Answer) {
        previousAnswers.value.push(answer);
    }

    const currentVerb = ref<Verb | undefined>();

    function getNextVerb() {
        const list = wordsDictionary.irregularVerbsList
            .filter((verb) => !storeSettings.pickedPersons.some((person) => person.checked === false && person.name === verb.person))
            .filter((verb) => !storeSettings.pickedTimes.some((time) => time.checked === false && time.name == verb.time));
        if (list.length === 0) {
            currentVerb.value = undefined;
        }
        const min = Math.ceil(0);
        const max = Math.floor(list.length);
        const random =  Math.floor(Math.random() * (max - min) + min)
        currentVerb.value = list[random];
    }
    watch([storeSettings.pickedPersons, storeSettings.pickedTimes], () => {
        getNextVerb();
    }, { deep: true });
    getNextVerb();

    return {
        previousAnswers,
        addAnswer,
        currentVerb,
        getNextVerb,
    }
});
