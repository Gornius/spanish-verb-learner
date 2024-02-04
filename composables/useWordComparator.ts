export function useWordComparator() {
    function compareWords(firstWord: string, secondWord: string) {
        return firstWord.toLocaleLowerCase() === secondWord.toLocaleLowerCase();
    }

    return {
        compareWords,
    }
}
