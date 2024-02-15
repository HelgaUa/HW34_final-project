import { takeEvery } from 'redux-saga/effects';
import { setDataWorker } from './workers/setData.js';
import { getDataWorker } from './workers/getData.js';
import { getDataAsyncAction, setDataAsyncAction, clearDataAsyncAction, checkingItemsAction, deleteItemAction } from './asyncActions.js';
import { clearListWorker } from "./workers/clearList.js";
import { checkingItemsWorker } from "./workers/checkingItems.js";
import {deleteItemWorker} from "./workers/deleteItem.js";

export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(clearDataAsyncAction.type, clearListWorker);
    yield takeEvery(checkingItemsAction.type, checkingItemsWorker);
    yield takeEvery(deleteItemAction.type, deleteItemWorker);
}