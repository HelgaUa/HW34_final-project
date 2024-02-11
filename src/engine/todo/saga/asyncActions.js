import { createAction } from "@reduxjs/toolkit";

export const getDataAsyncAction = createAction('GET_DATA_ASYNC');
export const setDataAsyncAction = createAction('SET_DATA_ASYNC');
export const clearDataAsyncAction = createAction('CLEAR_DATA_ASYNC');

//export const filterItems = createAction('FILTER_ITEMS');