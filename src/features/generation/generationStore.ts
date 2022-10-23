import {atom, selector} from "recoil";
import {apiUrl} from "../../apiUtils";

export interface Generation {
    name: string;
    url: string;
    index: number;
}

export interface GenerationsResponse {
    results: Generation[];
    count: number;
}


export const generationsState = selector({
    key: 'generationsState',
    get: async () => {
        const response = await fetch(apiUrl + "/generation", {});
        const generationResponse = await response.json() as GenerationsResponse;
        const generations = generationResponse.results;
        generations.forEach(generation => {
            const parsedUrl = generation.url.split('/');
            generation.index = parseInt(parsedUrl[parsedUrl.length-2]);
        });
        return generations;
    }
});


export const selectedGenerationState = atom<number>({
    key: 'selectedGenerationState',
    default: 1,
});