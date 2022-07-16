import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from './components/header/header.component';
// import Kilid from './pages/Kilid/Kilid.component';

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from "./redux/user/user.selector";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";


class App extends React.Component { //by having class instead of function we can have access to state
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser, collectionsArray} = this.props;
        // const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
            // this.setState({ currentUser: user });
            // createUserProfileDocument(user);
            if (userAuth) {
            //what we get back from our function is the userRef
                const userRef = await createUserProfileDocument(userAuth);
            //    if our DB has updated add that reference with any new data
            //    When you set a listener, Cloud Firestore sends your listener an initial snapshot of the data, and then another
            //    snapshot each time the document changes. You can get an array of the document snapshots by using the docs property
            //    of a QuerySnapshot.
                userRef.onSnapshot(snapShot => {
                //get the data related to this user
                        setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        })

                    console.log(this.state)
                })

            } else {
                // this.setState({currentUser: userAuth});
                // we just need that object that we wanna update it with
                setCurrentUser(userAuth);
                addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
            }
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
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/signin'
                           render={() =>
                               this.props.currentUser ? (
                                      <Redirect to='/' />
                                   ) : (
                                      <SignInAndSignUpPage />
                                      )}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionsForPreview
});

// const mapStateToProps = ({ user }) => ({
//     currentUser: user.currentUser
// })

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
