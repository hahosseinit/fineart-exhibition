const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    //SWITCH STATEMENT
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload  //the value that we care about
            }
        default:
            return state;
    }
}

export default userReducer;