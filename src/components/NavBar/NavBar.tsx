import { AppBar, makeStyles, Toolbar, Typography, InputBase, alpha, Badge, Avatar } from "@material-ui/core";
//import Search from "@mui/icons-material/Search";
import { Person, Search, MailOutlined, Notifications, Cancel } from '@material-ui/icons';
import { Theme } from "@mui/material";

import { useState } from 'react';
import { blob } from "stream/consumers";
import { boolean } from "yup";


type Props = {
    open: boolean;
    space: number;
};

const useStyle = makeStyles<Theme, Props>((Theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: 'none',
        [Theme.breakpoints.up("sm")]: {
            display: 'block',
        }
    },
    logoSm: {
        display: 'block',
        [Theme.breakpoints.up("sm")]: {
            display: 'none',

        }
    },
    search: {
        display: "flex",
        //vertical aligment
        alignItems: "center",

        //horizontal
        justifyContent: "space-between",
        backgroundColor: alpha(Theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(Theme.palette.common.white, 0.45),
        },
        borderRadius: Theme.shape.borderRadius,
        width: "50%",
        [Theme.breakpoints.down("xs")]: {
            width: "60%",

            //  display: 'none',
            display: (props) => (props.open ? "flex" : "none"),
            // display: (props) => (props.open ? 'flex' : 'none'),
        }
    },

    input: {
        color: "white",
        //marginRight: "20px",
        marginRight: Theme.spacing(1),

    },
    icon:
    {
        // display: 'flex',
        //    () => (false ? 'none' : 'flex'),
        display: (props) => (!props.open ? "flex" : "none"),
        alignItems: "center",
    },
    badge:
    {
        marginLeft: Theme.spacing(2),
    },
    cancel: {
        display: "none",
        [Theme.breakpoints.down("xs")]: {
            display: "flex"
        },
    },
    searchBtn:
    {
        marginLeft: Theme.spacing(2),
        display: "none",
        [Theme.breakpoints.down("xs")]: {
            display: 'block',
        }

    },


}));


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [space, setSpace] = useState(20);

    const classes = useStyle({ open, space });
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    ToplranLg
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    ToplranSm
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase className={classes.input} placeholder="جستجو کنید..." />
                    <Cancel className={classes.cancel} onClick={() => setOpen(false)} />

                </div>

                <div className={classes.icon}>
                    <Search className={classes.searchBtn} onClick={() => setOpen(true)} />
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <MailOutlined />
                        {/* color="action" */}
                    </Badge>
                    <Badge badgeContent={3} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>

                    <Avatar alt="" src="">

                    </Avatar>
                </div>


            </Toolbar>


        </AppBar>

    );
}

export default Navbar;