import React from "react";
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems =(props)=>{
    return(
       
        <ul className={classes.Navigationitems}>
            <NavigationItem link="/" exact>Events</NavigationItem>
            <NavigationItem link="/bookings" >Bookings</NavigationItem>
            <div className={classes.Dropedown}>
                 <p className={classes.More}>Regester </p>
                 <div className={classes.DropedownContent}>
                 <NavigationItem link="/bookings" >Sign Up</NavigationItem>
                 <NavigationItem link="/bookings" >Log In</NavigationItem>

                 </div>
            </div>
          
        </ul>
      
         
    )
}

export default navigationItems