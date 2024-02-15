import {put, select } from 'redux-saga/effects';
import todoSlice from "../../redux/todoSlice.js";
import selectors from "../../redux/selectors.js";

export function* deleteItemWorker(action) {
    const { payload } = action;
    yield put(todoSlice.actions.removeItem(payload));

    const items = yield select(selectors.itemsSelector);
    localStorage.setItem('items', JSON.stringify(items));
}