// Todo: change this from composable to util, as it doesn't hold any state
export function useWordComparator() {
  function normalize(word: string): string {
    return word.toLocaleLowerCase().trim().replaceAll(/\s+/g, " ");
  }

  function compareWords(firstWord: string, secondWord: string) {
    return normalize(firstWord) === normalize(secondWord);
  }

  return {
    compareWords,
  };
}
