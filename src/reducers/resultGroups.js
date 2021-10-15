import groupby from "lodash.groupby";
import { FETCH_CITY_DATA_SUCCESS } from "./actions";

export const defaultState = [];

const results = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CITY_DATA_SUCCESS:
      const { items } = action;
      const itemsByPopulation = groupby(items, "population");
      const values = Object.values(itemsByPopulation);
      return values;
    default:
      return state;
  }
};

export default results;
