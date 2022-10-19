export const SET_SIDE_MENU = 'home/SET_SIDE_MENU';

export type SetSideMenuAction = {
  type: typeof SET_SIDE_MENU;
  open: boolean;
};

export const setSideMenu = ({ open }: { open: boolean }): SetSideMenuAction => ({
  type: SET_SIDE_MENU,
  open,
});
