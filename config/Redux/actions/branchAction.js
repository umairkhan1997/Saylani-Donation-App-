



const branchesGet = () => {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(``, { headers })
            .then((res) =>
                res.json().then(async (response) => {

                    dispatch({ type: 'branchesGet', payload: response.result });
                })
            )
            .catch((err) => {

            });
    };
}

const branchesIntGet = () => {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(``, { headers })
            .then((res) =>
                res.json().then(async (response) => {

                    dispatch({ type: 'intBranchesGet', payload: response.result });
                })
            )
            .catch((err) => {

            });
    };
}


export { branchesGet, branchesIntGet }