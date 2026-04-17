import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import BrandMark from './BrandMark';

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(82, 113, 255, 0.12), 1px 1.5px 2px -1px rgba(56, 182, 255, 0.12), 4px 4px 12px -2.5px rgba(82, 113, 255, 0.1)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                minWidth: 0,
              }}
            >
              <Box
                role="button"
                tabIndex={0}
                sx={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
                onClick={() => scrollToSection('hero')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') scrollToSection('hero');
                }}
              >
                <BrandMark compact iconSize={18} />
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MenuItem
                onClick={() => scrollToSection('product')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  Product
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('how-it-works')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  How it works
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('about')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection('waitlist')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography variant="body2" color="text.primary">
                  Waitlist
                </Typography>
              </MenuItem>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flex: 1,
                gap: 0.5,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={() => scrollToSection('waitlist')}
              >
                Join the waitlist
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem onClick={() => scrollToSection('product')}>Product</MenuItem>
                  <MenuItem onClick={() => scrollToSection('how-it-works')}>How it works</MenuItem>
                  <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
                  <MenuItem onClick={() => scrollToSection('waitlist')}>Waitlist</MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => scrollToSection('waitlist')}
                      sx={{ width: '100%' }}
                    >
                      Join the waitlist
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
