import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from "material-ui-image";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        */}
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z" fill="#354752" />
                            </svg>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Setting"
                            color="inherit"
                        >
                            {/* <Image src="../Images/Vector.svg" /> */}

                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.0001 9.05C20.0001 8.94 20.0001 8.83 20.0001 8.72L19.9101 8.12L19.8201 7.73C19.8201 7.56 19.7401 7.39 19.6901 7.22C19.6401 7.05 19.6101 6.95 19.5601 6.82C19.5322 6.74141 19.5088 6.66128 19.4901 6.58C19.4901 6.58 19.4901 6.58 19.4901 6.53C18.9837 5.18302 18.1954 3.9598 17.1779 2.94226C16.1603 1.92472 14.9371 1.13637 13.5901 0.63C13.5901 0.63 13.5901 0.63 13.5401 0.63L13.3101 0.56L12.8901 0.43C12.7401 0.43 12.5801 0.35 12.4301 0.31L11.9701 0.21L11.5101 0.14C11.3501 0.14 11.2001 0.14 11.0301 0.0799999C10.8601 0.0199999 10.6801 0.0799999 10.5101 0.0799999L10.0001 0H9.61012C9.44012 0 9.26012 0 9.09012 0C8.92012 0 8.77012 -5.58794e-08 8.61012 0.0599999L8.15012 0.13L7.69012 0.23C7.54012 0.23 7.38012 0.3 7.23012 0.35L6.81012 0.48L6.58012 0.55C6.58012 0.55 6.58012 0.55 6.53012 0.55C5.18314 1.05637 3.95991 1.84472 2.94238 2.86226C1.92484 3.8798 1.13648 5.10302 0.630117 6.45C0.630117 6.45 0.630117 6.45 0.630117 6.5C0.611416 6.58128 0.588043 6.66141 0.560117 6.74C0.560117 6.87 0.470117 7 0.430117 7.14C0.390117 7.28 0.340117 7.48 0.300117 7.65L0.210117 8.04L0.120117 8.64C0.120117 8.75 0.120117 8.86 0.120117 8.97C0.120117 9.28 0.120117 9.6 0.120117 9.92C0.120117 10.24 0.120117 10.56 0.120117 10.87C0.120117 10.98 0.120117 11.09 0.120117 11.2L0.210117 11.8L0.300117 12.19C0.300117 12.36 0.380117 12.53 0.430117 12.7C0.480117 12.87 0.510117 12.97 0.560117 13.1C0.588043 13.1786 0.611416 13.2587 0.630117 13.34C0.63202 13.3633 0.63202 13.3867 0.630117 13.41C1.13208 14.7556 1.91798 15.9772 2.93434 16.9919C3.95071 18.0065 5.1737 18.7903 6.52012 19.29C6.52012 19.29 6.52012 19.29 6.57012 19.29L6.81012 19.36L7.21012 19.49L7.72012 19.62L8.11012 19.71L8.71012 19.8H9.04012C9.35012 19.8 9.67012 19.85 9.99012 19.85C10.3101 19.85 10.6301 19.85 10.9401 19.8H11.2701L11.8701 19.71L12.2601 19.62L12.7701 19.49L13.1701 19.36L13.4101 19.29C13.4101 19.29 13.4101 19.29 13.4601 19.29C14.8065 18.7903 16.0295 18.0065 17.0459 16.9919C18.0623 15.9772 18.8482 14.7556 19.3501 13.41C19.3482 13.3867 19.3482 13.3633 19.3501 13.34C19.3501 13.26 19.4001 13.18 19.4201 13.1C19.4401 13.02 19.5101 12.84 19.5501 12.7C19.5901 12.56 19.6401 12.36 19.6801 12.19L19.7701 11.8L19.8601 11.2C19.8601 11.09 19.8601 10.98 19.8601 10.87C19.8601 10.56 19.9101 10.24 19.9101 9.92C19.9101 9.6 20.0001 9.36 20.0001 9.05ZM13.7001 2.89C15.1865 3.65365 16.3965 4.8636 17.1601 6.35L14.3001 7.35C13.8855 6.68553 13.3246 6.12458 12.6601 5.71L13.7001 2.89ZM8.34012 2.19C8.55012 2.14 8.75012 2.11 8.95012 2.08H9.19012C9.76188 2.02 10.3384 2.02 10.9101 2.08H11.1501C11.3501 2.08 11.5501 2.14 11.7601 2.19H11.8201L10.8201 5.05C10.5489 5.00831 10.2744 4.99157 10.0001 5C9.75554 4.99968 9.51136 5.01975 9.27012 5.06L8.27012 2.2L8.34012 2.19ZM6.40012 2.89L7.40012 5.75C6.73201 6.16338 6.16755 6.72442 5.75012 7.39L2.89012 6.39C3.64702 4.88874 4.85766 3.66411 6.35012 2.89H6.40012ZM2.19012 11.71C2.14222 11.5127 2.1088 11.3122 2.09012 11.11C2.09012 11.02 2.09012 10.94 2.09012 10.86C2.02344 10.2886 2.02344 9.7114 2.09012 9.14C2.09012 9.06 2.09012 8.98 2.09012 8.89C2.1088 8.68783 2.14222 8.4873 2.19012 8.29C2.19012 8.29 2.19012 8.29 2.19012 8.23L5.05012 9.23C4.9701 9.71338 4.9701 10.2066 5.05012 10.69L2.19012 11.69C2.19012 11.69 2.19012 11.73 2.19012 11.71ZM6.35012 17.11C4.86372 16.3463 3.65377 15.1364 2.89012 13.65L5.75012 12.65C6.1647 13.3145 6.72564 13.8754 7.39012 14.29L6.35012 17.11ZM11.7101 17.81C11.5001 17.86 11.3001 17.89 11.1001 17.92H10.8601C10.2884 17.98 9.71188 17.98 9.14012 17.92H8.90012C8.70012 17.92 8.50012 17.86 8.29012 17.81H8.23012L9.23012 14.95C9.71349 15.03 10.2067 15.03 10.6901 14.95L11.6901 17.81H11.7101ZM11.0401 12.81C10.8701 12.87 10.7001 12.91 10.5401 12.95C10.2096 13.0116 9.87061 13.0116 9.54012 12.95C9.38012 12.95 9.21012 12.87 9.04012 12.81C8.61805 12.6643 8.23384 12.4261 7.91552 12.113C7.59719 11.7999 7.35278 11.4196 7.20012 11C7.13959 10.8341 7.09276 10.6635 7.06012 10.49C6.99616 10.1597 6.99616 9.82027 7.06012 9.49C7.09055 9.32351 7.13401 9.15968 7.19012 9C7.34088 8.58533 7.58126 8.20901 7.89412 7.89788C8.20698 7.58675 8.58462 7.34846 9.00012 7.2C9.17012 7.14 9.34012 7.1 9.50012 7.06C9.83061 6.99843 10.1696 6.99843 10.5001 7.06C10.6601 7.06 10.8301 7.14 11.0001 7.2C11.4138 7.34971 11.7894 7.58855 12.1005 7.89962C12.4116 8.21068 12.6504 8.58635 12.8001 9C12.8606 9.16589 12.9075 9.33646 12.9401 9.51C13.0041 9.84027 13.0041 10.1797 12.9401 10.51C12.9075 10.6835 12.8606 10.8541 12.8001 11.02C12.6479 11.43 12.408 11.8017 12.0971 12.1092C11.7861 12.4166 11.4117 12.6524 11.0001 12.8L11.0401 12.81ZM13.6501 17.12L12.6501 14.26C13.3146 13.8454 13.8755 13.2845 14.2901 12.62L17.1501 13.62C16.3811 15.1236 15.1559 16.3453 13.6501 17.11V17.12ZM18.0001 10.86C18.0001 10.94 18.0001 11.02 18.0001 11.11C17.9814 11.3122 17.948 11.5127 17.9001 11.71C17.9001 11.71 17.9001 11.71 17.9001 11.77L15.0401 10.77C15.1201 10.2866 15.1201 9.79338 15.0401 9.31L17.9001 8.31C17.9001 8.31 17.9001 8.31 17.9001 8.37C17.948 8.5673 17.9814 8.76783 18.0001 8.97C18.0001 9.06 18.0001 9.14 18.0001 9.22C18.0668 9.7914 18.0668 10.3686 18.0001 10.94V10.86Z" fill="#354752" />
                            </svg>


                        </IconButton>
                    </Box>

                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <Box sx={{ flexGrow: 1 }} />


                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}