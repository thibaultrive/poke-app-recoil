import {selector} from "recoil";
import {apiUrl} from "../../apiUtils";
import {selectedGenerationState} from "../generation/generationStore";

export interface Resource {
    name: string;
    url: string;
}

interface PokemonsResponse {
    id: string;
    pokemon_species: Resource[];
    version_groups: Resource[];
}


const pokemonsGenerationState = selector<PokemonsResponse>({
    key: 'pokemonsGenerationState',
    get: async ({get}) => {
        const response = await fetch(apiUrl + "/generation/" + get(selectedGenerationState), {});
        return await response.json() as PokemonsResponse;
    }
});

export const speciesState = selector<Resource[]>({
    key: 'species',
    get: async ({get}) => {
        return get(pokemonsGenerationState).pokemon_species
    }
});

export const versionsState = selector<Resource[]>({
    key: 'versions',
    get: async ({get}) => {
        return get(pokemonsGenerationState).version_groups
    }
});