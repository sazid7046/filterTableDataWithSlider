export const defaultState = {
  order: "descend",
  columnKey: "population"
};

export const TABLE_CHANGE = "TABLE_CHANGE";

const slider = (state = defaultState, action) => {
  const { type, order, columnKey } = action;
  switch (type) {
    case TABLE_CHANGE:
      return { ...state, order, columnKey };
    default:
      return state;
  }
};

export default slider;
