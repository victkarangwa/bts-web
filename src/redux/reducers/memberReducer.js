import { BECOME_MEMBER } from '../actions/actionTypes';

export const membership = (state = [], action) => {
  switch (action.type) {
    case BECOME_MEMBER:
      return { ...state, becomeMember: action.payload };

    default:
      return state;
  }
};
