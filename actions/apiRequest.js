export const listLoaded = (list) => ({type: 'LIST_LOADED', list});
export const addTodo = todoItem=> ({type: 'ADD_TODO', todoItem});
export const showModal =()=>({type: 'SHOW_MODAL'});
export const hideModal =()=>({type: 'HIDE_MODAL'});