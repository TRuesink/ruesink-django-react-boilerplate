import { SET_SIDE_MENU } from '../actions/home.actions';

const initialState = {
  sideBarOpen: true,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDE_MENU:
      return {
        ...state,
        sideBarOpen: action.open,
      };

    default:
      return state;
  }
};

export default homeReducer;
