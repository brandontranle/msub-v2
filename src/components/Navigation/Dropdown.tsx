import {IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navigations } from '../../constants';
import React, {Fragment} from "react";

interface DropdownProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    anchorEl,
    open,
    handleMenu,
    handleClose,
}) => {
return (
    <Fragment>
    <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            {navigations.map((nav, index) => (
                                <MenuItem key={index} onClick={handleClose} href={nav.link}>
                                    {nav.title}
                                </MenuItem>
                            ))}
                        </Menu>
                        </Fragment>
    )
}