import { SEND_DONATION } from '../actions/actionTypes';

export const donations = (state = [], action) => {
  switch (action.type) {
    case SEND_DONATION:
      return { ...state, sendDonation: action.payload };

    default:
      return state;
  }
};
