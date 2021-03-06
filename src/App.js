import React, {Component} from 'react';
import './App.css';
import Home from './components/home'
import Navigation from "./components/Navigation";
import {Link, BrowserRouter as Routeur, Route} from "react-router-dom"
import * as ROUTES from "./constants/Routes"
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Panier from "./components/Panier";
import {Layout} from "antd"
//import {AuthContext} from "./authorization"
import Firebase, {FirebaseContext} from "./components/firebase";
import AuthorizationProvider from "./authorization"

const { Header, Footer, Content } = Layout
const firebase = new Firebase()
//const AuthContext = React.createContext(null)
/*const withAuthorization = (myComponent) => {
    class MyComponentToReturn extends Component {
        render() {
            return(
                <AuthContext.Consumer>
                    {value => <myComponent}
                </AuthContext.Consumer>
            )
        }
    }
}*/

/*let state = {
    isLogin: false,
    toLogIn: () => {this.setState({isLogin: true})},
    toLogOut: () => {this.setState({isLogin: false})}
}*/

/*<FirebaseContext.Provider value={state}>*/
function App(){
        return (
            <FirebaseContext.Provider value={firebase}>
                <AuthorizationProvider>
                    <Routeur>
                        <Layout data-testid={'layout_div'}>
                            <Navigation data-testid={'navigation_component'}/>
                            <Content style={{padding: '10px 30px'}}>
                                <Route exact path={ROUTES.LANDING}>
                                    <Home data-testid={'home_component'}/>
                                </Route>
                                <Route exact path={ROUTES.SIGNIN}>
                                    <Signin data-testid={'signin_component'}/>
                                </Route>
                                <Route exact path={ROUTES.SIGNUP}>
                                    <Signup data-testid={'signup_component'}/>
                                </Route>
                                <Route exact path={ROUTES.PANIER}>
                                    <Panier data-testid={'panier_component'}/>
                                </Route>
                            </Content>
                            <Footer>

                            </Footer>
                        </Layout>
                    </Routeur>
                </AuthorizationProvider>
            </FirebaseContext.Provider>
        );
}

export default App;
