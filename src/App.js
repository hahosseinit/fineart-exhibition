import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component { //by having class instead of function we can have access to state
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
            this.setState({ currentUser: user });

            console.log(user);
        })
    }
//our app being aware of any changes on firebase
    componentWillUnmount() {//omre component tamum shode va bayad az DOM remove beshe
        this.unsubscribeFromAuth();
    }

    render () {
        return (
            <div>
                <Header />

                {/*  switch does not load anything else but that route*/}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    null,
    mapDispatchToProps
)(App);
