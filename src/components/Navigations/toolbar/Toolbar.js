import React,{ Component } from "react";
import NaigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.css'

const toolbar =(props)=>{
    return(
        <div className={classes.Toolbar}>
           <nav className={classes.desktop}><NaigationItems /></nav> 

        </div>
    )
}

export default toolbar