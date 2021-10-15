import { combineReducers } from "redux";
import results from "./results";
import resultGroups from "./resultGroups";
import slider from "./slider";
import sorter from "./sorter";

const rootReducer = combineReducers({ results, resultGroups, slider, sorter });

export default rootReducer;
