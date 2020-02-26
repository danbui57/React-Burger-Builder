import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandle = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        });
    }
    
    render () {
        return (
    <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandle}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>
        )}};

export default Layout;