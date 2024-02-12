import { put, select } from 'redux-saga/effects';
import todoSlice from "../../redux/todoSlice.js";
import selectors from "../../redux/selectors.js";

export function* filterDataWorker(action) {
    const { payload } = action;
    //yield put(todoSlice.actions.toggleItem());

    const state = yield select();
    const items = state.todo.items;
    console.log(state.todo.items) //elements

    const sortedItems = items.sort((a, b) => {
        if (a.isChecked && !b.isChecked) {
            return 1; // Якщо `a` чекнуте, а `b` не чекнуте, `a` йде після `b`
        } else if (!a.isChecked && b.isChecked) {
            return -1; // Якщо `b` чекнуте, а `a` не чекнуте, `a` йде перед `b`
        } else {
            return 0; // В інших випадках залишаємо порядок незмінним
        }
    });
console.log(sortedItems)
    yield put(todoSlice.actions.setItems(sortedItems));

    const inputValue = payload.inputTodo;
    yield put(todoSlice.actions.addItem(inputValue));
    yield put(todoSlice.actions.setLoading(false));

    const updatedItems = yield select(selectors.itemsSelector);
    localStorage.setItem('items', JSON.stringify(updatedItems));
}
