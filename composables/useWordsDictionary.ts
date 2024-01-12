import irregularVerbsFile from '~/assets/irregularVerbs.yaml?raw';
import YAML from 'yaml';
import { type Verb } from '~/models/Verb';
import { type DictionaryEntry } from '~/models/DictionaryEntry';

export function useWordsDictionary() {
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
    }
}
