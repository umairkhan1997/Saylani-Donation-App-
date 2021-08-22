const initial_state = {
    homeSliderData: []
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "homeSlider": {
            // console.log(action.payload, 'action.payload')
            return { ...state, homeSliderData: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;