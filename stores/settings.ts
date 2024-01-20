import { skipHydrate } from "pinia";
import { type Verb } from "~/models/Verb";

type CheckedTime = {
    name: Verb['time'],
    checked: boolean,
}

type CheckedPerson = {
    name: Verb['person'],
    checked: boolean,
}

export const useStoreSettings = defineStore('settings', () => {
    const wordsDictionary = useWordsDictionary();
    const pickedTimes = useLocalStorage('pickedTimes', (() => wordsDictionary.getAvailableTimes().map((time) => ({ checked: true, name: time } as CheckedTime)))());
    const pickedPersons = useLocalStorage('pickedPersons', (() => wordsDictionary.getAvailablePersons().map((time) => ({ checked: true, name: time } as CheckedPerson)))());

    function checkUncheckAllTimes() {
        let boolValForAll = true;
        if (pickedTimes.value.some(time => time.checked)) {
            boolValForAll = false;
        }
        pickedTimes.value.forEach((time) => {
            time.checked = boolValForAll;
        });
    }

    function checkUncheckAllPersons() {
        let boolValForAll = true;
        if (pickedPersons.value.some(person => person.checked)) {
            boolValForAll = false;
        }
        pickedPersons.value.forEach((person) => {
            person.checked = boolValForAll;
        });
    }

    return {
        pickedTimes: skipHydrate(pickedTimes),
        pickedPersons: skipHydrate(pickedPersons),
        checkUncheckAllPersons,
        checkUncheckAllTimes,
    };

});
