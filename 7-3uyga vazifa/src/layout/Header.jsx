import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        My store
      </Typography>
      <Badge badgeContent={10} color='error'>
        <ShoppingCart></ShoppingCart>

      </Badge>
    </Toolbar>
  </AppBar>
  )
}

export default Header