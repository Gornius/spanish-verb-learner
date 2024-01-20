import { type Verb } from "~/models/Verb";

export const useStoreSettings = defineStore('settings', () => {
    type CheckedTime = {
        name: Verb['time'],
        checked: boolean,
    }

    type CheckedPerson = {
        name: Verb['person'],
        checked: boolean,
    }

    const wordsDictionary = useWordsDictionary();
    const pickedTimes = ref((() => wordsDictionary.getAvailableTimes().map((time) => ({ checked: true, name: time } as CheckedTime)))());
    const pickedPersons = ref((() => wordsDictionary.getAvailablePersons().map((time) => ({ checked: true, name: time } as CheckedPerson)))());

    function checkAllTimes() {

    }

    return {
        pickedTimes,
        pickedPersons,
    };

});
