import { Box, ThemeProvider, Toolbar } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { selectIsAuthenticated, selectSideBarOpen } from '../store/selectors';
import theme from '../styles/theme';
import Main from './BodyWrapper';
import Header from './Header';
import SideBar from './SideBar';

const Layout = (props) => {
  const menuOpen = props.sideBarOpen && props.isAuthenticated;

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

const mapStateToProps = (state) => ({
  isAuthenticated: selectIsAuthenticated(state),
  sideBarOpen: selectSideBarOpen(state),
});

export default connect(mapStateToProps)(Layout);
