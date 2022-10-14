export const SET_SIDE_MENU = 'home/SET_SIDE_MENU';

export type SetSideMenuAction = {
  type: typeof SET_SIDE_MENU;
  open: Boolean;
};

export const setSideMenu = ({
  open,
}: {
  open: Boolean;
}): SetSideMenuAction => ({
  type: SET_SIDE_MENU,
  open,
});
