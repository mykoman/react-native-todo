const defaultSate = {
    list: []
};

const TodoListReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
         
        // case "LIST_LOADED":
        //     return action.data;
        //     //return {...state , text: newText};
        case "ADD_TODO":
            state.list.push(action.todoItem);
            return {...state};     
        default:
            return state;
    }

};

export default TodoListReducer;