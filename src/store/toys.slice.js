import {createSlice} from '@reduxjs/toolkit';
import {max} from 'lodash';

const toysInitialState = [
  {id: 1, name: 'Teddy', description: 'Teddy Bear'},
  {id: 2, name: 'Lego', description: 'Lego police'},
  {id: 3, name: 'Playmobil', description: 'My favourite playmobil'},
];

export const toysSlice = createSlice({
  name: 'toys',
  initialState: toysInitialState,
  reducers: {
    addToy: (state, {payload: toyToAdd}) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1;

      const maxId = max(state.map(toy => toy.id)) || 0;
      state.push({
        name: toyToAdd.name,
        description: toyToAdd.description,
        id: maxId + 1,
      });
    },
    editToy: (state, {payload: updatedToy}) => {
      const toyToUpdate = state.find(toy => toy.id === updatedToy.id);
      toyToUpdate.name = updatedToy.name;
      toyToUpdate.description = updatedToy.description;
    },
    removeToy: (state, {payload: {toyIdToRemove}}) => {
      const toyToRemove = state.find(toy => toy.id === toyIdToRemove);
      state.splice(state.indexOf(toyToRemove), 1);
    },
  },
});

export const {addToy, editToy, removeToy} = toysSlice.actions;

export const toysReducer = toysSlice.reducer;
