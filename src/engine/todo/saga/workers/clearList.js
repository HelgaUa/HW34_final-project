import { put } from 'redux-saga/effects';
import todoSlice from "../../redux/todoSlice.js";
export function* clearListWorker() {
    yield put(todoSlice.actions.setItems([]));
    localStorage.clear();
}

