import { DONATE_MODAL } from './actionTypes';

export const donateModal = (open) => {
  return {
    type: DONATE_MODAL,
    payload: open,
  };
};
