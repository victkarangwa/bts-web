import { DONATE_MODAL } from '../actions/actionTypes';

export const Modals = (state = [], action) => {
  switch (action.type) {
    case DONATE_MODAL:
      return { ...state, donateModal: action.payload };


    default:
      return state;
  }
};
