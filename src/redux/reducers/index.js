import { combineReducers } from 'redux';
import { Modals } from './modalReducers';
import { donations } from './donationReducers';
import { membership } from './memberReducer';
import { contact } from './contactReducer';

export default combineReducers({
  Modals,
  donations,
  membership,
  contact,
});
