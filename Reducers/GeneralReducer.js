const defaultSate = {
    showModal: false,
};

const GeneralReducer = (state= defaultSate, action) => { 
    
    switch(action.type){
        case "SHOW_MODAL":
            
            return {...state, showModal:true}; 
        case "HIDE_MODAL":
        
            return {...state, showModal:false};     
        default:
            return state;
    }

};

export default GeneralReducer;