import React, {Component} from 'react'
import {FirebaseContext} from "./components/firebase";

export const AuthContext = React.createContext(null)



export const withAuthorization = (MyComponent) => {
    class NewComponent extends Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {value => <MyComponent {...value}> </MyComponent>}
                </AuthContext.Consumer>
            )
        }
    }
    return NewComponent
}

class AuthorizationProvider extends Component {
    state = {
        isLogin: false,
        toLogIn: () => {this.setState({isLogin: true})},
        toLogOut: () => {this.setState({isLogin: false})}
    }

    render() {
        return(
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthorizationProvider;