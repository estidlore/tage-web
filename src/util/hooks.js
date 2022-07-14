import {useReducer} from "react";

export const useForceUpdate = () =>
  useReducer(s => !s, false)[1];

export const useObjState = initState =>
  useReducer(
    (state, updates) => ({
      ...state,
      ...updates,
    }),
    initState
  );
