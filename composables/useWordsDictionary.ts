import irregularVerbsFile from '~/assets/irregularVerbs.yaml?raw';
import YAML from 'yaml';
import { type Verb } from '~/models/Verb';
import { type DictionaryEntry } from '~/models/DictionaryEntry';

export function useWordsDictionary() {
    function getPerson(verb: Verb) {
        const personDictionary = {
            p1: '1. Singular',
            p2: '2. Singular',
            p3: '3. Singular',
            m1: '1. Plural',
            m2: '2. Plural',
            m3: '3. Plural',
            all: 'Any',
        }
        return personDictionary[verb.person];
    }

    const irregularVerbs = Object.entries(YAML.parse(irregularVerbsFile).words) as [string, DictionaryEntry][];
    const irregularVerbsList = [] as Verb[];
    irregularVerbs.forEach(([base, times]) => {
        return Object.entries(times).forEach(([time, persons]) => {
            return Object.entries(persons).forEach(([person, word]) => {
                irregularVerbsList.push({
                    base: base,
                    time: time,
                    person: person as Verb['person'],
                    word: word,
                });
            });
        });
    });

    function getRandomWord() {
        const min = Math.ceil(0);
        const max = Math.floor(irregularVerbsList.length);
        const random =  Math.floor(Math.random() * (max - min) + min)
        return irregularVerbsList[random];
    }

    return {
        irregularVerbs,
        irregularVerbsList,
        getRandomWord,
        getPerson,
    }
}
