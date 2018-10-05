// state argument is only the state that this reducer is responsibile for.
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}