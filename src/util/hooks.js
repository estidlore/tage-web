import {useReducer} from "react";

export const useObjState = (initState) =>
  useReducer(
    (state, updates) => ({
      ...state,
      ...updates,
    }),
    initState
  );