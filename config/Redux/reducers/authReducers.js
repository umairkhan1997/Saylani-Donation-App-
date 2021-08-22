const initial_state = {
  name: 'umair',
  transId: null,
  orderId: null
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "transId": {
      return { ...state, transId: action.id };
    }
    case "orderId": {
      return { ...state, orderId: action.id };
    }
    case "trandIdReset": {
      return { ...state, transId: action.id };
    }
    default: {
      return state;
    }
  }
};

export default reducer;