import reducer, { defaultState } from "./slider";

describe("slider reducer", () => {
  it("returns default state when state=undefined and action={}", () => {
    const state = undefined;
    const action = {};
    const expectedOutput = defaultState;
    const actualOutput = reducer(state, action);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
