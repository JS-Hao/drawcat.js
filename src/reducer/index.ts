import { combineReducers, Action, Reducer } from "redux";

const initialState = {
  content: {},
  global: {},
  tools: {},
};

const content: Reducer = (state = {}, action: Action) => {
  return state;
};

const global: Reducer = (state = {}, action: Action) => {
  return state;
};

const tools: Reducer = (state = {}, action: Action) => {
  return state;
};

export default combineReducers({ content, global, tools });
