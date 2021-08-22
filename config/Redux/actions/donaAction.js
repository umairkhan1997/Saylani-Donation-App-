

const currencyGet = () => {
    return (dispatch) => {
        console.log('asdasdsad')
        const headers = { "Content-Type": "application/json" };
        fetch(``, { headers })
            .then((res) =>
                res.json()
                    .then(async (response) => {
                        console.log(response)
                        dispatch({ type: 'currencyget', payload: response.data });
                    })
            )
            .catch((err) => {
                console.log(err.message, 'asdsad')
            });
    };
}


export { currencyGet }