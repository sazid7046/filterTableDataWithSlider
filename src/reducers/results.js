import cities from "./mockCitiesData";
import { FETCH_CITY_DATA_SUCCESS } from "./actions";
const citiesDictionary = {};
cities.forEach(x => {
  citiesDictionary[x.name] = x;
});

export const defaultState = {};

const results = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CITY_DATA_SUCCESS:
      const { items } = action;
      const nextState = { ...state };
      items.forEach(x => {
        const { name } = x;
        nextState[name] = x;
      });
      return nextState;
    default:
      return state;
  }
};

export default results;
