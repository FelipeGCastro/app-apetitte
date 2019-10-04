import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
// actionType: ['dataPassed'],
  loadRequest: null,
  loadData: ['data'],
  updateProduct: ['dayId', 'productIndex', 'product'],
  removeProduct: ['dayId', 'productIndex'],
});

export const DaysTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  days: [],
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_DATA]: (state, { data }) => state.merge({ days: data }),
  [Types.UPDATE_PRODUCT]: (state, { dayId, productIndex, product }) => {
    if (productIndex === 'snack1') {
      return state.merge({
        days: [
          ...state.days.filter((day) => day.id !== dayId),
          {
            ...state.days.filter((day) => day.id === dayId)[0],
            snack1: product,
          },
        ].sort((a, b) => (a.id > b.id) ? 1 : -1),
      });
    }
    if (productIndex === 'snack2') {
      return state.merge({
        days: [
          ...state.days.filter((day) => day.id !== dayId),
          {
            ...state.days.filter((day) => day.id === dayId)[0],
            snack2: product,
          },
        ].sort((a, b) => (a.id > b.id) ? 1 : -1),
      });
    }
    if (productIndex === 'drink') {
      return state.merge({
        days: [
          ...state.days.filter((day) => day.id !== dayId),
          {
            ...state.days.filter((day) => day.id === dayId)[0],
            drink: product,
          },
        ].sort((a, b) => (a.id > b.id) ? 1 : -1),
      });
    }
  },
  [Types.REMOVE_PRODUCT]: (state, { dayId, productIndex }) => {
    if (productIndex === 'snack1') {
      return state.merge({
        days: [
          ...state.days.filter((day) => day.id !== dayId),
          {
            ...state.days.filter((day) => day.id === dayId)[0],
            snack1: null,
          },
        ].sort((a, b) => (a.id > b.id) ? 1 : -1),
      });
    }
    if (productIndex === 'snack2') {
      return state.merge({
        days: [
          ...state.days.filter((day) => day.id !== dayId),
          {
            ...state.days.filter((day) => day.id === dayId)[0],
            snack2: null,
          },
        ].sort((a, b) => (a.id > b.id) ? 1 : -1),
      });
    }
    if (productIndex === 'drink') {
      return state.merge({
        days: [
          ...state.days.filter((day) => day.id !== dayId),
          {
            ...state.days.filter((day) => day.id === dayId)[0],
            drink: null,
          },
        ].sort((a, b) => (a.id > b.id) ? 1 : -1),
      });
    }
  },
});
