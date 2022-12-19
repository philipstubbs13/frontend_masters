import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './adoptedPetSlice';

const store = configureStore({
    reducer: {
        adoptedPet,
    }
});

export default store;