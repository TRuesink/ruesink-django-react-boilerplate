import { SET_SIDE_MENU, SetSideMenuAction } from '../actions/home.actions';

const initialState = {
  sideBarOpen: true,
};

const homeReducer = (
  state: HomeState = initialState,
  action: SetSideMenuAction
): HomeState => {
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
