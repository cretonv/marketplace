import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { act } from "react-dom/test-utils";
import functions from "firebase-functions-test";
import * as admin from "firebase-admin";
import * as path from "path";
import Firebase from "./components/firebase";

const projectConfig = {
    projectId: "marketplace-react",
    databaseURL: "https://marketplace-react.firebaseio.com"
};

const testEnv = functions(projectConfig, path.resolve("service-key.json"));

test('render effectué sans bug', () => {
    act( () => {
        render(<App> </App>, );
    });

    const layout = document.querySelector("[data-testid='layout_div']"); // test si l'élément layout englobant toute les autres éléments existe
    expect(layout).toBeInTheDocument

    const navigation = document.querySelector("[data-testid='navigation_component']") // test de la présence du component navigation
    expect(navigation).toBeInTheDocument

    const home = document.querySelector("[data-testid='home_component']")
    expect(home).toBeInTheDocument

    const signin = document.querySelector("[data-testid='signin_component']")
    expect(signin).toBeInTheDocument

    const signout = document.querySelector("[data-testid='singout_component']")
    expect(signout).toBeInTheDocument

    const panier = document.querySelector("[data-testid='panier_component']")
    expect(panier).toBeInTheDocument

})

