


const homeSliderGet = () => {
    return (dispatch) => {
        const headers = { "Content-Type": "application/json" };
        fetch(``, { headers })
            .then((res) =>
                res.json().then(async (response) => {

                    dispatch({ type: 'homeSlider', payload: response.result });
                })
            )
            .catch((err) => {

            });
    };
}

export { homeSliderGet }