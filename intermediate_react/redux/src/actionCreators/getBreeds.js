import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default function getBreeds() {
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();

    if (animal) {
      petfinder.breed
        .list({ animal: animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            dispatch({
              type: "SET_BREEDS",
              payload: data.petfinder.breeds.breed
            });
          } else {
            dispatch({
              type: "SET_BREEDS",
              payload: []
            });
          }
        })
        .catch(console.error);
    } else {
      dispatch({
        type: "SET_BREEDS",
        payload: []
      });
    }
  };
}

// don't copy this
// const myStockPrice = 1000;
// const myStockPrice = determineStockPrice();
