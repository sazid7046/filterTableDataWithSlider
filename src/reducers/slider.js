import { FETCH_CITY_DATA_SUCCESS } from "./actions";

export const defaultState = {
  min: 0,
  max: 100,
  defaultValue: [20, 80],
  shouldShowSlider: false
};

export const CHANGE_SLIDER = "CHANGE_SLIDER";

const slider = (state = defaultState, action) => {
  const { type, groups, shouldShowSlider, defaultValue } = action;
  switch (type) {
    case FETCH_CITY_DATA_SUCCESS:
      const max = groups.length - 1;
      return {
        ...state,
        max,
        shouldShowSlider,
        defaultValue: [1, max - 1]
      };
    case CHANGE_SLIDER:
      return {
        ...state,
        defaultValue
      };
    default:
      return state;
  }
};

export default slider;
