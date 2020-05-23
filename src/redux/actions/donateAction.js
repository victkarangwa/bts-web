import {SEND_DONATION, ERROR} from './actionTypes'
import apiCall from '../../helpers/apiCall'
import {notificationError, notificationSuccess} from   '../../helpers/notification';

export const sendDonation = (payload) => async (dispatch) => {

  try {
    const donationSent = await apiCall.post('/donations/send', payload);
    dispatch({
      type: SEND_DONATION,
      payload: donationSent.data,
    });
    dispatch(errorAction(''));
    notificationSuccess(donationSent.data.message);
  } catch (error) {
    const err = error.response.data.error[0];
    dispatch(errorAction(err));
    notificationError(err);
  }
};

export const errorAction = (error,status=null) => {
  return {
    type: ERROR,
    status,
    error,
  };
};
