import * as React from 'react';
import { useContext, useState } from 'react';
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
import ToggleColorMode from '../ModeToggle';
import lightLogo from '@/assets/logo-light-theme.png';
import darkLogo from '@/assets/logo-dark-theme.png';
import { Context } from "../context/Context.ts";
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

export const Header = () => {
    const context = useContext(Context);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [signInOpen, setSignInOpen] = useState(false);
    const [signUpOpen, setSignUpOpen] = useState(false);
    const logo = context.mode === 'light' ? lightLogo : darkLogo;

    const toggleDrawer = (newOpen) => () => {
        setDrawerOpen(newOpen);
    };

    const toggleColorMode = () => {
        context.mode = context.mode === 'light' ? 'dark' : "light";
        setDrawerOpen(prevState => prevState);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setDrawerOpen(false);
        }
    };

    const handleOpenSignIn = () => setSignInOpen(true);
    const handleCloseSignIn = () => setSignInOpen(false);

    const handleOpenSignUp = () => setSignUpOpen(true);
    const handleCloseSignUp = () => setSignUpOpen(false);

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    backgroundImage: 'none',
                    bgcolor: 'transparent',
                    mt: 2,
                }}
            >
                <Container maxWidth="100">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '0px',
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
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-3px',
                                px: 0,
                            }}
                        >
                            <img
                                src={logo}
                                style={logoStyle}
                                alt="logo"
                            />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem
                                    onClick={() => scrollToSection('lego')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Lego
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('figure')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Figure
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('clothing')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Clothing
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('toys & plush shop')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Toys & Plush shop
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('accessories')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Accessories
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode mode={context.mode} toggleColorMode={toggleColorMode} />
                            <Button
                                color="primary"
                                variant="text"
                                size="small"
                                onClick={handleOpenSignIn}
                            >
                                Sign in
                            </Button>
                            <Button
                                color="primary"
                                variant="contained"
                                size="small"
                                onClick={handleOpenSignUp}
                            >
                                Sign up
                            </Button>
                        </Box>
                        <Box sx={{ display: { sm: 'block', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
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
                                        <ToggleColorMode mode={context.mode} toggleColorMode={toggleColorMode} />
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('lego')}>
                                        Lego
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('figure')}>
                                        Figure
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('clothing')}>
                                        Clothing
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('toys & plush shop')}>
                                        Toys & Plush shop
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('accessories')}>
                                        Accessories
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            fullWidth
                                            onClick={handleOpenSignUp}
                                        >
                                            Sign up
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="text"
                                            component="a"
                                            fullWidth
                                            onClick={handleOpenSignIn}
                                        >
                                            Sign in
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Modal open={signInOpen} onClose={handleCloseSignIn}>
                <StyledBox>
                    <Typography variant="h6" component="h2">
                        Sign In
                    </Typography>
                    <TextField
                        label="Email or Phone"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleCloseSignIn}
                    >
                        Sign In
                    </Button>
                </StyledBox>
            </Modal>

            <Modal open={signUpOpen} onClose={handleCloseSignUp}>
                <StyledBox>
                    <Typography variant="h6" component="h2">
                        Sign Up
                    </Typography>
                    <TextField
                        label="Email or Phone"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleCloseSignUp}
                    >
                        Sign Up
                    </Button>
                </StyledBox>
            </Modal>
        </div>
    );
};

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '32px',
    maxHeight: '32px',
};

const StyledBox = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    border: 2px solid #000;
    padding: 16px;
    border-radius: 8px;
`;
