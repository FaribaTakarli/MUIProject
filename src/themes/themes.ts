
//solution  1
import { blue, green, red } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";

// export const appTheme = createTheme({
//     direction: 'rtl',

//     palette: {
//         primary: {
//             main: "#111",
//         },
//         secondary: green,
//     },
// });



//solution  2
import { createTheme } from "@mui/material/styles";


import React from "react";
//import { createTheme } from "@material-ui/core";

declare module '@mui/material/styles'
{
    interface Theme {
        text?: {
            primary: { fontSize: string }
        }
    }
    interface ThemeOptions {
        text?: {
            fontSize: React.CSSProperties['fontSize'];
            color: React.CSSProperties['color'];

        }
    }
}


export const appTheme = createTheme({

    direction: 'rtl',
    text:
    {
        fontSize: '16px',
        color: '#555'

    },
    // myButtonCss:
    // {
    //     height: "200px",
    //     color: "white",
    // }
    palette: {
        primary: {
            main: "#111",
            light: "9f9",
        },
        secondary: green,
    },


});

