import { BECOME_MEMBER, BECOME_SPONSOR } from '../actions/actionTypes';

export const membership = (state = [], action) => {
  switch (action.type) {
    case BECOME_MEMBER:
      return { ...state, becomeMember: action.payload };
    case BECOME_SPONSOR:
      return { ...state, becomeMember: action.payload };

    default:
      return state;
  }
};
