
 export default {
     itemsSelector: state =>  state.todo.items,
     loadingSelector: state =>  state.todo.loading,
     searchSelector: state => state.todo.search,
 }