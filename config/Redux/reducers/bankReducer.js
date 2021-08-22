const initial_state = {
    bankDetail: []
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "bankDetailGet": {
            // console.log(action.payload, 'true redux');
            return { ...state, bankDetail: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;