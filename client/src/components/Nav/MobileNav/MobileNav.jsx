import './MobileNav.css'
import { NavHashLink } from 'react-router-hash-link'
import * as React from 'react'

import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MenuIcon from '@mui/icons-material/Menu'
import ClickAwayListener from '@mui/core/ClickAwayListener'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}))

function MobileNav() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className='mobile-nav'>
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position='fixed'
            open={open}
            style={{
              background: '#303030e2',
              height: '80px',
              boxShadow: 'none',
            }}
          >
            <div className='menu-div'>
              <MenuIcon
                style={{ fontSize: 40, margin: 20 }}
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }) }}
              />
            </div>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                background: '#303030e2',
              },
            }}
            variant='persistent'
            anchor='right'
            open={open}
            onClick={handleDrawerClose}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronLeftIcon style={{ fontSize: 30, color: '#dcdcdc' }} />
                ) : (
                  <ChevronRightIcon
                    style={{ fontSize: 30, color: '#dcdcdc' }}
                  />
                )}
              </IconButton>
            </DrawerHeader>
            <List>
              <div className='mobile-nav-links'>
                <NavHashLink className='mobile-nav-link' smooth to='#about'>
                  about.
                </NavHashLink>
                <NavHashLink className='mobile-nav-link' smooth to='#projects'>
                  projects.
                </NavHashLink>
                <NavHashLink className='mobile-nav-link' smooth to='#contact'>
                  contact.
                </NavHashLink>
                <a
                  href='https://drive.google.com/file/d/1CVuQphp_JaTJ-XiWMOBe_Hmr_nCUIsDB/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mobile-resume'
                >
                  resume.
                </a>
              </div>
            </List>
          </Drawer>
        </Box>
      </ClickAwayListener>
    </div>
  )
}

export default MobileNav
