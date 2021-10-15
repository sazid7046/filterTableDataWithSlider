import reducer, { defaultState } from "./resultGroups";
import { FETCH_CITY_DATA_SUCCESS } from "./actions";

it(`should return the default state`, () => {
  const state = undefined;
  const action = {};
  const expectedOutput = defaultState;
  expect(reducer(state, action)).toEqual(expectedOutput);
});

it(`should return an array with one subarray when there is one unique population`, () => {
  const state = undefined;
  const action = {
    type: FETCH_CITY_DATA_SUCCESS,
    items: [{ name: "Prague", population: 2143857 }]
  };
  const expectedOutput = [[{ name: "Prague", population: 2143857 }]];
  expect(reducer(state, action)).toEqual(expectedOutput);
});

it(`should return an array with two subarrays when there are two unique populations`, () => {
  const state = undefined;
  const action = {
    type: FETCH_CITY_DATA_SUCCESS,
    items: [
      { name: "Prague", population: 2143857 },
      { name: "Boston", population: 3456789 }
    ]
  };
  const expectedOutput = [
    [{ name: "Prague", population: 2143857 }],
    [{ name: "Boston", population: 3456789 }]
  ];
  expect(reducer(state, action)).toEqual(expectedOutput);
});

it(`should group identical populations`, () => {
  const state = undefined;
  const action = {
    type: FETCH_CITY_DATA_SUCCESS,
    items: [
      { name: "Prague", population: 2143857 },
      { name: "Cleveland", population: 2078725 },
      { name: "Columbus", population: 2078725 }
    ]
  };
  const expectedOutput = [
    [
      { name: "Cleveland", population: 2078725 },
      { name: "Columbus", population: 2078725 }
    ],
    [{ name: "Prague", population: 2143857 }]
  ];
  expect(reducer(state, action)).toEqual(expectedOutput);
});
