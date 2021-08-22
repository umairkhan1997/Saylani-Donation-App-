


const trandId = (id) => {
  return (dispatch) => {

    dispatch({
      type: 'transId',
      id
    });
  }
}
const orderId = (id) => {
  return (dispatch) => {

    dispatch({
      type: 'orderId',
      id
    });
  }
}
const trandIdReset = () => {
  return (dispatch) => {

    dispatch({
      type: 'trandIdReset',
      id: null
    });
  }
}
export { addNewComm, trandId, trandIdReset, orderId };