import { connect } from "react-redux";
import groupby from "lodash.groupby";
import ResultsTable from "../components/ResultsTable";
import cities from "../reducers/mockCitiesData";
import { FETCH_CITY_DATA_SUCCESS } from "../reducers/actions";

export const mapStateToProps = state => {
  const { resultGroups = [], slider, sorter } = state;
  const { defaultValue } = slider;
  const start = defaultValue[0];
  const end = defaultValue[1];
  const slicedGroups = resultGroups.slice(start, end + 1);

  const dataAfterFlattening = [].concat.apply([], slicedGroups);
  const data = dataAfterFlattening.map(x => {
    const key = x.name;
    return { ...x, key };
  });
  return {
    resultGroups,
    data,
    sorter,
    ...slider
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCityData: () => {
      dispatch({
        type: FETCH_CITY_DATA_SUCCESS,
        items: cities,
        groups: Object.values(groupby(cities, "population")),
        shouldShowSlider: true
      });
    },
    onFilterChange: values => {
      const start = values[0];
      const end = values[1];
      dispatch({
        type: "CHANGE_SLIDER",
        defaultValue: [start, end]
      });
    },
    onTableChange: ({ columnKey, order }) => {
      dispatch({ type: "TABLE_CHANGE", order, columnKey });
    }
  };
};

const ResultsTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsTable);

export default ResultsTableContainer;
