import irregularVerbsYaml from '~/assets/irregularVerbs.yaml?raw';
import regularVerbsYaml from '~/assets/regularVerbs.yaml?raw';
import YAML from 'yaml';
import { type Verb } from '~/models/Verb';
import { type DictionaryEntry } from '~/models/DictionaryEntry';

// Todo: change this from composable to util, as it doesn't hold any state
export function useWordsDictionary() {
    function getPerson(verb: Verb | Verb['person']) {
        const personDictionary = {
            p1: '1. Singular',
            p2: '2. Singular',
            p3: '3. Singular',
            m1: '1. Plural',
            m2: '2. Plural',
            m3: '3. Plural',
            all: 'All',
        }
        if (typeof verb === 'string') {
            return personDictionary[verb as Verb['person']];
        }
        return personDictionary[verb.person];
    }

    function getVerbsListFromYaml(yamlFileContent: string) {
        const verbs = Object.entries(YAML.parse(yamlFileContent).words) as [string, DictionaryEntry][];
        const verbsList = [] as Verb[];
        verbs.forEach(([base, times]) => {
            return Object.entries(times).forEach(([time, persons]) => {
                return Object.entries(persons).forEach(([person, word]) => {
                    verbsList.push({
                        base: base,
                        time: time,
                        person: person as Verb['person'],
                        word: word,
                    });
                });
            });
        });
        return verbsList;
    }

    const irregularVerbsList = getVerbsListFromYaml(irregularVerbsYaml);
    const regularVerbsList = getVerbsListFromYaml(regularVerbsYaml);

    function getAvailableTimes(verbsList: Verb[]) {
        return [...new Set(irregularVerbsList.map((verb) => verb.time))];
    }

    function getAvailablePersons(verbsList: Verb[]) {
        return [...new Set(irregularVerbsList.map((verb) => verb.person))];
    }

    return {
        irregularVerbsList,
        regularVerbsList,
        getPerson,
        getAvailableTimes,
        getAvailablePersons,
    }
}
