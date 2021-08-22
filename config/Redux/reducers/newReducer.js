const initial_state = {
    saylaninewsData: []
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "saylaninews": {
            // console.log(action.payload, 'action.payload')
            return { ...state, saylaninewsData: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;