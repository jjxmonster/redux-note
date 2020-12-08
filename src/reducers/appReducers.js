import {
    ADD, EDIT, DELETE
} from '../actions/appActions';

export const appReducer =(state = [],action)=>{
    
    switch(action.type){
        case ADD:   
            return [...state, action.payload];
        case EDIT:
            return state.map(currentElement=>{
                if(currentElement.id !== action.payload.id){
                    return currentElement;
                }
                const {title, note } = action.payload;
                return ({
                    title,
                    note,
                    id:currentElement.id
                })
            });
        case DELETE:
            return state.filter(currentElement=> 
                currentElement.id !== action.payload.id);   

        default:
            console.warn("Can't find action.")
            return state;    
    }

}