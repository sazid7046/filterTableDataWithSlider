import reducer, { defaultState, TABLE_CHANGE } from "./sorter";

describe("sorter reducer", () => {
  it("returns default state when state=undefined and action={}", () => {
    const state = undefined;
    const action = {};
    const expectedOutput = { ...defaultState };
    const actualOutput = reducer(state, action);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it("sorts table in ascending order by population column", () => {
    const state = undefined;
    const action = {
      type: TABLE_CHANGE,
      order: "ascend",
      columnKey: "population"
    };
    const expectedOutput = { ...defaultState, order: "ascend" };
    const actualOutput = reducer(state, action);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
