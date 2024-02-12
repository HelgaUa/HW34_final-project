import { takeEvery } from 'redux-saga/effects';
import { setDataWorker } from './workers/setData.js';
import { getDataWorker } from './workers/getData.js';
import { getDataAsyncAction, setDataAsyncAction, clearDataAsyncAction, filterDataAction} from './asyncActions.js';
//import { setDataAsyncAction } from './asyncActions.js';
//import { clearDataAsyncAction } from './asyncActions.js';
import { clearListWorker} from "./workers/clearList.js";
import {filterDataWorker} from "./workers/filterData.js";

export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(clearDataAsyncAction.type, clearListWorker);
    yield takeEvery(filterDataAction.type, filterDataWorker)
}