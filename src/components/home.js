import React, {Component} from 'react'
import App from "../App";
import {withAuthorization} from "../authorization";
import {withFirebase} from "./firebase";

class Home extends Component {

    render() {
        return(
            <div>
                <h1>HELLO WORLD</h1>
                <h2>{this.props.firebase.auth.currentUser? "Connecté" : 'Déco'}</h2>
                {/*<button onClick={this.props.isLogin? this.props.toLogOut : this.props.toLogIn}> Click ME</button>*/}
                {console.log(this.props.firebase.doSignOut)}
               <button onClick={this.props.firebase.doSignOut}> Click Me</button>
            </div>
        )
    }
}

export default withAuthorization(withFirebase(Home));