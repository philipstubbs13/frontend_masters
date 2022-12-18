import { createContext } from "react";
import { Pet } from './APIResponsesTypes';

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
    {
    id: 1357,
    name: "fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA"
    },
    () => {}
]);

export default AdoptedPetContext;
