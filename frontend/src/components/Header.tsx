import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AccountCircle,
  PersonAdd,
  Settings,
  Logout,
} from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { logoutRequest } from '../store/actions/auth.actions';
import { setSideMenu } from '../store/actions/home.actions';
import {
  selectIsAuthenticated,
  selectSideBarOpen,
  selectUserEmail,
} from '../store/selectors';
import { Avatar, Divider, ListItemIcon } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';

function Header(): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);

  const isAuthenticated = useAppSelector((state) =>
    selectIsAuthenticated(state)
  );
  const userEmail = useAppSelector((state) => selectUserEmail(state));
  const sideBarOpen = useAppSelector((state) => selectSideBarOpen(state));

  const dispatch = useAppDispatch();

  const handleMenu = (event: React.MouseEvent): void => {
    const currentTarget = event.currentTarget as HTMLInputElement;
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {isAuthenticated && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(setSideMenu({ open: !sideBarOpen }))}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Track My Standards
        </Typography>
        {isAuthenticated && (
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex', alignItems: 'center' },
            }}
          >
            <Typography sx={{ marginRight: '1rem' }}>
              Hi <strong>{userEmail}</strong>!
            </Typography>
            <IconButton
              size="large"
              onClick={(e) => handleMenu(e)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => dispatch(logoutRequest())}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
