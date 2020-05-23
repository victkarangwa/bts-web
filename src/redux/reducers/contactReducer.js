import { SEND_MESSAGE } from '../actions/actionTypes';

export const contact = (state = [], action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return { ...state, sendmessage: action.payload };

    default:
      return state;
  }
};
