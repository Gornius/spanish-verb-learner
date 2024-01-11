import type { Verb } from "./Verb"

export type DictionaryEntry = {
    [time: string]: {
        [person: string]: string,
    }
}
