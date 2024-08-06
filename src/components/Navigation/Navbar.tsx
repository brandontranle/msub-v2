import {navigations} from "../../constants"
import logo from "../../assets/images/trio_logo.webp"
import { AppBar, Button, Toolbar, Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Dropdown } from './Dropdown';

export const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
        return (
        <AppBar position="static" 
        sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: 'text.primary',
        }}
        >
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Box
                        component="img"
                        sx={{ width: '100px', marginRight: 'auto' }}
                        alt="logo"
                        src={logo}
                    />
                </Box>
                {isMobile ? (
                 <Dropdown anchorEl={anchorEl} open={open} handleMenu={handleMenu} handleClose={handleClose} />
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navigations.map((nav, index) => (
                            <Button
                                key={index}
                                variant={nav.title === 'Apply' ? 'contained' : 'text'}
                                sx={{
                                    textTransform: 'capitalize',
                                    backgroundColor: nav.title === 'Apply' ? 'secondary.main' : 'transparent',
                                    color: nav.title === 'Apply' ? '#FFFF' : 'text.primary',
                                    '&:hover': {
                                        backgroundColor: nav.title === 'Apply' ? "secondary.active" : 'transparent',
                                        color: nav.title === 'Apply' ? '#FFFF' : 'text.secondary',
                                    },
                                    fontSize: '1rem',
                                }}
                                color="inherit"
                                href={nav.link}
                            >
                                {nav.title}
                            </Button>
                        ))}
                    </Box>
)}
            </Toolbar>
        </AppBar>
    );
}


