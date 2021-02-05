import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import Customers from './Customers';
import CustForm from './CustForm';
import Stores from './Stores';
import StoreForm from './StoreForm';

const Routes = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="mycontainer">
                <div className="pagecontent">
                    <Switch>
                        <Route path='/home' component={ Main } />
                        <Route path='/customers' component={ Customers } />
                        <Route path='/stores' component={ Stores } />
                        <Route path='/customer/new' component={ ({ match }) => <CustForm id={-1} /> } />
                        <Route path='/customer/:id' component={ ({ match }) => <CustForm id={+match.params.id} /> } />
                        <Route path='/store/new' component={ ({ match }) => <StoreForm id={-1} /> } />
                        <Route path='/store/:id' component={ ({ match }) => <StoreForm id={+match.params.id} /> } />           
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Routes
