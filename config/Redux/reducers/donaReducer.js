const initial_state = {
    currencyData: []
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "currencyget": {

            return { ...state, currencyData: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;