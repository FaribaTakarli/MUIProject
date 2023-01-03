import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Router } from './pages/Router'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { appTheme } from "./themes/themes";
import { Badge, Button } from '@material-ui/core';
import { Person, MailOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { Box } from "@material-ui/core";


const useStyles = makeStyles((theme) => (
  {
    button: {
      background: theme.palette.primary.main,
      //background: theme.palette.secondary.dark,
      //  background:'#ab47bc',
      //  background:linear- gradient(45deg, #FE6B8B 30 %, #FF8E53 90 %)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      // color: theme.palette.warning.main,

      height: 48,
      padding: '0 30px',
    },
  }));
function App() {
  const cssClass = useStyles();
  return (
    <>
      <br /><br /><br />
      <h1>hiii</h1>
      <Button className={cssClass.button}
        // style={{ backgroundColor: "purple" }}
        variant="outlined" color="secondary" size="large" startIcon={<Person />} >save</Button>

      <Badge badgeContent={4} color="secondary">
        <MailOutlined color="action" />
      </Badge>
      <Box sx={{
        border: '10px solid grey',
        height: 600,
      }}>fa1</Box>
      <Box sx={{ fontSize: (theme: any) => theme.text?.primary.fontSize, color: (theme: any) => theme.text?.primary.color }}>fariba</Box>


    </>
    // <Provider store={store} >
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    // </Provider>
  );
}

export default App;
