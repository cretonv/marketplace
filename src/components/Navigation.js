import React, {Component} from 'react'
import * as ROUTES from "../constants/Routes"
import {Link} from "react-router-dom"
import {Menu} from "antd"
import {withAuthorization} from "../authorization";
import {withFirebase} from "./firebase";

class Navigation extends Component {

    render() {
        if(this.props.firebase.auth.currentUser){
            return(
                <Menu mode={"horizontal"}>
                    <Menu.Item>
                        <Link to={ROUTES.LANDING}> Home </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={ROUTES.PANIER}> Panier </Link>
                    </Menu.Item>
                    {/*<Menu.Item>
                        <div onClick={this.props.firebase.auth.doSignOut}> Log Out </div>
                    </Menu.Item>*/}
                </Menu>
            )
        } else {
            return (
                <Menu mode={"horizontal"}>
                    <Menu.Item>
                        <Link to={ROUTES.LANDING}> Home </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={ROUTES.SIGNIN}> Sign In </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={ROUTES.SIGNUP}> Sign Up </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={ROUTES.PANIER}> Panier </Link>
                    </Menu.Item>
                </Menu>
            )
        }
    }
}

export default withAuthorization(withFirebase(Navigation));