import { combineReducers } from 'redux';
import { Modals } from './modalReducers';
import { donations } from './donationReducers';
import { membership } from './memberReducer';

export default combineReducers({
  Modals,
  donations,
  membership,
});
