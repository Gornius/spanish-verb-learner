import type { Answer } from "~/models/Answer";
import { type Verb } from "~/models/Verb";

export const useStoreQuiz = defineStore("quiz", () => {
  const wordComparator = useWordComparator();
  const storeSettings = useStoreSettings();
  const previousAnswers = ref<Answer[]>([]);
  const previousCorrectVerbs = computed(() => {
    return previousAnswers.value
      .filter((el) => wordComparator.compareWords(el.answer, el.verb.word))
      .map((el) => el.verb);
  });
  function addAnswer(answer: Answer) {
    previousAnswers.value.push(answer);
  }

  function resetAnswers() {
    previousAnswers.value = [];
  }

  const currentVerb = ref<Verb | undefined>();

  function getNextVerb() {
    const list = storeSettings.verbsPool
      .filter(
        (verb) =>
          !storeSettings.pickedPersons.some(
            (person) => person.checked === false && person.name === verb.person
          )
      )
      .filter(
        (verb) =>
          !storeSettings.pickedTimes.some(
            (time) => time.checked === false && time.name == verb.time
          )
      )
      .filter((verb) => !previousCorrectVerbs.value.includes(verb));
    if (list.length === 0) {
      currentVerb.value = undefined;
    }
    const min = Math.ceil(0);
    const max = Math.floor(list.length);
    const random = Math.floor(Math.random() * (max - min) + min);
    currentVerb.value = list[random];
  }
  watch(
    [
      previousAnswers,
      storeSettings.pickedPersons,
      storeSettings.pickedTimes,
      storeSettings.pickedVerbsTypes,
    ],
    () => {
      getNextVerb();
    },
    { deep: true, immediate: true }
  );

  return {
    previousAnswers,
    addAnswer,
    resetAnswers,
    currentVerb,
    getNextVerb,
  };
});
