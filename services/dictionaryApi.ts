import axios from "axios";

export type DictionaryMeaning = {
  word: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
  }[];
};

export async function getWordMeaning(word: string): Promise<DictionaryMeaning[]> {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await axios.get(url);
  return response.data;
}
