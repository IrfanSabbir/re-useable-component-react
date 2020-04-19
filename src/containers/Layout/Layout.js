import React, {Component} from 'react'
import Toolbar from '../../components/Navigations/toolbar/Toolbar'
import classes from './Layout.css'

class Layout extends Component{
    render(){
        return(
            <div className={classes.Content}>
                <Toolbar/>
   
            </div>
        )
    }
}

export default Layout