import React, {Component} from 'react'
import App from "../App";
import {withAuthorization} from "../authorization";
import {withFirebase} from "./firebase";
import {Link} from "react-router-dom"
import * as ROUTES from "../constants/Routes"
import ProductCard from "./card";

class Home extends Component {

    render() {
        if(this.props.firebase.auth.currentUser) {
            return (
                <div>
                    <h1 className={"home_page_title"}>BIENVENUE SUR THE MARKETPLACE®</h1>
                    <div className={"intro_site"}> Remplissez dès maintenant votre panier avec votre article préféré et constituez vous la commande de vos rêves.</div>
                    <div className={"intro_site"}> Ce n'est pas vous? Cliquez sur le bouton suivant pour vous déconnecter </div>
                    {/*<button onClick={this.props.isLogin? this.props.toLogOut : this.props.toLogIn}> Click ME</button>*/}
                    {console.log(this.props.firebase.doSignOut)}
                    {/*<button onClick={this.props.firebase.doSignOut}> Déconnexion</button>*/}
                    <div className="button-container">
                        <div className="deco_button" onClick={this.props.firebase.doSignOut}>
                            <Link className={"text_button"} to={ROUTES.SIGNIN}>Déconnexion</Link>
                        </div>
                    </div>
                    <ProductCard/>
                </div>
            )
        } else {
            return(
                <div>
                    <h1 className={"home_page_title"}>BIENVENUE SUR THE MARKETPLACE®</h1>
                    <div className={"intro_site"}> Achetez de nouveaux articles expédiés par des boutiques. Pour accéder à tout nos articles, veuillez vous connecter dans l'onglet <b>Sign In</b> ou bien vous enregistrer via l'onglet <b>Sign Up</b></div>
                    <div className={"home_logo"}>
                        <svg id="flat" height="280" viewBox="0 0 512 512" width="280" xmlns="http://www.w3.org/2000/svg"><path d="m80 128h360v280h-360z" fill="#e0edff"/><path d="m160 408h-136l24 40-24 40h120a16 16 0 0 0 16-16z" fill="#4976f2"/><path d="m352 408h136l-24 40 24 40h-120a16 16 0 0 1 -16-16z" fill="#4976f2"/><path d="m384 344h-256a16.00008 16.00008 0 0 0 -16 16v80l48-16h192l48 16v-80a16.00008 16.00008 0 0 0 -16-16z" fill="#548aff"/><path d="m136 208h128v96h-128z" fill="#bdd1f2"/><path d="m160 424h-32a16 16 0 0 0 -16 16 16 16 0 0 0 16 16h16a16 16 0 0 1 16 16z" fill="#486be0"/><path d="m352 424h32a16 16 0 0 1 16 16 16 16 0 0 1 -16 16h-16a16 16 0 0 0 -16 16z" fill="#486be0"/><path d="m296 208h88v136h-88z" fill="#bdd1f2"/><path d="m64 96h64a0 0 0 0 1 0 0v40a32 32 0 0 1 -32 32 32 32 0 0 1 -32-32v-40a0 0 0 0 1 0 0z" fill="#ffb401"/><path d="m128 96h64a0 0 0 0 1 0 0v40a32 32 0 0 1 -32 32 32 32 0 0 1 -32-32v-40a0 0 0 0 1 0 0z" fill="#ffc431"/><path d="m192 96h64a0 0 0 0 1 0 0v40a32 32 0 0 1 -32 32 32 32 0 0 1 -32-32v-40a0 0 0 0 1 0 0z" fill="#ffb401"/><path d="m256 96h64a0 0 0 0 1 0 0v40a32 32 0 0 1 -32 32 32 32 0 0 1 -32-32v-40a0 0 0 0 1 0 0z" fill="#ffc431"/><path d="m320 96h64a0 0 0 0 1 0 0v40a32 32 0 0 1 -32 32 32 32 0 0 1 -32-32v-40a0 0 0 0 1 0 0z" fill="#ffb401"/><path d="m384 96h64a0 0 0 0 1 0 0v40a32 32 0 0 1 -32 32 32 32 0 0 1 -32-32v-40a0 0 0 0 1 0 0z" fill="#ffc431"/><path d="m128 96 32-72h-64l-32 72z" fill="#ffc431"/><path d="m192 96 32-72h-64l-32 72z" fill="#ffd873"/><path d="m256 96 32-72h-64l-32 72z" fill="#ffc431"/><path d="m320 96 32-72h-64l-32 72z" fill="#ffd873"/><path d="m384 96 32-72h-64l-32 72z" fill="#ffc431"/><path d="m448 96h-64l32-72z" fill="#ffd873"/></svg>
                    </div>
                    <h2>{this.props.firebase.auth.currentUser? "Connecté" : 'Déco'}</h2>
                    {/*<button onClick={this.props.isLogin? this.props.toLogOut : this.props.toLogIn}> Click ME</button>*/}
                    {console.log(this.props.firebase.doSignOut)}
                    <button onClick={this.props.firebase.doSignOut}> Click Me</button>
                </div>
            )
        }
    }
}

export default withAuthorization(withFirebase(Home));