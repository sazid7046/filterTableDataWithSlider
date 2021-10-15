import reducer, { defaultState } from "./results";
import { FETCH_CITY_DATA_SUCCESS } from "./actions";

it(`should return the default state`, () => {
  const state = undefined;
  const action = {};
  const expectedOutput = defaultState;
  expect(reducer(state, action)).toEqual(expectedOutput);
});

it(`should return a dictionary of cities`, () => {
  const state = undefined;
  const action = {
    type: FETCH_CITY_DATA_SUCCESS,
    items: [{ name: "Cleveland", population: 2143857 }]
  };
  const expectedOutput = {
    Cleveland: { name: "Cleveland", population: 2143857 }
  };
  expect(reducer(state, action)).toEqual(expectedOutput);
});
