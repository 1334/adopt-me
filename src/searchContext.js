import React from 'react';

const searchContext = React.createContext({
  location: 'Seattle, WA',
  animal: '',
  breed: '',
  breeds: [],
  handleLocationChange() {},
  handleAnimalChange() {},
  handleBreedChange() {},
  getBreeds() {}
});

export const Provider = searchContext.Provider;
export const Consumer = searchContext.Consumer;
