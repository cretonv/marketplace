import React, {Component} from 'react'
import * as ROUTES from "../constants/Routes"
import {Link} from "react-router-dom"
import {Menu} from "antd"
import {withAuthorization} from "../authorization";
import {withFirebase} from "./firebase";

class Navigation extends Component {

    state = {
        current: this.props.actual_page,
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        if(this.props.firebase.auth.currentUser){
            return(
                <Menu mode={"horizontal"} onClick={this.handleClick} selectedKeys={[this.state.current]}>
                    {console.log("RECHARGE")}
                    <Menu.Item key="home">
                        <Link to={ROUTES.LANDING}> Home </Link>
                    </Menu.Item>
                    <Menu.Item key="panier">
                        <Link to={ROUTES.PANIER}> Panier </Link>
                    </Menu.Item>
                    {/*<Menu.Item>
                        <div onClick={this.props.firebase.auth.doSignOut}> Log Out </div>
                    </Menu.Item>*/}
                    <Menu.Item disabled>
                        {this.props.isLogin? "Connecté" : "Connecté" }
                    </Menu.Item>
                </Menu>
            )
        } else {
            return (
                <Menu mode={"horizontal"} onClick={this.handleClick} selectedKeys={[this.state.current]}>
                    {console.log("RECHARGE")}
                    <Menu.Item key="home">
                        <Link to={ROUTES.LANDING}> Home </Link>
                    </Menu.Item>
                    <Menu.Item key="signIn">
                        <Link to={ROUTES.SIGNIN}> Sign In </Link>
                    </Menu.Item>
                    <Menu.Item key="signUp">
                        <Link to={ROUTES.SIGNUP}> Sign Up </Link>
                    </Menu.Item>
                    <Menu.Item key="panier">
                        <Link to={ROUTES.PANIER}> Panier </Link>
                    </Menu.Item>
                    <Menu.Item disabled>
                        {this.props.isLogin? "Deconnecté" : "Deconnecté" }
                    </Menu.Item>
                </Menu>
            )
        }
    }
}

export default withAuthorization(withFirebase(Navigation));