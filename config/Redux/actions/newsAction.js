



const saylaniNewsGet = () => {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(``, { headers })
            .then((res) =>
                res.json().then(async (response) => {

                    dispatch({ type: 'saylaninews', payload: response.result });
                })
            )
            .catch((err) => {

            });
    };
}

export { saylaniNewsGet }