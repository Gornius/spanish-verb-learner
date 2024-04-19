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

type CheckedVerbsList = {
    name: string,
    verbs: Verb[],
    checked: boolean,
}

export const useStoreSettings = defineStore('settings', () => {
    const wordsDictionary = useWordsDictionary();
    const pickedVerbsTypes = ref<CheckedVerbsList[]>([ { verbs: wordsDictionary.irregularVerbsList, checked: true, name: 'Irregular' }, { verbs: wordsDictionary.regularVerbsList, checked: true, name: 'Regular' } ]);
    const verbsPool = computed(() => pickedVerbsTypes.value.reduce((pool, current) => {
        return current.checked ? [...pool, ...current.verbs] : pool;
    }, [] as Verb[]));
    const pickedTimes = ref((() => wordsDictionary.getAvailableTimes(verbsPool.value).map((time) => ({ checked: true, name: time } as CheckedTime)))());
    const pickedPersons = ref((() => wordsDictionary.getAvailablePersons(verbsPool.value).map((time) => ({ checked: true, name: time } as CheckedPerson)))());

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

    function checkUncheckAllTypes() {
        let boolValForAll = true;
        if (pickedVerbsTypes.value.some(type => type.checked)) {
            boolValForAll = false;
        }
        pickedVerbsTypes.value.forEach((type) => {
            type.checked = boolValForAll;
        });
    }

    return {
        pickedTimes: skipHydrate(pickedTimes),
        pickedPersons: skipHydrate(pickedPersons),
        checkUncheckAllPersons,
        checkUncheckAllTimes,
        checkUncheckAllTypes,
        pickedVerbsTypes,
        verbsPool,
    };

});
