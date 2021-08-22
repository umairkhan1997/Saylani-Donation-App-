const initial_state = {
    branchesData: [],
    intBranchesData: []
};

const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case "branchesGet": {
            return { ...state, branchesData: action.payload };
        }
        case "intBranchesGet": {
            return { ...state, intBranchesData: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default reducer;