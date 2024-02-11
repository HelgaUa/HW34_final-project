import { takeEvery } from 'redux-saga/effects';
import { setDataWorker } from './workers/setData.js';
import { getDataWorker } from './workers/getData.js';
import { getDataAsyncAction } from './asyncActions.js';
import { setDataAsyncAction } from './asyncActions.js';
import { clearDataAsyncAction } from './asyncActions.js';
import { clearListWorker} from "./workers/clearList.js";
export function* watcher() {
    yield takeEvery(getDataAsyncAction.type, getDataWorker);
    yield takeEvery(setDataAsyncAction.type, setDataWorker);
    yield takeEvery(clearDataAsyncAction.type, clearListWorker);
    //yield takeEvery(filterItems.type, set)
}