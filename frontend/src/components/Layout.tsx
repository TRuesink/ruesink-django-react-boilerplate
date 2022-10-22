import { Box, ThemeProvider, Toolbar } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../hooks';
import { selectIsAuthenticated, selectSideBarOpen } from '../store/selectors';
import theme from '../styles/theme';
import Main from './BodyWrapper';
import Header from './Header';
import SideBar from './SideBar';

type Props = {
  children: JSX.Element;
};

const Layout = (props: Props) => {
  const isAuthenticated = useAppSelector((state) =>
    selectIsAuthenticated(state)
  );
  const sideBarOpen = useAppSelector((state) => selectSideBarOpen(state));
  const menuOpen: boolean = sideBarOpen && isAuthenticated;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <SideBar open={menuOpen} />
        <Main open={menuOpen}>
          <Toolbar />
          {props.children}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
