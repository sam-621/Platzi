import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/containers/Home';
import Checkout from '../components/containers/Checkout';
import Information from '../components/containers/Information';
import Payment from '../components/containers/Payment';
import Success from '../components/containers/Success';
import NotFound from '../components/containers/NotFound';
import Layout from '../components/molecules/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/checkout" component={Checkout} />

            <Route exact path="/checkout/information" component={Information} />

            <Route exact path="/checkout/payment" component={Payment} />

            <Route exact path="/checkout/success" component={Success} />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
