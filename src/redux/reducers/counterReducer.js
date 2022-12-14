import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  //state=0 syaacın kaçtan başlatıldıgı
  //reducer action varmı yokmu bakcak ona göre state belirleyecek.state i burada kontrol ederiz.
  let newState; //statein kopyasını almalıyız :D.
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payload);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return (newState = state + action.payload);
    default:
      return state;
  }
};
export default counterReducer;
