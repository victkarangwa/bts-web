import { SEND_MESSAGE} from './actionTypes';
import apiCall from '../../helpers/apiCall';
import {
  notificationError,
  notificationSuccess,
} from '../../helpers/notification';
import { errorAction } from './donateAction';

export const sendMessage = (payload) => async (dispatch) => {

  try {
    const messageSent = await apiCall.post('/message/send', payload);
    dispatch({
      type: SEND_MESSAGE,
      message: messageSent.data,
    });
    dispatch(errorAction(''));
    notificationSuccess(messageSent.data.message);
  } catch (error) {
    const err = error.response.data.error[0];
    dispatch(errorAction(err));
    notificationError(err);
  }
};
