import { BECOME_MEMBER } from './actionTypes';
import apiCall from '../../helpers/apiCall';
import {errorAction} from './donateAction';
import {
  notificationError,
  notificationSuccess,
} from '../../helpers/notification';

export const becomeMember = (payload) => async (dispatch) => {
  try {
    const membership = await apiCall.post('/members/apply', payload);
    dispatch({
      type: BECOME_MEMBER,
      payload: membership.data,
    });
    dispatch(errorAction(''));
    notificationSuccess(membership.data.message);
  } catch (error) {
    const err = error.response.data.error[0];
    dispatch(errorAction(err));
    notificationError(err);
  }
};
